const WEBHOOK_URL = (process.env.REACT_APP_GOOGLE_SHEETS_WEBHOOK_URL || "").trim();
const REWARD_LABEL = "50 Bhaiway Coins";

export async function submitWaitlistToGoogleSheet({ name, email, phone, role, city }) {
  if (!WEBHOOK_URL) {
    throw new Error(
      "Waitlist is not configured. Set REACT_APP_GOOGLE_SHEETS_WEBHOOK_URL in your .env file."
    );
  }

  const payload = {
    timestamp: new Date().toISOString(),
    name: name.trim(),
    email: email.trim().toLowerCase(),
    phone: String(phone || "").trim(),
    role,
    city,
    reward: REWARD_LABEL,
  };

  const body = JSON.stringify(payload);

  try {
    const response = await fetch(WEBHOOK_URL, {
      method: "POST",
      mode: "cors",
      redirect: "follow",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body,
    });

    const text = await response.text();
    let result = null;
    try {
      result = text ? JSON.parse(text) : null;
    } catch {
      result = null;
    }

    if (result && result.ok === false) {
      throw new Error(result.error || "Something went wrong. Please try again.");
    }

    if (result && result.ok === true) {
      return result;
    }

    // iOS Safari often cannot read Google Apps Script redirect bodies,
    // even when the sheet write succeeded.
    if (response.ok || response.redirected || response.type === "opaque") {
      return { ok: true };
    }

    throw new Error("Unexpected response from waitlist service. Please try again.");
  } catch (err) {
    if (err.message && !err.message.includes("Failed to fetch") && err.name !== "TypeError") {
      throw err;
    }

    // Safari CORS fallback: request is sent; response body is unreadable.
    await fetch(WEBHOOK_URL, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body,
    });

    return { ok: true };
  }
}

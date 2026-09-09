import React, { useState, useEffect } from "react";
import {
  Shield, ArrowLeft, Printer, Search, Calendar, FileText,
  UserCheck, Smartphone, MapPin, CreditCard, AlertCircle,
  Lock, Globe, Mail, ExternalLink, HelpCircle, Users, Check,
  Car, Trash2, Scale, RefreshCw
} from "lucide-react";

export default function PrivacyPolicy({ onBackToHome, onNavigateToTerms }) {
  const [activeSection, setActiveSection] = useState("about");
  const [searchQuery, setSearchQuery] = useState("");
  const [copiedLink, setCopiedLink] = useState(false);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handlePrint = () => {
    window.print();
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const scrollToSection = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const sections = [
    { id: "about", title: "1. About BhaiWay", icon: Car },
    { id: "definitions", title: "2. Definitions", icon: FileText },
    { id: "information-collected", title: "3. Information We Collect", icon: UserCheck },
    { id: "why-collect", title: "4. Why We Collect Your Data", icon: HelpCircle },
    { id: "location-consent", title: "5. Location Data Consent", icon: MapPin },
    { id: "aadhaar-kyc", title: "6. Aadhaar & KYC Consent", icon: Shield },
    { id: "corporate-commute", title: "7. Corporate Commute Verification", icon: Users },
    { id: "trust-score", title: "8. Trust Score System", icon: Scale },
    { id: "sharing", title: "9. How We Share Information", icon: ExternalLink },
    { id: "retention", title: "10. Data Retention", icon: Calendar },
    { id: "deletion", title: "11. Account Deletion", icon: Trash2 },
    { id: "rights", title: "12. Your Rights", icon: Check },
    { id: "security", title: "13. Security Measures", icon: Lock },
    { id: "children", title: "14. Children’s Privacy", icon: AlertCircle },
    { id: "international", title: "15. International Access", icon: Globe },
    { id: "grievance", title: "16. Grievance Officer", icon: Mail },
    { id: "changes", title: "17. Policy Changes", icon: RefreshCw },
    { id: "contact", title: "18. Contact Us", icon: Mail },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#111827] font-body selection:bg-[#335EEA]/15 selection:text-[#335EEA]">
      {/* Top Floating Navigation Bar */}
      <header className="sticky top-0 z-40 bg-white/85 backdrop-blur-md border-b border-slate-200/80 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <button
              onClick={onBackToHome}
              className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-semibold text-slate-700 hover:text-[#335EEA] bg-slate-100 hover:bg-[#335EEA]/10 rounded-full transition-all"
              aria-label="Back to Homepage"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </button>

            <div
              onClick={onBackToHome}
              className="flex items-center gap-2 cursor-pointer"
            >
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#335EEA] to-[#5B7CFF] flex items-center justify-center shadow-md">
                <Car className="w-4 h-4 text-white" />
              </div>
              <span className="font-heading font-bold text-lg sm:text-xl tracking-tight text-[#111827] hidden sm:inline">
                BhaiWay
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={handleCopyLink}
              className="px-3 py-1.5 sm:px-4 sm:py-2 text-xs font-semibold text-slate-600 bg-white border border-slate-200 hover:border-slate-300 rounded-lg shadow-sm transition-all flex items-center gap-1.5"
              title="Copy page link"
            >
              {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <ExternalLink className="w-3.5 h-3.5" />}
              <span>{copiedLink ? "Link Copied" : "Share"}</span>
            </button>

            <button
              onClick={handlePrint}
              className="px-3 py-1.5 sm:px-4 sm:py-2 text-xs font-semibold text-white bg-[#335EEA] hover:bg-[#284bc7] rounded-lg shadow-sm transition-all flex items-center gap-1.5"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print / PDF</span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Header Section */}
      <div className="relative bg-gradient-to-b from-white to-[#F8FAFC] border-b border-slate-200/70 pt-10 pb-12 sm:pt-14 sm:pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#335EEA]/10 text-[#335EEA] text-xs font-bold tracking-wide uppercase mb-4">
            <Shield className="w-3.5 h-3.5" />
            Official Legal Document
          </div>

          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111827] tracking-tight mb-4">
            BHAIWAY PRIVACY POLICY
          </h1>

          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto mb-6 leading-relaxed">
            Your privacy and digital security are fundamental to everything we build at BhaiWay. This policy outlines how we safeguard and process your data.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm text-slate-500 font-medium">
            <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-sm">
              <Calendar className="w-4 h-4 text-[#335EEA]" />
              <span>Effective Date: <strong className="text-slate-800 font-semibold">04/08/2026</strong></span>
            </div>
            <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-sm">
              <RefreshCw className="w-4 h-4 text-emerald-600" />
              <span>Last Updated: <strong className="text-slate-800 font-semibold">04/08/2026</strong></span>
            </div>
            <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-sm">
              <Globe className="w-4 h-4 text-indigo-500" />
              <span>Jurisdiction: <strong className="text-slate-800 font-semibold">India</strong></span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Layout with Sticky Sidebar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

          {/* Desktop Table of Contents Sidebar */}
          <aside className="hidden lg:block lg:col-span-4 sticky top-28 space-y-4">
            <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
                <span className="font-heading font-bold text-sm text-slate-800 uppercase tracking-wider flex items-center gap-2">
                  <FileText className="w-4 h-4 text-[#335EEA]" />
                  Table of Contents
                </span>
                <span className="text-xs text-slate-400 font-medium">{sections.length} Sections</span>
              </div>

              {/* Quick Search inside ToC */}
              <div className="relative mb-3">
                <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Filter sections..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-8 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-[#335EEA] focus:bg-white text-slate-800 transition-colors"
                />
              </div>

              <nav className="space-y-1 max-h-[calc(100vh-280px)] overflow-y-auto pr-1">
                {sections
                  .filter((s) => s.title.toLowerCase().includes(searchQuery.toLowerCase()))
                  .map((item) => {
                    const Icon = item.icon;
                    const isActive = activeSection === item.id;
                    return (
                      <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className={`w-full text-left flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs transition-colors ${isActive
                          ? "bg-[#335EEA]/10 text-[#335EEA] font-bold"
                          : "text-slate-600 hover:bg-slate-50 hover:text-slate-900 font-medium"
                          }`}
                      >
                        <Icon className={`w-3.5 h-3.5 shrink-0 ${isActive ? "text-[#335EEA]" : "text-slate-400"}`} />
                        <span className="truncate">{item.title}</span>
                      </button>
                    );
                  })}
              </nav>

              <div className="mt-5 pt-4 border-t border-slate-100 text-xs text-slate-400 flex flex-col gap-1">
                <span className="font-semibold text-slate-600">Need legal assistance?</span>
                <span>Email: <a href="mailto:grievance@bhaiway.com" className="text-[#335EEA] hover:underline">grievance@bhaiway.com</a></span>
              </div>
            </div>
          </aside>

          {/* Main Legal Content */}
          <main className="lg:col-span-8 space-y-8 text-slate-700 leading-relaxed">

            {/* Preamble Card */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
              <div className="prose prose-slate max-w-none">
                <p className="text-base sm:text-lg text-slate-800 font-medium leading-relaxed mb-4">
                  This Privacy Policy (“Policy”) describes how Kodenzo Labs Private Limited (“BhaiWay”, “Company”, “we”, “our”, or “us”) collects, uses, processes, stores, shares, protects, and manages personal information when users access or use the BhaiWay mobile application, website, APIs, customer support services, and related products (collectively referred to as the “Platform”).
                </p>
                <div className="p-4 rounded-xl bg-indigo-50/70 border border-indigo-100 text-indigo-950 font-medium text-sm flex items-start gap-3">
                  <Shield className="w-5 h-5 text-[#335EEA] shrink-0 mt-0.5" />
                  <span>
                    By accessing, registering, or using BhaiWay, you acknowledge that you have read, understood, and agreed to this Privacy Policy.
                  </span>
                </div>
              </div>
            </div>

            {/* 1. ABOUT BHAIWAY */}
            <section id="about" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm scroll-mt-28">
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-100">
                <div className="w-9 h-9 rounded-xl bg-[#335EEA]/10 flex items-center justify-center text-[#335EEA]">
                  <Car className="w-5 h-5" />
                </div>
                <h2 className="font-heading text-xl sm:text-2xl font-bold text-slate-900">
                  1. ABOUT BHAIWAY
                </h2>
              </div>
              <p className="mb-4">
                BhaiWay is a technology-enabled ride-sharing and community mobility platform that facilitates connections between verified users for:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
                {[
                  "Outstation rides",
                  "Intercity rides",
                  "Daily office commute rides",
                  "Corporate commute programs",
                  "Women-only rides",
                  "Assured rides",
                  "Regular rides"
                ].map((rideType, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-sm font-medium text-slate-800">
                    <Check className="w-4 h-4 text-[#335EEA]" />
                    <span>{rideType}</span>
                  </div>
                ))}
              </div>
              <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200/80 text-amber-950 text-sm">
                <p className="font-semibold mb-1">Platform Disclaimer:</p>
                <p>
                  BhaiWay is not a transportation company, taxi operator, cab service provider, fleet owner, or employer of drivers. BhaiWay acts solely as a technology platform that enables users to connect and coordinate rides.
                </p>
              </div>
            </section>

            {/* 2. DEFINITIONS */}
            <section id="definitions" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm scroll-mt-28">
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-100">
                <div className="w-9 h-9 rounded-xl bg-[#335EEA]/10 flex items-center justify-center text-[#335EEA]">
                  <FileText className="w-5 h-5" />
                </div>
                <h2 className="font-heading text-xl sm:text-2xl font-bold text-slate-900">
                  2. DEFINITIONS
                </h2>
              </div>
              <p className="mb-4">For the purpose of this Policy:</p>
              <div className="divide-y divide-slate-100 border border-slate-100 rounded-xl overflow-hidden">
                {[
                  { term: "Account", desc: "Means a registered BhaiWay profile." },
                  { term: "Driver", desc: "Means a verified user who publishes or offers a ride." },
                  { term: "Rider", desc: "Means a verified user who books or joins a ride." },
                  { term: "Personal Data", desc: "Means any information that identifies or relates to an identifiable individual." },
                  { term: "Sensitive Personal Data", desc: "Includes Aadhaar details, government identification documents, location data, and verification information." },
                  { term: "Corporate User", desc: "Means a user verified through corporate email and corporate identity verification." },
                  { term: "Trust Score", desc: "Means BhaiWay’s internal reputation and verification metric." },
                ].map((item, idx) => (
                  <div key={idx} className="p-4 bg-slate-50/50 hover:bg-slate-50 transition-colors">
                    <span className="font-bold text-slate-900 block sm:inline sm:mr-2 text-sm">
                      {item.term}:
                    </span>
                    <span className="text-slate-600 text-sm">{item.desc}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* 3. INFORMATION WE COLLECT */}
            <section id="information-collected" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm scroll-mt-28">
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-100">
                <div className="w-9 h-9 rounded-xl bg-[#335EEA]/10 flex items-center justify-center text-[#335EEA]">
                  <UserCheck className="w-5 h-5" />
                </div>
                <h2 className="font-heading text-xl sm:text-2xl font-bold text-slate-900">
                  3. INFORMATION WE COLLECT
                </h2>
              </div>

              <div className="space-y-6">
                {/* 3.1 Registration Information */}
                <div>
                  <h3 className="font-heading font-bold text-base text-slate-900 mb-2">
                    3.1 Registration Information
                  </h3>
                  <p className="text-sm text-slate-600 mb-3">During registration, we may collect:</p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {["Full Name", "Mobile Number", "Email Address", "Gender", "Profile Photograph", "Date of Birth"].map((field, idx) => (
                      <div key={idx} className="px-3 py-2 rounded-lg bg-slate-50 border border-slate-100 text-xs font-medium text-slate-700">
                        • {field}
                      </div>
                    ))}
                  </div>
                </div>

                {/* 3.2 Verification Information */}
                <div className="pt-4 border-t border-slate-100">
                  <h3 className="font-heading font-bold text-base text-slate-900 mb-2">
                    3.2 Verification Information
                  </h3>
                  <p className="text-sm text-slate-600 mb-3">To maintain safety and trust, BhaiWay may collect:</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3 text-xs text-slate-700">
                    <li className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">• Aadhaar Number</li>
                    <li className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">• Aadhaar Verification Status</li>
                    <li className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">• Driving Licence</li>
                    <li className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">• Driving Licence Verification Status</li>
                    <li className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">• Vehicle Registration Certificate (RC)</li>
                    <li className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">• Corporate ID Card</li>
                    <li className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 sm:col-span-2">• Corporate Email Verification</li>
                  </ul>
                  <p className="text-xs font-semibold text-slate-500 italic">
                    Users acknowledge that verification is mandatory where required by the Platform.
                  </p>
                </div>

                {/* 3.3 Vehicle Information */}
                <div className="pt-4 border-t border-slate-100">
                  <h3 className="font-heading font-bold text-base text-slate-900 mb-2">
                    3.3 Vehicle Information
                  </h3>
                  <p className="text-sm text-slate-600 mb-3">For Drivers:</p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs text-slate-700">
                    {["Vehicle Make", "Vehicle Model", "Registration Number", "Vehicle Type", "Vehicle Color", "Manufacturing Year", "EV Status (if applicable)"].map((v, i) => (
                      <div key={i} className="p-2 rounded-lg bg-slate-50 border border-slate-100">• {v}</div>
                    ))}
                  </div>
                </div>

                {/* 3.4 Ride Information */}
                <div className="pt-4 border-t border-slate-100">
                  <h3 className="font-heading font-bold text-base text-slate-900 mb-2">
                    3.4 Ride Information
                  </h3>
                  <p className="text-sm text-slate-600 mb-3">We collect:</p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs text-slate-700">
                    {["Pickup Locations", "Drop Locations", "Travel Routes", "Ride Preferences", "Ride History", "Passenger Count", "Ride Schedules", "Booking Information", "Cancellation History"].map((r, i) => (
                      <div key={i} className="p-2 rounded-lg bg-slate-50 border border-slate-100">• {r}</div>
                    ))}
                  </div>
                </div>

                {/* 3.5 Live Location Information */}
                <div className="pt-4 border-t border-slate-100">
                  <h3 className="font-heading font-bold text-base text-slate-900 mb-2 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#335EEA]" />
                    3.5 Live Location Information
                  </h3>
                  <p className="text-sm text-slate-600 mb-2">When enabled by the user, BhaiWay may collect:</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3 text-xs text-slate-700">
                    {["Real-time GPS Location", "Active Ride Tracking", "Route Navigation Data", "Ride ETA Information"].map((l, i) => (
                      <div key={i} className="p-2 rounded-lg bg-slate-50 border border-slate-100">• {l}</div>
                    ))}
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Location data may be collected before, during, and after rides where required for ride completion, fraud prevention, safety monitoring, and customer support.
                  </p>
                </div>

                {/* 3.6 Emergency Information */}
                <div className="pt-4 border-t border-slate-100">
                  <h3 className="font-heading font-bold text-base text-slate-900 mb-2 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-rose-500" />
                    3.6 Emergency Information
                  </h3>
                  <p className="text-sm text-slate-600 mb-2">Users may voluntarily provide:</p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs text-slate-700">
                    {["Emergency Contact Details", "Trusted Contacts", "SOS Alerts", "Safety Reports", "Incident Reports"].map((e, i) => (
                      <div key={i} className="p-2 rounded-lg bg-slate-50 border border-slate-100">• {e}</div>
                    ))}
                  </div>
                </div>

                {/* 3.7 Wallet & Payment Information */}
                <div className="pt-4 border-t border-slate-100">
                  <h3 className="font-heading font-bold text-base text-slate-900 mb-2 flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-[#335EEA]" />
                    3.7 Wallet & Payment Information
                  </h3>
                  <p className="text-sm text-slate-600 mb-2">We may collect:</p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-3 text-xs text-slate-700">
                    {["Wallet Balance", "Transaction Records", "Payment History", "UPI Information", "Bank Account Details (Drivers)", "Refund Information"].map((w, i) => (
                      <div key={i} className="p-2 rounded-lg bg-slate-50 border border-slate-100">• {w}</div>
                    ))}
                  </div>
                  <p className="text-xs font-semibold text-slate-600 bg-slate-50 p-2.5 rounded-lg border border-slate-200 inline-block">
                    Note: BhaiWay does not store complete card details.
                  </p>
                </div>

                {/* 3.8 Customer Support Information */}
                <div className="pt-4 border-t border-slate-100">
                  <h3 className="font-heading font-bold text-base text-slate-900 mb-2">
                    3.8 Customer Support Information
                  </h3>
                  <p className="text-sm text-slate-600 mb-2">When users contact support, we may collect:</p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs text-slate-700">
                    {["Complaint Details", "Chat Records", "Ticket Information", "Uploaded Documents", "Photographs", "Screenshots", "Investigation Notes"].map((cs, i) => (
                      <div key={i} className="p-2 rounded-lg bg-slate-50 border border-slate-100">• {cs}</div>
                    ))}
                  </div>
                </div>

                {/* 3.9 Device Information */}
                <div className="pt-4 border-t border-slate-100">
                  <h3 className="font-heading font-bold text-base text-slate-900 mb-2 flex items-center gap-2">
                    <Smartphone className="w-4 h-4 text-slate-700" />
                    3.9 Device Information
                  </h3>
                  <p className="text-sm text-slate-600 mb-2">We may automatically collect:</p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs text-slate-700">
                    {["Device ID", "Operating System", "App Version", "IP Address", "Browser Information", "Login Activity", "Security Logs"].map((d, i) => (
                      <div key={i} className="p-2 rounded-lg bg-slate-50 border border-slate-100">• {d}</div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* 4. WHY WE COLLECT YOUR DATA */}
            <section id="why-collect" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm scroll-mt-28">
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-100">
                <div className="w-9 h-9 rounded-xl bg-[#335EEA]/10 flex items-center justify-center text-[#335EEA]">
                  <HelpCircle className="w-5 h-5" />
                </div>
                <h2 className="font-heading text-xl sm:text-2xl font-bold text-slate-900">
                  4. WHY WE COLLECT YOUR DATA
                </h2>
              </div>
              <p className="mb-4 text-sm text-slate-600">We process information for the following purposes:</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { title: "Account Creation", desc: "To create and manage user accounts." },
                  { title: "Identity Verification", desc: "To verify identity and maintain platform safety." },
                  { title: "Ride Matching", desc: "To connect riders and drivers." },
                  { title: "Corporate Verification", desc: "To verify eligibility for corporate commute services." },
                  { title: "Trust Score Management", desc: "To calculate and maintain trust ratings." },
                  { title: "Wallet Management", desc: "To process wallet transactions and settlements." },
                  { title: "Ride Execution", desc: "To facilitate ride bookings, tracking, and completion." },
                  { title: "Fraud Prevention", desc: "To detect abuse, fake accounts, duplicate registrations, and suspicious activity." },
                  { title: "Safety Protection", desc: "To investigate incidents and support SOS functions." },
                  { title: "Customer Support", desc: "To resolve disputes and support requests." },
                  { title: "Legal Compliance", desc: "To comply with applicable laws, regulations, and lawful requests." },
                ].map((purpose, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                    <h4 className="font-bold text-slate-900 text-sm mb-1">{purpose.title}</h4>
                    <p className="text-xs text-slate-600">{purpose.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* 5. LOCATION DATA CONSENT */}
            <section id="location-consent" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm scroll-mt-28">
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-100">
                <div className="w-9 h-9 rounded-xl bg-[#335EEA]/10 flex items-center justify-center text-[#335EEA]">
                  <MapPin className="w-5 h-5" />
                </div>
                <h2 className="font-heading text-xl sm:text-2xl font-bold text-slate-900">
                  5. LOCATION DATA CONSENT
                </h2>
              </div>
              <p className="mb-4 text-sm">By using BhaiWay, you expressly consent to:</p>
              <ul className="space-y-2 mb-4 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#335EEA] mt-0.5 shrink-0" />
                  <span>GPS tracking during active rides.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#335EEA] mt-0.5 shrink-0" />
                  <span>Live location sharing with participating riders and drivers.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#335EEA] mt-0.5 shrink-0" />
                  <span>Sharing of ride location with trusted contacts when enabled.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#335EEA] mt-0.5 shrink-0" />
                  <span>Sharing of location data with BhaiWay support during emergencies.</span>
                </li>
              </ul>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600">
                Users may disable location permissions; however, certain platform features may not function properly.
              </div>
            </section>

            {/* 6. AADHAAR AND KYC CONSENT */}
            <section id="aadhaar-kyc" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm scroll-mt-28">
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-100">
                <div className="w-9 h-9 rounded-xl bg-[#335EEA]/10 flex items-center justify-center text-[#335EEA]">
                  <Shield className="w-5 h-5" />
                </div>
                <h2 className="font-heading text-xl sm:text-2xl font-bold text-slate-900">
                  6. AADHAAR AND KYC CONSENT
                </h2>
              </div>
              <p className="mb-4 text-sm">By submitting Aadhaar or identity information, users consent to:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-4 text-xs font-medium text-slate-800">
                {["Verification of identity.", "Prevention of fraud.", "Verification of eligibility.", "Compliance with safety requirements."].map((item, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-slate-50 border border-slate-100 flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-100 text-blue-950 text-xs sm:text-sm space-y-1">
                <p className="font-bold">Privacy Guarantee:</p>
                <p>BhaiWay will not publicly display Aadhaar information.</p>
                <p>Verification information will only be accessible to authorized personnel and verification systems.</p>
              </div>
            </section>

            {/* 7. CORPORATE COMMUTE VERIFICATION */}
            <section id="corporate-commute" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm scroll-mt-28">
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-100">
                <div className="w-9 h-9 rounded-xl bg-[#335EEA]/10 flex items-center justify-center text-[#335EEA]">
                  <Users className="w-5 h-5" />
                </div>
                <h2 className="font-heading text-xl sm:text-2xl font-bold text-slate-900">
                  7. CORPORATE COMMUTE VERIFICATION
                </h2>
              </div>
              <p className="mb-3 text-sm">Corporate users may be required to provide:</p>
              <ul className="list-disc list-inside space-y-1 mb-4 text-sm text-slate-700 pl-2">
                <li>Work Email Address</li>
                <li>Corporate ID Card</li>
                <li>Employer Information</li>
              </ul>
              <p className="text-sm text-slate-600 mb-2">
                Corporate verification is required for access to corporate commute services.
              </p>
              <p className="text-xs text-rose-600 font-medium">
                Loss of verification status may result in restricted access to such features.
              </p>
            </section>

            {/* 8. TRUST SCORE SYSTEM */}
            <section id="trust-score" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm scroll-mt-28">
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-100">
                <div className="w-9 h-9 rounded-xl bg-[#335EEA]/10 flex items-center justify-center text-[#335EEA]">
                  <Scale className="w-5 h-5" />
                </div>
                <h2 className="font-heading text-xl sm:text-2xl font-bold text-slate-900">
                  8. TRUST SCORE SYSTEM
                </h2>
              </div>
              <p className="mb-3 text-sm">BhaiWay maintains a trust score system that may consider:</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-4 text-xs text-slate-800">
                {["Verification status", "Ride completion history", "Ratings and reviews", "Safety incidents", "Cancellation history", "No-show incidents"].map((scoreFactor, idx) => (
                  <div key={idx} className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">• {scoreFactor}</div>
                ))}
              </div>
              <p className="text-xs text-slate-500">
                Trust scores may affect visibility, eligibility, and access to certain services.
              </p>
            </section>

            {/* 9. HOW WE SHARE INFORMATION */}
            <section id="sharing" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm scroll-mt-28">
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-100">
                <div className="w-9 h-9 rounded-xl bg-[#335EEA]/10 flex items-center justify-center text-[#335EEA]">
                  <ExternalLink className="w-5 h-5" />
                </div>
                <h2 className="font-heading text-xl sm:text-2xl font-bold text-slate-900">
                  9. HOW WE SHARE INFORMATION
                </h2>
              </div>
              <p className="mb-4 text-sm">We may share information with:</p>
              <div className="space-y-2 mb-6">
                {[
                  { entity: "Other Users", note: "Limited information necessary for ride coordination." },
                  { entity: "Payment Partners", note: "For transaction processing." },
                  { entity: "Verification Providers", note: "For identity verification." },
                  { entity: "Customer Support Teams", note: "For issue resolution." },
                  { entity: "Law Enforcement Agencies", note: "Where legally required." },
                  { entity: "Courts and Regulatory Authorities", note: "Where required by law." },
                ].map((item, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs sm:text-sm">
                    <span className="font-bold text-slate-900">{item.entity}</span>
                    <span className="text-slate-500">{item.note}</span>
                  </div>
                ))}
              </div>
              <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-950 font-semibold text-xs sm:text-sm flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>We do not sell personal information to third parties.</span>
              </div>
            </section>

            {/* 10. DATA RETENTION */}
            <section id="retention" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm scroll-mt-28">
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-100">
                <div className="w-9 h-9 rounded-xl bg-[#335EEA]/10 flex items-center justify-center text-[#335EEA]">
                  <Calendar className="w-5 h-5" />
                </div>
                <h2 className="font-heading text-xl sm:text-2xl font-bold text-slate-900">
                  10. DATA RETENTION
                </h2>
              </div>
              <p className="mb-4 text-sm">Unless a longer retention period is required by law:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                {[
                  { type: "Account Records", duration: "During account life cycle" },
                  { type: "Ride Records", duration: "Up to 5 years" },
                  { type: "Wallet Records", duration: "Up to 8 years" },
                  { type: "Support Tickets", duration: "Up to 5 years" },
                  { type: "Investigation Records", duration: "Up to 7 years" },
                ].map((item, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex justify-between items-center text-xs sm:text-sm">
                    <span className="font-semibold text-slate-800">{item.type}</span>
                    <span className="px-2.5 py-1 bg-indigo-50 text-[#335EEA] rounded-full font-bold text-xs">{item.duration}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-slate-500">
                Certain information may be retained after account deletion for legal, safety, fraud-prevention, or dispute-resolution purposes.
              </p>
            </section>

            {/* 11. ACCOUNT DELETION */}
            <section id="deletion" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm scroll-mt-28">
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-100">
                <div className="w-9 h-9 rounded-xl bg-[#335EEA]/10 flex items-center justify-center text-[#335EEA]">
                  <Trash2 className="w-5 h-5" />
                </div>
                <h2 className="font-heading text-xl sm:text-2xl font-bold text-slate-900">
                  11. ACCOUNT DELETION
                </h2>
              </div>
              <p className="mb-3 text-sm">
                Users may request account deletion through the Platform.
              </p>
              <p className="text-sm font-semibold text-slate-800 mb-2">Deletion requests may be denied or delayed if:</p>
              <ul className="list-disc list-inside space-y-1 mb-4 text-sm text-slate-700 pl-2">
                <li>There are active disputes.</li>
                <li>Fraud investigations are pending.</li>
                <li>Legal obligations require retention.</li>
              </ul>
              <div className="p-3 rounded-xl bg-rose-50/70 border border-rose-100 text-rose-900 text-xs">
                Deleted accounts may lose access permanently to wallet balances, trust scores, ride history, and rewards.
              </div>
            </section>

            {/* 12. YOUR RIGHTS */}
            <section id="rights" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm scroll-mt-28">
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-100">
                <div className="w-9 h-9 rounded-xl bg-[#335EEA]/10 flex items-center justify-center text-[#335EEA]">
                  <Check className="w-5 h-5" />
                </div>
                <h2 className="font-heading text-xl sm:text-2xl font-bold text-slate-900">
                  12. YOUR RIGHTS
                </h2>
              </div>
              <p className="mb-4 text-sm">Subject to applicable law, users may:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-slate-800 font-medium">
                {[
                  "Access their data.",
                  "Correct inaccurate information.",
                  "Request deletion.",
                  "Withdraw consent.",
                  "File grievances.",
                  "Request information regarding data processing."
                ].map((right, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#335EEA] shrink-0" />
                    <span>{right}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* 13. SECURITY MEASURES */}
            <section id="security" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm scroll-mt-28">
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-100">
                <div className="w-9 h-9 rounded-xl bg-[#335EEA]/10 flex items-center justify-center text-[#335EEA]">
                  <Lock className="w-5 h-5" />
                </div>
                <h2 className="font-heading text-xl sm:text-2xl font-bold text-slate-900">
                  13. SECURITY MEASURES
                </h2>
              </div>
              <p className="mb-4 text-sm">We implement:</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mb-4 text-xs font-semibold text-slate-800">
                {[
                  "Access Controls",
                  "Encryption",
                  "Authentication Mechanisms",
                  "Security Monitoring",
                  "Fraud Detection Systems",
                  "Secure Infrastructure"
                ].map((measure, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-2">
                    <Shield className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{measure}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-slate-500 italic">
                However, no security system can guarantee absolute protection.
              </p>
            </section>

            {/* 14. CHILDREN’S PRIVACY */}
            <section id="children" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm scroll-mt-28">
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-100">
                <div className="w-9 h-9 rounded-xl bg-[#335EEA]/10 flex items-center justify-center text-[#335EEA]">
                  <AlertCircle className="w-5 h-5" />
                </div>
                <h2 className="font-heading text-xl sm:text-2xl font-bold text-slate-900">
                  14. CHILDREN’S PRIVACY
                </h2>
              </div>
              <p className="text-sm font-semibold text-slate-800 mb-2">
                BhaiWay services are strictly limited to individuals aged 18 years or older.
              </p>
              <p className="text-sm text-slate-600">
                Users below 18 years of age are prohibited from creating accounts or using the Platform.
              </p>
            </section>

            {/* 15. INTERNATIONAL ACCESS */}
            <section id="international" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm scroll-mt-28">
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-100">
                <div className="w-9 h-9 rounded-xl bg-[#335EEA]/10 flex items-center justify-center text-[#335EEA]">
                  <Globe className="w-5 h-5" />
                </div>
                <h2 className="font-heading text-xl sm:text-2xl font-bold text-slate-900">
                  15. INTERNATIONAL ACCESS
                </h2>
              </div>
              <p className="text-sm text-slate-700 mb-2">
                BhaiWay services are intended primarily for users located in India.
              </p>
              <p className="text-sm font-semibold text-slate-900">
                Data is stored on servers located within India.
              </p>
            </section>

            {/* 16. GRIEVANCE OFFICER */}
            <section id="grievance" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm scroll-mt-28">
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-100">
                <div className="w-9 h-9 rounded-xl bg-[#335EEA]/10 flex items-center justify-center text-[#335EEA]">
                  <Mail className="w-5 h-5" />
                </div>
                <h2 className="font-heading text-xl sm:text-2xl font-bold text-slate-900">
                  16. GRIEVANCE OFFICER
                </h2>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-sm text-slate-800 mb-4">
                <p><strong>Grievance Officer:</strong> Aditya Gangwar</p>
                <p>
                  <strong>Email:</strong>{" "}
                  <a href="mailto:grievance@bhaiway.com" className="text-[#335EEA] font-medium hover:underline">
                    grievance@bhaiway.com
                  </a>
                </p>
                <p>
                  <strong>Website:</strong>{" "}
                  <a href="https://bhaiway.com" target="_blank" rel="noopener noreferrer" className="text-[#335EEA] font-medium hover:underline">
                    https://bhaiway.com
                  </a>
                </p>
              </div>
              <p className="text-xs text-slate-500">
                Users may submit privacy-related complaints through the grievance channel.
              </p>
            </section>

            {/* 17. POLICY CHANGES */}
            <section id="changes" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm scroll-mt-28">
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-100">
                <div className="w-9 h-9 rounded-xl bg-[#335EEA]/10 flex items-center justify-center text-[#335EEA]">
                  <RefreshCw className="w-5 h-5" />
                </div>
                <h2 className="font-heading text-xl sm:text-2xl font-bold text-slate-900">
                  17. POLICY CHANGES
                </h2>
              </div>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>BhaiWay reserves the right to modify this Privacy Policy at any time.</li>
                <li>Updated versions shall become effective upon publication on the Platform.</li>
                <li>Continued use of the Platform constitutes acceptance of the revised Policy.</li>
              </ul>
            </section>

            {/* 18. CONTACT US */}
            <section id="contact" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm scroll-mt-28">
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-100">
                <div className="w-9 h-9 rounded-xl bg-[#335EEA]/10 flex items-center justify-center text-[#335EEA]">
                  <Mail className="w-5 h-5" />
                </div>
                <h2 className="font-heading text-xl sm:text-2xl font-bold text-slate-900">
                  18. CONTACT US
                </h2>
              </div>
              <div className="p-5 rounded-xl bg-gradient-to-tr from-slate-50 to-indigo-50/40 border border-slate-200 space-y-2.5 text-sm text-slate-800 mb-6">
                <p className="font-bold text-base text-slate-900">Kodenzo Labs Private Limited</p>
                <p className="flex items-center gap-2">
                  <span className="text-slate-500">Support Email:</span>
                  <a href="mailto:support@bhaiway.com" className="text-[#335EEA] font-semibold hover:underline">
                    support@bhaiway.com
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-slate-500">Grievance Email:</span>
                  <a href="mailto:grievance@bhaiway.com" className="text-[#335EEA] font-semibold hover:underline">
                    grievance@bhaiway.com
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-slate-500">Website:</span>
                  <a href="https://bhaiway.com" target="_blank" rel="noopener noreferrer" className="text-[#335EEA] font-semibold hover:underline">
                    https://bhaiway.com
                  </a>
                </p>
              </div>

              {/* Concluding Acknowledgment */}
              <div className="p-4 rounded-xl bg-[#335EEA]/5 border border-[#335EEA]/20 text-slate-900 text-sm font-medium leading-relaxed">
                By using BhaiWay, you acknowledge and consent to the collection, use, processing, storage, and sharing of information as described in this Privacy Policy.
              </div>
            </section>

            {/* Bottom Back to Home Button & Cross Navigation */}
            <div className="pt-6 pb-12 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={onBackToHome}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-white bg-[#335EEA] hover:bg-[#284bc7] rounded-full shadow-lg shadow-[#335EEA]/25 transition-all hover:scale-105"
              >
                <ArrowLeft className="w-4 h-4" />
                Return to BhaiWay Home
              </button>
              {onNavigateToTerms && (
                <button
                  onClick={onNavigateToTerms}
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-slate-700 hover:text-[#335EEA] bg-white border border-slate-200 hover:border-slate-300 rounded-full shadow-sm transition-all"
                >
                  <FileText className="w-4 h-4 text-[#335EEA]" />
                  View Terms & Conditions
                </button>
              )}
            </div>

          </main>
        </div>
      </div>
    </div>
  );
}

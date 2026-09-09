import React, { useState, useEffect } from "react";
import {
  FileText, ArrowLeft, Printer, Search, Calendar, Shield,
  Scale, AlertTriangle, AlertCircle, Check, ExternalLink,
  Car, Users, Lock, CreditCard, RefreshCw, PhoneCall,
  MapPin, UserCheck, ShieldAlert, Award, ChevronRight,
  HelpCircle, Building2, Ban, DollarSign, Clock, Mail, Globe
} from "lucide-react";

export default function TermsOfService({ onBackToHome, onNavigateToPrivacy }) {
  const [activeSection, setActiveSection] = useState("platform-nature");
  const [searchQuery, setSearchQuery] = useState("");
  const [copiedLink, setCopiedLink] = useState(false);

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
    { id: "platform-nature", title: "1. Platform Nature", icon: Car },
    { id: "eligibility", title: "2. Eligibility", icon: UserCheck },
    { id: "account-registration", title: "3. Account Registration", icon: Lock },
    { id: "identity-verification", title: "4. Identity Verification", icon: Shield },
    { id: "corporate-commute", title: "5. Corporate Commute Eligibility", icon: Building2 },
    { id: "ride-types", title: "6. Ride Types", icon: Award },
    { id: "ride-bookings", title: "7. Ride Bookings", icon: Calendar },
    { id: "assured-deposit", title: "8. Assured Ride Security Deposit", icon: DollarSign },
    { id: "assured-refunds", title: "9. Assured Ride Refund Rules", icon: RefreshCw },
    { id: "driver-cancellation", title: "10. Driver Cancellation Policy", icon: AlertTriangle },
    { id: "rider-cancellation", title: "11. Rider Cancellation Policy", icon: AlertTriangle },
    { id: "passenger-no-show", title: "12. Passenger No-Show", icon: Clock },
    { id: "driver-no-show", title: "13. Driver No-Show", icon: Clock },
    { id: "otp-verification", title: "14. Ride OTP Verification", icon: Lock },
    { id: "driver-obligations", title: "15. Driver Obligations", icon: Check },
    { id: "rider-obligations", title: "16. Rider Obligations", icon: Check },
    { id: "women-only", title: "17. Women-Only Rides", icon: Users },
    { id: "wallet-terms", title: "18. Wallet Terms", icon: CreditCard },
    { id: "trust-score", title: "19. Trust Score System", icon: Scale },
    { id: "ratings-reviews", title: "20. Ratings & Reviews", icon: Award },
    { id: "safety-features", title: "21. Safety Features", icon: ShieldAlert },
    { id: "sos-feature", title: "22. SOS Feature", icon: PhoneCall },
    { id: "prohibited-activities", title: "23. Prohibited Activities", icon: Ban },
    { id: "account-suspension", title: "24. Account Suspension", icon: AlertCircle },
    { id: "dispute-resolution", title: "25. Dispute Resolution", icon: Scale },
    { id: "limitation-liability", title: "26. Limitation of Liability", icon: Shield },
    { id: "indemnification", title: "27. Indemnification", icon: FileText },
    { id: "governing-law", title: "28. Governing Law", icon: Globe },
    { id: "contact-info", title: "29. Contact Information", icon: Mail },
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
            <Scale className="w-3.5 h-3.5" />
            Terms of Service & User Agreement
          </div>

          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111827] tracking-tight mb-4">
            BHAIWAY TERMS & CONDITIONS
          </h1>

          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto mb-6 leading-relaxed">
            Please read these terms and conditions carefully before accessing or using the BhaiWay community mobility platform.
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
              <span>Jurisdiction: <strong className="text-slate-800 font-semibold">Noida, Uttar Pradesh, India</strong></span>
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
                <span className="font-semibold text-slate-600">Legal questions?</span>
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
                  These Terms & Conditions (“Terms”) constitute a legally binding agreement between Kodenzo Labs Private Limited (“BhaiWay”, “Company”, “we”, “our”, or “us”) and any individual or entity accessing or using the BhaiWay platform (“User”, “Driver”, “Rider”, “you”, or “your”).
                </p>
                <div className="p-4 rounded-xl bg-indigo-50/70 border border-indigo-100 text-indigo-950 font-medium text-sm flex items-start gap-3">
                  <Scale className="w-5 h-5 text-[#335EEA] shrink-0 mt-0.5" />
                  <span>
                    By accessing, registering, or using BhaiWay, you agree to be bound by these Terms.
                  </span>
                </div>
              </div>
            </div>

            {/* 1. PLATFORM NATURE */}
            <section id="platform-nature" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm scroll-mt-28">
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-100">
                <div className="w-9 h-9 rounded-xl bg-[#335EEA]/10 flex items-center justify-center text-[#335EEA]">
                  <Car className="w-5 h-5" />
                </div>
                <h2 className="font-heading text-xl sm:text-2xl font-bold text-slate-900">
                  1. PLATFORM NATURE
                </h2>
              </div>
              <p className="mb-4">
                BhaiWay is a technology-enabled ride-sharing and community mobility platform that facilitates ride matching between independent users.
              </p>

              <div className="mb-5">
                <p className="font-semibold text-slate-900 text-sm mb-2">BhaiWay:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-800">
                  {[
                    "Is not a taxi company.",
                    "Is not a cab operator.",
                    "Is not a transportation provider.",
                    "Is not an employer of drivers.",
                    "Does not own vehicles listed on the Platform."
                  ].map((item, idx) => (
                    <div key={idx} className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#335EEA]"></span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm space-y-2">
                <p className="font-medium text-slate-800">
                  Drivers and Riders interact directly at their own discretion.
                </p>
                <p className="text-slate-600">
                  BhaiWay only provides technological infrastructure for ride discovery, booking, communication, safety support, identity verification, and transaction facilitation.
                </p>
              </div>
            </section>

            {/* 2. ELIGIBILITY */}
            <section id="eligibility" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm scroll-mt-28">
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-100">
                <div className="w-9 h-9 rounded-xl bg-[#335EEA]/10 flex items-center justify-center text-[#335EEA]">
                  <UserCheck className="w-5 h-5" />
                </div>
                <h2 className="font-heading text-xl sm:text-2xl font-bold text-slate-900">
                  2. ELIGIBILITY
                </h2>
              </div>
              <p className="mb-3 text-sm">To use BhaiWay, users must:</p>
              <div className="space-y-2 mb-4">
                {[
                  "Be at least 18 years of age.",
                  "Possess legal capacity to enter contracts.",
                  "Provide accurate information.",
                  "Complete required verification procedures.",
                  "Comply with applicable laws."
                ].map((crit, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-xs sm:text-sm text-slate-800">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{crit}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-slate-500 font-medium italic">
                BhaiWay reserves the right to deny access to any user at its sole discretion.
              </p>
            </section>

            {/* 3. ACCOUNT REGISTRATION */}
            <section id="account-registration" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm scroll-mt-28">
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-100">
                <div className="w-9 h-9 rounded-xl bg-[#335EEA]/10 flex items-center justify-center text-[#335EEA]">
                  <Lock className="w-5 h-5" />
                </div>
                <h2 className="font-heading text-xl sm:text-2xl font-bold text-slate-900">
                  3. ACCOUNT REGISTRATION
                </h2>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="text-sm font-semibold text-slate-900 mb-2">Users may register through:</p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                    {["Mobile OTP Verification", "Email Verification", "Corporate Verification (where applicable)"].map((reg, idx) => (
                      <div key={idx} className="p-2.5 rounded-lg bg-indigo-50/60 border border-indigo-100 text-[#335EEA] font-medium">
                        • {reg}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100">
                  <p className="text-sm font-semibold text-slate-900 mb-2">Users are responsible for:</p>
                  <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm text-slate-700 pl-2">
                    <li>Maintaining account confidentiality.</li>
                    <li>Protecting OTP credentials.</li>
                    <li>Updating profile information.</li>
                    <li>Preventing unauthorized access.</li>
                  </ul>
                </div>

                <div className="pt-3 border-t border-slate-100">
                  <p className="text-sm font-semibold text-rose-700 mb-2">Users may not:</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-rose-900">
                    {[
                      "Create fake profiles.",
                      "Impersonate another individual.",
                      "Create multiple fraudulent accounts.",
                      "Provide false verification documents."
                    ].map((proh, idx) => (
                      <div key={idx} className="p-2.5 rounded-lg bg-rose-50/70 border border-rose-100 flex items-center gap-2">
                        <Ban className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                        <span>{proh}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* 4. IDENTITY VERIFICATION */}
            <section id="identity-verification" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm scroll-mt-28">
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-100">
                <div className="w-9 h-9 rounded-xl bg-[#335EEA]/10 flex items-center justify-center text-[#335EEA]">
                  <Shield className="w-5 h-5" />
                </div>
                <h2 className="font-heading text-xl sm:text-2xl font-bold text-slate-900">
                  4. IDENTITY VERIFICATION
                </h2>
              </div>
              <p className="mb-4 text-sm text-slate-600">To maintain platform safety, BhaiWay may require:</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <h4 className="font-bold text-slate-900 text-sm mb-2 flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-[#335EEA]" />
                    For Riders:
                  </h4>
                  <ul className="list-disc list-inside text-xs sm:text-sm text-slate-700 pl-1">
                    <li>Aadhaar Verification</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <h4 className="font-bold text-slate-900 text-sm mb-2 flex items-center gap-2">
                    <Car className="w-4 h-4 text-[#335EEA]" />
                    For Drivers:
                  </h4>
                  <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm text-slate-700 pl-1">
                    <li>Aadhaar Verification</li>
                    <li>Driving Licence Verification</li>
                    <li>Vehicle RC Verification</li>
                  </ul>
                </div>
              </div>

              <p className="text-xs text-slate-600 mb-3">
                Verification approval remains subject to BhaiWay review.
              </p>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-xs text-slate-700 mb-3">
                <p className="font-semibold text-slate-900">BhaiWay reserves the right to:</p>
                <ul className="list-disc list-inside space-y-1 pl-1">
                  <li>Reject verification submissions.</li>
                  <li>Suspend pending accounts.</li>
                  <li>Request additional documentation.</li>
                </ul>
              </div>

              <div className="p-3 rounded-lg bg-amber-50 border border-amber-200/70 text-xs text-amber-950">
                <strong>Disclaimer:</strong> Verification approval does not guarantee user reliability, safety, or trustworthiness.
              </div>
            </section>

            {/* 5. CORPORATE COMMUTE ELIGIBILITY */}
            <section id="corporate-commute" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm scroll-mt-28">
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-100">
                <div className="w-9 h-9 rounded-xl bg-[#335EEA]/10 flex items-center justify-center text-[#335EEA]">
                  <Building2 className="w-5 h-5" />
                </div>
                <h2 className="font-heading text-xl sm:text-2xl font-bold text-slate-900">
                  5. CORPORATE COMMUTE ELIGIBILITY
                </h2>
              </div>
              <p className="text-sm mb-3">
                Corporate commute services are restricted to verified corporate users.
              </p>
              <p className="text-sm font-semibold text-slate-800 mb-2">To participate, users may be required to provide:</p>
              <ul className="list-disc list-inside space-y-1 mb-4 text-xs sm:text-sm text-slate-700 pl-2">
                <li>Corporate Email Address</li>
                <li>Employer Verification</li>
                <li>Corporate Identity Information</li>
              </ul>

              <p className="text-sm font-semibold text-slate-800 mb-2">Only verified corporate users may:</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-4 text-xs">
                {["Publish commute rides.", "Join commute rides.", "Access corporate-only features."].map((feat, idx) => (
                  <div key={idx} className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 font-medium text-slate-800">
                    ✓ {feat}
                  </div>
                ))}
              </div>
              <p className="text-xs text-rose-600 font-medium">
                Corporate verification may be revoked at any time.
              </p>
            </section>

            {/* 6. RIDE TYPES */}
            <section id="ride-types" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm scroll-mt-28">
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-100">
                <div className="w-9 h-9 rounded-xl bg-[#335EEA]/10 flex items-center justify-center text-[#335EEA]">
                  <Award className="w-5 h-5" />
                </div>
                <h2 className="font-heading text-xl sm:text-2xl font-bold text-slate-900">
                  6. RIDE TYPES
                </h2>
              </div>
              <p className="mb-4 text-sm text-slate-600">BhaiWay supports:</p>

              <div className="space-y-3">
                {[
                  { title: "Regular Rides", desc: "Standard ride-sharing arrangements between users." },
                  { title: "Assured Rides", desc: "Enhanced commitment-based ride-sharing model requiring security deposits." },
                  { title: "Women-Only Rides", desc: "Restricted ride-sharing environment designed for female riders." },
                  { title: "Corporate Commute Rides", desc: "Recurring rides intended for verified corporate commuters." },
                  { title: "Outstation Rides", desc: "Intercity and long-distance ride-sharing arrangements." },
                ].map((type, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <span className="font-bold text-slate-900 text-sm">{type.title}</span>
                    <span className="text-xs sm:text-sm text-slate-600">{type.desc}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* 7. RIDE BOOKINGS */}
            <section id="ride-bookings" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm scroll-mt-28">
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-100">
                <div className="w-9 h-9 rounded-xl bg-[#335EEA]/10 flex items-center justify-center text-[#335EEA]">
                  <Calendar className="w-5 h-5" />
                </div>
                <h2 className="font-heading text-xl sm:text-2xl font-bold text-slate-900">
                  7. RIDE BOOKINGS
                </h2>
              </div>
              <p className="mb-3 text-sm font-semibold text-slate-900">A booking becomes confirmed only when:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4 text-xs sm:text-sm text-slate-800">
                {[
                  "Ride request is accepted.",
                  "Required payments are completed.",
                  "Required deposits are paid.",
                  "Verification requirements are satisfied."
                ].map((req, idx) => (
                  <div key={idx} className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{req}</span>
                  </div>
                ))}
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-1">
                <p>BhaiWay does not guarantee ride availability.</p>
                <p>Drivers retain discretion to accept or decline ride requests subject to platform rules.</p>
              </div>
            </section>

            {/* 8. ASSURED RIDE SECURITY DEPOSIT */}
            <section id="assured-deposit" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm scroll-mt-28">
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-100">
                <div className="w-9 h-9 rounded-xl bg-[#335EEA]/10 flex items-center justify-center text-[#335EEA]">
                  <DollarSign className="w-5 h-5" />
                </div>
                <h2 className="font-heading text-xl sm:text-2xl font-bold text-slate-900">
                  8. ASSURED RIDE SECURITY DEPOSIT
                </h2>
              </div>
              <p className="mb-4 text-sm text-slate-700">For Assured Rides:</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div className="p-4 rounded-xl bg-indigo-50/70 border border-indigo-100 text-center">
                  <span className="text-xs font-semibold text-indigo-700 uppercase tracking-wider block mb-1">Driver Security Deposit</span>
                  <span className="font-heading text-3xl font-extrabold text-[#335EEA]">₹50</span>
                </div>
                <div className="p-4 rounded-xl bg-indigo-50/70 border border-indigo-100 text-center">
                  <span className="text-xs font-semibold text-indigo-700 uppercase tracking-wider block mb-1">Rider Security Deposit</span>
                  <span className="font-heading text-3xl font-extrabold text-[#335EEA]">₹50</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700 space-y-1">
                <p className="font-medium">• The deposit serves as a commitment mechanism.</p>
                <p className="font-medium">• The deposit does not constitute ride fare.</p>
              </div>
            </section>

            {/* 9. ASSURED RIDE REFUND RULES */}
            <section id="assured-refunds" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm scroll-mt-28">
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-100">
                <div className="w-9 h-9 rounded-xl bg-[#335EEA]/10 flex items-center justify-center text-[#335EEA]">
                  <RefreshCw className="w-5 h-5" />
                </div>
                <h2 className="font-heading text-xl sm:text-2xl font-bold text-slate-900">
                  9. ASSURED RIDE REFUND RULES
                </h2>
              </div>

              <div className="space-y-4">
                {/* Successfully completed */}
                <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-100">
                  <h4 className="font-bold text-emerald-950 text-sm mb-2 flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600" />
                    Ride Successfully Completed
                  </h4>
                  <ul className="space-y-1 text-xs sm:text-sm text-emerald-900 pl-2">
                    <li><strong>Driver Deposit:</strong> Refunded immediately after ride completion.</li>
                    <li><strong>Rider Deposit:</strong> Refunded immediately after ride completion.</li>
                  </ul>
                </div>

                {/* No Vehicle Available */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <h4 className="font-bold text-slate-900 text-sm mb-2">No Vehicle Available</h4>
                  <p className="text-xs sm:text-sm text-slate-600 mb-1">If BhaiWay cannot facilitate an Assured Ride:</p>
                  <ul className="list-disc list-inside text-xs sm:text-sm text-slate-700 pl-1">
                    <li>Full deposit refund.</li>
                    <li>Deposit-waiver coupon for future Assured Ride.</li>
                  </ul>
                </div>

                {/* Vehicle Fully Empty */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <h4 className="font-bold text-slate-900 text-sm mb-2">Vehicle Fully Empty</h4>
                  <p className="text-xs sm:text-sm text-slate-600 mb-1">If no passengers occupy the ride:</p>
                  <ul className="list-disc list-inside text-xs sm:text-sm text-slate-700 pl-1">
                    <li>Deposit refunded.</li>
                    <li>Deposit-waiver coupon issued.</li>
                  </ul>
                </div>

                {/* Empty Seat Compensation */}
                <div className="p-4 rounded-xl bg-indigo-50/40 border border-indigo-100">
                  <h4 className="font-bold text-slate-900 text-sm mb-2">Empty Seat Compensation</h4>
                  <p className="text-xs sm:text-sm text-slate-700 mb-2">Where available seats remain unused:</p>
                  <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm text-slate-700 pl-1 mb-2">
                    <li>Security deposit refunded.</li>
                    <li>Rider may receive compensation equal to 50% of the value attributable to unused seats, subject to platform calculation and eligibility criteria.</li>
                  </ul>
                  <p className="text-xs text-indigo-900 font-semibold">
                    BhaiWay reserves final authority regarding compensation calculations.
                  </p>
                </div>
              </div>
            </section>

            {/* 10. DRIVER CANCELLATION POLICY */}
            <section id="driver-cancellation" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm scroll-mt-28">
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-100">
                <div className="w-9 h-9 rounded-xl bg-[#335EEA]/10 flex items-center justify-center text-[#335EEA]">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <h2 className="font-heading text-xl sm:text-2xl font-bold text-slate-900">
                  10. DRIVER CANCELLATION POLICY
                </h2>
              </div>
              <p className="mb-3 text-sm font-semibold text-slate-900">Where a Driver cancels a confirmed Assured Ride:</p>
              <ul className="space-y-2 mb-3 text-xs sm:text-sm text-slate-700">
                <li className="flex items-center gap-2 p-2 rounded-lg bg-rose-50/70 border border-rose-100 text-rose-900">
                  <Ban className="w-4 h-4 text-rose-600 shrink-0" />
                  <span>Driver deposit forfeited.</span>
                </li>
                <li className="flex items-center gap-2 p-2 rounded-lg bg-emerald-50/70 border border-emerald-100 text-emerald-900">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Rider receives full refund.</span>
                </li>
                <li className="flex items-center gap-2 p-2 rounded-lg bg-indigo-50/70 border border-indigo-100 text-[#335EEA]">
                  <Award className="w-4 h-4 text-[#335EEA] shrink-0" />
                  <span>Rider receives next-ride coupon.</span>
                </li>
                <li className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 border border-slate-100 text-slate-800">
                  <Scale className="w-4 h-4 text-slate-600 shrink-0" />
                  <span>Driver trust score may be reduced.</span>
                </li>
              </ul>
              <p className="text-xs text-rose-600 font-medium">
                Repeated cancellations may result in suspension.
              </p>
            </section>

            {/* 11. RIDER CANCELLATION POLICY */}
            <section id="rider-cancellation" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm scroll-mt-28">
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-100">
                <div className="w-9 h-9 rounded-xl bg-[#335EEA]/10 flex items-center justify-center text-[#335EEA]">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <h2 className="font-heading text-xl sm:text-2xl font-bold text-slate-900">
                  11. RIDER CANCELLATION POLICY
                </h2>
              </div>
              <p className="mb-3 text-sm font-semibold text-slate-900">Where a Rider cancels a confirmed Assured Ride:</p>
              <ul className="space-y-2 mb-3 text-xs sm:text-sm text-slate-700">
                <li className="flex items-center gap-2 p-2 rounded-lg bg-rose-50/70 border border-rose-100 text-rose-900">
                  <Ban className="w-4 h-4 text-rose-600 shrink-0" />
                  <span>Rider deposit forfeited.</span>
                </li>
                <li className="flex items-center gap-2 p-2 rounded-lg bg-emerald-50/70 border border-emerald-100 text-emerald-900">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Driver deposit refunded.</span>
                </li>
                <li className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 border border-slate-100 text-slate-800">
                  <Scale className="w-4 h-4 text-slate-600 shrink-0" />
                  <span>Rider trust score may be reduced.</span>
                </li>
              </ul>
              <p className="text-xs text-rose-600 font-medium">
                Repeated cancellations may result in suspension.
              </p>
            </section>

            {/* 12. PASSENGER NO-SHOW */}
            <section id="passenger-no-show" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm scroll-mt-28">
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-100">
                <div className="w-9 h-9 rounded-xl bg-[#335EEA]/10 flex items-center justify-center text-[#335EEA]">
                  <Clock className="w-5 h-5" />
                </div>
                <h2 className="font-heading text-xl sm:text-2xl font-bold text-slate-900">
                  12. PASSENGER NO-SHOW
                </h2>
              </div>
              <p className="mb-3 text-sm font-semibold text-slate-900">Where a Rider fails to appear at the agreed pickup point:</p>
              <ul className="list-disc list-inside space-y-1 mb-3 text-xs sm:text-sm text-slate-700 pl-2">
                <li>Rider deposit forfeited.</li>
                <li>Driver deposit refunded.</li>
                <li>Driver may receive no-show compensation.</li>
                <li>Rider trust score may be reduced.</li>
              </ul>
              <p className="text-xs text-slate-500 italic">
                BhaiWay may require evidence to determine no-show events.
              </p>
            </section>

            {/* 13. DRIVER NO-SHOW */}
            <section id="driver-no-show" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm scroll-mt-28">
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-100">
                <div className="w-9 h-9 rounded-xl bg-[#335EEA]/10 flex items-center justify-center text-[#335EEA]">
                  <Clock className="w-5 h-5" />
                </div>
                <h2 className="font-heading text-xl sm:text-2xl font-bold text-slate-900">
                  13. DRIVER NO-SHOW
                </h2>
              </div>
              <p className="mb-3 text-sm font-semibold text-slate-900">Where a Driver fails to appear:</p>
              <ul className="list-disc list-inside space-y-1 mb-3 text-xs sm:text-sm text-slate-700 pl-2">
                <li>Driver deposit forfeited.</li>
                <li>Rider receives full refund.</li>
                <li>Rider receives next-ride coupon.</li>
                <li>Driver trust score may be reduced.</li>
              </ul>
              <p className="text-xs text-rose-600 font-medium">
                Repeated violations may result in account suspension.
              </p>
            </section>

            {/* 14. RIDE OTP VERIFICATION */}
            <section id="otp-verification" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm scroll-mt-28">
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-100">
                <div className="w-9 h-9 rounded-xl bg-[#335EEA]/10 flex items-center justify-center text-[#335EEA]">
                  <Lock className="w-5 h-5" />
                </div>
                <h2 className="font-heading text-xl sm:text-2xl font-bold text-slate-900">
                  14. RIDE OTP VERIFICATION
                </h2>
              </div>
              <p className="mb-3 text-sm text-slate-700">Certain rides may require OTP verification before commencement.</p>
              <p className="mb-2 text-sm font-semibold text-slate-900">Users agree:</p>
              <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm text-slate-700 pl-2">
                <li>OTPs are confidential.</li>
                <li>OTP sharing with unauthorized persons is prohibited.</li>
                <li>OTP verification constitutes ride confirmation evidence.</li>
              </ul>
            </section>

            {/* 15. DRIVER OBLIGATIONS */}
            <section id="driver-obligations" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm scroll-mt-28">
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-100">
                <div className="w-9 h-9 rounded-xl bg-[#335EEA]/10 flex items-center justify-center text-[#335EEA]">
                  <Car className="w-5 h-5" />
                </div>
                <h2 className="font-heading text-xl sm:text-2xl font-bold text-slate-900">
                  15. DRIVER OBLIGATIONS
                </h2>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-emerald-800 text-sm mb-2">Drivers must:</h4>
                  <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm text-slate-700 pl-2">
                    <li>Maintain valid documentation.</li>
                    <li>Operate lawful vehicles.</li>
                    <li>Follow traffic regulations.</li>
                    <li>Provide accurate ride details.</li>
                    <li>Treat riders respectfully.</li>
                  </ul>
                </div>

                <div className="pt-3 border-t border-slate-100">
                  <h4 className="font-semibold text-rose-700 text-sm mb-2">Drivers shall not:</h4>
                  <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm text-slate-700 pl-2">
                    <li>Operate under the influence of alcohol or drugs.</li>
                    <li>Use fake documents.</li>
                    <li>Demand unauthorized payments.</li>
                    <li>Harass users.</li>
                    <li>Engage in dangerous driving.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 16. RIDER OBLIGATIONS */}
            <section id="rider-obligations" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm scroll-mt-28">
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-100">
                <div className="w-9 h-9 rounded-xl bg-[#335EEA]/10 flex items-center justify-center text-[#335EEA]">
                  <UserCheck className="w-5 h-5" />
                </div>
                <h2 className="font-heading text-xl sm:text-2xl font-bold text-slate-900">
                  16. RIDER OBLIGATIONS
                </h2>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-emerald-800 text-sm mb-2">Riders must:</h4>
                  <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm text-slate-700 pl-2">
                    <li>Provide accurate booking information.</li>
                    <li>Arrive on time.</li>
                    <li>Respect drivers and fellow passengers.</li>
                    <li>Follow vehicle safety instructions.</li>
                  </ul>
                </div>

                <div className="pt-3 border-t border-slate-100">
                  <h4 className="font-semibold text-rose-700 text-sm mb-2">Riders shall not:</h4>
                  <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm text-slate-700 pl-2">
                    <li>Carry prohibited items.</li>
                    <li>Harass others.</li>
                    <li>Damage vehicles.</li>
                    <li>Misuse safety features.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 17. WOMEN-ONLY RIDES */}
            <section id="women-only" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm scroll-mt-28">
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-100">
                <div className="w-9 h-9 rounded-xl bg-[#335EEA]/10 flex items-center justify-center text-[#335EEA]">
                  <Users className="w-5 h-5" />
                </div>
                <h2 className="font-heading text-xl sm:text-2xl font-bold text-slate-900">
                  17. WOMEN-ONLY RIDES
                </h2>
              </div>
              <p className="text-sm mb-3">
                Women-only rides may be offered for safety and comfort.
              </p>
              <p className="text-sm font-semibold text-slate-900 mb-2">BhaiWay reserves the right to:</p>
              <ul className="list-disc list-inside space-y-1 mb-3 text-xs sm:text-sm text-slate-700 pl-2">
                <li>Verify eligibility.</li>
                <li>Restrict participation.</li>
                <li>Investigate misuse.</li>
              </ul>
              <p className="text-xs text-rose-600 font-medium">
                False participation claims may result in suspension.
              </p>
            </section>

            {/* 18. WALLET TERMS */}
            <section id="wallet-terms" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm scroll-mt-28">
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-100">
                <div className="w-9 h-9 rounded-xl bg-[#335EEA]/10 flex items-center justify-center text-[#335EEA]">
                  <CreditCard className="w-5 h-5" />
                </div>
                <h2 className="font-heading text-xl sm:text-2xl font-bold text-slate-900">
                  18. WALLET TERMS
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <h4 className="font-bold text-slate-900 text-sm mb-2">Driver Wallet</h4>
                  <p className="text-xs text-slate-600 mb-2">Drivers may:</p>
                  <ul className="list-disc list-inside space-y-1 text-xs text-slate-700 pl-1">
                    <li>Add funds.</li>
                    <li>Receive earnings.</li>
                    <li>Withdraw eligible balances to registered bank accounts.</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <h4 className="font-bold text-slate-900 text-sm mb-2">Rider Wallet</h4>
                  <p className="text-xs text-slate-600 mb-2">Riders may:</p>
                  <ul className="list-disc list-inside space-y-1 text-xs text-slate-700 pl-1 mb-2">
                    <li>Add funds.</li>
                    <li>Use wallet balances for payments.</li>
                  </ul>
                  <p className="text-xs text-slate-500 italic">
                    Riders may not withdraw wallet balances unless required by law.
                  </p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700 space-y-1">
                <p className="font-semibold text-slate-900">Wallet balances:</p>
                <ul className="list-disc list-inside space-y-1 pl-1">
                  <li>Are not bank deposits.</li>
                  <li>Do not earn interest.</li>
                  <li>Are subject to platform restrictions.</li>
                </ul>
              </div>
            </section>

            {/* 19. TRUST SCORE SYSTEM */}
            <section id="trust-score" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm scroll-mt-28">
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-100">
                <div className="w-9 h-9 rounded-xl bg-[#335EEA]/10 flex items-center justify-center text-[#335EEA]">
                  <Scale className="w-5 h-5" />
                </div>
                <h2 className="font-heading text-xl sm:text-2xl font-bold text-slate-900">
                  19. TRUST SCORE SYSTEM
                </h2>
              </div>
              <p className="mb-3 text-sm">BhaiWay may calculate trust scores using:</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-4 text-xs text-slate-800">
                {["Verification status", "Ride completion history", "Ratings", "Reviews", "Safety incidents", "Cancellations", "No-show events"].map((item, idx) => (
                  <div key={idx} className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">• {item}</div>
                ))}
              </div>
              <p className="text-sm font-semibold text-slate-900 mb-2">Trust scores may affect:</p>
              <ul className="list-disc list-inside space-y-1 mb-3 text-xs sm:text-sm text-slate-700 pl-2">
                <li>Ride visibility</li>
                <li>Booking eligibility</li>
                <li>Platform privileges</li>
              </ul>
              <p className="text-xs text-slate-500 italic">
                Trust score algorithms remain proprietary.
              </p>
            </section>

            {/* 20. RATINGS & REVIEWS */}
            <section id="ratings-reviews" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm scroll-mt-28">
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-100">
                <div className="w-9 h-9 rounded-xl bg-[#335EEA]/10 flex items-center justify-center text-[#335EEA]">
                  <Award className="w-5 h-5" />
                </div>
                <h2 className="font-heading text-xl sm:text-2xl font-bold text-slate-900">
                  20. RATINGS & REVIEWS
                </h2>
              </div>
              <p className="text-sm mb-3">Users may submit ratings and reviews.</p>
              <p className="text-sm font-semibold text-slate-900 mb-2">Reviews must be:</p>
              <div className="flex flex-wrap gap-2 mb-4 text-xs font-semibold">
                {["Honest", "Relevant", "Non-abusive"].map((crit, idx) => (
                  <span key={idx} className="px-3 py-1.5 bg-emerald-50 text-emerald-800 rounded-lg border border-emerald-100">
                    ✓ {crit}
                  </span>
                ))}
              </div>
              <p className="text-sm font-semibold text-rose-800 mb-2">Prohibited content includes:</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-3 text-xs text-rose-900">
                {["Threats", "Harassment", "Defamation", "Discriminatory remarks"].map((proh, idx) => (
                  <div key={idx} className="p-2 rounded-lg bg-rose-50 border border-rose-100 text-center">
                    {proh}
                  </div>
                ))}
              </div>
              <p className="text-xs text-slate-500">
                BhaiWay may remove inappropriate reviews.
              </p>
            </section>

            {/* 21. SAFETY FEATURES */}
            <section id="safety-features" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm scroll-mt-28">
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-100">
                <div className="w-9 h-9 rounded-xl bg-[#335EEA]/10 flex items-center justify-center text-[#335EEA]">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <h2 className="font-heading text-xl sm:text-2xl font-bold text-slate-900">
                  21. SAFETY FEATURES
                </h2>
              </div>
              <p className="mb-3 text-sm text-slate-600">BhaiWay may provide:</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-4 text-xs font-medium text-slate-800">
                {["Live Tracking", "SOS Assistance", "Emergency Contacts", "Incident Reporting", "Trust Scores"].map((sf, idx) => (
                  <div key={idx} className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">• {sf}</div>
                ))}
              </div>
              <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200/60 text-xs text-amber-950 space-y-1">
                <p className="font-semibold">Safety Notice:</p>
                <p>These tools enhance safety but do not guarantee safety.</p>
                <p>Users remain responsible for exercising personal judgment.</p>
              </div>
            </section>

            {/* 22. SOS FEATURE */}
            <section id="sos-feature" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm scroll-mt-28">
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-100">
                <div className="w-9 h-9 rounded-xl bg-[#335EEA]/10 flex items-center justify-center text-[#335EEA]">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <h2 className="font-heading text-xl sm:text-2xl font-bold text-slate-900">
                  22. SOS FEATURE
                </h2>
              </div>
              <p className="mb-3 text-sm font-semibold text-slate-900">Upon SOS activation:</p>
              <ul className="list-disc list-inside space-y-1 mb-4 text-xs sm:text-sm text-slate-700 pl-2">
                <li>Emergency contacts may be notified.</li>
                <li>BhaiWay support may be alerted.</li>
                <li>Live location may be shared.</li>
              </ul>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-1 mb-3">
                <p>BhaiWay does not automatically contact emergency services.</p>
                <p>Emergency calling options may be displayed to the user.</p>
              </div>
              <p className="text-xs text-rose-600 font-medium">
                False SOS reports may result in penalties.
              </p>
            </section>

            {/* 23. PROHIBITED ACTIVITIES */}
            <section id="prohibited-activities" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm scroll-mt-28">
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-100">
                <div className="w-9 h-9 rounded-xl bg-[#335EEA]/10 flex items-center justify-center text-[#335EEA]">
                  <Ban className="w-5 h-5" />
                </div>
                <h2 className="font-heading text-xl sm:text-2xl font-bold text-slate-900">
                  23. PROHIBITED ACTIVITIES
                </h2>
              </div>
              <p className="mb-3 text-sm font-semibold text-slate-900">Users shall not:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-800">
                {[
                  "Commit fraud.",
                  "Upload false documents.",
                  "Use stolen identities.",
                  "Engage in illegal activities.",
                  "Transport prohibited goods.",
                  "Threaten or harass others.",
                  "Manipulate ratings.",
                  "Misuse support systems."
                ].map((act, idx) => (
                  <div key={idx} className="p-2.5 rounded-lg bg-rose-50/50 border border-rose-100 flex items-center gap-2 text-rose-950">
                    <Ban className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                    <span>{act}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* 24. ACCOUNT SUSPENSION */}
            <section id="account-suspension" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm scroll-mt-28">
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-100">
                <div className="w-9 h-9 rounded-xl bg-[#335EEA]/10 flex items-center justify-center text-[#335EEA]">
                  <AlertCircle className="w-5 h-5" />
                </div>
                <h2 className="font-heading text-xl sm:text-2xl font-bold text-slate-900">
                  24. ACCOUNT SUSPENSION
                </h2>
              </div>
              <p className="mb-3 text-sm font-semibold text-slate-900">BhaiWay may suspend or terminate accounts for:</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-4 text-xs text-slate-800">
                {["Fraud", "Safety violations", "Fake verification documents", "Repeated cancellations", "Abuse", "Illegal conduct", "Trust score violations"].map((reason, idx) => (
                  <div key={idx} className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">• {reason}</div>
                ))}
              </div>
              <p className="text-xs text-slate-500 italic">
                Suspension decisions are final unless otherwise reviewed.
              </p>
            </section>

            {/* 25. DISPUTE RESOLUTION */}
            <section id="dispute-resolution" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm scroll-mt-28">
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-100">
                <div className="w-9 h-9 rounded-xl bg-[#335EEA]/10 flex items-center justify-center text-[#335EEA]">
                  <Scale className="w-5 h-5" />
                </div>
                <h2 className="font-heading text-xl sm:text-2xl font-bold text-slate-900">
                  25. DISPUTE RESOLUTION
                </h2>
              </div>
              <div className="space-y-3 mb-4">
                {[
                  { step: "Step 1", title: "Internal Complaint Resolution", desc: "Attempt friendly, prompt resolution through our internal grievance channels." },
                  { step: "Step 2", title: "Arbitration in Noida, Uttar Pradesh", desc: "Any unsettled disputes shall be submitted to binding arbitration located in Noida." },
                  { step: "Step 3", title: "Courts of competent jurisdiction in Noida", desc: "Exclusive jurisdiction lies with competent courts located in Noida, Uttar Pradesh." },
                ].map((s, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-3">
                    <span className="px-2.5 py-1 rounded bg-indigo-50 text-[#335EEA] font-bold text-xs shrink-0">{s.step}</span>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">{s.title}</h4>
                      <p className="text-xs text-slate-600 mt-0.5">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-slate-700 font-medium">
                Users agree to attempt resolution before litigation.
              </p>
            </section>

            {/* 26. LIMITATION OF LIABILITY */}
            <section id="limitation-liability" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm scroll-mt-28">
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-100">
                <div className="w-9 h-9 rounded-xl bg-[#335EEA]/10 flex items-center justify-center text-[#335EEA]">
                  <Shield className="w-5 h-5" />
                </div>
                <h2 className="font-heading text-xl sm:text-2xl font-bold text-slate-900">
                  26. LIMITATION OF LIABILITY
                </h2>
              </div>
              <p className="mb-2 text-sm">To the maximum extent permitted by law:</p>
              <p className="mb-3 text-sm font-semibold text-slate-900">BhaiWay shall not be liable for:</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4 text-xs text-slate-700">
                {["User misconduct", "Traffic accidents", "Personal injury", "Vehicle damage", "Lost property", "Delays", "Route deviations", "User disputes"].map((item, idx) => (
                  <div key={idx} className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-center">
                    {item}
                  </div>
                ))}
              </div>
              <div className="p-3.5 rounded-xl bg-indigo-50/70 border border-indigo-100 text-xs sm:text-sm font-semibold text-indigo-950">
                BhaiWay acts solely as a technology intermediary.
              </div>
            </section>

            {/* 27. INDEMNIFICATION */}
            <section id="indemnification" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm scroll-mt-28">
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-100">
                <div className="w-9 h-9 rounded-xl bg-[#335EEA]/10 flex items-center justify-center text-[#335EEA]">
                  <FileText className="w-5 h-5" />
                </div>
                <h2 className="font-heading text-xl sm:text-2xl font-bold text-slate-900">
                  27. INDEMNIFICATION
                </h2>
              </div>
              <p className="mb-3 text-sm font-semibold text-slate-900">
                Users agree to indemnify BhaiWay against losses arising from:
              </p>
              <ul className="list-disc list-inside space-y-1.5 text-xs sm:text-sm text-slate-700 pl-2">
                <li>Violation of these Terms.</li>
                <li>Fraudulent conduct.</li>
                <li>Illegal activities.</li>
                <li>Third-party claims arising from user actions.</li>
              </ul>
            </section>

            {/* 28. GOVERNING LAW */}
            <section id="governing-law" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm scroll-mt-28">
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-100">
                <div className="w-9 h-9 rounded-xl bg-[#335EEA]/10 flex items-center justify-center text-[#335EEA]">
                  <Globe className="w-5 h-5" />
                </div>
                <h2 className="font-heading text-xl sm:text-2xl font-bold text-slate-900">
                  28. GOVERNING LAW
                </h2>
              </div>
              <p className="text-sm text-slate-800 mb-2">
                These Terms shall be governed by the laws of India.
              </p>
              <p className="text-sm font-semibold text-slate-900">
                Jurisdiction: Noida, Uttar Pradesh.
              </p>
            </section>

            {/* 29. CONTACT INFORMATION */}
            <section id="contact-info" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm scroll-mt-28">
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-100">
                <div className="w-9 h-9 rounded-xl bg-[#335EEA]/10 flex items-center justify-center text-[#335EEA]">
                  <Mail className="w-5 h-5" />
                </div>
                <h2 className="font-heading text-xl sm:text-2xl font-bold text-slate-900">
                  29. CONTACT INFORMATION
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
                By using BhaiWay, you acknowledge and agree to these Terms & Conditions.
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
              {onNavigateToPrivacy && (
                <button
                  onClick={onNavigateToPrivacy}
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-slate-700 hover:text-[#335EEA] bg-white border border-slate-200 hover:border-slate-300 rounded-full shadow-sm transition-all"
                >
                  <Shield className="w-4 h-4 text-[#335EEA]" />
                  View Privacy Policy
                </button>
              )}
            </div>

          </main>
        </div>
      </div>
    </div>
  );
}

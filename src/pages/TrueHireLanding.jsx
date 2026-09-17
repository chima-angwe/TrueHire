import React, { useState, useEffect } from "react";
import {
  CheckCircleOutline,
  AssignmentOutlined,
  FactCheckOutlined,
  DescriptionOutlined,
  CheckCircle,
  GroupsOutlined,
  TrackChangesOutlined,
  VerifiedUserOutlined,
} from "@mui/icons-material";

// Dashboard mockup — mirrors the actual product's Cases screen, not an invented UI.
const DashboardMockup = () => {
  const rows = [
    { id: "TR-1004", candidate: "Hauwa Bello", client: "Paystack", status: "Pending", color: "gray" },
    { id: "TR-1003", candidate: "Chukwuemeka Nwosu", client: "Sterling Bank", status: "In Progress", color: "blue" },
    { id: "TR-1002", candidate: "Funmilayo Adeyemi", client: "Paystack", status: "Awaiting Review", color: "amber" },
    { id: "TR-1001", candidate: "Adewale Ogunleye", client: "Sterling Bank", status: "Completed", color: "green" },
  ];
  const colorMap = {
    gray: "bg-gray-100 text-gray-600",
    blue: "bg-blue-100 text-blue-700",
    amber: "bg-amber-100 text-amber-700",
    green: "bg-emerald-100 text-emerald-700",
  };
  return (
    <div className="bg-white rounded-xl sm:rounded-2xl shadow-2xl border-2 border-gray-200 overflow-hidden">
      <div className="bg-gradient-to-r from-gray-50 to-white border-b border-gray-200 px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 flex items-center justify-between">
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-md sm:rounded-lg" style={{ backgroundColor: "#2791C1" }}></div>
          <span className="font-semibold text-gray-900 text-xs sm:text-sm md:text-base">Cases</span>
        </div>
        <div className="flex gap-1.5 sm:gap-2">
          <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full bg-red-400"></div>
          <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full bg-yellow-400"></div>
          <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full bg-green-400"></div>
        </div>
      </div>
      <div className="p-3 sm:p-4 md:p-6 bg-gradient-to-br from-white to-gray-50">
        <div className="grid grid-cols-4 gap-2 text-[10px] sm:text-xs text-gray-400 mb-2 px-2 uppercase tracking-wide">
          <span>Case</span>
          <span>Candidate</span>
          <span className="hidden sm:block">Client</span>
          <span className="text-right">Status</span>
        </div>
        <div className="space-y-1.5 sm:space-y-2">
          {rows.map((r) => (
            <div key={r.id} className="grid grid-cols-4 gap-2 items-center bg-white rounded-lg px-2 sm:px-3 py-2 sm:py-2.5 border border-gray-100">
              <span className="text-[11px] sm:text-xs font-medium" style={{ color: "#2791C1" }}>{r.id}</span>
              <span className="text-[11px] sm:text-xs text-gray-800 truncate">{r.candidate}</span>
              <span className="text-[11px] sm:text-xs text-gray-500 hidden sm:block truncate">{r.client}</span>
              <span className={`text-[9px] sm:text-[10px] font-medium px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full text-center ${colorMap[r.color]}`}>
                {r.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const TrueHireLanding = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    try {
      const storedData = localStorage.getItem("trueHireRegistration");
      if (storedData) {
        setFormData(JSON.parse(storedData));
        setIsSubmitted(true);
      }
    } catch (error) {
      console.error("Error reading from localStorage:", error);
    }
  }, []);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.company || !formData.role) {
      setErrorMessage("Please fill in all fields");
      setTimeout(() => setErrorMessage(""), 3000);
      return;
    }
    setIsLoading(true);
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 8000);
    try {
      const response = await fetch("https://truehire-backend.onrender.com/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
        signal: controller.signal,
      });
      clearTimeout(timeoutId);
      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || "Registration failed");
      }
      const data = await response.json();
      if (data.success) {
        localStorage.setItem("trueHireRegistration", JSON.stringify(formData));
        setIsSubmitted(true);
      } else {
        setErrorMessage(data.message || "Something went wrong. Please try again.");
        setTimeout(() => setErrorMessage(""), 3000);
      }
    } catch (error) {
      let errorMsg = "Unable to connect to server. Please try again later.";
      if (error.name === "AbortError")
        errorMsg = "Request timeout. Please check your connection and try again.";
      setErrorMessage(errorMsg);
      setTimeout(() => setErrorMessage(""), 3000);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClearStorage = () => {
    localStorage.removeItem("trueHireRegistration");
    setIsSubmitted(false);
    setFormData({ name: "", email: "", company: "", role: "" });
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-5">
          <div className="font-bold text-lg sm:text-xl md:text-2xl text-gray-900">TrueHire®</div>
        </div>
      </header>

      {/* HERO */}
      <section className="pt-24 sm:pt-32 md:pt-40 pb-12 sm:pb-16 md:pb-24 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4 sm:mb-6">
                Operational Infrastructure for Background Verification Companies
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8">
                Manage verification requests from intake to final report —
                assignment, tracking, review, and reporting, in one system.
              </p>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center lg:items-start gap-3 sm:gap-4 mb-6 sm:mb-8">
                <button
                  onClick={() => document.getElementById("hero-form")?.scrollIntoView({ behavior: "smooth" })}
                  className="w-full sm:w-auto bg-black text-white px-6 sm:px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-all shadow-lg text-sm sm:text-base"
                >
                  Join the Pilot Waitlist
                </button>
                <button
                  onClick={() => document.querySelector(".features-section")?.scrollIntoView({ behavior: "smooth" })}
                  className="w-full sm:w-auto text-gray-900 font-medium hover:text-gray-600 transition-all text-sm sm:text-base text-center"
                >
                  Learn More
                </button>
              </div>
              <p className="text-xs sm:text-sm text-gray-500">
                Currently piloting with early verification-company partners.
              </p>
            </div>
            <div className="block mt-6 lg:mt-0">
              <div className="transform hover:scale-105 transition-all duration-500" style={{ perspective: "1000px" }}>
                <DashboardMockup />
              </div>
            </div>
          </div>

          {/* FORM */}
          <div id="hero-form" className="max-w-2xl mx-auto bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 md:p-10 mt-12 sm:mt-16 md:mt-24 border border-gray-200">
            {!isSubmitted ? (
              <>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 text-center">Join the Waitlist</h3>
                {errorMessage && (
                  <div className="mb-6 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-center text-sm">
                    {errorMessage}
                  </div>
                )}
                <div className="space-y-4 sm:space-y-5">
                  {[
                    { name: "name", type: "text", placeholder: "Full Name" },
                    { name: "email", type: "email", placeholder: "Work Email" },
                    { name: "company", type: "text", placeholder: "Company Name" },
                  ].map((field) => (
                    <input
                      key={field.name}
                      type={field.type}
                      name={field.name}
                      placeholder={field.placeholder}
                      value={formData[field.name]}
                      onChange={handleInputChange}
                      disabled={isLoading}
                      className="w-full px-4 sm:px-6 py-3 sm:py-4 border-2 border-gray-200 rounded-xl focus:ring-2 outline-none bg-white transition-all text-base sm:text-lg disabled:bg-gray-100"
                      onFocus={(e) => (e.target.style.borderColor = "#2791C1")}
                      onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
                    />
                  ))}
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    disabled={isLoading}
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 border-2 border-gray-200 rounded-xl focus:ring-2 outline-none bg-white transition-all text-base sm:text-lg disabled:bg-gray-100"
                    onFocus={(e) => (e.target.style.borderColor = "#2791C1")}
                    onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
                  >
                    <option value="">Select Your Role</option>
                    <option value="operations">Operations Manager</option>
                    <option value="supervisor">Supervisor / QA Lead</option>
                    <option value="founder">Founder / Executive</option>
                    <option value="other">Other</option>
                  </select>
                  <button
                    onClick={handleSubmit}
                    disabled={isLoading}
                    className="w-full bg-black text-white py-4 sm:py-5 rounded-xl font-semibold text-base sm:text-lg hover:bg-gray-800 transition-all disabled:bg-gray-600 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isLoading ? (
                      <>
                        <span className="inline-block w-5 h-5 border-3 border-white border-t-transparent rounded-full animate-spin"></span>
                        Registering...
                      </>
                    ) : (
                      "Join the Waitlist"
                    )}
                  </button>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 mt-5 text-center">
                  We're working closely with a small number of pilot partners first.
                </p>
              </>
            ) : (
              <div className="text-center py-8 sm:py-12">
                <CheckCircle style={{ fontSize: "4rem" }} className="text-black sm:text-7xl md:text-8xl mx-auto mb-6" />
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">You're on the list!</h3>
                <p className="text-lg sm:text-xl text-gray-600 mb-2">Thanks for your interest. We'll be in touch 🖤.</p>
                <p className="text-sm text-gray-500 mb-6">
                  Registered as: <strong className="break-all">{formData.email}</strong>
                </p>
                <button onClick={handleClearStorage} className="text-sm text-gray-500 hover:text-gray-700 underline transition-colors">
                  Not you? Clear and try again
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-black leading-tight px-4">
              Verification Work Doesn't Run Itself
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed px-4">
              Requests get assigned, tracked, verified, and reviewed — often
              across email, spreadsheets, and WhatsApp, with no single place
              to see where anything actually stands.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-12 sm:mt-20">
            {[
              {
                Icon: TrackChangesOutlined,
                title: "Hard to see case status at a glance",
              },
              {
                Icon: GroupsOutlined,
                title: "Assignment and coordination happen manually",
              },
              {
                Icon: FactCheckOutlined,
                title: "Review and sign-off can get inconsistent at scale",
              },
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 text-center hover:shadow-lg transition-all border-2 border-gray-100">
                <div className="flex justify-center mb-4 sm:mb-6">
                  <item.Icon style={{ fontSize: "3rem", color: "#2791C1" }} className="sm:text-5xl md:text-6xl" />
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-black">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features-section py-12 sm:py-16 md:py-24 px-4 sm:px-6" style={{ background: "linear-gradient(to bottom, #e8f5fa, white)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 px-4">
              One System, Start to Finish
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 px-4">
              Everything a case needs, from the moment it's requested to the
              moment the report goes out.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16 md:mb-20">
            {[
              {
                Icon: AssignmentOutlined,
                title: "Case Intake & Assignment",
                desc: "Requests come in and get assigned to the right person, with workload visible at a glance.",
              },
              {
                Icon: TrackChangesOutlined,
                title: "Status Tracking",
                desc: "See exactly which cases are pending, in progress, awaiting review, or complete.",
              },
              {
                Icon: VerifiedUserOutlined,
                title: "Supervisor Review",
                desc: "A built-in second-level approval step before any report goes out.",
              },
              {
                Icon: DescriptionOutlined,
                title: "Report Generation",
                desc: "Findings compile into a clean, consistent report once a case is approved.",
              },
            ].map((item, i) => (
              <div key={i} className="text-center group">
                <div className="mb-3 sm:mb-4 md:mb-6 transform group-hover:scale-110 transition-transform flex justify-center">
                  <item.Icon style={{ fontSize: "2rem", color: "#2791C1" }} className="sm:text-4xl md:text-5xl" />
                </div>
                <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-900 mb-2 sm:mb-3 px-2">{item.title}</h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-600 px-2">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="shadow-2xl border-2 border-blue-100 rounded-xl sm:rounded-2xl overflow-hidden">
            <DashboardMockup />
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-12 sm:mb-16 md:mb-20 px-4">
            How It Works
          </h2>
          <div className="space-y-4 sm:space-y-6">
            {[
              {
                step: 1,
                title: "A Request Comes In",
                desc: "A candidate is submitted for verification — the checks required, client, and due date are logged as a case.",
              },
              {
                step: 2,
                title: "Assigned, Verified, Reviewed",
                desc: "Operations assigns the case, the verifier records findings, and a supervisor reviews before approval.",
              },
              {
                step: 3,
                title: "Report Delivered",
                desc: "Once approved, a clean summary report is generated for the client — the case is done.",
              },
            ].map((item, i) => (
              <div key={i} className="rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 hover:shadow-lg transition-all bg-white border-2 border-gray-200">
                <div
                  className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-white rounded-xl sm:rounded-2xl flex items-center justify-center font-bold text-lg sm:text-xl md:text-2xl flex-shrink-0 hover:scale-110 transition-transform"
                  style={{ background: "#2791C1" }}
                >
                  {item.step}
                </div>
                <div className="flex-1">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-1 sm:mb-2">{item.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY VERIFICATION COMPANIES */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6" style={{ background: "linear-gradient(to bottom, #f9fafb, #e8f5fa)" }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-12 sm:mb-16 md:mb-20 px-4">
            Built for How Verification Operations Actually Run
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
            {[
              {
                Icon: TrackChangesOutlined,
                title: "Visibility Into Every Case",
                desc: "No more piecing status together across email threads and spreadsheets — see everything in one place.",
              },
              {
                Icon: CheckCircleOutline,
                title: "Consistent Review Before Reports Go Out",
                desc: "A built-in supervisor approval step, applied the same way every time.",
              },
              {
                Icon: GroupsOutlined,
                title: "Less Manual Coordination",
                desc: "Assignment and tracking live in one system, instead of scattered across tools.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 text-center shadow-xl hover:shadow-2xl transition-all border-2 border-blue-100 group">
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto mb-6 sm:mb-8 group-hover:scale-110 transition-transform">
                  <item.Icon style={{ fontSize: "1.75rem", color: "#2791C1" }} className="sm:text-4xl" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">{item.title}</h3>
                <p className="text-sm sm:text-base text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center text-white p-6 sm:p-8 md:p-12 shadow-xl rounded-xl sm:rounded-2xl" style={{ background: "#000", border: "5px dashed white" }}>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold mb-3 sm:mb-4">
              Building With a Small Group of Verification Companies
            </p>
            <p className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8" style={{ color: "#d4ebf5" }}>
              Currently piloting — reach out if you'd like to be one of the first to try it.
            </p>
            <button
              onClick={() => document.getElementById("hero-form")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-white text-black px-8 sm:px-10 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-gray-100 transition-all inline-block"
            >
              Join the Waitlist
            </button>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-400 py-8 sm:py-12 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="font-bold text-xl sm:text-2xl text-white mb-4">TrueHire®</div>
          <p className="text-xs sm:text-sm mb-6">Operational infrastructure for background verification companies.</p>
          <div className="border-t border-gray-800 pt-6">
            <p className="text-xs">TrueHire © 2026. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <style>{`
        html { scroll-behavior: smooth; }
        @keyframes spin { to { transform: rotate(360deg); } }
        .animate-spin { animation: spin 1s linear infinite; }
        * { word-wrap: break-word; }
      `}</style>
    </div>
  );
};

export default TrueHireLanding;
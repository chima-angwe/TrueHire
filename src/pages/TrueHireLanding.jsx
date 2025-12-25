import React, { useState, useEffect } from "react";
import {
  FingerprintOutlined,
  CheckCircleOutline,
  PersonSearchOutlined,
  BarChartOutlined,
  TrendingUpOutlined,
  AccessTimeOutlined,
  VerifiedUserOutlined,
  CheckCircle,
  LockOpen,
} from "@mui/icons-material";

// Dashboard Mockup Component - Fully Responsive
const DashboardMockup = () => (
  <div className="bg-white rounded-xl sm:rounded-2xl shadow-2xl border-2 border-gray-200 overflow-hidden">
    <div className="bg-gradient-to-r from-gray-50 to-white border-b border-gray-200 px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 flex items-center justify-between">
      <div className="flex items-center gap-2 sm:gap-3">
        <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-md sm:rounded-lg"></div>
        <span className="font-semibold text-gray-900 text-xs sm:text-sm md:text-base">
          Candidate Report
        </span>
      </div>
      <div className="flex gap-1.5 sm:gap-2">
        <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full bg-red-400"></div>
        <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full bg-yellow-400"></div>
        <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full bg-green-400"></div>
      </div>
    </div>
    <div className="p-3 sm:p-4 md:p-6 bg-gradient-to-br from-white to-gray-50">
      <div className="flex items-center gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-5 md:mb-6">
        <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base md:text-xl flex-shrink-0">
          JD
        </div>
        <div>
          <h3 className="font-bold text-sm sm:text-base md:text-lg text-gray-900">
            Jane Doe
          </h3>
          <p className="text-xs sm:text-sm text-gray-500">
            Senior Product Manager
          </p>
        </div>
      </div>
      <div className="bg-white rounded-lg sm:rounded-xl shadow-lg p-3 sm:p-4 md:p-6 mb-4 sm:mb-5 md:mb-6 border border-gray-100">
        <h4 className="font-semibold text-gray-700 text-xs sm:text-sm uppercase tracking-wide mb-3 sm:mb-4">
          Overall Integrity Score
        </h4>
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 flex-shrink-0">
            <svg className="transform -rotate-90 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32">
              <circle
                cx="48"
                cy="48"
                r="42"
                stroke="#e5e7eb"
                strokeWidth="6"
                fill="none"
                className="sm:hidden"
              />
              <circle
                cx="48"
                cy="48"
                r="42"
                stroke="#2791C1"
                strokeWidth="6"
                fill="none"
                strokeDasharray="263.89"
                strokeDashoffset="26.389"
                strokeLinecap="round"
                className="sm:hidden"
              />
              <circle
                cx="56"
                cy="56"
                r="49"
                stroke="#e5e7eb"
                strokeWidth="7"
                fill="none"
                className="hidden sm:block md:hidden"
              />
              <circle
                cx="56"
                cy="56"
                r="49"
                stroke="#2791C1"
                strokeWidth="7"
                fill="none"
                strokeDasharray="307.88"
                strokeDashoffset="30.788"
                strokeLinecap="round"
                className="hidden sm:block md:hidden"
              />
              <circle
                cx="64"
                cy="64"
                r="56"
                stroke="#e5e7eb"
                strokeWidth="8"
                fill="none"
                className="hidden md:block"
              />
              <circle
                cx="64"
                cy="64"
                r="56"
                stroke="#2791C1"
                strokeWidth="8"
                fill="none"
                strokeDasharray="351.86"
                strokeDashoffset="35.186"
                strokeLinecap="round"
                className="hidden md:block"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-2xl sm:text-2xl md:text-3xl font-bold text-gray-900">
                92%
              </span>
              <span className="text-xs text-gray-500">High</span>
            </div>
          </div>
          <div className="flex-1 space-y-1.5 sm:space-y-2 w-full sm:w-auto">
            <div className="flex items-center gap-2">
              <CheckCircleOutline
                style={{ fontSize: "1rem" }}
                className="text-green-500 sm:text-lg"
              />
              <span className="text-xs sm:text-sm text-gray-700">
                Resume verified
              </span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircleOutline
                style={{ fontSize: "1rem" }}
                className="text-green-500 sm:text-lg"
              />
              <span className="text-xs sm:text-sm text-gray-700">
                References validated
              </span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircleOutline
                style={{ fontSize: "1rem" }}
                className="text-yellow-500 sm:text-lg"
              />
              <span className="text-xs sm:text-sm text-gray-700">
                AI assistance detected
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2 sm:gap-3">
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-md sm:rounded-lg p-2 sm:p-3 border border-green-200">
          <div className="flex items-center gap-1 sm:gap-2 mb-1 sm:mb-2">
            <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
              <CheckCircleOutline
                style={{ fontSize: "0.7rem" }}
                className="text-white sm:text-xs md:text-sm"
              />
            </div>
            <span className="text-xs font-semibold text-green-900 hidden sm:inline">
              Resume
            </span>
            <span className="text-xs font-semibold text-green-900 sm:hidden">
              Res.
            </span>
          </div>
          <p className="text-lg sm:text-xl md:text-2xl font-bold text-green-700">
            98%
          </p>
        </div>
        <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-md sm:rounded-lg p-2 sm:p-3 border border-yellow-200">
          <div className="flex items-center gap-1 sm:gap-2 mb-1 sm:mb-2">
            <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white text-xs font-bold">!</span>
            </div>
            <span className="text-xs font-semibold text-yellow-900 hidden sm:inline">
              Interview
            </span>
            <span className="text-xs font-semibold text-yellow-900 sm:hidden">
              Int.
            </span>
          </div>
          <p className="text-lg sm:text-xl md:text-2xl font-bold text-yellow-700">
            85%
          </p>
        </div>
        <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-md sm:rounded-lg p-2 sm:p-3 border border-green-200">
          <div className="flex items-center gap-1 sm:gap-2 mb-1 sm:mb-2">
            <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
              <CheckCircleOutline
                style={{ fontSize: "0.7rem" }}
                className="text-white sm:text-xs md:text-sm"
              />
            </div>
            <span className="text-xs font-semibold text-green-900 hidden sm:inline">
              Reference
            </span>
            <span className="text-xs font-semibold text-green-900 sm:hidden">
              Ref.
            </span>
          </div>
          <p className="text-lg sm:text-xl md:text-2xl font-bold text-green-700">
            94%
          </p>
        </div>
      </div>
    </div>
  </div>
);

const FeatureMockup = ({ type }) => {
  if (type === "confidence") {
    return (
      <div className="bg-white rounded-lg sm:rounded-xl shadow-xl border border-gray-200 p-4 sm:p-5 md:p-6">
        <div className="flex items-center justify-between mb-3 sm:mb-4">
          <h4 className="font-bold text-gray-900 text-sm sm:text-base md:text-lg">
            Confidence Analysis
          </h4>
          <BarChartOutlined
            className="text-blue-500"
            style={{ fontSize: "1.25rem" }}
          />
        </div>
        <div className="space-y-2 sm:space-y-3">
          {[
            { label: "Resume Authenticity", value: 98, color: "green" },
            { label: "Experience Verification", value: 95, color: "green" },
            { label: "Interview Consistency", value: 85, color: "yellow" },
            { label: "Reference Validation", value: 94, color: "green" },
          ].map((item, i) => (
            <div key={i}>
              <div className="flex justify-between text-xs sm:text-sm mb-1">
                <span className="text-gray-600">{item.label}</span>
                <span className={`font-semibold text-${item.color}-600`}>
                  {item.value}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1.5 sm:h-2">
                <div
                  className={`bg-gradient-to-r from-${item.color}-400 to-${item.color}-600 h-1.5 sm:h-2 rounded-full`}
                  style={{ width: `${item.value}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="bg-white rounded-lg sm:rounded-xl shadow-xl border border-gray-200 p-4 sm:p-5 md:p-6">
      <div className="flex items-center justify-between mb-3 sm:mb-4">
        <h4 className="font-bold text-gray-900 text-sm sm:text-base md:text-lg">
          Reference Check
        </h4>
        <PersonSearchOutlined
          className="text-blue-500"
          style={{ fontSize: "1.25rem" }}
        />
      </div>
      <div className="space-y-2 sm:space-y-3 md:space-y-4">
        {[
          {
            name: "Michael Chen",
            title: "Former Manager at TechCorp",
            status: "✓ Verified via LinkedIn",
            bg: "green",
          },
          {
            name: "Sarah Williams",
            title: "Director at InnovateCo",
            status: "✓ Confirmed employment dates",
            bg: "green",
          },
          {
            name: "David Park",
            title: "Peer at StartupXYZ",
            status: "⚠ Unable to verify contact",
            bg: "yellow",
          },
        ].map((ref, i) => (
          <div
            key={i}
            className={`flex items-start gap-2 sm:gap-3 p-2 sm:p-3 bg-${ref.bg}-50 rounded-lg border border-${ref.bg}-200`}
          >
            {ref.bg === "green" ? (
              <CheckCircleOutline
                style={{ fontSize: "1rem" }}
                className="text-green-500 sm:text-lg flex-shrink-0 mt-0.5"
              />
            ) : (
              <span className="text-yellow-600 font-bold text-sm sm:text-base flex-shrink-0">
                !
              </span>
            )}
            <div className="flex-1 min-w-0">
              <p className="text-xs sm:text-sm font-semibold text-gray-900 truncate">
                {ref.name}
              </p>
              <p className="text-xs text-gray-600 truncate">{ref.title}</p>
              <p className={`text-xs text-${ref.bg}-700 mt-1`}>{ref.status}</p>
            </div>
          </div>
        ))}
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
    if (
      !formData.name ||
      !formData.email ||
      !formData.company ||
      !formData.role
    ) {
      setErrorMessage("Please fill in all fields");
      setTimeout(() => setErrorMessage(""), 3000);
      return;
    }
    setIsLoading(true);
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 8000);
    try {
      const response = await fetch(
        "https://truehire-backend.onrender.com/api/waitlist",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
          signal: controller.signal,
        }
      );
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
        setErrorMessage(
          data.message || "Something went wrong. Please try again."
        );
        setTimeout(() => setErrorMessage(""), 3000);
      }
    } catch (error) {
      let errorMsg = "Unable to connect to server. Please try again later.";
      if (error.name === "AbortError")
        errorMsg =
          "Request timeout. Please check your connection and try again.";
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
          <div className="font-bold text-lg sm:text-xl md:text-2xl text-gray-900">
            TrueHire®
          </div>
        </div>
      </header>

      <section className="pt-24 sm:pt-32 md:pt-40 pb-12 sm:pb-16 md:pb-24 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4 sm:mb-6">
                Know Who You're Really Hiring
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-500 mb-6">
                Verify candidate authenticity from resume to reference. Get
                confidence scores and reduce bad hires by up to 50% in the AI
                era.
              </p>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center lg:items-start gap-3 sm:gap-4 mb-6 sm:mb-8">
                <button
                  onClick={() =>
                    document
                      .getElementById("hero-form")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="w-full sm:w-auto bg-black text-white px-6 sm:px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-all shadow-lg text-sm sm:text-base"
                >
                  Join the Waitlist – Get Early Access
                </button>
                <button
                  onClick={() =>
                    document
                      .querySelector(".solution-section")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="w-full sm:w-auto text-gray-900 font-medium hover:text-gray-600 transition-all text-sm sm:text-base"
                >
                  Learn More
                </button>
              </div>
              <p className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 mb-2">
                The only recruiting platform that validates candidates
                end-to-end.
              </p>
              <p className="text-xs sm:text-sm md:text-base text-gray-500">
                Pilots start early 2026 – secure your spot. Limited free beta
                access.
              </p>
            </div>
            <div className="block mt-6 lg:mt-0">
              <div
                className="transform hover:scale-105 transition-all duration-500"
                style={{ perspective: "1000px" }}
              >
                <DashboardMockup />
              </div>
            </div>
          </div>

          <div
            id="hero-form"
            className="max-w-2xl mx-auto bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 md:p-10 mt-12 sm:mt-16 md:mt-24 border border-gray-200"
          >
            {!isSubmitted ? (
              <>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 text-center">
                  Join the Waitlist
                </h3>
                {errorMessage && (
                  <div className="mb-6 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-center text-sm">
                    {errorMessage}
                  </div>
                )}
                <div className="space-y-4 sm:space-y-5">
                  {[
                    { name: "name", type: "text", placeholder: "Full Name" },
                    { name: "email", type: "email", placeholder: "Work Email" },
                    {
                      name: "company",
                      type: "text",
                      placeholder: "Company Name",
                    },
                  ].map((field) => (
                    <input
                      key={field.name}
                      type={field.type}
                      name={field.name}
                      placeholder={field.placeholder}
                      value={formData[field.name]}
                      onChange={handleInputChange}
                      disabled={isLoading}
                      className="w-full px-4 sm:px-6 py-3 sm:py-4 border-2 border-gray-200 rounded-xl focus:ring-2 outline-none transition-all text-base sm:text-lg disabled:bg-gray-100"
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
                    <option value="recruiter">Recruiter</option>
                    <option value="hr">HR Manager</option>
                    <option value="hiring-manager">Hiring Manager</option>
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
                  Limited spots for beta pilots. Be first to test free on your
                  next hires.
                </p>
              </>
            ) : (
              <div className="text-center py-8 sm:py-12">
                <CheckCircle
                  style={{ fontSize: "4rem" }}
                  className="text-black sm:text-7xl md:text-8xl mx-auto mb-6"
                />
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  You're on the list!
                </h3>
                <p className="text-lg sm:text-xl text-gray-600 mb-2">
                  Thanks for joining the waitlist. We'll be in touch 🖤.
                </p>
                <p className="text-sm text-gray-500 mb-6">
                  Registered as:{" "}
                  <strong className="break-all">{formData.email}</strong>
                </p>
                <button
                  onClick={handleClearStorage}
                  className="text-sm text-gray-500 hover:text-gray-700 underline transition-colors"
                >
                  Not you? Clear and try again
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-black leading-tight px-4">
              The only recruiting platform that validates candidates end-to-end.
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 leading-relaxed px-4">
              Pilots start early 2026 – secure your spot. Limited free beta
              access.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-12 sm:mt-20">
            {[
              {
                Icon: LockOpen,
                label: "AI ERA",
                title: "Hiring in the AI Era is Broken",
              },
              {
                Icon: CheckCircle,
                label: "Points",
                title: "AI-generated applications overwhelm teams",
              },
              {
                Icon: VerifiedUserOutlined,
                label: "Stories",
                title: "No easy way to verify authenticity",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-2xl sm:rounded-3xl overflow-hidden hover:shadow-lg transition-all"
              >
                <div className="h-32 sm:h-40 md:h-60 flex items-center justify-center">
                  <item.Icon
                    style={{ fontSize: "60px" }}
                    className="text-blue-500 sm:text-7xl md:text-8xl"
                  />
                </div>
                <div className="p-4 sm:p-6 md:p-8 text-center">
                  <p className="text-xs text-gray-400 uppercase tracking-wide mb-2 sm:mb-3 font-medium">
                    {item.label}
                  </p>
                  <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-black">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="solution-section py-12 sm:py-16 md:py-24 px-4 sm:px-6"
        style={{ background: "linear-gradient(to bottom, #e8f5fa, white)" }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 px-4">
              TrueHire: End-to-End Authenticity Verification
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 px-4">
              Integrates with your ATS. Automatically checks every stage for
              real signals.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16 md:mb-20">
            {[
              {
                Icon: FingerprintOutlined,
                title: "AI Detection",
                desc: "AI-assistance scoring + pattern flagging",
              },
              {
                Icon: CheckCircleOutline,
                title: "Interview Analysis",
                desc: "Consistency checks + scripted response detection",
              },
              {
                Icon: PersonSearchOutlined,
                title: "Reference Check",
                desc: "Verify real references + cross-validation",
              },
              {
                Icon: BarChartOutlined,
                title: "Integrity Report",
                desc: "0-100% confidence score with flags",
              },
            ].map((item, i) => (
              <div key={i} className="text-center group">
                <div className="mb-3 sm:mb-4 md:mb-6 transform group-hover:scale-110 transition-transform flex justify-center">
                  <item.Icon
                    style={{ fontSize: "2rem" }}
                    className="text-blue-500 sm:text-4xl md:text-5xl"
                  />
                </div>
                <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-900 mb-2 sm:mb-3 px-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-600 px-2">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
            <FeatureMockup type="confidence" />
            <FeatureMockup type="reference" />
          </div>
          <div className="shadow-2xl border-2 border-blue-100 rounded-xl sm:rounded-2xl overflow-hidden">
            <img
              src="https://res.cloudinary.com/dpcgk2sev/image/upload/v1766608204/truehire_logo_u5c805.jpg"
              alt="TrueHire Platform"
              className="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-12 sm:mb-16 md:mb-20 px-4">
            How It Works
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-center">
            <div className="lg:col-span-2 space-y-4 sm:space-y-6">
              {[
                "Upload resume or integrate ATS",
                "Automated checks run",
                "AI analyzes patterns",
                "Get confidence dashboard",
              ].map((text, i) => (
                <div
                  key={i}
                  className="rounded-xl sm:rounded-2xl p-3 sm:p-4 flex items-center hover:shadow-lg transition-all border-2 border-dashed border-black"
                >
                  <div
                    className="w-10 h-10 sm:w-12 sm:h-12 text-white rounded-xl sm:rounded-2xl flex items-center justify-center font-bold text-lg sm:text-xl md:text-2xl mr-4 sm:mr-6 md:mr-8 flex-shrink-0 hover:scale-110 transition-transform"
                    style={{ background: "#2791C1" }}
                  >
                    {i + 1}
                  </div>
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-900 font-medium">
                    {text}
                  </p>
                </div>
              ))}
            </div>
            <div className="hidden lg:block">
              <div className="bg-white rounded-xl shadow-xl border-2 border-gray-200 p-5 transform hover:scale-105 transition-all">
                <div className="text-center mb-4">
                  <div className="relative w-24 h-24 mx-auto">
                    <svg className="transform -rotate-90 w-24 h-24">
                      <circle
                        cx="48"
                        cy="48"
                        r="42"
                        stroke="#e5e7eb"
                        strokeWidth="6"
                        fill="none"
                      />
                      <circle
                        cx="48"
                        cy="48"
                        r="42"
                        stroke="#2791C1"
                        strokeWidth="6"
                        fill="none"
                        strokeDasharray="263.89"
                        strokeDashoffset="26.389"
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-2xl font-bold text-gray-900">
                        92%
                      </span>
                    </div>
                  </div>
                  <p className="text-sm font-semibold text-gray-900 mt-2">
                    Confidence Score
                  </p>
                </div>
                <div className="space-y-2">
                  {[
                    { label: "Resume Verified", color: "green" },
                    { label: "References Valid", color: "green" },
                    { label: "AI Detected", color: "yellow" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs">
                      <div
                        className={`w-2 h-2 bg-${item.color}-500 rounded-full`}
                      ></div>
                      <span className="text-gray-600">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="py-12 sm:py-16 md:py-24 px-4 sm:px-6"
        style={{ background: "linear-gradient(to bottom, white, #e8f5fa)" }}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-12 sm:mb-16 md:mb-20 px-4">
            Why Early Adopters Love the Vision
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 mb-12 sm:mb-16">
            {[
              {
                Icon: TrendingUpOutlined,
                title: "Reduce bad hires.",
                desc: "Cut your hiring risk by 50% with confidence scores.",
              },
              {
                Icon: AccessTimeOutlined,
                title: "Save hours per hire.",
                desc: "Let automation handle resume and reference checking.",
              },
              {
                Icon: VerifiedUserOutlined,
                title: "Real confidence.",
                desc: "Automated insights – trust every hire is authentic.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 text-center shadow-xl hover:shadow-2xl transition-all border-2 border-blue-100 group"
              >
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto mb-6 sm:mb-8 group-hover:scale-110 transition-transform">
                  <item.Icon
                    style={{ fontSize: "1.75rem" }}
                    className="text-blue-500 sm:text-4xl"
                  />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
          <div
            className="text-center text-white p-6 sm:p-8 md:p-12 shadow-xl rounded-xl sm:rounded-2xl"
            style={{ background: "#000", border: "5px dashed white" }}
          >
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold mb-3 sm:mb-4">
              Join HR leaders from top tech startups already on the waitlist.
            </p>
            <p
              className="text-sm sm:text-base md:text-lg"
              style={{ color: "#d4ebf5" }}
            >
              Beta pilots launching soon – limited free spots.
            </p>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-400 py-8 sm:py-12 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="font-bold text-xl sm:text-2xl text-white mb-4">
            TrueHire®
          </div>
          <p className="text-xs sm:text-sm mb-6">
            Built for recruiters who want confidence in every hire.
          </p>
          <div className="border-t border-gray-800 pt-6">
            <p className="text-xs">TrueHire © 2025. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <style>{`
        html { scroll-behavior: smooth; }
        @keyframes spin { to { transform: rotate(360deg); } }
        .animate-spin { animation: spin 1s linear infinite; }
        
        /* Ensure responsive text wrapping */
        * { word-wrap: break-word; }
      `}</style>
    </div>
  );
};

export default TrueHireLanding;
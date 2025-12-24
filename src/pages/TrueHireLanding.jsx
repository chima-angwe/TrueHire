import React, { useState, useEffect } from "react";
import {
  FingerprintOutlined,
  CheckCircleOutline,
  PersonSearchOutlined,
  BarChartOutlined,
  DescriptionOutlined,
  GroupsOutlined,
  TrendingUpOutlined,
  AccessTimeOutlined,
  VerifiedUserOutlined,
  CheckCircle,
  LockOpen,
} from "@mui/icons-material";

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

  // Initialize from localStorage on mount
  useEffect(() => {
    try {
      const storedData = localStorage.getItem("trueHireRegistration");
      if (storedData) {
        const parsedData = JSON.parse(storedData);
        setFormData(parsedData);
        setIsSubmitted(true);
      }
    } catch (error) {
      console.error("Error reading from localStorage:", error);
    }
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
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
    const timeoutId = setTimeout(() => controller.abort(), 8000); // 8 second timeout

    try {
      const response = await fetch(
        "https://truehire-backend.onrender.com/api/waitlist",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
          signal: controller.signal,
        }
      );

      clearTimeout(timeoutId);

      if (!response.ok) {
        // Handle non-2xx responses
        const data = await response.json();
        throw new Error(data.message || "Registration failed");
      }

      const data = await response.json();

      if (data.success) {
        // Save to localStorage immediately
        localStorage.setItem("trueHireRegistration", JSON.stringify(formData));
        setIsSubmitted(true);
      } else {
        setErrorMessage(
          data.message || "Something went wrong. Please try again."
        );
        setTimeout(() => setErrorMessage(""), 3000);
      }
    } catch (error) {
      console.error("Error submitting form:", error);

      let errorMsg = "Unable to connect to server. Please try again later.";

      if (error.name === "AbortError") {
        errorMsg =
          "Request timeout. Please check your connection and try again.";
      }

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
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5">
          <div className="font-bold text-xl sm:text-2xl text-gray-900">
            TrueHire®
          </div>
        </div>
      </header>

      {/* Hero Section - Enhanced with Animation */}
      <section className="pt-32 sm:pt-40 pb-16 sm:pb-24 px-4 sm:px-6 bg-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          {/* Static Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-4 sm:mb-6">
            Know Who You're Really Hiring
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-500 mb-4 max-w-4xl mx-auto">
            Verify candidate authenticity from resume to reference. Get
            confidence scores and reduce bad hires by up to 50% in the AI era.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 sm:mb-16">
            <button className="w-full sm:w-auto bg-black text-white px-6 sm:px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-all">
              Join the Waitlist – Get Early Access
            </button>
            <button className="w-full sm:w-auto text-gray-900 font-medium hover:text-gray-600 transition-all">
              Learn More
            </button>
          </div>

          <p className="text-base sm:text-lg font-semibold text-gray-900 mb-4">
            The only recruiting platform that validates candidates end-to-end.
          </p>
          <p className="text-sm sm:text-base text-gray-500 mb-12 sm:mb-16">
            Pilots start early 2026 – secure your spot. Limited free beta
            access.
          </p>

          {/* Hero Form - Moved below hero content */}
          <div
            id="hero-form"
            className="max-w-2xl mx-auto bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-10 mt-12 sm:mt-20 border border-gray-200"
          >
            {!isSubmitted ? (
              <>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 text-center">
                  Join the Waitlist
                </h3>

                {errorMessage && (
                  <div className="mb-6 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-center text-sm sm:text-base">
                    {errorMessage}
                  </div>
                )}

                <div className="space-y-4 sm:space-y-5">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    disabled={isLoading}
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 border-2 border-gray-200 rounded-xl focus:ring-2 outline-none transition-all text-base sm:text-lg disabled:bg-gray-100"
                    style={{
                      "--tw-ring-color": "#2791C1",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "#2791C1")}
                    onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Work Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    disabled={isLoading}
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 border-2 border-gray-200 rounded-xl focus:ring-2 outline-none transition-all text-base sm:text-lg disabled:bg-gray-100"
                    onFocus={(e) => (e.target.style.borderColor = "#2791C1")}
                    onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
                  />
                  <input
                    type="text"
                    name="company"
                    placeholder="Company Name"
                    value={formData.company}
                    onChange={handleInputChange}
                    disabled={isLoading}
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 border-2 border-gray-200 rounded-xl focus:ring-2 outline-none transition-all text-base sm:text-lg disabled:bg-gray-100"
                    onFocus={(e) => (e.target.style.borderColor = "#2791C1")}
                    onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
                  />
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
              <div className="text-center py-8 sm:py-12 animate-fade-in">
                <div className="mb-6">
                  <CheckCircle style={{ fontSize: "5rem", color: "#000" }} />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  You're on the list!
                </h3>
                <p className="text-lg sm:text-xl text-gray-600 mb-2">
                  Thanks for joining the waitlist. We'll be in touch soon with
                  early access details.
                </p>
                <p className="text-sm text-gray-500 mb-6">
                  Registered as: <strong>{formData.email}</strong>
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

      {/* Problem Section - 60% Color */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-black leading-tight">
              The only recruiting platform that
              <br className="hidden sm:block" />
              validates candidates end-to-end.
            </h2>
            <p className="text-lg sm:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Pilots start early 2026 – secure
              <br className="hidden sm:block" />
              your spot. Limited free beta access.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-12 sm:mt-20">
            <div className="bg-gray-50 rounded-2xl sm:rounded-3xl overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="h-40 sm:h-60 bg-gradient-to-br flex items-center justify-center">
                <LockOpen
                  className="text-gray-400"
                  style={{ fontSize: "80px", color: "#2791C1" }}
                />
              </div>
              <div className="p-6 sm:p-8 text-center">
                <p className="text-xs text-gray-400 uppercase tracking-wide mb-3 font-medium">
                  AI ERA
                </p>
                <h3 className="text-lg sm:text-2xl font-bold text-black">
                  Hiring in the AI Era is Broken
                </h3>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl sm:rounded-3xl overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="h-40 sm:h-60 bg-gradient-to-br flex items-center justify-center">
                <CheckCircle style={{ fontSize: "80px", color: "#2791C1" }} />
              </div>
              <div className="p-6 sm:p-8 text-center">
                <p className="text-xs text-gray-400 uppercase tracking-wide mb-3 font-medium">
                  Points
                </p>
                <h3 className="text-lg sm:text-2xl font-bold text-black">
                  AI-generated applications overwhelm teams
                </h3>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl sm:rounded-3xl overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="h-40 sm:h-60 bg-gradient-to-br flex items-center justify-center">
                <VerifiedUserOutlined
                  className="text-gray-400"
                  style={{ fontSize: "80px", color: "#2791C1" }}
                />
              </div>
              <div className="p-6 sm:p-8 text-center">
                <p className="text-xs text-gray-400 uppercase tracking-wide mb-3 font-medium">
                  Stories
                </p>
                <h3 className="text-lg sm:text-2xl font-bold text-black">
                  No easy way to verify authenticity
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section - 30% Color */}
      <section
        className="py-16 sm:py-24 px-4 sm:px-6"
        style={{ background: "linear-gradient(to bottom, #e8f5fa, white)" }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-20">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
              TrueHire: End-to-End Authenticity Verification
            </h2>
            <p className="text-base sm:text-xl text-gray-600">
              Integrates with your ATS. Automatically checks every stage for
              real signals.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-20">
            <div className="text-center group">
              <div className="mb-4 sm:mb-6 transform group-hover:scale-110 transition-transform duration-300 flex justify-center">
                <FingerprintOutlined
                  style={{ fontSize: "3rem", color: "#2791C1" }}
                />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
                AI Detection
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                AI-assistance scoring + pattern flagging
              </p>
            </div>

            <div className="text-center group">
              <div className="mb-4 sm:mb-6 transform group-hover:scale-110 transition-transform duration-300 flex justify-center">
                <CheckCircleOutline
                  style={{ fontSize: "3rem", color: "#2791C1" }}
                />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
                Interview Analysis
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                Consistency checks + scripted response detection
              </p>
            </div>

            <div className="text-center group">
              <div className="mb-4 sm:mb-6 transform group-hover:scale-110 transition-transform duration-300 flex justify-center">
                <PersonSearchOutlined
                  style={{ fontSize: "3rem", color: "#2791C1" }}
                />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
                Reference Check
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                Verify real references + cross-validation
              </p>
            </div>

            <div className="text-center group">
              <div className="mb-4 sm:mb-6 transform group-hover:scale-110 transition-transform duration-300 flex justify-center">
                <BarChartOutlined
                  style={{ fontSize: "3rem", color: "#2791C1" }}
                />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
                Integrity Report
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                0-100% confidence score with flags
              </p>
            </div>
          </div>

          {/* Dashboard Mockup with Logo Space */}
          <div className="shadow-2xl max-w-6xl mx-auto border-2 border-blue-100">
            <div className="to-black rounded-2xl text-center flex items-center justify-center">
              <img
                src="https://res.cloudinary.com/dpcgk2sev/image/upload/v1766608204/truehire_logo_u5c805.jpg"
                alt=""
                style={{
                  borderRadius: "1rem",
                  objectFit: "cover",
                }}
                className="w-full max-h-96"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 text-center mb-12 sm:mb-20">
            How It Works
          </h2>

          <div className="space-y-4 sm:space-y-6">
            {[
              { step: 1, text: "Upload resume or integrate ATS" },
              { step: 2, text: "Automated checks run" },
              { step: 3, text: "AI analyzes patterns" },
              { step: 4, text: "Get confidence dashboard" },
            ].map((item) => (
              <div
                key={item.step}
                className="bg-gradient-to-r to-white rounded-xl sm:rounded-2xl p-4 sm:p-4 flex items-center hover:shadow-lg transition-all duration-300 border group"
                style={{
                  background: "linear-gradient(to right, white)",
                  borderColor: "#000000ff",
                  border: "2px dashed black",
                }}
              >
                <div
                  className="w-10 h-10 sm:w-12 sm:h-12 text-white rounded-lg sm:rounded-2xl flex items-center justify-center font-bold text-sm sm:text-2xl mr-4 sm:mr-8 flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                  style={{
                    background: "linear-gradient(to bottom right, #2791C1)",
                  }}
                >
                  {item.step}
                </div>
                <p className="text-base sm:text-xl text-gray-900 font-medium">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section
        className="py-16 sm:py-24 px-4 sm:px-6"
        style={{ background: "linear-gradient(to bottom, white, #e8f5fa)" }}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 text-center mb-12 sm:mb-20">
            Why Early Adopters Love the Vision
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10 mb-12 sm:mb-16">
            <div
              className="bg-white rounded-2xl sm:rounded-3xl p-8 sm:p-10 text-center shadow-xl hover:shadow-2xl transition-all duration-300 border-2 group"
              style={{ borderColor: "#a8d5e8" }}
            >
              <div
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto mb-6 sm:mb-8 group-hover:scale-110 transition-transform duration-300"
                style={{
                  background:
                    "linear-gradient(to bottom right, #e8f5fa, #c2e4f2)",
                }}
              >
                <TrendingUpOutlined
                  style={{ fontSize: "2rem", color: "#2791C1" }}
                />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                Reduce bad hires.
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Cut your hiring risk by 50% with confidence scores.
              </p>
            </div>

            <div className="bg-white rounded-2xl sm:rounded-3xl p-8 sm:p-10 text-center shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-blue-100 group">
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto mb-6 sm:mb-8 group-hover:scale-110 transition-transform duration-300">
                <AccessTimeOutlined
                  style={{ fontSize: "2rem", color: "#2791C1" }}
                />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                Save hours per hire.
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Let automation handle resume and reference checking.
              </p>
            </div>

            <div className="bg-white rounded-2xl sm:rounded-3xl p-8 sm:p-10 text-center shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-blue-100 group">
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto mb-6 sm:mb-8 group-hover:scale-110 transition-transform duration-300">
                <VerifiedUserOutlined
                  style={{ fontSize: "2rem", color: "#2791C1" }}
                />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                Real confidence.
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Automated insights – trust every hire is authentic.
              </p>
            </div>
          </div>

          <div
            className="text-center space-y-4 text-white p-8 sm:p-12 shadow-xl"
            style={{
              background: "linear-gradient(to left, #000000ff)",
              border: "5px dashed white",
            }}
          >
            <p className="text-lg sm:text-2xl font-semibold">
              Join HR leaders from top tech startups already on the waitlist.
            </p>
            <p className="text-base sm:text-lg" style={{ color: "#d4ebf5" }}>
              Beta pilots launching soon – limited free spots.
            </p>
          </div>
        </div>
      </section>

      {/* Footer - Simplified */}
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
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }

        .animate-spin {
          animation: spin 1s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default TrueHireLanding;

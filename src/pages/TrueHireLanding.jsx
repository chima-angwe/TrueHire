import React, { useState } from "react";
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

    try {
      const response = await fetch(
        "https://truehire-backend.onrender.com/api/waitlist",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (data.success) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", company: "", role: "" });
      } else {
        setErrorMessage(
          data.message || "Something went wrong. Please try again."
        );
        setTimeout(() => setErrorMessage(""), 3000);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setErrorMessage("Unable to connect to server. Please try again later.");
      setTimeout(() => setErrorMessage(""), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-6 py-5">
          <div className="font-bold text-2xl text-gray-900">TrueHire®</div>
        </div>
      </header>

      {/* Hero Section - Enhanced with Animation */}
      <section className="pt-40 pb-24 px-6 bg-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          {/* Static Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight mb-6">
            Know Who You're Really Hiring
          </h1>

          <p className="text-xl md:text-2xl text-gray-500 mb-4 max-w-4xl mx-auto">
            Verify candidate authenticity from resume to reference. Get
            confidence scores and reduce bad hires by up to 50% in the AI era.
          </p>

          <div className="flex items-center justify-center gap-4 mb-16">
            <button className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-all">
              Join the Waitlist – Get Early Access
            </button>
            <button className="text-gray-900 font-medium hover:text-gray-600 transition-all">
              Learn More
            </button>
          </div>

          <p className="text-lg font-semibold text-gray-900 mb-4">
            The only recruiting platform that validates candidates end-to-end.
          </p>
          <p className="text-gray-500 mb-16">
            Pilots start early 2026 – secure your spot. Limited free beta
            access.
          </p>

          {/* Hero Form - Moved below hero content */}
          <div
            id="hero-form"
            className="max-w-2xl mx-auto bg-white rounded-3xl shadow-2xl p-10 mt-20 border border-gray-200"
          >
            {!isSubmitted ? (
              <>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  Join the Waitlist
                </h3>

                {errorMessage && (
                  <div className="mb-6 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-center">
                    {errorMessage}
                  </div>
                )}

                <div className="space-y-5">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 outline-none transition-all text-lg"
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
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 outline-none transition-all text-lg"
                    onFocus={(e) => (e.target.style.borderColor = "#2791C1")}
                    onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
                  />
                  <input
                    type="text"
                    name="company"
                    placeholder="Company Name"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 outline-none transition-all text-lg"
                    onFocus={(e) => (e.target.style.borderColor = "#2791C1")}
                    onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
                  />
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 outline-none bg-white transition-all text-lg"
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
                    className="w-full bg-black text-white py-5 rounded-xl font-semibold text-lg hover:bg-gray-800 transition-all"
                  >
                    Join the Waitlist
                  </button>
                </div>
                <p className="text-sm text-gray-600 mt-5 text-center">
                  Limited spots for beta pilots. Be first to test free on your
                  next hires.
                </p>
              </>
            ) : (
              <div className="text-center py-12 animate-fade-in">
                <div className="mb-6">
                  <CheckCircle style={{ fontSize: "7rem", color: "#000" }} />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  You're on the list!
                </h3>
                <p className="text-xl text-gray-600 mb-6">
                  Thanks for joining the waitlist. We'll be in touch soon with
                  early access details.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Problem Section - 60% Color */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black leading-tight">
              The only recruiting platform that
              <br />
              validates candidates end-to-end.
            </h2>
            <p className="text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Pilots start early 2026 – secure
              <br />
              your spot. Limited free beta access.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-20">
            <div className="bg-gray-50 rounded-3xl overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="h-60 bg-gradient-to-br flex items-center justify-center">
                <LockOpen
                  className="text-gray-400"
                  style={{ fontSize: "120px", color: "#2791C1" }}
                />
              </div>
              <div className="p-8 text-center">
                <p className="text-xs text-gray-400 uppercase tracking-wide mb-3 font-medium">
                  AI ERA
                </p>
                <h3 className="text-2xl font-bold text-black">
                  Hiring in the AI Era is Broken
                </h3>
              </div>
            </div>

            <div className="bg-gray-50 rounded-3xl overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="h-60 bg-gradient-to-br flex items-center justify-center">
                <CheckCircle style={{ fontSize: "120px", color: "#2791C1" }} />
              </div>
              <div className="p-8 text-center">
                <p className="text-xs text-gray-400 uppercase tracking-wide mb-3 font-medium">
                  Points
                </p>
                <h3 className="text-2xl font-bold text-black">
                  AI-generated applications overwhelm teams
                </h3>
              </div>
            </div>

            <div className="bg-gray-50 rounded-3xl overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="h-60 bg-gradient-to-br flex items-center justify-center">
                <VerifiedUserOutlined
                  className="text-gray-400"
                  style={{ fontSize: "120px", color: "#2791C1" }}
                />
              </div>
              <div className="p-8 text-center">
                <p className="text-xs text-gray-400 uppercase tracking-wide mb-3 font-medium">
                  Stories
                </p>
                <h3 className="text-2xl font-bold text-black">
                  No easy way to verify authenticity
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section - 30% Color */}
      <section
        className="py-24 px-6"
        style={{ background: "linear-gradient(to bottom, #e8f5fa, white)" }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              TrueHire: End-to-End Authenticity Verification
            </h2>
            <p className="text-xl text-gray-600">
              Integrates with your ATS. Automatically checks every stage for
              real signals.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-20">
            <div className="text-center group">
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                <FingerprintOutlined
                  style={{ fontSize: "5rem", color: "#2791C1" }}
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                AI Detection
              </h3>
              <p className="text-gray-600">
                AI-assistance scoring + pattern flagging
              </p>
            </div>

            <div className="text-center group">
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                <CheckCircleOutline
                  style={{ fontSize: "5rem", color: "#2791C1" }}
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Interview Analysis
              </h3>
              <p className="text-gray-600">
                Consistency checks + scripted response detection
              </p>
            </div>

            <div className="text-center group">
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                <PersonSearchOutlined
                  style={{ fontSize: "5rem", color: "#2791C1" }}
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Reference Check
              </h3>
              <p className="text-gray-600">
                Verify real references + cross-validation
              </p>
            </div>

            <div className="text-center group">
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                <BarChartOutlined
                  style={{ fontSize: "5rem", color: "#2791C1" }}
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Integrity Report
              </h3>
              <p className="text-gray-600">
                0-100% confidence score with flags
              </p>
            </div>
          </div>

          {/* Dashboard Mockup with Logo Space */}
          <div className="shadow-2xl max-w-6xl mx-auto border-2 border-blue-100">
            <div className="to-black rounded-2xl text-center flex items-center justify-center">
              <img
                src="https://res.cloudinary.com/dpcgk2sev/image/upload/v1766537902/truehire_logo_lgwruu.jpg"
                alt=""
                style={{ borderRadius: "1rem" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold text-gray-900 text-center mb-20">
            How It Works
          </h2>

          <div className="space-y-6">
            {[
              { step: 1, text: "Upload resume or integrate ATS" },
              { step: 2, text: "Automated checks run" },
              { step: 3, text: "AI analyzes patterns" },
              { step: 4, text: "Get confidence dashboard" },
            ].map((item) => (
              <div
                key={item.step}
                className="bg-gradient-to-r to-white rounded-2xl p-4 flex items-center hover:shadow-lg transition-all duration-300 border group"
                style={{
                  background: "linear-gradient(to right, white)",
                  borderColor: "#000000ff",
                  border: "2px dashed black",
                }}
              >
                <div
                  className="w-12 h-12 text-white rounded-2xl flex items-center justify-center font-bold text-2 mr-8 flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                  style={{
                    background: "linear-gradient(to bottom right, #2791C1)",
                  }}
                >
                  {item.step}
                </div>
                <p className="text-xl text-gray-900 font-medium">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section
        className="py-24 px-6"
        style={{ background: "linear-gradient(to bottom, white, #e8f5fa)" }}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-gray-900 text-center mb-20">
            Why Early Adopters Love the Vision
          </h2>

          <div className="grid md:grid-cols-3 gap-10 mb-16">
            <div
              className="bg-white rounded-3xl p-10 text-center shadow-xl hover:shadow-2xl transition-all duration-300 border-2 group"
              style={{ borderColor: "#a8d5e8" }}
            >
              <div
                className="w-24 h-24 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300"
                style={{
                  background:
                    "linear-gradient(to bottom right, #e8f5fa, #c2e4f2)",
                }}
              >
                <TrendingUpOutlined
                  style={{ fontSize: "3rem", color: "#2791C1" }}
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Reduce bad hires.
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Cut your hiring risk by 50% with confidence scores.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-10 text-center shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-blue-100 group">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                <AccessTimeOutlined
                  style={{ fontSize: "3rem", color: "#2791C1" }}
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Save hours per hire.
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Let automation handle resume and reference checking.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-10 text-center shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-blue-100 group">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                <VerifiedUserOutlined
                  style={{ fontSize: "3rem", color: "#2791C1" }}
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Real confidence.
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Automated insights – trust every hire is authentic.
              </p>
            </div>
          </div>

          <div
            className="text-center space-y-4 text-white p-12 shadow-xl"
            style={{
              background: "linear-gradient(to left, #000000ff)",
              border: "5px dashed white",
            }}
          >
            <p className="text-2xl font-semibold">
              Join HR leaders from top tech startups already on the waitlist.
            </p>
            <p className="text-lg" style={{ color: "#d4ebf5" }}>
              Beta pilots launching soon – limited free spots.
            </p>
          </div>
        </div>
      </section>

      {/* Footer - Simplified */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="font-bold text-2xl text-white mb-4">TrueHire®</div>
          <p className="text-sm mb-6">
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
      `}</style>
    </div>
  );
};

export default TrueHireLanding;

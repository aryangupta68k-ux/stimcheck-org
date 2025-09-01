"use client"

import type React from "react"

import { useEffect, useState } from "react"

export default function PrenatalBenefitPage() {
  const [currentUpdateIndex, setCurrentUpdateIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const liveUpdates = [
    { text: "Maria S., TX — Paid $1,250 (Aug 28, 2025)", type: "success" },
    { text: "James R., CA — Paid $1,050 (Aug 27, 2025)", type: "success" },
    { text: "Aisha K., NY — Paid $975 (Aug 26, 2025)", type: "success" },
    { text: "Ethan P., FL — Paid $1,100 (Aug 25, 2025)", type: "success" },
    { text: "Priya M., IL — Paid $1,325 (Aug 24, 2025)", type: "success" },
    { text: "Omar D., AZ — Paid $900 (Aug 23, 2025)", type: "success" },
    { text: "Hannah L., OH — Paid $1,175 (Aug 22, 2025)", type: "success" },
    { text: "Leo V., WA — Paid $1,050 (Aug 21, 2025)", type: "success" },
    { text: "Grace T., NC — Paid $1,200 (Aug 20, 2025)", type: "success" },
    { text: "Luis G., MA — Paid $1,000 (Aug 19, 2025)", type: "success" },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        setIsAnimating(true)
        setTimeout(() => {
          setCurrentUpdateIndex((prev) => (prev + 1) % liveUpdates.length)
          setIsAnimating(false)
        }, 300)
      }
    }, 9000)

    return () => clearInterval(interval)
  }, [isPaused, liveUpdates.length])

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    const target = document.getElementById(targetId.replace("#", ""))
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" })
      setIsMobileMenuOpen(false)
    }
  }

  const handleTouchStart = () => setIsPaused(true)
  const handleTouchEnd = () => setIsPaused(false)
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen)

  return (
    <div className="bg-white font-sans">
      <div className="min-h-screen">
        {/* Top Banner */}
        <div className="bg-blue-100 border-b border-blue-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2">
            <div className="flex items-center justify-center space-x-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <p className="text-sm text-blue-800 font-medium">
                Limited Time - Claim Deadline Extended
              </p>
            </div>
          </div>
        </div>

        {/* Header */}
        <header className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex items-center justify-between h-16 sm:h-18 lg:h-20">
              {/* Logo */}
              <div className="flex items-center space-x-1">
                <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 flex items-center justify-center flex-shrink-0">
                  <img 
                    src="/Adobe Express - file.png" 
                    alt="USA.gov logo" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h1 className="text-sm sm:text-lg lg:text-xl font-bold text-gray-900">
                    Stimulus Assistance Portal
                  </h1>
                </div>
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center space-x-8">
                <a href="#how-it-works" className="text-gray-700 hover:text-blue-600 transition-all duration-200 font-medium py-2 px-3 rounded-md hover:bg-blue-50">
                  How It Works
                </a>
                <a href="#faq" className="text-gray-700 hover:text-blue-600 transition-all duration-200 font-medium py-2 px-3 rounded-md hover:bg-blue-50">
                  FAQ
                </a>
                <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-all duration-200 font-medium py-2 px-3 rounded-md hover:bg-blue-50">
                  Contact
                </a>
                <a href="https://rewarrdsgiant.com/aff_c?offer_id=2836&aff_id=25344" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 transition-all duration-200 font-medium shadow-sm hover:shadow-md">
                  Check Eligibility
                </a>
              </nav>

              {/* Mobile Menu Button */}
              <button 
                className="lg:hidden p-2 text-gray-700 focus:outline-none"
                onClick={toggleMobileMenu}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                  )}
                </svg>
              </button>
            </div>

                          {/* Mobile Navigation Menu */}
              <div className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
                isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <nav className="py-4 space-y-1 border-t border-gray-200">
                  <a href="#how-it-works" className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 font-medium">
                    How It Works
                  </a>
                  <a href="#faq" className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 font-medium">
                    FAQ
                  </a>
                  <a href="#contact" className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 font-medium">
                    Contact
                  </a>
                  <a href="https://rewarrdsgiant.com/aff_c?offer_id=2836&aff_id=25344" target="_blank" rel="noopener noreferrer" className="block px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 font-medium mx-2 shadow-sm">
                    Check Eligibility
                  </a>
                </nav>
              </div>
          </div>
        </header>

        {/* Main Content */}
        <main>
          {/* Hero Section */}
          <section className="bg-white py-12 sm:py-16 lg:py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
                                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                    Claim Your{" "}
                    <span className="text-blue-600">Stimulus Assistance Money</span> Today
                  </h1>
              <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
                Millions of Americans are eligible for unclaimed stimulus assistance funds. Check your eligibility in under 2 minutes and claim what's rightfully yours.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a
                  href="https://rewarrdsgiant.com/aff_c?offer_id=2836&aff_id=25344"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center text-lg touch-manipulation active:scale-95 transform transition-transform flex-1 sm:flex-none"
                >
                  Check My Eligibility Now
                </a>
                <a
                  href="#how-it-works"
                  onClick={(e) => handleSmoothScroll(e, "#how-it-works")}
                  className="bg-gray-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-700 transition-colors text-center text-lg touch-manipulation active:scale-95 transform transition-transform flex-1 sm:flex-none"
                >
                  Learn How It Works
                </a>
              </div>
              
              <div className="flex items-center justify-center space-x-2 text-sm text-gray-500 mb-4">
                <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"></path>
                </svg>
                <span>100% Secure & Confidential</span>
              </div>

              {/* Latest Payments Section */}
              <div className="max-w-2xl mx-auto">
                <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center justify-center">
                  <span className="w-3 h-3 bg-blue-600 rounded-full mr-2 animate-pulse"></span>
                  Latest Payments
                </h3>
                <div
                  className="min-h-[60px] sm:min-h-[70px]"
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                  onTouchStart={handleTouchStart}
                  onTouchEnd={handleTouchEnd}
                  aria-live="polite"
                  aria-label="Latest payment updates"
                >
                  {/* Current Update */}
                  <div
                    className={`p-2 sm:p-3 bg-blue-50 rounded border-l-4 border-blue-600 transition-all duration-700 ease-in-out transform ${
                      isAnimating ? "opacity-0 translate-y-2 scale-95" : "opacity-100 translate-y-0 scale-100"
                    }`}
                  >
                    <p className="text-sm sm:text-base font-medium text-gray-800 leading-relaxed flex items-center">
                      <span aria-hidden="true" className="mr-2">👤</span>
                      {liveUpdates[currentUpdateIndex].text}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* How It Works Section */}
          <section id="how-it-works" className="bg-gray-50 py-1 sm:py-2 lg:py-3 flex items-center justify-center min-h-screen">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12">
                How It Works
              </h2>
              <div className="grid gap-8 md:grid-cols-3 justify-items-center">
                {/* Step 1 */}
                <div className="bg-white rounded-lg p-8 shadow-sm text-center">
                  <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-white font-bold text-2xl">1</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Check</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Answer a few simple questions about your eligibility
                  </p>
                </div>

                {/* Step 2 */}
                <div className="bg-white rounded-lg p-8 shadow-sm text-center">
                  <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-white font-bold text-2xl">2</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Verify Info</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Provide basic information to confirm your claim
                  </p>
                </div>

                {/* Step 3 */}
                <div className="bg-white rounded-lg p-8 shadow-sm text-center">
                  <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-white font-bold text-2xl">3</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Get Paid</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Receive your funds via direct deposit or check
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Trust Section */}
          <section className="bg-white py-12 sm:py-16 lg:py-20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
              <div className="text-center mb-12">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Trusted by Thousands of Americans Nationwide
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Our secure platform has helped eligible Americans claim their stimulus assistance funds through our streamlined verification process.
                </p>
              </div>

              {/* Feature Cards */}
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-12">
                <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Advanced Security</h3>
                  <p className="text-sm text-gray-600">Industry-standard encryption protects your data</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"></path>
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Verified Process</h3>
                  <p className="text-sm text-gray-600">Streamlined eligibility verification system</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Satisfaction Guarantee</h3>
                  <p className="text-sm text-gray-600">Committed to client satisfaction</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Compliant Service</h3>
                  <p className="text-sm text-gray-600">Operating within regulatory guidelines</p>
                </div>
              </div>

              {/* Stats Cards */}
              <div className="grid gap-6 md:grid-cols-3">
                <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">24-48 hrs</div>
                  <div className="text-gray-600">Average Processing Time</div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">92%</div>
                  <div className="text-gray-600">Eligibility Verification Rate</div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">4.7 ⭐</div>
                  <div className="text-gray-600">Client Satisfaction Score</div>
                </div>
              </div>
            </div>
          </section>



          {/* FAQ Section */}
          <section id="faq" className="bg-white py-12 sm:py-16 lg:py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-600 text-center mb-12">
                Get answers to common questions about claiming your stimulus assistance funds.
              </p>
              
              <div className="space-y-4">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    What is stimulus assistance money?
                  </h3>
                  <p className="text-gray-600">
                    Stimulus assistance money refers to government funds designed to help individuals and families during economic challenges. These funds are typically distributed to eligible recipients to provide financial relief and support.
                  </p>
                </div>
                
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    How do I know if I'm eligible?
                  </h3>
                  <p className="text-gray-600">
                    Eligibility is determined by various factors including income, family size, and residency status. Our quick eligibility checker will help you determine if you qualify in just a few minutes.
                  </p>
                </div>
                
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Is this service free?
                  </h3>
                  <p className="text-gray-600">
                    Yes, our eligibility checking service is completely free. We believe everyone should have access to information about their potential benefits without any cost.
                  </p>
                </div>
                
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    How long does the claim process take?
                  </h3>
                  <p className="text-gray-600">
                    The entire process typically takes 24-48 hours from initial application to fund distribution. Our streamlined system ensures quick processing while maintaining security and accuracy.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="bg-gray-50 py-12 sm:py-16 lg:py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Still Have Questions?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our support team is here to help you with any questions or concerns.
              </p>
              
              <div className="bg-white rounded-lg p-8 shadow-sm max-w-2xl mx-auto">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="flex items-center justify-center space-x-3">
                    <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                    </svg>
                    <span className="text-gray-700">1-800-123-4567</span>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                    </svg>
                    <span className="text-gray-700">help@stimulusassist.com</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Eligibility Check Section */}
          <section id="eligibility" className="bg-blue-600 py-12 sm:py-16 lg:py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6">
                Ready to Check Your Eligibility?
              </h2>
              <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
                Take the first step towards claiming your stimulus assistance funds. Our secure platform will guide you through the process in just a few minutes.
              </p>
              
              <a
                href="https://rewarrdsgiant.com/aff_c?offer_id=2836&aff_id=25344"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg inline-block"
              >
                Start Eligibility Check Now
              </a>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid gap-8 md:grid-cols-4 mb-8">
              <div>
                <h3 className="text-lg font-bold mb-4">Stimulus Assist Portal</h3>
                <p className="text-gray-300 mb-4">
                  Helping Americans claim their rightful stimulus assistance funds with a secure, trusted platform.
                </p>
                <div className="flex items-center space-x-2 text-sm text-gray-300">
                  <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"></path>
                  </svg>
                  <span>100% Secure & Confidential</span>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li><a href="#eligibility" className="text-gray-300 hover:text-white transition-colors">Check Eligibility</a></li>
                  <li><a href="#how-it-works" className="text-gray-300 hover:text-white transition-colors">How It Works</a></li>
                  <li><a href="#faq" className="text-gray-300 hover:text-white transition-colors">FAQ</a></li>
                  <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Legal</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Terms of Service</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Disclaimer</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Refund Policy</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Contact Info</h4>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                    </svg>
                    <span className="text-gray-300">1-800-123-4567</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                    </svg>
                    <span className="text-gray-300">help@stimulusassist.com</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9z" clipRule="evenodd"></path>
                    </svg>
                    <span className="text-gray-300">Available Nationwide</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-gray-800 pt-8 text-center">
              <p className="text-gray-300">
                © 2025 Stimulus Assistance Portal. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

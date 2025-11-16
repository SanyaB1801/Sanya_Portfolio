"use client"

const Contact = () => {
  const openLink = (url) => {
    window.open(url, "_blank", "noopener,noreferrer")
  }

  const callPhone = () => {
    window.location.href = "tel:+919319702955"
  }

  const sendEmail = () => {
    window.location.href = "mailto:sanyabehera13@gmail.com"
  }

  return (
    <section id="contact" className="alt-section-gradient min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#146b80]">
            Get In Touch
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-300 rounded-xl p-6 border border-violet-500/20 shadow-2xl">
            <h3 className="text-xl text-violet-400 font-bold mb-6">Contact Information</h3>
            <div className="space-y-4">
              <button
                onClick={callPhone}
                className="flex items-center gap-3 w-full text-left hover:text-violet-400 transition-colors"
              >
                <span className="text-violet-400 text-xl">📞</span>
                <span className="text-gray-300">(+91) 9319702955</span>
              </button>
              <button
                onClick={sendEmail}
                className="flex items-center gap-3 w-full text-left hover:text-violet-400 transition-colors"
              >
                <span className="text-violet-400 text-xl">✉️</span>
                <span className="text-gray-300">sanyabehera13@gmail.com</span>
              </button>
              <button
                onClick={() => openLink("https://www.linkedin.com/in/sanya-behera")}
                className="flex items-center gap-3 w-full text-left hover:text-violet-400 transition-colors"
              >
                <svg className="w-6 h-6 text-violet-400 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.3[...]"/>
                </svg>
                <span className="text-gray-300">linkedin.com/in/sanya-behera</span>
              </button>
              <button
                onClick={() => openLink("https://github.com/sanyaB1801")}
                className="flex items-center gap-3 w-full text-left hover:text-violet-400 transition-colors"
              >
                <svg className="w-6 h-6 text-violet-400 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089[...]"/>
                </svg>
                <span className="text-gray-300">github.com/SanyaB1801</span>
              </button>

              <div className="pt-4">
                <h4 className="font-semibold text-[#1e293b] mb-3">Let's Connect!</h4>
                
                <div className="flex gap-4 flex-wrap">
                  {/* Email Button */}
                  <button
                    onClick={sendEmail}
                    className="bg-[#146b80] hover:bg-[#125f6b] text-white px-6 py-3 rounded-lg text-base font-semibold transition-all duration-300 flex items-center gap-3 shadow-md hover:shadow-lg"
                  >
                    <span className="text-xl">✉️</span>
                    Email Me
                  </button>

                  {/* LinkedIn Button */}
                  <button
                    onClick={() => openLink("https://www.linkedin.com/in/sanya-behera")}
                    className="bg-[#0077b5] hover:bg-[#046293] text-white px-6 py-3 rounded-lg text-base font-semibold transition-all duration-300 flex items-center gap-3 shadow-md hover:shadow-lg"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4 flex-shrink-0"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267[...]"/>
                    </svg>
                    LinkedIn
                  </button>
                </div>
              </div>

            </div>
          </div>

          <div className="bg-gray-300 rounded-xl p-6 border border-violet-500/20 shadow-2xl">
            <h3 className="text-xl text-violet-400 font-bold mb-6">Extracurricular Activities</h3>
            <p className="text-gray-300 mb-4">
              Beyond academics and professional work, I'm actively involved in various college activities that help me
              grow personally and contribute to the community.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-purple-400 text-2xl">⚛️</span>
                <span className="text-gray-300">Quantum Club Member</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-green-400 text-2xl">👥</span>
                <span className="text-gray-300">Placement Cell Member</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-orange-400 text-2xl">🧘</span>
                <span className="text-gray-300">Yoga Club Member</span>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-300 mb-4">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about technology!
          </p>
          <button
            onClick={sendEmail}
            className="bg-[#146b80] text-white px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
          >
            Let's Work Together
          </button>
        </div>
      </div>
    </section>
  )
}

export default Contact

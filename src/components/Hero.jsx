"use client"

const Hero = () => {
  const scrollToProjects = () => {
    const projectsSection = document.querySelector("#projects")
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" })
    }
  }

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
    <section
      id="home"
      className="section-gradient min-h-screen flex items-center justify-center px-4 py-20"
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          {/* Profile Image */}
          <div
            className="w-32 h-32 mx-auto mb-6 rounded-full flex items-center justify-center shadow-2xl overflow-hidden"
            style={{
              background: "linear-gradient(to bottom right, #54c0c0, #6ac8cf)",
              padding: "4px",
            }}
          >
            <img
              src="/images/profile-headshot.png"
              alt="Profile photo"
              className="w-full h-full rounded-full object-cover"
              style={{ objectPosition: "center" }}
            />
          </div>

          {/* Name */}
          <h1
            className="text-5xl md:text-7xl font-bold mb-4"
            style={{
              background: "linear-gradient(to right, #2f9fb1, #3bbac2)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Sanya Behera
          </h1>


          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-[#374151] mb-4 font-semibold">
            AI/ML Engineer & Quantum Computing Enthusiast
          </p>

          <p className="text-lg text-[#4b5563] max-w-2xl mx-auto mb-8 leading-relaxed">
            B.Tech in Artificial Intelligence and Machine Learning | Building
            innovative solutions at the intersection of AI, quantum computing,
            and cybersecurity.
          </p>
        </div>

        {/* Contact Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <button
            onClick={callPhone}
            className="bg-[#b3e8f6]/60 hover:bg-[#b3e8f6]/80 text-[#1f2937] px-4 py-2 rounded-lg border border-[#7cd3d3] transition-all flex items-center gap-2 shadow-sm"
          >
            📞 (+91) 9319702955
          </button>

          <button
            onClick={sendEmail}
            className="bg-[#b3e8f6]/60 hover:bg-[#b3e8f6]/80 text-[#1f2937] px-4 py-2 rounded-lg border border-[#7cd3d3] transition-all flex items-center gap-2 shadow-sm"
          >
            ✉️ sanyabehera13@gmail.com
          </button>

          <button
            onClick={() => openLink("https://www.linkedin.com/in/sanya-behera")}
            className="bg-[#b3e8f6]/60 hover:bg-[#b3e8f6]/80 text-[#1f2937] px-4 py-2 rounded-lg border border-[#7cd3d3] transition-all flex items-center gap-2 shadow-sm"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            sanya-behera
          </button>

          <button
            onClick={() => openLink("https://github.com/sanyaB1801")}
            className="bg-[#b3e8f6]/60 hover:bg-[#b3e8f6]/80 text-[#1f2937] px-4 py-2 rounded-lg border border-[#7cd3d3] transition-all flex items-center gap-2 shadow-sm"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            SanyaB1801
          </button>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={scrollToProjects}
            className="bg-gradient-to-r from-[#54c0c0] to-[#6ac8cf] hover:from-[#48b4b4] hover:to-[#54c0c0] text-white px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-md"
          >
            View Projects
          </button>

          <button
            onClick={() =>
              openLink(
                'https://drive.google.com/file/d/1O3npYy5-8G6WGX2Hp_Ne0ehI61O6ISgl/view?usp=sharing'
              )
            }
            className="border-2 border-[#7cd3d3] text-[#374151] px-6 py-3 rounded-lg font-semibold transition-all hover:bg-[#7cd3d3] hover:text-white"
          >
            Download Resume
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero

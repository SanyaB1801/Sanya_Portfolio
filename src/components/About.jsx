const About = () => {
  return (
    <section id="about" className="alt-section-gradient min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#146b80]">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              I'm a passionate AI/ML engineer currently pursuing my B.Tech in Artificial Intelligence and Machine
              Learning. With hands-on experience in quantum computing, cybersecurity, full-stack development, and AI
              automation tools, I love building innovative solutions that push the boundaries of technology.
            </p>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              My journey spans from developing AI-powered applications to exploring quantum algorithms, creating secure
              systems, and automating complex workflows. I'm particularly interested in the intersection of AI,
              quantum computing, and practical applications that can make a real-world impact.
            </p>
          </div>

          <div className="bg-gray-800 rounded-xl p-6 border border-violet-500/20 shadow-2xl">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 text-violet-400">🎓</div>
                <div>
                  <h3 className="font-semibold text-white">Education</h3>
                  <p className="text-gray-300">B.Tech in AI & ML</p>
                  <p className="text-sm text-gray-400">VIPS Technical Campus</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-6 h-6 text-violet-400">📅</div>
                <div>
                  <h3 className="font-semibold text-white">Duration</h3>
                  <p className="text-gray-300">2022 - 2026</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-6 h-6 text-violet-400">🏆</div>
                <div>
                  <h3 className="font-semibold text-white">CGPA</h3>
                  <p className="text-gray-300">8.8</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

const Experience = () => {
  const experiences = [
    {
      company: "Revv Growth",
      role: "AI Engineer Intern",
      duration: "Jul. 2025 – Present",
      location: "Remote",
      achievements: [
        "Worked with AI automation tools like Make and n8n to enhance marketing and productivity.",
        "Created 10+ automations to increase outreach, optimise SEO, and enhance overall working of the growth team.",
      ],
    },
    {
      company: "QRACE",
      role: "Quantum Intern",
      duration: "Dec. 2024 – Jan. 2025",
      location: "New Delhi, India",
      achievements: [
        "Built and tested 10+ quantum circuits and ran 5+ quantum algorithms on simulators like QPS and Qiskit, strengthening knowledge of quantum concepts",
        "Generated random numbers using hardware-based QRNGs and verified randomness with the NIST STS on 5+ RNG datasets",
      ],
    },
    {
      company: "IIT Guwahati",
      role: "Summer Intern",
      duration: "Jul. 2024 – Aug. 2024",
      location: "Guwahati, India",
      achievements: [
        "Worked under the guidance of a talented team of educators to enhance knowledge of secure coding, system security, and cybersecurity protocols",
        "Created, deployed and refined a Streamlit-based Phishing Email Detector using machine learning and NLP, achieving 95%+ detection accuracy on a dataset of 10,000+ emails",
      ],
    },
  ]

  return (
    <section id="experience" className="section-gradient min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#146b80]">
          Experience
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-xl p-6 border border-violet-500/20 shadow-2xl hover:border-violet-500/40 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl text-violet-400 font-bold">{exp.company}</h3>
                  <p className="text-lg font-semibold text-white">{exp.role}</p>
                </div>
                <div className="flex flex-col md:items-end mt-2 md:mt-0">
                  <div className="flex items-center gap-2 text-gray-300">
                    <span>📅</span>
                    <span>{exp.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300 mt-1">
                    <span>📍</span>
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>
              <ul className="space-y-3">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-violet-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-300 leading-relaxed">{achievement}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience

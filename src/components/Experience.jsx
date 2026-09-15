const Experience = () => {
  const experiences = [
    {
      company: "Avaya",
      role: "Automation and AI Implementation Intern",
      duration: "Feb. 2026 – Present",
      location: "Remote",
      achievements: [
        "Engineered partitioned data models and 28 custom SQL views in BigQuery across a 193M+ row enterprise HR dataset, using complex window functions to resolve multi-year data discrepancies.",
        "Built a real-time FastAPI backend powered by Google ADK and Gemini API, with 15-minute scheduled refreshes for live executive analytics.",
        "Automated 81% of recurring HR reporting using Google Apps Script and custom APIs, saving 35+ FTE hours monthly across 5 core enterprise reports.",
      ],
    },
    {
      company: "Revv Growth",
      role: "AI Engineer Intern",
      duration: "Jul. 2025 – Sep. 2025",
      location: "Remote",
      achievements: [
        "Designed and deployed 10+ automated AI workflows using Make, n8n, Gemini API, and custom webhooks for Sales, Marketing, SEO, PPC, and Content teams.",
        "Reduced business proposal generation time from 10+ hours to 10 minutes, boosting operational throughput by 85% while maintaining 98% accuracy.",
      ],
    },
    {
      company: "IIT Guwahati",
      role: "Summer Intern",
      duration: "Jul. 2024 – Aug. 2024",
      location: "Guwahati, India",
      achievements: [
        "Developed and deployed a Streamlit-based Phishing Email Detector using machine learning and NLP, achieving 95%+ accuracy on 10,000+ emails.",
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

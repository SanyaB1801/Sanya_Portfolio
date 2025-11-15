"use client"

const Certifications = () => {
  const certifications = [
    {
      title: "IBM SkillsBuild – From Learner to Builder: Become an AI Agent Architect",
      description:
        "Developed expertise in designing, building, and deploying AI-driven systems, with a focus on advanced AI architecture and real-world applications.",
      issuer: "IBM",
      icon: "🏆",
      certificateUrl:
        "https://skills.yourlearning.ibm.com/certificate/share/c91f3d3c0bewogICJvYmplY3RJZCIgOiAiUExBTi0zQjczNDdFNkQzQzAiLAogICJsZWFybmVyQ05VTSIgOiAiNDcxMDExNVJFRyIsCiAgIm9iamVjdFR5cGUiIDogIkFDVElWSVRZIgp910d901fddb-10",
    },
    {
      title: "IBM SkillsBuild – Unleashing the Power of AI Agents",
      description:
        "Explored the fundamentals and applications of AI agents, including their use in automation, natural language understanding, and decision-making systems.",
      issuer: "IBM",
      icon: "🏆",
      certificateUrl:
        "https://skills.yourlearning.ibm.com/certificate/share/53653eb5efewogICJvYmplY3RUeXBlIiA6ICJBQ1RJVklUWSIsCiAgImxlYXJuZXJDTlVNIiA6ICI0NzEwMTE1UkVHIiwKICAib2JqZWN0SWQiIDogIkFMTS1DT1VSU0VfMzgyNTQ1NiIKfQ7e055e55ca-10",
    },
    {
      title: "ChatGPT Prompt Engineering for Developers",
      description:
        "Gained hands-on experience in prompt engineering and understanding chatbots.",
      issuer: "Deep Learning AI",
      icon: "🤖",
      certificateUrl:
        "https://learn.deeplearning.ai/accomplishments/39f714c5-f230-4afc-85cc-44f2fce9b954?usp=sharing",
    },
    {
      title: "Postman API Fundamentals Student Expert",
      description:
        "Gained hands-on experience in designing, testing, and documenting APIs using Postman; demonstrated proficiency in using collections, environments, and automated testing workflows.",
      issuer: "Postman",
      icon: "📡",
      certificateUrl:
        "https://badgr.com/public/assertions/YQxrWaj1TWS2ERMUEN_KLQ",
    },
  ]

  const openLink = (url) => {
    window.open(url, "_blank", "noopener,noreferrer")
  }

  return (
    <section
      id="certifications"
      className="alt-section-gradient min-h-screen flex items-center justify-center px-4 py-20"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-12 text-[#146b80]">
          Certifications
        </h2>


        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-[#b3e8f6] rounded-xl p-6 border border-[rgba(122,211,211,0.3)] shadow-2xl hover:border-[rgba(122,211,211,0.6)] transition-all duration-300"
            >
              <div className="flex items-start gap-3 mb-4">
                <span className="text-2xl">{cert.icon}</span>
                <div>
                  <h3 className="text-lg font-bold leading-tight text-[#0f172a]">
                    {cert.title}
                  </h3>
                  <p className="text-[#4b5563] mt-1">{cert.issuer}</p>
                </div>
              </div>

              <p className="text-[#374151] leading-relaxed mb-4">
                {cert.description}
              </p>

              <button
                onClick={() => openLink(cert.certificateUrl)}
                className="bg-gradient-to-r from-[#54c0c0] to-[#6ac8cf] hover:from-[#48b4b4] hover:to-[#54c0c0] text-white px-4 py-2 rounded-lg text-sm transition-all duration-300 shadow-md"
              >
                🔗 View Certificate
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications

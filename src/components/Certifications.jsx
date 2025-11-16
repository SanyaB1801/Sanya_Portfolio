"use client"

const Certifications = () => {
  const certifications = [
    {
      title: "Pragati: Path to Future - Cohort 5",
      description:
        "Gained hands-on experience in Python, data science fundamentals, and collaborative software engineering practices.",
      issuer: "Infosys Springboard",
      icon: "🎓",
      certificateUrl:
        "https://www.linkedin.com/posts/sanya-behera_im-excited-to-share-that-ive-completed-activity-7374503328141062144-YpNv?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEYVnEsBSarwof4zhhrX2axL2JP7BQrKZQo",
    },
    {
      title: "IBM SkillsBuild – From Learner to Builder: Become an AI Agent Architect",
      description:
        "Developed expertise in designing, building, and deploying AI-driven systems, with a focus on advanced AI architecture and real-world applications.",
      issuer: "IBM",
      icon: "🏆",
      certificateUrl:
        "https://www.linkedin.com/posts/sanya-behera_successfully-completing-the-ibm-skillsbuild-activity-7366881734895788032-VSqe?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEYVnEsBSarwof4zhhrX2axL2JP7BQrKZQo",
    },
    {
      title: "IBM SkillsBuild – Unleashing the Power of AI Agents",
      description:
        "Explored the fundamentals and applications of AI agents, including their use in automation, natural language understanding, and decision-making systems.",
      issuer: "IBM",
      icon: "🏆",
      certificateUrl:
        "https://www.linkedin.com/posts/sanya-behera_im-happy-to-share-that-ive-obtained-a-new-activity-7348643324703952896-Ef8W?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEYVnEsBSarwof4zhhrX2axL2JP7BQrKZQo",
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
    {
      title: "2025 Quantum Program",
      description:
        "Built strong foundations in quantum computing and applying advanced quantum algorithms to real-world problem-solving.",
      issuer: "The Washington Institute for STEM, Entrepreneurship and Research",
      icon: "🔎",
      certificateUrl:
        "https://www.virtualbadge.io/certificate-validator?credential=0ae59204-efea-4ca6-a2f4-4471abc3867d",
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

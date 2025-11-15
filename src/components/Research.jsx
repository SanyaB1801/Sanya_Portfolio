"use client"

const Research = () => {
  const openLink = (url) => {
    window.open(url, "_blank", "noopener,noreferrer")
  }

  const researchItems = [
    {
      icon: "📚",
      title: "Magnetocaloric Effect: Fundamentals, Materials and Applications",
      presentedAt: "Presented at IC-AMSI 2024",
      description:
        "Presented a comprehensive review paper on the Magnetocaloric Effect with emphasis on refrigeration, power generation, and energy conversion applications. The research explores the fundamental principles, material properties, and practical implementations of magnetocaloric materials in various industrial applications.",
      tags: ["Materials Science", "Energy Conversion", "Refrigeration Technology"],
      paperUrl: "https://example.com/your-paper", // Replace with actual paper URL
    },
    {
      icon: "♿", // Icon for accessibility/wheelchair
      title:
        "Implementing Gesture Controlled Wheelchair Powered by Solar Energy for Differently Abled and People with Amputee",
      presentedAt: "International Conference on Electronics, AI, and Computing (EAIC 2025)",
      description:
        "This paper gave us the chance to explore how gesture recognition and solar energy can be combined to create more accessible and sustainable mobility solutions. The research focuses on developing an innovative wheelchair system that enhances independence for differently-abled individuals and amputees through intuitive gesture controls and eco-friendly solar power integration.",
      tags: ["Gesture Recognition", "Solar Energy", "Assistive Technology", "Mobility Solutions"],
      paperUrl: "https://example.com/your-eaic-paper-url", // Placeholder for the new paper URL
    },
  ]

  return (
    <section id="research" className="section-gradient min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#146b80]">
          Research & Publications
        </h2>

        <div className="max-w-4xl mx-auto space-y-8">
          {researchItems.map((item, index) => (
            <div key={index} className="bg-gray-900 rounded-xl p-6 border border-violet-500/20 shadow-2xl">
              <div className="flex items-start gap-3 mb-4">
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <h3 className="text-xl text-violet-400 font-bold leading-tight">{item.title}</h3>
                  <p className="text-gray-400 mt-2">{item.presentedAt}</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">{item.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {item.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 bg-violet-900/30 text-violet-300 text-sm rounded-full border border-violet-500/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <button
                onClick={() => openLink(item.paperUrl)}
                className="bg-[#146b80] text-white px-4 py-2 rounded-lg transition-all duration-300"
              >
                🔗 View Paper
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Research

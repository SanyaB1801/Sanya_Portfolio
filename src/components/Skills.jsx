const Skills = () => {
  const skillCategories = [
    {
      title: "Languages & Backends",
      icon: "💻",
      skills: ["Python", "SQL", "FastAPI", "Java", "C", "JavaScript", "React", "HTML/CSS"],
    },
    {
      title: "GenAI & Agentic Frameworks",
      icon: "🧠",
      skills: [
        "LangChain",
        "LangGraph",
        "CrewAI",
        "Gemini API",
        "RAG",
        "Google ADK",
        "PyTorch",
        "Hugging Face"
      ],
    },
    {
      title: "Data Engineering & ML",
      icon: "📊",
      skills: ["BigQuery", "Supabase", "Firebase", "Scikit-learn", "Pandas", "NumPy", "spaCy", "NLTK"],
    },
    {
      title: "Workflow Automation",
      icon: "⚙️",
      skills: ["n8n", "Make", "Power Automate", "Zapier", "Google Apps Script (GAS)"],
    },
  ]

  return (
    <section id="skills" className="section-gradient min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#146b80]">
            Technical Skills
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-900 rounded-xl p-6 border border-violet-500/20 shadow-2xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{category.icon}</span>
                <h3 className="text-xl text-violet-400 font-bold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-gradient-to-r from-violet-900/30 to-purple-900/30 text-gray-300 rounded-full text-sm border border-violet-500/20 hover:border-violet-500/40 transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

"use client"

const Projects = () => {
  const projects = [
    {
      title: "StyleTune: DL-Based Fashion-to-Music Recommender",
      date: "Apr. 2025",
      tech: ["Python", "Streamlit", "Gemini", "PIL"],
      description:
        "Built a Streamlit web app that uses Google Gemini AI to analyze outfit images and recommend personalized Spotify songs based on user mood and style.",
      achievements: [
        "Integrated Spotify and YouTube APIs to fetch 5000+ tracks with real-time playback",
        "Automated image enhancement suggestions improving user engagement by 20%",
      ],
      codeUrl: "https://github.com/sanyaB1801/styleTune/",
      demoUrl: "https://styletune.streamlit.app/",
      hasDemo: true,
    },
    {
      title: "Flexion: Your AI-Powered Fitness Coach",
      date: "Nov. 2024",
      tech: ["Python", "HTML", "CSS", "React"],
      description:
        "Developed a React-based interactive front-end for real-time posture correction, progress tracking, and adaptive workout recommendations.",
      achievements: [
        "Integrated AI using GPT-2 for dynamic workout planning and TensorFlow for pose estimation (90%+ accuracy)",
        "Ensured seamless FastAPI-based communication with 30% reduced response latency",
      ],
      codeUrl: "https://github.com/sanyaB1801/flexion/",
      hasDemo: false,
    },
    {
      title: "Financial News Sentiment Analysis",
      date: "Sep. 2024",
      tech: ["Python", "FinBERT", "PyTorch", "BeautifulSoup"],
      description:
        "Built a sentiment analysis pipeline using FinBERT to classify financial news sentiments and automated real-time news scraping from Yahoo Finance.",
      achievements: [
        "Automated real-time financial news scraping using BeautifulSoup for data acquisition",
        "Visualized sentiment distributions using matplotlib, seaborn, and pywaffle with various chart types",
      ],
      codeUrl: "https://github.com/SanyaB1801/Sentiment-Analysis-of-Financial-News-using-FinBERT",
      hasDemo: false,
    },
    {
      title: "Thyroid Disease Prediction",
      date: "Aug. 2024",
      tech: ["Python", "Scikit-learn", "Joblib"],
      description:
        "Developed a HistGradientBoostingClassifier model for predicting thyroid disease with high accuracy and comprehensive data preprocessing.",
      achievements: [
        "Achieved 98% accuracy with HistGradientBoostingClassifier model",
        "Evaluated performance with confusion matrix showing precision up to 1.00 and F1-scores averaging 0.97",
      ],
      codeUrl: "https://github.com/SanyaB1801/Thyroid-Disease-Prediction",
      hasDemo: false,
    },
    {
      title: "Phishing Email Detector",
      date: "Jul. 2024",
      tech: ["Python", "NLTK", "Streamlit", "Scikit-learn"],
      description:
        "Built a phishing email detection model with Streamlit interface, leveraging NLTK for preprocessing and TfidfVectorizer for feature extraction.",
      achievements: [
        "Trained Multinomial Naive Bayes classifier achieving high accuracy",
        "Implemented comprehensive text preprocessing with tokenization, stopwords removal, and lemmatization",
      ],
      codeUrl: "https://github.com/SanyaB1801/Phishing-Email-Detector",
      hasDemo: false,
    },
    {
      title: "Data Analysis of Tech Stocks",
      date: "Jun. 2024",
      tech: ["Python", "Matplotlib", "Seaborn", "Pandas"],
      description:
        "Analyzed stock information for various tech companies and created comprehensive visualizations to illustrate stock performance and trends.",
      achievements: [
        "Implemented 20-day and 50-day moving averages to identify price trends",
        "Created visualizations using Matplotlib and Seaborn including line plots, histograms, and heatmaps",
      ],
      codeUrl: "https://github.com/SanyaB1801/Data-Analysis-of-Tech-Stocks",
      hasDemo: false,
    },
    {
      title: "Automated Grading System in Python",
      date: "Apr. 2024",
      tech: ["Python", "SQL", "BERT", "PyTorch"],
      description:
        "Developed a Streamlit-based web application that automated grading, reducing manual effort by 70% and improving accuracy by 15% using a PyTorch BERT model.",
      achievements: [
        "Implemented K-means clustering to analyze 200+ student responses, enhancing feedback efficiency",
        "Used cosine similarity to achieve high grading consistency with human evaluations",
      ],
      codeUrl: "https://github.com/SanyaB1801/Automated-Grading-System",
      hasDemo: false,
    },
  ]

  const openLink = (url) => {
    window.open(url, "_blank", "noopener,noreferrer")
  }

  return (
    <section id="projects" className="alt-section-gradient min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#146b80]">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl p-6 border border-violet-500/20 shadow-2xl hover:border-violet-500/40 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                <span>📅</span>
                <span>{project.date}</span>
              </div>
              <h3 className="text-lg text-violet-400 font-bold leading-tight mb-3">{project.title}</h3>
              <div className="flex flex-wrap gap-1 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-violet-900/30 text-violet-300 text-xs rounded-full border border-violet-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>
              <ul className="space-y-2 mb-4">
                {project.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-violet-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-400 text-sm leading-relaxed">{achievement}</p>
                  </li>
                ))}
              </ul>
              <div className="flex gap-2">
                <button
                  onClick={() => openLink(project.codeUrl)}
                  className="bg-gray-700 hover:bg-gray-600 text-white px-3 py-1 rounded text-sm border border-violet-500/20 hover:border-violet-500/40 transition-all duration-300 flex items-center gap-1"
                >
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  Code
                </button>
                {project.hasDemo && (
                  <button
                    onClick={() => openLink(project.demoUrl)}
                    className="bg-gray-700 hover:bg-gray-600 text-white px-3 py-1 rounded text-sm border border-violet-500/20 hover:border-violet-500/40 transition-all duration-300"
                  >
                    🔗 Demo
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

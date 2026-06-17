import { projects } from "@/data/projects";

const skills = [
  {
    category: "Analytics & BI",
    items: ["Advanced Excel", "SQL", "Tableau", "Power BI", "Dashboarding"],
  },
  {
    category: "Python & ML",
    items: ["Python", "Pandas", "NumPy", "Scikit-Learn", "XGBoost", "CatBoost"],
  },
  {
    category: "Data Engineering",
    items: ["Polars", "Parquet", "Supabase", "PostgreSQL", "Data Cleaning"],
  },
  {
    category: "Deployment",
    items: ["FastAPI", "Streamlit", "Hugging Face", "Vercel", "GitHub Actions"],
  },
];

const experience = [
  {
    role: "Data Analyst Intern",
    company: "Central Tool Room & Training Centre, Bhubaneswar",
    period: "Jun 2024 - Jul 2024",
    points: [
      "Worked with structured datasets using Python, SQL, Advanced Excel, and Tableau.",
      "Created dashboards and reports to summarize trends, KPIs, and operational insights.",
      "Applied data cleaning, validation checks, and basic ML workflows for analysis tasks.",
    ],
  },
  {
    role: "Tool Design Intern",
    company: "Tata Sikorsky Aerospace Limited, Hyderabad",
    period: "Jun 2022 - May 2023",
    points: [
      "Prepared engineering documentation for aerospace fixture workflows.",
      "Worked in an on-site manufacturing environment with quality-focused process discipline.",
      "Built strong documentation, accuracy, and cross-functional coordination habits.",
    ],
  },
];

export default function Home() {
  const featuredProject = projects[0];
  const otherProjects = projects.slice(1);

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <nav className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="text-lg font-bold tracking-tight">
            Subrat Kumar Jena
          </a>

          <div className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            <a href="#projects" className="hover:text-cyan-400">
              Projects
            </a>
            <a href="#skills" className="hover:text-cyan-400">
              Skills
            </a>
            <a href="#experience" className="hover:text-cyan-400">
              Experience
            </a>
            <a href="#contact" className="hover:text-cyan-400">
              Contact
            </a>
          </div>

          <a
            href="/resume/Subrat_Kumar_Jena_Resume.pdf"
            target="_blank"
            className="rounded-lg bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            Resume
          </a>
        </div>
      </nav>

      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-[1.5fr_0.9fr] md:items-center">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Data Analyst | BI Analyst | Data Science Fresher
          </p>

          <h1 className="max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
            I turn messy data into dashboards, insights, and decision-ready ML systems.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            I am Subrat Kumar Jena, a B.Tech CSE AI student focused on data analytics,
            business intelligence, machine learning, and production-minded data projects.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              className="rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
              href="#projects"
            >
              View Projects
            </a>

            <a
              className="rounded-xl border border-slate-700 px-5 py-3 font-semibold text-white transition hover:border-cyan-400"
              href="/resume/Subrat_Kumar_Jena_Resume.pdf"
              target="_blank"
            >
              Download Resume
            </a>

            <a
              className="rounded-xl border border-slate-700 px-5 py-3 font-semibold text-white transition hover:border-cyan-400"
              href="https://github.com/Subrat-2003"
              target="_blank"
            >
              GitHub
            </a>

            <a
              className="rounded-xl border border-slate-700 px-5 py-3 font-semibold text-white transition hover:border-cyan-400"
              href="https://www.linkedin.com/in/subrat-kumar-jena-859011287/"
              target="_blank"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-sm font-semibold text-cyan-400">Open to roles</p>

          <div className="mt-4 space-y-3 text-slate-200">
            <p>Data Analyst</p>
            <p>BI Analyst</p>
            <p>Business Analyst</p>
            <p>Data Science Fresher</p>
          </div>

          <div className="mt-6 border-t border-slate-800 pt-6">
            <p className="text-sm font-semibold text-cyan-400">Location</p>
            <p className="mt-2 text-slate-300">India | Remote | Hybrid | Onsite</p>
          </div>

          <div className="mt-6 border-t border-slate-800 pt-6">
            <p className="text-sm font-semibold text-cyan-400">Strongest proof</p>
            <p className="mt-2 text-slate-300">
              60GB+ SEC filings processed into an explainable financial risk system.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-800 bg-slate-900/40">
        <div className="mx-auto grid max-w-6xl gap-4 px-6 py-8 md:grid-cols-4">
          {[
            ["60GB+", "SEC filings processed"],
            ["4.5x", "Lift over crash baseline"],
            ["0.81", "Macro F1 in credit model"],
            ["30-Day", "Runway forecasting"],
          ].map(([value, label]) => (
            <div key={label} className="rounded-2xl border border-slate-800 bg-slate-950 p-5">
              <p className="text-3xl font-bold text-cyan-400">{value}</p>
              <p className="mt-2 text-sm text-slate-400">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold">Featured Project</h2>
        <p className="mt-3 max-w-2xl text-slate-400">
          My strongest technical project across data engineering, ML, NLP, deployment, and explainability.
        </p>

        <article className="mt-10 overflow-hidden rounded-3xl border border-cyan-500/30 bg-slate-900/80">
          <div className="grid md:grid-cols-[1.15fr_1fr]">
            <div className="h-80 bg-slate-800 md:h-auto">
              <img
                src={featuredProject.image}
                alt={featuredProject.title}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="p-7">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
                Flagship Project
              </p>

              <h3 className="mt-3 text-3xl font-bold">{featuredProject.title}</h3>
              <p className="mt-2 text-cyan-300">{featuredProject.subtitle}</p>

              <p className="mt-5 leading-7 text-slate-300">{featuredProject.impact}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {featuredProject.metrics.map((metric) => (
                  <span
                    key={metric}
                    className="rounded-full bg-cyan-400/10 px-3 py-1 text-sm text-cyan-200"
                  >
                    {metric}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={featuredProject.github}
                  target="_blank"
                  className="rounded-xl border border-slate-700 px-4 py-2 text-sm font-semibold text-white hover:border-cyan-400"
                >
                  GitHub
                </a>

                <a
                  href={featuredProject.live}
                  target="_blank"
                  className="rounded-xl bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-cyan-300"
                >
                  Live Demo
                </a>
                <a
                  href={featuredProject.live}
                  target="_blank"
                  className="rounded-xl bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-cyan-300"
                  > Case Study
                </a>
              </div>
            </div>
          </div>
        </article>

        <h2 className="mt-16 text-3xl font-bold">Other Projects</h2>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {otherProjects.map((project) => (
            <article
              key={project.title}
              className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70"
            >
              <div className="h-48 bg-slate-800">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="p-5">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="mt-2 text-sm font-medium text-cyan-300">{project.subtitle}</p>
                <p className="mt-4 text-sm leading-6 text-slate-300">{project.description}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.metrics.map((metric) => (
                    <span
                      key={metric}
                      className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-200"
                    >
                      {metric}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex gap-4">
                  {project.github && (
                    <a
                      className="text-sm font-semibold text-cyan-400 hover:text-cyan-300"
                      href={project.github}
                      target="_blank"
                    >
                      GitHub
                    </a>
                  )}

                  {project.live && (
                    <a
                      className="text-sm font-semibold text-cyan-400 hover:text-cyan-300"
                      href={project.live}
                      target="_blank"
                    >
                      Live Demo
                    </a>
                  )}
                    <a
                    className="text-sm font-semibold text-cyan-400 hover:text-cyan-300"
                    href={`/projects/${project.slug}`}
                    > Case Study
                    </a>

                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold">Technical Skills</h2>
        <p className="mt-3 max-w-2xl text-slate-400">
          Organized around analytics, BI reporting, ML workflows, and deployable data systems.
        </p>

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {skills.map((group) => (
            <div key={group.category} className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
              <h3 className="font-bold text-cyan-300">{group.category}</h3>

              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="rounded-full bg-slate-800 px-3 py-1 text-sm text-slate-300">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold">Experience</h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {experience.map((item) => (
            <div key={item.role} className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
              <h3 className="text-xl font-bold">{item.role}</h3>
              <p className="mt-1 text-cyan-300">{item.company}</p>
              <p className="mt-1 text-sm text-slate-400">{item.period}</p>

              <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-300">
                {item.points.map((point) => (
                  <li key={point}>• {point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold">Education</h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h3 className="text-xl font-bold">B.Tech CSE, Artificial Intelligence</h3>
            <p className="mt-2 text-cyan-300">Gandhi Institute For Technology, Bhubaneswar</p>
            <p className="mt-2 text-slate-400">Expected Graduation: 2026 | CGPA: 7.9</p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h3 className="text-xl font-bold">Diploma in Tool & Die Making</h3>
            <p className="mt-2 text-cyan-300">Central Tool Room & Training Centre, Bhubaneswar</p>
            <p className="mt-2 text-slate-400">Completed: 2023 | 74.1%</p>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
          <h2 className="text-3xl font-bold">Open to Opportunities</h2>
          <p className="mt-4 max-w-2xl text-slate-300">
            Looking for Data Analyst, BI Analyst, Business Analyst, and Data Science fresher roles
            where I can work on reporting, analytics, dashboards, data pipelines, and ML systems.
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <a
              className="rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
              href="mailto:subratjena2911@gmail.com"
            >
              Email Me
            </a>

            <a
              className="rounded-xl border border-slate-700 px-5 py-3 font-semibold text-white transition hover:border-cyan-400"
              href="https://github.com/Subrat-2003"
              target="_blank"
            >
              GitHub
            </a>

            <a
              className="rounded-xl border border-slate-700 px-5 py-3 font-semibold text-white transition hover:border-cyan-400"
              href="https://www.linkedin.com/in/subrat-kumar-jena-859011287/"
              target="_blank"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
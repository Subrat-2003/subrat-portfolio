import { projects } from "@/data/projects";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
          Data Analyst | BI Analyst | Data Science Fresher
        </p>

        <h1 className="max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
          I build data products that turn messy datasets into decision-ready systems.
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
            href="https://github.com/Subrat-2003"
            target="_blank"
          >
            GitHub
          </a>

          <a
            className="rounded-xl border border-slate-700 px-5 py-3 font-semibold text-white transition hover:border-cyan-400"
            href="https://www.linkedin.com/"
            target="_blank"
          >
            LinkedIn
          </a>

          <a
            className="rounded-xl border border-slate-700 px-5 py-3 font-semibold text-white transition hover:border-cyan-400"
            href="mailto:subratskj2003@gmail.com"
          >
            Email
          </a>
        </div>
      </section>

      <section className="border-y border-slate-800 bg-slate-900/40">
        <div className="mx-auto grid max-w-6xl gap-4 px-6 py-8 md:grid-cols-4">
          {[
            ["60GB+", "SEC filings processed"],
            ["4.5x", "Lift over crash baseline"],
            ["0.81", "Macro F1 in credit model"],
            ["30-Day", "Freelancer runway forecasting"],
          ].map(([value, label]) => (
            <div key={label} className="rounded-2xl border border-slate-800 bg-slate-950 p-5">
              <p className="text-3xl font-bold text-cyan-400">{value}</p>
              <p className="mt-2 text-sm text-slate-400">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold">Featured Projects</h2>
        <p className="mt-3 max-w-2xl text-slate-400">
          Selected work across financial risk, forecasting, model validation, and dashboarding.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70"
            >
              <div className="h-56 bg-slate-800">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="p-6">
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

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span key={tech} className="text-xs text-slate-400">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex gap-4">
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
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold">Technical Skills</h2>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          {[
            "Python",
            "SQL",
            "Advanced Excel",
            "Tableau",
            "Power BI",
            "Pandas",
            "Scikit-Learn",
            "XGBoost",
            "CatBoost",
            "FastAPI",
            "Polars",
            "Supabase",
            "Streamlit",
            "GitHub Actions",
            "Data Cleaning",
            "Dashboarding",
          ].map((skill) => (
            <div key={skill} className="rounded-xl border border-slate-800 bg-slate-900 p-4">
              <p className="font-medium text-slate-200">{skill}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
          <h2 className="text-3xl font-bold">Open to Opportunities</h2>
          <p className="mt-4 max-w-2xl text-slate-300">
            Looking for Data Analyst, BI Analyst, Business Analyst, and Data Science fresher roles
            where I can work on reporting, analytics, dashboards, data pipelines, and ML systems.
          </p>

          <a
            className="mt-6 inline-block rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
            href="mailto:subratskj2003@gmail.com"
          >
            Contact Me
          </a>
        </div>
      </section>
    </main>
  );
}
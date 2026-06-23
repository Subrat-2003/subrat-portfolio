import { projects } from "@/data/projects";
import Link from "next/link";
import { notFound } from "next/navigation";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found | Subrat Kumar Jena",
    };
  }

  return {
    title: `${project.title} | Subrat Kumar Jena`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <nav className="border-b border-slate-800 bg-slate-950">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-lg font-bold">
            Subrat Jena
          </Link>

          <Link href="/#projects" className="text-sm font-semibold text-cyan-400">
            Back to Projects
          </Link>
        </div>
      </nav>

      <section className="mx-auto max-w-6xl px-6 py-14">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
          Project Case Study
        </p>

        <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
          {project.title}
        </h1>

        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
          {project.impact}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          {project.metrics.map((metric) => (
            <span
              key={metric}
              className="rounded-full bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200"
            >
              {metric}
            </span>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              className="rounded-xl border border-slate-700 px-5 py-3 font-semibold text-white hover:border-cyan-400"
            >
              GitHub
            </a>
          )}

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              className="rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950 hover:bg-cyan-300"
            >
              Live Demo
            </a>
          )}
        </div>

        <div className="mt-10 overflow-hidden rounded-3xl border border-slate-800 bg-slate-900">
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-6 pb-16 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-2xl font-bold">Problem</h2>
          <p className="mt-4 leading-7 text-slate-300">{project.caseStudy.problem}</p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-2xl font-bold">Data</h2>
          <p className="mt-4 leading-7 text-slate-300">{project.caseStudy.data}</p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-2xl font-bold">Approach</h2>
          <ul className="mt-4 space-y-3 text-slate-300">
            {project.caseStudy.approach.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-2xl font-bold">Results</h2>
          <ul className="mt-4 space-y-3 text-slate-300">
            {project.caseStudy.results.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 md:col-span-2">
          <h2 className="text-2xl font-bold">Lessons Learned</h2>
          <ul className="mt-4 grid gap-3 text-slate-300 md:grid-cols-3">
            {project.caseStudy.lessons.map((item) => (
              <li key={item} className="rounded-xl bg-slate-950 p-4">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 md:col-span-2">
          <h2 className="text-2xl font-bold">Tech Stack</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-slate-800 px-3 py-1 text-sm text-slate-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        {project.collaborator && (
  <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 md:col-span-2">
    <h2 className="text-2xl font-bold">Collaborator</h2>

    <div className="mt-4 space-y-4">
      {project.collaborator.map(
        (
          person: {
            name: string;
            role: string;
            linkedin: string;
          }
        ) => (
          <div
            key={person.name}
            className="rounded-xl bg-slate-950 p-4"
          >
            <p className="font-semibold">{person.name}</p>

            <p className="mt-1 text-slate-400">
              {person.role}
            </p>

            <a
              href={person.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-cyan-400 hover:text-cyan-300"
            >
              LinkedIn Profile
            </a>
          </div>
        )
      )}
    </div>
  </div>
)}

      </section>
    </main>
  );
}
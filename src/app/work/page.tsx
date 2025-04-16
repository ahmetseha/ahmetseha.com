import Container from "@/components/shared/container"

export default function Work() {
  return (
    <main className="prose prose-neutral dark:prose-invert">
      <header>
        <p>
          On a mission to create impactful applications that engage users and
          drive value for businesses. Here's a summary of my journey so far.
        </p>
        <hr className="my-6 border-neutral-200 dark:border-neutral-800" />
      </header>

      <section>
        <article>
          <header>
            <h2 className="font-medium text-2xl mb-1 tracking-tighter">
              Alışgidiş
            </h2>
            <time className="text-neutral-600 dark:text-neutral-400 text-sm">
              Software Developer, 2025 — present
            </time>
          </header>
          <p>
            At Alışgidiş, I work on developing e-commerce solutions including
            both web and mobile applications. We focus on creating modern,
            scalable, and user-friendly platforms using cutting-edge
            technologies.
          </p>
          <ul className="list-disc">
            <li>
              Developing e-commerce web applications and mobile applications
            </li>
            <li>
              Building robust solutions using Next.js, TypeScript, and Tailwind
              CSS
            </li>
            <li>Implementing modern UI components with shadcn</li>
            <li>Creating responsive and performant user interfaces</li>
          </ul>
        </article>

        <article className="mt-8">
          <header>
            <h2 className="font-medium text-2xl mb-1 tracking-tighter">
              Gordion
            </h2>
            <time className="text-neutral-600 dark:text-neutral-400 text-sm">
              Software Developer, 2022 — 2025
            </time>
          </header>
          <p>
            At Gordion, a company operating in the tourism sector, I contributed
            to the development of both B2B and B2C applications tailored to our
            users' needs. My role focused on delivering seamless and visually
            appealing user experiences using modern web technologies.
          </p>
          <ul className="list-disc">
            <li className="">
              Developed and maintained scalable B2B and B2C applications,
              ensuring optimal performance and user satisfaction.
            </li>
            <li>
              Leveraged technologies such as React, Next.js, and jQuery to build
              dynamic and responsive interfaces.
            </li>
            <li>
              Utilized shadcn and Tailwind CSS for efficient and customizable
              design implementations.
            </li>
            <li>
              Collaborated with cross-functional teams to deliver high-quality,
              user-focused solutions.
            </li>
            <li>
              Continuously improved existing systems, incorporating feedback and
              optimizing workflows to meet business goals.
            </li>
          </ul>
        </article>
      </section>
    </main>
  )
}

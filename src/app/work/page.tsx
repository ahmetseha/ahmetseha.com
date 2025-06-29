import Container from "@/components/shared/container";

export default function Work() {
  return (
    <main className="space-y-6">
      <div className="flex flex-col items-center justify-center space-y-4">
        <div className="space-y-2">
          <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Creating impactful applications that engage users and drive business
            value.
          </p>
        </div>
      </div>

      <section className="space-y-8">
        <article>
          <header className="mb-4">
            <h2 className="text-2xl font-bold tracking-tighter font-sans">
              Alışgidiş
            </h2>
            <time className="text-sm text-muted-foreground font-sans">
              Frontend Developer, 2025 — present
            </time>
          </header>
          <p className="text-sm text-muted-foreground font-sans mb-4">
            Developing <strong>e-commerce solutions</strong> for web and mobile
            platforms. Focus on <strong>scalable, user-friendly</strong>{" "}
            applications using cutting-edge technologies.
          </p>
          <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground font-sans">
            <li>
              <strong>Next.js</strong> & <strong>TypeScript</strong> for robust
              web applications
            </li>
            <li>
              <strong>Mobile app development</strong> for cross-platform
              solutions
            </li>
            <li>
              <strong>shadcn/ui</strong> components for modern interfaces
            </li>
            <li>
              <strong>Performance optimization</strong> and responsive design
            </li>
          </ul>
        </article>

        <article>
          <header className="mb-4">
            <h2 className="text-2xl font-bold tracking-tighter font-sans">
              Gordion
            </h2>
            <time className="text-sm text-muted-foreground font-sans">
              Frontend Developer, 2022 — 2025
            </time>
          </header>
          <p className="text-sm text-muted-foreground font-sans mb-4">
            Built <strong>B2B and B2C applications</strong> in the tourism
            sector. Delivered <strong>seamless user experiences</strong> with
            modern web technologies.
          </p>
          <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground font-sans">
            <li>
              <strong>Scalable applications</strong> ensuring optimal
              performance
            </li>
            <li>
              <strong>React</strong>, <strong>Next.js</strong> &{" "}
              <strong>jQuery</strong> for dynamic interfaces
            </li>
            <li>
              <strong>Tailwind CSS</strong> & <strong>shadcn</strong> for
              efficient design
            </li>
            <li>
              <strong>Cross-functional collaboration</strong> for high-quality
              solutions
            </li>
            <li>
              <strong>System optimization</strong> and workflow improvements
            </li>
          </ul>
        </article>
      </section>
    </main>
  );
}

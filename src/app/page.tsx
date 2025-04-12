import Link from "next/link";
import { Github, Mail, Twitter } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 py-8">
      <section className="flex flex-col items-center justify-center text-center">
        <h1 className="text-5xl font-bold mb-4">Ahmet Seha</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mb-8">
          Yazılım geliştirici ve teknoloji tutkunu
        </p>
        <div className="flex gap-4">
          <Link
            href="https://github.com/ahmetseha"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Github size={24} />
          </Link>
          <Link
            href="mailto:contact@ahmetseha.com"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail size={24} />
          </Link>
          <Link
            href="https://twitter.com/ahmetseha"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Twitter size={24} />
          </Link>
        </div>
      </section>
      <section className="space-y-8">
        <h2 className="text-3xl font-bold">Yetenekler</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Frontend</h3>
            <div className="flex flex-wrap gap-2">
              {[
                "HTML5",
                "CSS3",
                "JavaScript",
                "TypeScript",
                "React",
                "Next.js",
                "Tailwind CSS",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-muted rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Backend</h3>
            <div className="flex flex-wrap gap-2">
              {[
                "Node.js",
                "Express",
                "MongoDB",
                "PostgreSQL",
                "GraphQL",
                "REST API",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-muted rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="space-y-8">
        <h2 className="text-3xl font-bold">İletişim</h2>
        <p className="text-lg text-muted-foreground">
          Benimle iletişime geçmek için aşağıdaki kanalları kullanabilirsiniz.
        </p>
        <div className="flex gap-4">
          <Link
            href="mailto:contact@ahmetseha.com"
            className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
          >
            E-posta Gönder
          </Link>
          <Link
            href="https://github.com/ahmetseha"
            className="px-4 py-2 border border-input bg-background rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            GitHub
          </Link>
        </div>
      </section>
    </div>
  );
}

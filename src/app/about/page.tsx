import Link from "next/link"
import { Github, Mail, Twitter } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">Hakkımda</h1>
        <p className="text-lg text-muted-foreground">
          Merhaba, ben Ahmet Seha. Yazılım geliştirici ve teknoloji tutkunuyum.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Kimim Ben?</h2>
        <p className="text-muted-foreground">
          Ben bir yazılım geliştiricisiyim ve modern web teknolojileri ile
          çalışmayı seviyorum. React, Next.js, TypeScript ve Tailwind CSS gibi
          teknolojilerle çalışmaktan keyif alıyorum.
        </p>
        <p className="text-muted-foreground">
          Yazılım geliştirme dışında, teknoloji bloglarını takip etmeyi, yeni
          araçlar ve kütüphaneler denemeyi ve açık kaynak projelere katkıda
          bulunmayı seviyorum.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Yetenekler</h2>
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
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">İletişim</h2>
        <p className="text-muted-foreground">
          Benimle iletişime geçmek için aşağıdaki kanalları kullanabilirsiniz.
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
      </div>
    </div>
  )
}

import Link from "next/link";
import { GithubIcon, Mail, TwitterIcon, LinkedinIcon } from "lucide-react";

export function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center">
      <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
        Ahmet Seha
      </h1>
      <p className="text-xl text-muted-foreground max-w-2xl mb-8">
        Software Developer & Technology Enthusiast
      </p>
      <div className="flex gap-4">
        <Link
          href="https://github.com/ahmetseha"
          target="_blank"
          className="p-2 hover:bg-accent rounded-lg transition-colors"
        >
          <GithubIcon className="w-6 h-6" />
        </Link>
        <Link
          href="https://twitter.com/ahmetseha"
          target="_blank"
          className="p-2 hover:bg-accent rounded-lg transition-colors"
        >
          <TwitterIcon className="w-6 h-6" />
        </Link>
        <Link
          href="https://linkedin.com/in/ahmetseha"
          target="_blank"
          className="p-2 hover:bg-accent rounded-lg transition-colors"
        >
          <LinkedinIcon className="w-6 h-6" />
        </Link>
        <Link
          href="mailto:ahmetseha@example.com"
          className="p-2 hover:bg-accent rounded-lg transition-colors"
        >
          <Mail className="w-6 h-6" />
        </Link>
      </div>
    </section>
  );
}

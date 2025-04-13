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
      </section>
    </div>
  );
}

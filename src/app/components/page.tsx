import Image from "next/image";

const dummyProjects = [
  {
    title: "story-craft",
    date: "21.06.2025",
    image: "/story-craft.png",
    link: "https://story-craft-drab.vercel.app/ ",
  },
  {
    title: "path-way-app",
    date: "16.06.2025",
    image: "/next.svg",
    link: "https://github.com/ahmetseha/path-way-app",
  },
  {
    title: "tr-slugify",
    date: "16.05.2025",
    image: "/next.svg",
    link: "https://github.com/ahmetseha/tr-slugify",
  },
];

export default function ComponentsPage() {
  return (
    <div className="w-full flex flex-col items-center py-10">
      <div className="w-full max-w-5xl px-2">
        <h1 className="text-3xl font-bold mb-8">Components</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {dummyProjects.map((project, idx) => (
            <a
              key={idx}
              href={project.link}
              className="group block border border-white/10 rounded-xl bg-white/5 p-4 shadow-md hover:border-white/20 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="relative w-full h-44 bg-black rounded-lg overflow-hidden flex items-center justify-center mb-4">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <div className="font-semibold text-lg mb-1 truncate group-hover:underline">
                  {project.title}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

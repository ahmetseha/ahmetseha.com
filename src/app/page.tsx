import Image from "next/image"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-3.5rem)]">
      <h1 className="text-4xl font-bold mb-4">Ahmet Seha</h1>
      <p className="text-lg text-muted-foreground text-center max-w-2xl">
        Yazılım geliştirici ve teknoloji tutkunu
      </p>
    </div>
  )
}

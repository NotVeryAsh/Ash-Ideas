import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center space-y-10">
        <h1 className="text-6xl font-bold">Ash&apos;s ideas</h1>
        <p className="text-2xl text-slate-600">Built in Next.js and Laravel</p>
        <Link href={"login"} className="bg-purple-500 hover:bg-purple-700 font-bold py-2 px-4 rounded">
            See projects
        </Link>
    </main>
  )
}

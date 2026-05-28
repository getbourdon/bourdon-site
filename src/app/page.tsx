export default function Home() {
  return (
    <main className="flex-1 flex flex-col">
      <section className="flex flex-1 items-center justify-center px-8 py-32">
        <div className="max-w-2xl w-full">
          <h1 className="font-sans text-[12rem] leading-none tracking-tight text-zinc-100 select-none">
            b
          </h1>
          <p className="mt-8 text-xl text-zinc-400 max-w-lg leading-relaxed">
            bourdon — cross-agent memory federation. One glossary, many
            runtimes. Local-first.
          </p>
          <div className="mt-12 font-mono text-sm text-zinc-500">
            <code className="block px-4 py-3 bg-zinc-950 border border-zinc-900 rounded-md text-zinc-300">
              pip install bourdon
            </code>
          </div>
        </div>
      </section>

      <footer className="px-8 py-8 border-t border-zinc-900 text-sm text-zinc-500 flex justify-between">
        <span>BSL 1.1</span>
        <a
          href="https://github.com/getbourdon/bourdon"
          className="hover:text-zinc-300"
        >
          github
        </a>
      </footer>
    </main>
  );
}

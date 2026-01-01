import Button from "../ui/Button";

export default function Header() {
  return (
    <main className="flex min-h-[80vh] items-center">
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold py-5">
          Think better.
          <br />
          Remember <span className="text-primary">Everything</span>.
        </h1>

        <p className="text-zinc-500 py-4 max-w-2xl font-light">
          NeuroNote is an AI-powered second brain for developers and creators —
          capture ideas, connect knowledge, and turn thoughts into action.
        </p>

        <div className="py-5">
          <Button variant="primary">Get Started Free</Button>
        </div>
      </div>
    </main>
  );
}

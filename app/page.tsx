// app/page.tsx
import ChatKitPanel from '@/components/ChatKitPanel';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-slate-900 flex flex-col items-center">
      {/* Header: title and tagline */}
      <header className="w-full max-w-3xl px-4 py-10 text-center">
        <h1 className="text-4xl font-bold mb-2">Pepper Pike Professor</h1>
        <p className="text-base text-slate-600">
          Hi, I’m Charlie — your friendly local professor. Ask me about our city, its history,
          or anything school‑related.
        </p>
      </header>

      {/* Info section */}
      <main className="w-full max-w-3xl px-4 flex flex-col gap-6">
        <section className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-2">What is this?</h2>
          <p className="text-sm text-slate-700 mb-2">
            Pepper Pike Professor is a conversational assistant built to help
            residents and students with quick, accurate information about our city and school.
          </p>
          <ul className="list-disc list-inside text-sm text-slate-700 space-y-1">
            <li>Ask clear questions about Pepper Pike, school events, or local history.</li>
            <li>Mention if you want sources, examples, or a simple explanation.</li>
            <li>All conversations remain private; no personal data is stored.</li>
          </ul>
        </section>

        {/* Chat panel */}
        <section className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-3">Start chatting</h2>
          <p className="text-sm text-slate-500 mb-4">
            Try: <em>“Tell me about the history of Pepper Pike.”</em>
          </p>
          {/* The ChatKitPanel component handles the chat UI */}
          <ChatKitPanel />
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full max-w-3xl px-4 py-6 text-center text-xs text-slate-500 mt-auto">
        Built by Charlie Martin for Pepper Pike • Beta version
      </footer>
    </div>
  );
}

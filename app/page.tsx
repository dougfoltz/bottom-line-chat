'use client'

import { useState } from 'react'
import Chat from '../components/Chat'

export default function Page() {
  const [started, setStarted] = useState(false)

  return (
    <main>
      <section className="container-narrow py-14 sm:py-20">
        {!started ? (
          <div className="flex flex-col items-center gap-8">
            <div className="text-center space-y-2">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">AI Assistant</h2>
              <p className="text-slate-600">Focused on one task: crafting your sermon’s bottom line.</p>
            </div>
            <button
              onClick={() => setStarted(true)}
              className="card cursor-pointer select-none px-6 py-8 max-w-md w-full text-center hover:shadow-lg transition"
              aria-label="Start conversation"
            >
              <p className="text-slate-700 text-lg">Help me write my bottom line</p>
            </button>
          </div>
        ) : (
          <Chat />
        )}
      </section>
    </main>
  )
}

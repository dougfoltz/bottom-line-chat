'use client'

import { useEffect, useRef, useState } from 'react'

type Msg = { role: 'user' | 'assistant', content: string }

export default function Chat() {
  const [messages, setMessages] = useState<Msg[]>([
    { role: 'assistant', content: "Paste your sermon notes, and I’ll generate ten bottom line statements using the PREACH framework." }
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const scroller = useRef<HTMLDivElement>(null)

  useEffect(() => {
    scroller.current?.scrollTo({ top: scroller.current.scrollHeight, behavior: 'smooth' })
  }, [messages, loading])

  const sendMessage = async () => {
    const trimmed = input.trim()
    if (!trimmed) return
    const newMessages = [...messages, { role: 'user', content: trimmed } as Msg]
    setMessages(newMessages)
    setInput('')
    setLoading(true)
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessages })
      })
      const data = await res.json()
      setMessages([...newMessages, { role: 'assistant', content: data.content }])
    } catch (e) {
      setMessages([...newMessages, { role: 'assistant', content: 'Something went wrong. Try again.' }])
    } finally {
      setLoading(false)
    }
  }

  const onKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  return (
    <div className="container-narrow">
      <div className="card p-4 sm:p-6">
        <div ref={scroller} className="h-[520px] overflow-y-auto space-y-3 p-2 sm:p-3 bg-white rounded-2xl border">
          {messages.map((m, i) => (
            <div key={i} className={`p-3 sm:p-4 rounded-2xl shadow-soft ${m.role === 'user' ? 'chat-user ml-auto max-w-[85%] text-right' : 'chat-assistant mr-auto max-w-[85%] text-left'}`}>
              <div className="whitespace-pre-wrap leading-relaxed">{m.content}</div>
            </div>
          ))}
          {loading && <div className="p-3 rounded-2xl chat-assistant mr-auto w-44 animate-pulse">Thinking…</div>}
        </div>

        <div className="mt-4 flex gap-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={onKey}
            className="flex-1 border rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-300"
            placeholder="Paste notes or ask to tweak a line (e.g., “make #3 shorter”)"
            aria-label="Message input"
          />
          <button onClick={sendMessage} className="btn-primary" disabled={loading}>
            Send
          </button>
        </div>
      </div>
    </div>
  )
}

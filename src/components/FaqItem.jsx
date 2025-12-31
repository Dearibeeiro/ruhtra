import { useState } from "react"

export default function FaqItem({ pergunta, resposta }) {
  const [aberto, setAberto] = useState(false)

  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button
        onClick={() => setAberto(!aberto)}
        className="w-full flex justify-between items-center px-6 py-4 text-left font-medium text-gray-800 hover:bg-gray-50 transition"
      >
        {pergunta}
        <span className="text-[#2f87ed] text-xl">
          {aberto ? "−" : "+"}
        </span>
      </button>

      {aberto && (
        <div className="px-6 pb-5 text-gray-600 leading-relaxed">
          {resposta}
        </div>
      )}
    </div>
  )
}

import { useState } from "react"
import { QRCodeCanvas } from "qrcode.react"

export default function ModalCheckout({
  mostrar,
  onClose,
  pacoteSelecionado,
  tipo,
}) {
  const [plataforma, setPlataforma] = useState(null)
  const [perfil, setPerfil] = useState("")
  const [confirmouPerfil, setConfirmouPerfil] = useState(false)

  if (!mostrar) return null

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-8 w-full max-w-sm text-center">

        {/* TÍTULO */}
        {!confirmouPerfil && (
          <>
            <h2 className="text-2xl font-extrabold mb-4">
              Onde você quer crescer?
            </h2>

            <p className="text-gray-600 mb-6">
              Escolha a plataforma e informe o perfil
            </p>
          </>
        )}

        {/* BOTÕES */}
        {!confirmouPerfil && (
          <div className="flex flex-col gap-4 mb-6">
            <button
              onClick={() => setPlataforma("Instagram")}
              className={`border-2 py-3 rounded-xl font-semibold transition ${plataforma === "Instagram"
                  ? "bg-slate-900 text-white border-slate-900"
                  : "border-slate-900 text-slate-100 hover:bg-[#2f87ed] hover:text-white"
                }`}
            >
              Instagram
            </button>

            <button
              onClick={() => setPlataforma("TikTok")}
              className={`border-2 py-3 rounded-xl font-semibold transition ${plataforma === "TikTok"
                  ? "bg-slate-900 text-white border-slate-900"
                  : "border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white"
                }`}
            >
              TikTok
            </button>
          </div>
        )}

        {/* PERFIL */}
        {plataforma && !confirmouPerfil && (
          <div className="mb-6 text-left">
            <label className="block text-sm text-gray-600 mb-2">
              Perfil do {plataforma}
            </label>

            <input
              type="text"
              placeholder="@seuperfil"
              value={perfil}
              onChange={(e) => setPerfil(e.target.value)}
              className="w-full border-2 border-gray-300 rounded-xl px-4 py-3 mb-4 focus:outline-none focus:border-slate-900"
            />

          </div>
        )}

        {/* PIX */}
        {confirmouPerfil && (
          <>
            <div className="bg-gray-100 rounded-xl p-4 mb-4">
              <p className="text-sm text-gray-500">Chave PIX</p>
              <p className="font-semibold select-all">email@pix.com</p>
            </div>

            <div className="bg-gray-100 rounded-xl p-4 mb-6">
              <p className="font-semibold">
                {pacoteSelecionado?.qtd} seguidores
              </p>

              <p className="text-sm text-gray-600">
                {tipo === "brasil"
                  ? "Seguidores brasileiros"
                  : "Seguidores mundiais"}
              </p>

              <p className="text-sm text-gray-600">
                Plataforma: {plataforma}
              </p>

              <p className="text-sm text-gray-600">
                Perfil: {perfil}
              </p>

              <p className="font-bold mt-2">
                {pacoteSelecionado?.preco}
              </p>

              <div className="flex justify-center my-6">
                <QRCodeCanvas
                  value={`Pagamento
${pacoteSelecionado?.qtd} seguidores
Tipo: ${tipo}
Plataforma: ${plataforma}
Perfil: ${perfil}
Valor: ${pacoteSelecionado?.preco}
PIX: email@pix.com`}
                  size={200}
                />
              </div>
            </div>

            <a
              href={`https://wa.me/5575992277190?text=Pagamento confirmado`}
              target="_blank"
              className="block bg-slate-900 text-white py-3 rounded-xl font-semibold"
            >
              Já fiz o pagamento
            </a>
          </>
        )}

        <button
          onClick={onClose}
          className="mt-6 text-sm text-gray-500 hover:text-gray-800"
        >
          Cancelar
        </button>

      </div>
    </div>
  )
}

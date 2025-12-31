import { useState } from "react"
import { Link } from "react-router-dom"
import { QRCodeCanvas } from "qrcode.react"
import { useNavigate } from "react-router-dom"


const pacotes = {
  mundial: [
    { qtd: 100, preco: "R$ 4,00", destaque: "Mais barato" },
    { qtd: 500, preco: "R$ 18,00" },
    { qtd: 1000, preco: "R$ 34,00", destaque: "Mais popular" },
    { qtd: 3000, preco: "R$ 98,00" },
    { qtd: 5000, preco: "R$ 158,00" },
    { qtd: 10000, preco: "R$ 299,00" },
  ],
  brasil: [
    { qtd: 100, preco: "R$ 8,00" },
    { qtd: 500, preco: "R$ 36,00" },
    { qtd: 1000, preco: "R$ 68,00", destaque: "Mais vendido" },
    { qtd: 3000, preco: "R$ 196,00" },
    { qtd: 5000, preco: "R$ 316,00" },
    { qtd: 10000, preco: "R$ 598,00" },
  ],
}

export default function Pacotes() {
  const [tipo, setTipo] = useState("mundial")
  const [mostrarModal, setMostrarModal] = useState(false)
  const [pacoteSelecionado, setPacoteSelecionado] = useState(null)
  const [plataforma, setPlataforma] = useState(null)
  const [perfil, setPerfil] = useState("")
  const [confirmouPerfil, setConfirmouPerfil] = useState(false)
  const navigate = useNavigate()
  const pixPayload = `
Pagamento Ruhtra
${pacoteSelecionado?.qtd} seguidores
Plataforma: ${plataforma}
Valor: ${pacoteSelecionado?.preco}
Chave PIX: email@pix.com
`
  return (
    <section className="min-h-screen bg-[#ffffff] px-6 py-20">

      {/* Título */}
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-600">
          Escolha o plano ideal para o seu objetivo
        </h1>

        <p className="mt-4 text-gray-600">
          Comece com seguidores mundiais ou escolha brasileiros para uma maior relevância.
        </p>
      </div>

      {/* Botões de tipo */}
      <div className="mt-12 flex justify-center gap-6">
        <button
          onClick={() => setTipo("mundial")}
          className={`w-48 h-20 rounded-2xl border-2 transition ${tipo === "mundial"
            ? "bg-[#2f87ed] text-white border-[#2f87ed]"
            : "bg-white text-gray-700 hover:text-[#2f87ed] transition border-gray-300 hover:border-[#2f87ed]"
            }`}
        >
          <p className="text-xl font-extrabold">Mundial</p>
          <p className="text-sm opacity-80">Mais acessível</p>
        </button>

        <button
          onClick={() => setTipo("brasil")}
          className={`w-48 h-20 rounded-2xl border-2 transition ${tipo === "brasil"
            ? "bg-[#2f87ed] text-white border-[#2f87ed]"
            : "bg-white text-gray-700 hover:text-[#2f87ed] transition border-gray-300 hover:border-[#2f87ed] "
            }`}
        >
          <p className="text-xl font-extrabold">Brasil</p>
          <p className="text-sm opacity-80">Mais relevância</p>
        </button>
      </div>

      {/* Pacotes */}
      <div className="mt-16 grid gap-8 max-w-5xl mx-auto sm:grid-cols-2 lg:grid-cols-3 ">
        {pacotes[tipo].map((pacote) => (
          <div
            key={pacote.qtd}
            className={`bg-white border rounded-2xl p-8 text-center shadow-sm  transition-all
    duration-300
    ease-out
    transform
    hover:scale-105
    hover:shadow-xl ${pacote.destaque ? "border-slate-900 scale-[1.03] " : ""
              }`}
          >
            {pacote.destaque && (
              <span className="inline-block mb-4 text-xs font-bold uppercase tracking-wide bg-[#0255b4] text-white px-3 py-1 rounded-full ring-2 ring-[#2f87ed]/30
">
                {pacote.destaque}
              </span>
            )}

            <h2 className="text-2xl font-extrabold text-[#2f87ed]">
              {pacote.qtd.toLocaleString()} seguidores
            </h2>

            <p className="mt-4 text-3xl font-extrabold text-[#053366]">
              {pacote.preco}
            </p>

            <p className="mt-2 text-sm text-gray-500">
              Início em até 24h
            </p>

            <button
              onClick={() => {
                setPacoteSelecionado(pacote)
                setMostrarModal(true)
              }}
              className="  w-full
   w-full
  mt-6
  bg-[#2f87ed]
  text-white
  py-4
  rounded-xl
  text-lg
  font-semibold
  transition
  hover:bg-[#14559f]
  shadow-md"
            >
              Comprar agora
            </button>


          </div>
        ))}
      </div>
      {/* Botão de dúvidas */}
      <div className="mt-20 text-center">
        <p className="text-gray-600 mb-4">
          Ficou com alguma dúvida antes de comprar?
        </p>

        <Link to="/faq">
          <button className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl border-2 border-[#2f87ed] text-[#2f87ed] font-semibold hover:bg-[#2f87ed] hover:text-white transition">
            Tirar dúvidas
          </button>
        </Link>
      </div>
      {mostrarModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 w-full max-w-sm text-center" >

            {/* TÍTULO */}
            {!confirmouPerfil && (
              <>
                <h2 className="text-2xl font-extrabold mb-4 text-gray-800 mb-6">
                  Onde você quer crescer?
                </h2>

                <p className="text-gray-600 mb-6">
                  Escolha a plataforma e informe o perfil
                </p>
              </>
            )}

            {/* BOTÕES INSTAGRAM / TIKTOK */}
            {!confirmouPerfil && (
              <div className="flex flex-col gap-4 mb-6">
                <button
                  onClick={() => {
                    setPlataforma("Instagram")
                    setConfirmouPerfil(false)
                  }}
                  className={`border-2 py-3 rounded-xl font-semibold transition ${plataforma === "Instagram"
                    ? "bg-[#2f87ed] text-white border-[#2f87ed]"
                    : "border-[#2f87ed] text-[#2f87ed] hover:bg-[#2f87ed] hover:text-white"
                    }`}
                >
                  Instagram
                </button>

                <button
                  onClick={() => {
                    setPlataforma("TikTok")
                    setConfirmouPerfil(false)
                  }}
                  className={`border-2 py-3 rounded-xl font-semibold transition ${plataforma === "TikTok"
                    ? "bg-[#2f87ed] text-white border-[#2f87ed]"
                    : "border-[#2f87ed] text-[#2f87ed] hover:bg-[#2f87ed] hover:text-white"
                    }`}
                >
                  TikTok
                </button>
              </div>
            )}


            {/* PERFIL + BOTÃO ENVIAR */}
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
                  className="w-full border-2 border-[#c3ceda] rounded-xl px-4 py-3 mb-4 focus:outline-none focus:border-[#2f87ed]"
                />

                <button disabled={!perfil} onClick={() => setConfirmouPerfil(true)} className=" w-full bg-[#2f87ed] text-white py-3 rounded-xl font-semibold transition hover:bg-[#cbe6ee] disabled:bg-[#80959b] disabled:cursor-not-allowed disabled:opacity-100 " > Enviar </button>
              </div>
            )}

            {/* PIX + QR CODE (SÓ APÓS CLICAR EM ENVIAR) */}
            {confirmouPerfil && (
              <>
                <div className="bg-gray-100 rounded-xl p-4 mb-4">
                  <p className="text-sm text-gray-500">Chave PIX</p>
                  <p className="font-semibold select-all">
                    email@pix.com
                  </p>
                </div>

                <div className="bg-gray-100 rounded-xl p-4 mb-6">
                  <p className="text-sm text-gray-500">Resumo do pedido</p>

                  <p className="font-semibold mt-1">
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
                      bgColor="#ffffff"
                      fgColor="#0f172a"
                      level="H"
                    />
                  </div>
                </div>

                <button
  onClick={() =>
    navigate("/confirmacao", {
       replace: true,
      state: {
        pacote: pacoteSelecionado,
        tipo,
        plataforma,
        perfil,
      },
    })
  }
  className="w-full bg-[#2f87ed] hover:bg-[#0b5cba] text-white py-3 rounded-xl font-semibold"
>
  Já fiz o pagamento
</button>

              </>
            )}

            {/* CANCELAR */}
            <button
              onClick={() => {
                setMostrarModal(false)
                setPacoteSelecionado(null)
                setPlataforma(null)
                setPerfil("")
                setConfirmouPerfil(false)
              }}
              className="mt-6 text-sm text-gray-500 hover:text-gray-800"
            >
              Cancelar
            </button>

          </div>
        </div>
      )}


    </section>
  )
}


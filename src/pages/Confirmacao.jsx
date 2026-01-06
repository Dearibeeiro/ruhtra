import { useState } from "react"
import { useLocation } from "react-router-dom"
import { FaWhatsapp } from "react-icons/fa"
import { Link } from "react-router-dom"


export default function Confirmacao() {
  const location = useLocation()
  const { pacote, tipo, plataforma, perfil } = location.state || {}
  const [mostrarConfirmacao, setMostrarConfirmacao] = useState(false)
  const [pedidoFinalizado, setPedidoFinalizado] = useState(false)


  return (
    <section className="min-h-screen flex items-center justify-center bg-white px-6">
      <div className="max-w-md w-full text-center bg-white p-10 rounded-2xl shadow-lg">

        <h1 className="text-3xl font-extrabold text-[#2f87ed] mb-4">
          Ótima escolha! Seu pedido já foi registrado.
          
        </h1>

      
         <p className="text-sm text-gray-500">Resumo do Pedido</p>
        <div className="bg-gray-100 rounded-xl p-4 mb-6 text-left">
          <p><strong>Pacote:</strong> {pacote?.qtd} seguidores</p>
          <p><strong>Tipo:</strong> {tipo}</p>
          <p><strong>Plataforma:</strong> {plataforma}</p>
          <p><strong>Perfil:</strong> {perfil}</p>
        </div>
{!pedidoFinalizado && (
  <>
        <p className="text-gray-600 mb-6">
          Agora só falta um último passo para iniciarmos o processo. 🚀
        </p>
        <p className="mt-6 text-lg font-semibold text-[#2f87ed] animate-pulse">
            📲 Envie o Resumo do Pedido e o Comprovante de Pagamento pelo WhatsApp
        </p>

        

        <a
          href={`https://wa.me/5575999267636?text=Olá! Já fiz o pagamento via PIX.%0A%0A
Pacote: ${pacote?.qtd} seguidores%0A
Tipo: ${tipo}%0A
Plataforma: ${plataforma}%0A
Perfil: ${perfil}%0A%0A
`}
          target="_blank"
            onClick={() => setMostrarConfirmacao(true)}
          className=" mt-6 inline-flex items-center justify-center gap-2 w-full bg-green-600 text-white py-4 rounded-xl font-semibold hover:bg-green-700 transition"
        >
             <FaWhatsapp className="text-xl" />
           Enviar
        </a>
        <p className="mt-4 text-xs text-gray-500">
          Após o envio do comprovante, nossa equipe dará continuidade ao seu pedido.
        </p>
         </>
         
)}
{pedidoFinalizado && (
  <Link to="/pacotes">
    <button className="mt-8 w-full bg-[#2f87ed] text-white py-4 rounded-xl font-semibold hover:bg-[#14559f] transition">
      Comprar mais
    </button>
  </Link>

)}

      </div>
      {mostrarConfirmacao && (
  <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
    <div className="bg-white max-w-md w-full mx-4 rounded-2xl p-8 text-center">

      <h2 className="text-2xl font-extrabold text-slate-900 mb-4">
        Tudo certo 🎉
      </h2>

      <p className="text-gray-600 mb-4">
        Enviou o comprovante e o resumo do seu pedido?
      </p>

      <p className="text-gray-600 mb-6">
        Ótimo! Agora é só aguardar que em breve os seguidores começarão a chegar.
      </p>

      <div className="bg-gray-100 rounded-xl p-4 mb-6">
        <p className="font-semibold text-slate-900">
          ⏱ Prazo de entrega
        </p>
        <p className="text-gray-600 text-sm mt-1">
          Início normalmente dentro de até <strong>24 horas</strong>.
        </p>
      </div>

      <button
  onClick={() => {
    setMostrarConfirmacao(false)
    setPedidoFinalizado(true)
  }}
  className="w-full bg-[#2f87ed] text-white py-3 rounded-xl font-semibold hover:bg-[#14559f] transition"
>
  Perfeito, vou aguardar
</button>


    </div>
  </div>
)}

    </section>
  )
}

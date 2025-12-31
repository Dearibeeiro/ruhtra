import { useLocation } from "react-router-dom"

export default function Pagamento() {
    const location = useLocation()
    const { pacote, tipo, plataforma } = location.state || {}

    return (
        <section className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
            <div className="bg-white p-8 rounded-2xl shadow-md max-w-md w-full">

                <h1 className="text-2xl font-extrabold text-center">
                    Resumo do pedido
                </h1>

                <div className="mt-6 space-y-3 text-gray-700">
                    <p><strong>Plataforma:</strong> {plataforma}</p>
                    <p><strong>Tipo:</strong> {tipo === "brasil" ? "Seguidores brasileiros" : "Seguidores mundiais"}</p>
                    <p><strong>Quantidade:</strong> {pacote?.qtd} seguidores</p>
                    <p className="text-xl font-extrabold mt-4">
                        Total: {pacote?.preco}
                    </p>
                </div>

                <button
                    className="mt-6 w-full bg-slate-900 text-white py-3 rounded-xl font-semibold"
                >
                    Pagar agora
                </button>

            </div>

        </section>
    )
}

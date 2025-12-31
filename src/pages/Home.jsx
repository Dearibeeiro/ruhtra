import { Link } from "react-router-dom"


export default function Home() {
    return (
        <div className="min-h-screen bg-[#ffffff] text-gray-600 pt-24">




            {/* Hero */}
            <main className="text-center px-6 mt-19">
                <h2 className="text-5xl font-extrabold max-w-3xl mx-auto leading-tight">
                    Cresça seu Instagram e TikTok com estratégia
                </h2>

                <p className="mt-6 text-lg text-gray-600 max-w-xl mx-auto">
                    Escolha o plano ideal para impulsionar sua presença digital
                    e acelerar seus resultados.
                </p>

                <Link to="/pacotes">
                    <button className="mt-12 bg-[#2f87ed] text-white px-10 py-4 rounded-xl text-lg font-semibold hover:bg-[#14559f] transition">
                        Ver planos disponíveis
                    </button>
                </Link>

            </main>
            {/* Confiança */}
            <section className="mt-20 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="grid gap-8 md:grid-cols-3 text-sm text-gray-600">

                        <div>
                            <p className="font-semibold text-gray-900">
                                Processo automatizado
                            </p>
                            <p className="mt-2">
                                Pedido processado automaticamente após confirmação do pagamento.
                            </p>
                        </div>

                        <div>
                            <p className="font-semibold text-gray-900">
                                Entrega no prazo
                            </p>
                            <p className="mt-2">
                                Início conforme prazo informado na página de compra.
                            </p>
                        </div>

                        <div>
                            <p className="font-semibold text-gray-900">
                                Suporte garantido
                            </p>
                            <p className="mt-2">
                                Atendimento disponível para dúvidas após a compra.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

        </div>
    )
}

import { Link } from "react-router-dom"
import FaqItem from "../components/FaqItem"
import { FaWhatsapp } from "react-icons/fa"


export default function Faq() {
  return (
    <section className="min-h-screen bg-white px-6 py-20">
      <div className="max-w-3xl mx-auto">

        <h1 className="text-3xl font-semibold mb-12 text-center text-[#2f87ed]">
          Dúvidas frequentes
        </h1>

        <div className="space-y-4">
          <FaqItem
            pergunta="É seguro?"
            resposta="Sim. O processo é seguro e automatizado, não envolve acesso à conta e não apresenta riscos ao perfil."
          />

          <FaqItem
            pergunta="Como funciona?"
            resposta="Após a confirmação do pagamento, o pedido é processado automaticamente para o perfil informado no momento da compra. A entrega inicia dentro do prazo estabelecido."
          />

          <FaqItem
            pergunta="Qual o prazo de entrega?"
            resposta="A entrega inicia em até 24 horas."
          />

          <FaqItem
            pergunta="Preciso passar minha senha?"
            resposta="Não. Nunca solicitamos senha ou qualquer dado sensível. Apenas o @ do perfil é necessário."
          />

          <FaqItem
            pergunta="O perfil precisa ser público?"
            resposta="Sim. O perfil precisa estar público durante o período de entrega. Após a conclusão do serviço, ele pode ser privado normalmente."
          />

          <FaqItem
            pergunta="O serviço é válido para Instagram e TikTok?"
            resposta="Sim. Os pacotes são válidos para perfis do Instagram e TikTok."
          />

          <FaqItem
            pergunta="E se eu perder seguidores?"
            resposta="Caso haja perda de seguidores, oferecemos garantia de reposição por até 30 dias, sem custo adicional."
          />

          <FaqItem
            pergunta="Os seguidores interagem?"
            resposta="As interações podem ocorrer, mas variam conforme o conteúdo e o algoritmo. Não é possível garantir interações específicas."
          />

          <FaqItem
            pergunta="Existe suporte?"
            resposta="Sim. Nosso suporte permanece disponível após a compra."
          />
        </div>
      </div>

      {/* CTA */}
      <div className="text-center mt-20 text-slate-700">
        <h3 className="text-3xl font-semibold">
          Pronto para começar?
        </h3>

        <p className="text-gray-600 mt-2">
          Escolha o plano ideal para você.
        </p>

        <Link to="/pacotes">
          <button className="mt-8 bg-[#2f87ed] text-white px-10 py-4 rounded-xl text-lg font-medium hover:bg-[#14559f] transition">
            Ver planos disponíveis
          </button>
        </Link>
      </div>

      {/* Suporte */}
      <div className="mt-16 text-center border-t pt-10">
        <p className="text-lg font-medium mb-6 text-slate-600">
          Ainda ficou alguma dúvida?
        </p>

        <a
          href="https://wa.me/5575992277190?text=Olá!%20Ainda%20estou%20com%20dúvidas%20sobre%20a%20compra%20de%20seguidores."
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="inline-flex items-center gap-3 px-5 py-4 rounded-2xl border-2 border-[#2f87ed] text-[#2f87ed] font-semibold hover:bg-[#2f87ed] hover:text-white transition">
              <FaWhatsapp className="text-xl" />
            Falar com um atendente
          </button>
        </a>
      </div>
    </section>
  )
}

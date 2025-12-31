import { Link } from "react-router-dom"
import logo from "../assets/marca.png"

export default function Header() {
  return (
    <header className="w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center gap-3">

        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Ruthra"
            className="w-50 h-12 object-cover"
          />
        </Link>

        <Link to="/faq" className="ml-auto">
          <button className="inline-flex items-center gap-3 px-8 py-3 rounded-2xl border-2 border-[#2f87ed] text-[#2f87ed] font-semibold hover:bg-[#2f87ed] hover:text-white transition">
            Tirar minhas dúvidas
          </button>
        </Link>

      </div>
    </header>
  )
}

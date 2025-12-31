import { BrowserRouter, Routes, Route } from "react-router-dom"
import ScrollToTop from "./components/ScrollToTop"
import Home from "./pages/Home"
import Header from "./components/Header"
import Pacotes from "./pages/Pacotes"
import Faq from "./pages/Faq"
import Pagamento from "./pages/Pagamento"
import Footer from "./components/Footer"
import Confirmacao from "./pages/Confirmacao"


function App() {
  return (
    <BrowserRouter>
     <ScrollToTop />

      {/* HEADER FIXO EM TODAS AS PÁGINAS */}
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pacotes" element={<Pacotes />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/pagamento" element={<Pagamento />} />
        <Route path="/confirmacao" element={<Confirmacao />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App


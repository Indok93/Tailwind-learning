import './App.scss'
import { Footer } from './Components/Partials/Footer/Footer'
import { Header } from './Components/Partials/Header/Header'
import { Main } from './Components/Partials/Main/Main'

function App() {

  return (
    <>
      <Header />
      <Main>
        <div>
          <h1 className="text-3xl font-bold underline text-slate-400 hover:text-sky-400">
            Hello world!
          </h1>
        </div>
      </Main>
      <Footer />
    </>
  )
}

export default App

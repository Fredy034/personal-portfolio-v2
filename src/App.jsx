import './App.css'
import About from './Components/About/About'
import Curriculum from './Components/Curriculum/Curriculum'
import Navbar from './Components/Navbar/Navbar'
import { PageProvider } from './Components/PageContext'
import Sidebar from './Components/Sidebar/Sidebar'
import Porfolio from './Components/Portfolio/Portfolio'
import Blog from './Components/Blog/Blog'
import Contact from './Components/Contact/Contact'
import Options from './Components/Options/Options'

function App() {

  return (
    <main>
      <div className="aside-container">
        <Sidebar />
        <Options />
      </div>
      <PageProvider>
        <div className="main-content">
          <Navbar />
          <About />
          <Curriculum />
          <Porfolio />
          <Blog />
          <Contact />
        </div>
      </PageProvider>
    </main>
  )
}

export default App

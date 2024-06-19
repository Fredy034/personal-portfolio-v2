import './App.css'
import About from './Components/About/About'
import Blog from './Components/Blog/Blog'
import Contact from './Components/Contact/Contact'
import Curriculum from './Components/Curriculum/Curriculum'
import Navbar from './Components/Navbar/Navbar'
import Options from './Components/Options/Options'
import { PageProvider } from './Components/PageContext'
import Porfolio from './Components/Portfolio/Portfolio'
import Sidebar from './Components/Sidebar/Sidebar'

function App() {

  return (
    <main>
      <div className="aside-container">
        <Sidebar isAviable />
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

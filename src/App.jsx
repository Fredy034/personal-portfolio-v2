import './App.css'
import About from './Components/About/About'
import Curriculum from './Components/Curriculum/Curriculum'
import Navbar from './Components/Navbar/Navbar'
import { PageProvider } from './Components/PageContext'
import Sidebar from './Components/Sidebar/Sidebar'

function App() {

  return (
    <main>
      <Sidebar />
      <PageProvider>
        <div className="main-content">
          <Navbar />
          <About />
          <Curriculum />
        </div>
      </PageProvider>
    </main>
  )
}

export default App

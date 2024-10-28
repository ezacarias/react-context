import { useState, createContext } from 'react'
import { UserContext  } from './context/UserContext'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/header'
import Contenido from './components/Contenido'
import Footer from './components/Footer'


function App() {
  const [user, setUser] = useState("Edizon Zacarias");

  return (
    <UserContext.Provider value={user}>
      <div className="website">
          <Header />
           <Contenido/>
          <Footer /> 
      </div>  
      </UserContext.Provider>

  )
}

export default App

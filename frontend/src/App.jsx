import {BrowserRouter,Routes,Route, Navigate} from 'react-router-dom'
import Unsplash from './pages/Unsplash'
import Signup from './pages/Signup'
import Login from './pages/Login'
import { useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './utils/firebase-config'
import Loading from './components/Loading'
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(null)
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth,(user) => {
      setIsAuthenticated(!!user)
    })
    return () => unsubscribe()
  },[])
  if(isAuthenticated == null){
    return <Loading/>
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={isAuthenticated ? <Unsplash/> : <Navigate to="/login"/>}/>
        <Route exact path='/signup' element={<Signup/>}/>
        <Route exact path='/login' element={<Login/>}/>
      </Routes>
    </BrowserRouter>

  )
}

export default App

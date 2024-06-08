import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import EBook from './pages/EBook'
import SidebarUser from './components/SidebarUser'
import PrincipalMenu from './pages/PrincipalMenu';
import Chatbot from './pages/Chatbot';
import Quiz from './pages/Quiz';
function App() {
  

  return (
    <>
      <Quiz title='Recursividad en programación' />
    </>
  )
}

export default App

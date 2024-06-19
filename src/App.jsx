import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import EBook from './pages/EBook';
import PrincipalMenu from './pages/PrincipalMenu';
import Chatbot from './pages/Chatbot';
import Quiz from './pages/Quiz';
import Historial from './pages/Historial';
import CreateQuiz from './pages/CreateQuiz';
import Score from './pages/Score';
import Login from './pages/Login';


function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ebook" element={<EBook />} />
        <Route path="/principalmenu" element={<PrincipalMenu />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path='/history' element={<Historial />} />
        <Route path = '/createquiz' element = {<CreateQuiz/>}/>
        <Route path = '/score' element = {<Score/>}/>
        <Route path = '/login' element = {<Login/>}/>
      </Routes>
    </Router>
  );
}

export default App;

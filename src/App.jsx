import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import TodoWrapper from './view/TodoWrapper';
import Home from './view/Home';
function App() {

  return (
    <div className="App">
        <Header />
        <Routes>
          <Route path='react-pet-projects/' element={<Home />} />
          <Route path='react-pet-projects/todo' element={<TodoWrapper />} />
        </Routes>
        
    </div>
  )
}

export default App

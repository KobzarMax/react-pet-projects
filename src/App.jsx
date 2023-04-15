import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import TodoWrapper from './components/TodoWrapper';
import Home from './view/Home';
function App() {

  return (
    <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='todo' element={<TodoWrapper />} />
        </Routes>
        
    </div>
  )
}

export default App

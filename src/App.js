
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Home'
import Contact from './Contact';
import About from './About';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/about' element={<About></About>}></Route>
      </Routes>
    </>
  );
}

export default App;

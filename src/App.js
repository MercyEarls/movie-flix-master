
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Movie from './pages/Movie';
import Series from './pages/Series';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/movie/:id' element={<Movie />} />
      <Route path='/tv/:id' element={<Series />} />
    </Routes>
  );
}

export default App;

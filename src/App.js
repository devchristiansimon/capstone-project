import {Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Library from './components/Library';
import Create from './components/Create';

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/library" element={<Library />} />
        <Route path="/create" element={<Create />} />
      </Routes>
      <Navbar />
    </>
  );
}

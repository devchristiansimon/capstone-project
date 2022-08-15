import {Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Library from './components/Library';
import Create from './components/Create';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/library" element={<Library />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </ScrollToTop>
      <Navbar />
    </>
  );
}

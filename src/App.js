import {Modal} from './components/Modal';
import {useState} from 'react';
import {Route, Routes} from 'react-router-dom';
import Home from './components/Home';

export default function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedContentItem, setSelectedContentItem] = useState(null);
  return (
    <div>
      <header>
        <h1>SkillBro</h1>
      </header>
      <main>
        <Home setSelectedContentItem={setSelectedContentItem} setModalIsOpen={setModalIsOpen} />
        <Modal
          isOpen={modalIsOpen}
          onClose={() => {
            setModalIsOpen(false);
          }}
          content={selectedContentItem}
        />
      </main>
    </div>
  );
}

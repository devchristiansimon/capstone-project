import rawData from './data.json';
import CardSection from './components/styles/CardSection';
import {ContentCard, ThumbnailImg, CardInfoBar} from './components/styles/ContentCard';
import {Modal} from './components/Modal';
import {FaRegStar, FaRegEye, FaRegGem} from 'react-icons/fa';
import {useState} from 'react';

export default function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedContentItem, setSelectedContentItem] = useState(null);
  console.log(modalIsOpen);
  return (
    <div>
      <header>
        <h1>SkillBro</h1>
      </header>
      <main>
        <CardSection>
          {rawData.map(card => (
            <ContentCard
              key={card.id}
              onClick={() => {
                setSelectedContentItem(card);
                setModalIsOpen(true);
              }}
            >
              <ThumbnailImg src={card.thumbnailUrl} />
              {card.videoName}
              <CardInfoBar>
                <FaRegStar />
                {card.rating}
                <FaRegEye />
                {card.amountRates}
                <FaRegGem />
                {card.cost}
              </CardInfoBar>
            </ContentCard>
          ))}
        </CardSection>
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

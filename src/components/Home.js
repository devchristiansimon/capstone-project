import {FaRegStar, FaRegEye, FaRegGem} from 'react-icons/fa';
import {ContentCard, ThumbnailImg, CardInfoBar} from './styles/ContentCard';
import rawData from '../data.json';
import CardSection from './styles/CardSection';
import {Modal} from './Modal';
import {useState} from 'react';

export default function Home() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedContentItem, setSelectedContentItem] = useState(null);
  return (
    <>
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
    </>
  );
}

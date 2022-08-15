import {FaRegStar, FaRegEye, FaRegGem} from 'react-icons/fa';
import {ContentCard, ThumbnailImg, CardInfoBar} from './styles/ContentCard';
import CardSection from './styles/CardSection';
import {Modal} from './Modal';
import {useState, useEffect} from 'react';
import axios from 'axios';

export default function Home() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedContentItem, setSelectedContentItem] = useState(null);

  const [rawData, setRawData] = useState([]);
  const apiUrl = '/api/cards';

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(apiUrl);
      setRawData(request.data);
    }
    fetchData();
  }, []);
  return (
    <>
      <h1>SkillBro</h1>
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
              <h4>{card.videoName}</h4>
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

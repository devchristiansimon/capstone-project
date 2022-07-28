import rawData from './data.json';
import CardSection from './components/styles/CardSection';
import {ContentCard, ThumbnailImg, CardInfoBar} from './components/styles/ContentCard';
import {FaRegStar, FaRegEye, FaRegGem} from 'react-icons/fa';

export default function App() {
  console.log(rawData);
  return (
    <div>
      <header>
        <h1>SkillBro</h1>
      </header>
      <main>
        <CardSection>
          {rawData.map(card => (
            <ContentCard key={card.id}>
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
      </main>
    </div>
  );
}

import React from 'react';
import {FaRegStar, FaRegEye, FaRegGem} from 'react-icons/fa';
import {ContentCard, ThumbnailImg, CardInfoBar} from './styles/ContentCard';
import rawData from '../data.json';
import CardSection from './styles/CardSection';

export default function Home({setSelectedContentItem, setModalIsOpen}) {
  return (
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
  );
}

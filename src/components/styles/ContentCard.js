import styled from 'styled-components';

export const ContentCard = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 170px;
  height: 200px;
  margin: 5px;
  padding: 10px;
  background-color: #000;
  font-size: 0.9rem;
  text-align: center;
  border-radius: 7px;
`;

export const ThumbnailImg = styled.img`
  width: 140px;
  height: 85px;
  margin: 5px;
`;

export const CardInfoBar = styled.div`
  width: 100%;
  height: 20px;
  bottom: 0;
  display: flex;
  justify-content: space-around;
`;

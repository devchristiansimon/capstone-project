import {ThumbnailImg} from './styles/ContentCard';
import {useState, useEffect} from 'react';
import axios from 'axios';
import CardSection from './styles/CardSection';
import styled from 'styled-components';

function Library() {
  const [myData, setMyData] = useState([]);
  let myRealData = [];
  const apiUrl = '/api/heroes';

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(apiUrl);
      setMyData(request.data);
    }
    fetchData();
  }, []);
  for (let key in myData[0]) {
    myRealData.push(myData[0][key]);
  }
  myRealData.shift();
  const heroImgUrl = 'https://ddragon.leagueoflegends.com/cdn/12.4.1/img/champion/';
  return (
    <>
      <h1>Champions</h1>
      <CardSection>
        {myRealData.map(data => (
          <HeroCard key={data.key}>
            <ThumbnailImg src={`${heroImgUrl}${data.id}.png`} />
            <div>{data.id}</div>
          </HeroCard>
        ))}
      </CardSection>
    </>
  );
}

export default Library;

const HeroCard = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 170px;
  height: 160px;
  margin: 5px;
  padding: 10px;
  background-color: #000;
  font-size: 0.9rem;
  text-align: center;
  border-radius: 7px;
`;

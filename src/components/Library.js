import {HeroImg} from './styles/ContentCard';
import {useState, useEffect} from 'react';
import axios from 'axios';
import CardSection from './styles/CardSection';
import styled from 'styled-components';
import {HeroModal} from './HeroModal';

function Library() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedContentItem, setSelectedContentItem] = useState(null);
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
          <HeroCard
            key={data.key}
            onClick={() => {
              setSelectedContentItem(data);
              setModalIsOpen(true);
            }}
          >
            <HeroImg src={`${heroImgUrl}${data.id}.png`} />
            <div>{data.id}</div>
            <HeroClass>{data.tags[0]}</HeroClass>
          </HeroCard>
        ))}
      </CardSection>
      <HeroModal
        isOpen={modalIsOpen}
        onClose={() => {
          setModalIsOpen(false);
        }}
        herocontent={selectedContentItem}
        heroImg={heroImgUrl}
      />
    </>
  );
}

export default Library;

const HeroCard = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 170px;
  height: 180px;
  margin: 5px;
  padding: 10px;
  background-color: #000;
  font-size: 0.9rem;
  text-align: center;
  border-radius: 7px;
`;
const HeroClass = styled.span`
  font-size: 0.7rem;
`;

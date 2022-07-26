import H1 from './components/styles/headerstyle';
import rawData from './data.json';
import CardSection from './components/styles/CardSection';
import ContentCard from './components/styles/ContentCard';

export default function App() {
  console.log(rawData);
  return (
    <div>
      <header>
        <H1>SkillBro</H1>
      </header>
      <main>
        <CardSection>
          {rawData.map(card => (
            <ContentCard key={card.id}>{card.videoName}</ContentCard>
          ))}
        </CardSection>
      </main>
    </div>
  );
}

import {CloseButton, StyledModal, DescriptionField, HeroStats, HeroStatsList} from './styles/ModalDesign';
import {HeroImg} from './styles/ContentCard';

export function HeroModal({isOpen, onClose, herocontent, heroImg}) {
  return (
    isOpen && (
      <StyledModal>
        <h2>{herocontent.id}</h2>
        <HeroImg src={`${heroImg}${herocontent.id}.png`} />
        <em>{herocontent.title}</em>
        <span>Klasse: {herocontent.tags[0]}</span>
        <HeroStats>
          <HeroStatsList>
            <li>Angriff: {herocontent.info.attack}</li>
            <li>Verteidigung: {herocontent.info.defense}</li>
            <li>Magie: {herocontent.info.magic}</li>
            <li>Schwierigkeit: {herocontent.info.difficulty}</li>
          </HeroStatsList>
          <HeroStatsList>
            <li>HP: {herocontent.stats.hp}</li>
            <li>HP per Lvl: {herocontent.stats.hpperlevel}</li>
            <li>Geschwindigkeit: {herocontent.stats.movespeed}</li>
            <li>Panzerung: {herocontent.stats.armor}</li>
          </HeroStatsList>
        </HeroStats>
        <h4>Fähigkeiten-Basis: {herocontent.partype} </h4>
        <DescriptionField>{herocontent.blurb}</DescriptionField>
        <CloseButton onClick={onClose}>X</CloseButton>
      </StyledModal>
    )
  );
}

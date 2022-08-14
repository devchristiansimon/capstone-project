import {CloseButton, StyledModal, DescriptionField, CardHeader} from './styles/ModalDesign';
import {HeroImg} from './styles/ContentCard';

export function HeroModal({isOpen, onClose, herocontent, heroImg}) {
  return (
    isOpen && (
      <StyledModal>
        <CardHeader>{herocontent.id}</CardHeader>
        <HeroImg src={`${heroImg}${herocontent.id}.png`} />
        <DescriptionField>{herocontent.blurb}</DescriptionField>
        <CloseButton onClick={onClose}>X</CloseButton>
      </StyledModal>
    )
  );
}

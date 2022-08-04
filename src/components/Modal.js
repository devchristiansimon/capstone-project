import {PlayerStyle, IFrameStyler, StyledModal, DescriptionField, CloseButton, CardHeader} from './styles/ModalDesign';
import {CardInfoBar} from './styles/ContentCard';
import {FaRegStar, FaRegEye, FaRegGem} from 'react-icons/fa';

export function Modal({isOpen, onClose, content}) {
  return (
    isOpen && (
      <StyledModal>
        <CardHeader>{content.videoName}</CardHeader>
        <PlayerStyle>
          <IFrameStyler
            src={content.videoUrl}
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            title={content.videoName}
          ></IFrameStyler>
        </PlayerStyle>
        <DescriptionField>{content.description}</DescriptionField>
        <CloseButton onClick={onClose}>X</CloseButton>
        <CardInfoBar>
          <FaRegStar />
          {content.rating}
          <FaRegEye />
          {content.amountRates}
          <FaRegGem />
          {content.cost}
        </CardInfoBar>
      </StyledModal>
    )
  );
}

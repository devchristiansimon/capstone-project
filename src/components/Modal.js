import {PlayerStyle, IFrameStyler, StyledModal} from './styles/ModalDesign';

export function Modal({isOpen, onClose, content}) {
  return (
    isOpen && (
      <StyledModal>
        <h2>{content.videoName}</h2>
        <PlayerStyle>
          <IFrameStyler
            src={content.videoUrl}
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            title={content.videoName}
          ></IFrameStyler>
        </PlayerStyle>
        <button onClick={onClose}>Close</button>
      </StyledModal>
    )
  );
}

import styled from 'styled-components';

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

const StyledModal = styled.div`
  display: flex;
  text-align: center;
  flex-flow: column nowrap;
  justify-content: space-between;
  position: fixed;
  z-index: 1;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -95%);
  width: 55%;
  min-width: 350px;
  height: 50%;
  background-color: rgba(24, 24, 24, 0.95);
  color: white;
`;

const PlayerStyle = styled.div`
  padding: 56.25% 0 0 0;
  position: relative;
`;

const IFrameStyler = styled.iframe`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: absolute;
`;

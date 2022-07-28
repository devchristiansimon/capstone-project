import styled from 'styled-components';
import {ContentCard} from './styles/ContentCard';

export function Modal({isOpen, onClose, content}) {
  return (
    isOpen && (
      <StyledModal>
        {content.id};<button onClick={onClose}>Close</button>
      </StyledModal>
    )
  );
}

const StyledModal = styled.div`
  position: fixed;
  z-index: 1;
  top: 20px;
  width: 100vw;
  height: 100vh;
  background-color: black;
  color: orange;
`;

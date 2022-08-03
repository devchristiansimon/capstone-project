import styled from 'styled-components';

export const StyledModal = styled.div`
  display: flex;
  text-align: center;
  flex-flow: column nowrap;
  justify-content: space-between;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  min-width: 350px;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  color: white;
`;

export const PlayerStyle = styled.div`
  padding: 56.25% 0 0 0;
  position: relative;
`;

export const IFrameStyler = styled.iframe`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: absolute;
`;

export const DescriptionField = styled.span`
  padding: 20px 5px;
  font-size: 0.8rem;
  background-color: #000;
`;

export const CloseButton = styled.button`
  width: 25px;
  height: 25px;
  position: absolute;
  right: 5px;
  top: 5px;
  text-align: center;
  background-color: transparent;
  color: #fff;
  border: none;
  &:hover {
    background-color: #db0000;
  }
  border-radius: 50px;
`;
export const CardHeader = styled.h2`
  font-size: 1rem;
`;

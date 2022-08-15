import styled from 'styled-components';

export const StyledModal = styled.div`
  display: flex;
  text-align: center;
  flex-flow: column nowrap;
  gap: 5px;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  min-width: 350px;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.95);
  color: white;
  overflow-y: scroll;
`;

export const PlayerStyle = styled.div`
  padding: 56.25% 0 0 0;
  position: relative;
`;

export const IFrameStyler = styled.iframe`
  top: 0;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  height: 100%;
  position: absolute;
  text-align: center;
`;

export const DescriptionField = styled.span`
  padding: 10px 10px 20px 10px;
  font-size: 0.8rem;
  background-color: #000;
  margin-left: 20px;
  margin-right: 20px;
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
  border-radius: 50px;
  &:hover {
    background: red;
  }
`;
export const CardHeader = styled.h2`
  font-size: 1rem;
  margin-top: 30px;
`;

export const HeroStats = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-right: 20px;
`;

export const HeroStatsList = styled.ul`
  list-style: none;
  font-size: 0.9rem;
  text-align: left;
`;

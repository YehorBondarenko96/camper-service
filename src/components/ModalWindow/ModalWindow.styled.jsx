import styled from 'styled-components';

export const Backdrop = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: var(--backdrop-color);
  z-index: 2;
  box-sizing: border-box;
`;

export const Container = styled.div`
  // display: flex;
  width: 982px;
  max-height: 100%;
  margin: 40px 0;
  padding: 40px;
  border-radius: 20px;
  box-sizing: border-box;
  background-color: var(--primery-color-white);
  position:relative;
  overflow: auto;
scrollbar-width: none; 
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
  display: none;
  }
`;

export const ButtonClose = styled.button`
  position: absolute;
  top: 40px;
  right: 40px;
  padding: 0;
  line-height: 0.6;
  border: none;
  background: none;
  cursor: pointer;
`;

export const CloseIcon = styled.svg`
  width: 32px;
  height: 32px;
  stroke: var(--primery-color-black);

  &:hover,
  &:focus {
    stroke: var(--second-color-red);
  }
`;
export const ModalBody = styled.div``;
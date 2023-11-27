import styled, { css } from 'styled-components';

export const Overlay = styled.div`
  position: absolute;
  z-index: 1;
  height: 0;

  ${(props) =>
    props.show &&
    css`
      backdrop-filter: blur(6px);
      width: 100vw;
      height: 100vh;
    `}
`;

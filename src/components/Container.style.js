import styled from 'styled-components';

export const Container = styled.div`
  width: 800px;
  max-height: 880px;
  background-color: ${({theme: {colors}}) => colors.neutral.white};
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  font-family: sans-serif;
  padding: 0 30px;
  border-radius: 15px;
`;

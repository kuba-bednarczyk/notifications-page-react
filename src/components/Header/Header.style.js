import styled from 'styled-components';

export const StyledHeader = styled.header`
  height: 90px;
  padding: 30px 0;
  display: flex;
  justify-content: space-between;

  > div > span,
  > div > h2 {
    display: inline-block;
  }

  > div > h2 > span {
    font-size: 16px;
    padding: 2px 10px;
    border-radius: 5px;
    line-height: 100%;
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    color: ${({ theme: { colors } }) => colors.neutral.white};
    background-color: ${({ theme: { colors } }) => colors.primary.blue};
  }
  > div > h2 {
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    font-size: 20px;
  }

  > button {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 16px;
    color: ${({theme: {colors}}) => colors.neutral.grayishBlue}
  }
`;

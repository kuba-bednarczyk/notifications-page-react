import styled from 'styled-components';

export const StyledNotification = styled.div`
  /* border: 2px solid black; */
  padding: 10px 0;
  display: flex;
`;

export const ImgBox = styled.div`
  /* background-color: red; */
  height: 45px;

  > img {
    width: 45px;
    height: 45px;
  }
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 10px;
  /* background-color: aquamarine; */
  h3 {
    font-size: 16px;
    font-weight: ${({ theme }) => theme.fontWeight.medium};
  }

  h3 > strong {
    color: ${({ theme: { colors } }) => colors.neutral.darkBlue};
  }
`;

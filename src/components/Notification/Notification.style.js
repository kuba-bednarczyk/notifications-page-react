import styled from 'styled-components';

export const StyledNotification = styled.div`
  padding: 10px 20px;
  display: flex;
  margin-bottom: 10px;
  background-color: ${(props) =>
    props.isRead
      ? '#fff'
      : ({ theme: { colors } }) => colors.neutral.veryLightGrayishBlue};
  border-radius: 8px;

  img {
    display: block;
    height: 45px;
    width: 45px;
  }

  img:hover {
    cursor: pointer;
    outline: 2px solid ${({ theme: { colors } }) => colors.neutral.lightGrayishBlue1};
    border-radius: 7px;
  }
`;

export const ImgBox = styled.div`
  height: 45px;

  > img {
    width: 45px;
    height: 45px;
  }
`;

export const InfoBox = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  padding-left: 10px;

  h3 {
    font-size: 16px;
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    color: ${({ theme: { colors } }) => colors.neutral.darkGrayishBlue};
  }

  h3 > strong {
    color: ${({ theme: { colors } }) => colors.neutral.darkBlue};

    &:hover {
      color: ${({ theme: { colors } }) => colors.primary.blue};
      cursor: pointer;
    }
  }

  > p {
    color: ${({ theme: { colors } }) => colors.neutral.grayishBlue};
  }
`;

export const PostSpan = styled.span`
  color: ${({ theme: { colors } }) => colors.neutral.darkGrayishBlue};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  &:hover {
    color: ${({ theme: { colors } }) => colors.primary.blue};
    cursor: pointer;
  }
`;

export const GroupSpan = styled.span`
  color: ${({ theme: { colors } }) => colors.primary.blue};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  &:hover {
    cursor: pointer;
  }
`;

export const Message = styled.p`
  align-self: flex-end;
  border: 1px solid ${({ theme: { colors } }) => colors.neutral.lightGrayishBlue2};
  color: ${({ theme: { colors } }) => colors.neutral.darkGrayishBlue} !important;
  padding: 10px;
  margin: 10px 0;
  max-width: 550px;
  border-radius: 5px;

  &:hover {
    background-color: ${({ theme: { colors } }) => colors.neutral.lightGrayishBlue1};
    cursor: pointer;
  }
`;

export const Dot = styled.div`
  display: inline-block;
  border-radius: 50%;
  background-color: ${({ theme: { colors } }) => colors.primary.red};
  width: 8px;
  height: 8px;
  margin-left: 5px;
  margin-bottom: 1px;
`;

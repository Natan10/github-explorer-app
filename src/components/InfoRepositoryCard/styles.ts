import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  padding: 16px;

  flex-direction: row;
  align-items: center;
  
  background-color: ${({theme}) => theme.colors.white};
  border-radius: 5px;

  margin-bottom: 12px;
`;

export const Info = styled.View`
  margin-right: 8px;
  flex: 1;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-family: ${({theme}) => theme.fonts.bold};
  color: ${({theme}) => theme.colors.gray_700};
`;

export const Description = styled.Text`
  margin-top: 12px;
  font-size: 14px;
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.gray_500};
`;
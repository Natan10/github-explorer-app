import styled from 'styled-components/native';

export const Container = styled.Pressable`
  width: 100%;
  padding: 16px 12px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  background-color: ${({theme}) => theme.colors.white};
  border-radius: 5px;
 
  margin-bottom: 12px;
`;

export const Logo = styled.Image`
  width: 60px;
  height: 60px;
`;

export const Info = styled.View`
  margin-left: 10px;
  margin-right: 4px;
  flex: 1;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-family: ${({theme}) => theme.fonts.bold};
  color: ${({theme}) => theme.colors.gray_800};
`;

export const Description = styled.Text`
  margin-top: 12px;
  font-size: 14px;
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.gray_500};
`;

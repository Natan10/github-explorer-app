import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { AntDesign } from '@expo/vector-icons';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.gray_50};
`;

export const Header = styled.View`
  margin-top: ${getStatusBarHeight() + 50};
  width: 100%;

  justify-content: center;
  align-items: center;
`;

export const HeaderLogo = styled.Image``;

export const HeaderArrow = styled(AntDesign)`
  position: absolute;
  left: 24;
`;

export const Info = styled.View`
  margin-top: 32px;
  padding: 0 20px;

  flex-direction: row;
  align-items: center;
`;

export const InfoLogo = styled.Image`
  width: 85px;
  height: 85px;
`;

export const InfoContent = styled.View`
  flex: 1;
  margin-left: 12px;
`;

export const InfoTitle = styled.Text`
  font-family: ${({theme}) => theme.fonts.bold};
  font-size: 20px;
  color: ${({theme}) => theme.colors.gray_700};  
`;

export const InfoDescription = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: 14px;
  color: ${({theme}) => theme.colors.gray_400}; 

  margin-top: 12px;
`;


export const InfoCardCountContent = styled.View`
  margin-top: 24px;
  padding: 0 20px;

  width: 100%;
  
  flex-direction: row;
  justify-content: space-around;
`;

export const InfoCardCount = styled.View`
  align-items: center;
  flex: 1;
`;

export const InfoCardTitle = styled.Text`
  font-family: ${({theme}) => theme.fonts.bold};
  font-size: 20px;
  color: ${({theme}) => theme.colors.gray_700}; 
`;

export const InfoCardName = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: 16px;
  color: ${({theme}) => theme.colors.gray_400}; 

  text-align: center;
`;

import styled from 'styled-components/native';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
`;

export const BgImage = styled.ImageBackground`
  width: 100%;
  height: 76%;

  position: absolute;
`;

export const Header = styled.View`
  margin-top: ${getStatusBarHeight() + 50};
  width: 100%;

  justify-content: center;
  align-items: center;
`;

export const HeaderLogo = styled.Image``;

export const Content = styled.View`
  flex: 1;

  padding: 0 20px;
  margin-top: 32px;
`;

export const SearchTitle = styled.Text`
  font-family: ${({theme}) => theme.fonts.bold};
  font-size: 32px;
  color: ${({theme}) => theme.colors.gray_700};
`;

export const SearchContent = styled.View`
  width: 100%;

  margin-top: 24px;

  flex-direction: row;

`;

export const SearchInput = styled.TextInput`
  flex: 1;

  background-color: ${({theme}) => theme.colors.white};
  color: ${({theme}) => theme.colors.gray_500};
  font-family: ${({theme}) => theme.fonts.regular};
  
  padding: 16px;

  font-size: 16px;
  
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
`;

export const SearchButton = styled.TouchableOpacity`
  padding: 12px;
  
  justify-content: center;
  align-items: center;

  background-color: ${({theme}) => theme.colors.green_200};
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
`;

export const Repositories = styled.FlatList`
  margin-top: 48px;
  flex: 1;
`;
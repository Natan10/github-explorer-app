import React from "react";
import { ListRenderItemInfo } from 'react-native';
import { useTheme } from "styled-components";
import { EvilIcons } from '@expo/vector-icons';

import { RepositoryCard, RepositoryCardProps } from "../../components/RepositoryCard";
import {
  Container,
  BgImage,
  Header,
  HeaderLogo,
  Content,
  SearchTitle,
  SearchContent,
  SearchInput,
  SearchButton,
  Repositories
} from './styles';

import bgLogo from '../../assets/images/github_bg/github_bg.png';
import logo from '../../assets/images/logo/logo.png';
import { getBottomSpace } from "react-native-iphone-x-helper";

export const Home = () => {
  const theme = useTheme();

  return(
    <Container>
      <BgImage source={bgLogo} resizeMode="contain" />
      <Header>
        <HeaderLogo source={logo} resizeMode="cover" />
      </Header>

      <Content>
        <SearchTitle>
          Explore repositórios {'\n'}
          no GitHub.
        </SearchTitle>

        <SearchContent>
          <SearchInput placeholder="Digite aqui usuário/repositório" />
          <SearchButton>
            <EvilIcons name="search" size={28} color={theme.colors.white} />
          </SearchButton>
        </SearchContent>

        <Repositories 
          data={Array.from(Array(10).keys())}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item: any) => item}
          contentContainerStyle={{
            paddingBottom: getBottomSpace()
          }}
          renderItem={({item}: ListRenderItemInfo<RepositoryCardProps>) => (
            <RepositoryCard />
          )}
        />
          
      </Content>
    
    </Container>
  )
}
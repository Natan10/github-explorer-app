import React from "react";
import { useTheme } from "styled-components";
import { EvilIcons } from '@expo/vector-icons';

import { Repositories } from "../../components/Repositories";
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
} from './styles';

import bgLogo from '../../assets/images/github_bg/github_bg.png';
import logo from '../../assets/images/logo/logo.png';

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

        <Repositories data={[]} />          
      </Content>
    </Container>
  )
}
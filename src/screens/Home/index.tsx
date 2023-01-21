import React, { useState } from "react";
import { Alert } from 'react-native';
import { useTheme } from "styled-components";
import { EvilIcons } from '@expo/vector-icons';

import { api } from "../../services/api";
import { GithubDTO } from "../../services/dtos/githubDTO";
import { useRepository } from "../../context/RepositoryContext";

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
  const { repositories, handleAddRepository } = useRepository();
  const [repositoryInfo, setRepositoryInfo] = useState('');

  async function handleTextInput(value: string) {
    setRepositoryInfo(value)
  }

  async function getRepositoryData(){
    if(!repositoryInfo) {
      Alert.alert('Preencha o campo de input!');
      return;
    }
    try {
      const { data } = await api.get(`/repos/${repositoryInfo}`);    
      const repositoryData: GithubDTO = {
        id: data.id,
        title: data.full_name,
        description: data.description,
        avatar_url: data.owner.avatar_url,
        forks: data.forks_count,
        stars: data.stargazers_count,
        open_issues: data.open_issues_count
      }
      handleAddRepository(repositoryData);
    } catch (error) {
      console.error(error);
      Alert.alert('Erro ao carregar informações!');
    } finally {
      setRepositoryInfo('');
    }
  }

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
          <SearchInput 
            placeholder="Digite aqui usuário/repositório" 
            value={repositoryInfo}
            selectTextOnFocus
            onChangeText={handleTextInput} 
            onSubmitEditing={getRepositoryData}
            returnKeyType="send"
            autoCapitalize="none"
            autoCorrect={false} 
          />
          <SearchButton disabled={!repositoryInfo} onPress={getRepositoryData}>
            <EvilIcons name="search" size={28} color={theme.colors.white} />
          </SearchButton>
        </SearchContent>
        <Repositories data={repositories} />          
      </Content>
    </Container>
  )
}


/*

public-apis/public-api
facebook/react
goldbergyoni/javascript-testing-best-practices
jlevy/the-art-of-command-line
twitter/twemoji
software-mansion/react-native-reanimated

*/
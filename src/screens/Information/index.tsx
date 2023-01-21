import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { useTheme } from 'styled-components';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';

import { useRepository } from '../../context/RepositoryContext';
import { api } from '../../services/api';
import { RepositoryIssue } from '../../interfaces/issue';
import { RepositoryIssueDTO } from '../../services/dtos/issueDTO';

import { Load } from '../../components/Load';
import { BgImage } from '../../components/BgImage';
import { InfoRepositories } from '../../components/InfoRepositories';
import { 
  Container,
  Header,
  HeaderLogo,
  HeaderArrow,
  Info,
  InfoLogo,
  InfoContent,
  InfoTitle,
  InfoDescription,
  InfoCardCountContent,
  InfoCardCount,
  InfoCardTitle,
  InfoCardName,
} from './styles';

import logo from '../../assets/images/logo/logo.png';

interface RouteParams {
  repositoryId: number;
}

export const Information = () => {
  const theme = useTheme();
  const navigation = useNavigation();
  const { params } = useRoute();

  const [issues, setIssues] = useState<RepositoryIssue[]>([]);
  const [load, setLoad] = useState(true);
  const {repositories} = useRepository();
  
  const { repositoryId } = params as RouteParams;
  const repository = repositories.find(repo => repo.id === repositoryId);

  function navigate(){
    navigation.goBack();
  }
  
  useEffect(() => {
    async function getRepositoryInformation(){
      try {
        const {data} = await api.get(`repos/${repository.title}/issues`);
        setIssues(data.map((issue: RepositoryIssueDTO) => ({
          id: issue.id,
          title: issue.title,
          html_url: issue.html_url,
          user: {
            login: issue.user.login
          }
        })));
      } catch (error) {
        console.error(error);
        return Alert.alert('Erro ao pesquisar issues do repositório!');
      } finally {
        setLoad(false);
      }
    }
    getRepositoryInformation();
  },[repositoryId])

  return(
    <Container>
      <BgImage />
      <Header>
        <HeaderLogo source={logo} resizeMode="cover" />
        <HeaderArrow onPress={navigate}>
          <AntDesign name="arrowleft" size={18} color={theme.colors.gray_500} />
        </HeaderArrow>
      </Header>

      <Info>
        <InfoLogo 
          source={{
            uri: repository.avatar_url
          }}
          resizeMode="contain"
        />
        <InfoContent>
          <InfoTitle numberOfLines={1}>{repository.title}</InfoTitle>
          <InfoDescription numberOfLines={2}>
            {repository.description ? repository.description : '-'}
          </InfoDescription>
        </InfoContent>
      </Info>

      <InfoCardCountContent>
        <InfoCardCount>
          <InfoCardTitle>{repository.stars}</InfoCardTitle>
          <InfoCardName>Stars</InfoCardName>
        </InfoCardCount>

        <InfoCardCount>
          <InfoCardTitle>{repository.forks}</InfoCardTitle>
          <InfoCardName>Forks</InfoCardName>
        </InfoCardCount>

        <InfoCardCount>
          <InfoCardTitle>{repository.open_issues}</InfoCardTitle>
          <InfoCardName >Issues {'\n'} Abertas</InfoCardName>
        </InfoCardCount>
      </InfoCardCountContent>
    
      {!load ? <InfoRepositories data={issues} /> : <Load/>}
      
    </Container>
  );
}
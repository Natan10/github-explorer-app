import React from 'react';
import { useTheme } from 'styled-components';
import { MaterialIcons } from '@expo/vector-icons';
import Animated, { SlideInRight } from 'react-native-reanimated';
import * as Linking from 'expo-linking';


import { RepositoryIssue } from '../../interfaces/issue';
import { 
  Container,
  Info,
  Title,
  Description,
} from './styles';

export interface InfoRepositoryCardProps {
  data: RepositoryIssue;
}

export const InfoRepositoryCard = ({data}: InfoRepositoryCardProps) => {
  const theme = useTheme();

  const openIssueLink = () => {
    Linking.openURL(data.html_url);
  }

  return(
    <Animated.View
      entering={SlideInRight.duration(500).damping(12)}
    >
      <Container onPress={openIssueLink}>
        <Info>
          <Title numberOfLines={1}>{data.title}</Title>
          <Description numberOfLines={1}>{data.user.login}</Description>
        </Info>

        <MaterialIcons 
          name="keyboard-arrow-right" 
          size={24} 
          color={theme.colors.gray_200} 
        />
      </Container>
    </Animated.View>
  );
}
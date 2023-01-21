import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import {useNavigation} from '@react-navigation/native'
import Animated, { SlideInRight } from 'react-native-reanimated';

import { 
  Container,
  Logo,
  Info,
  Title,
  Description,
} from './styles';

const mockImage = 'https://doodleipsum.com/700?i=c3fb7f663953a463ba30ffde7ce73077'

interface RepositoryCardProps {
  id: number;
  image?: string;
  title: string;
  description: string | null;
}

export const RepositoryCard = ({id, image = mockImage, title, description}: RepositoryCardProps) => {
  const theme = useTheme();
  const navigation = useNavigation();

  function navigate(){
    navigation.navigate('Information', { repositoryId: id });
  }

  return(
    <Animated.View
      entering={SlideInRight.duration(500).damping(12)}
    >
      <Container onPress={navigate}>
        <Logo 
          resizeMode='cover'
          source={{
            uri: image
          }}
          />
        <Info>
          <Title numberOfLines={1}>{title}</Title>
          <Description numberOfLines={1}>
            {description || 'Sem descrição'}
          </Description>
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

import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

import { 
  Container,
  Logo,
  Info,
  Title,
  Description,
} from './styles';

const image = 'https://doodleipsum.com/700?i=c3fb7f663953a463ba30ffde7ce73077'

export interface RepositoryCardProps {
  image?: string;
  title: string;
  description: string;
}

export const RepositoryCard = () => {
  const theme = useTheme();

  return(
    <Container>
      <Logo 
        resizeMode='cover'
        source={{
          uri: image
        }}
      />
      <Info>
        <Title numberOfLines={1}>Facebook/react</Title>
        <Description numberOfLines={1} >A declaritive, efficient a sjskjsksjks sjksjsnd flexis sjksjsk ksjsksj kjsksj</Description>
      </Info>
      
      <MaterialIcons 
        name="keyboard-arrow-right" 
        size={24} 
        color={theme.colors.gray_200} 
      />
      
    </Container>
  );
}

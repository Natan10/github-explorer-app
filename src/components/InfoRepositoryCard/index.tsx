import React from 'react';
import { useTheme } from 'styled-components';
import { MaterialIcons } from '@expo/vector-icons';

import { 
  Container,
  Info,
  Title,
  Description,
} from './styles';

export interface InfoRepositoryCardProps {
  title: string;
  description: string;
}

export const InfoRepositoryCard = () => {
  const theme = useTheme();

  return(
    <Container>
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
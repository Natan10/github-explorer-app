import React from 'react';
import { ActivityIndicator } from 'react-native';
import { useTheme } from 'styled-components';

import { Container } from './styles';

export const Load = () => {
  const theme = useTheme();

  return(
    <Container>
      <ActivityIndicator size={25} color={theme.colors.gray_500} />
    </Container>
  );
}

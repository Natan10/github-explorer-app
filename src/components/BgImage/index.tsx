import React from 'react';

import { Container } from './styles';
import bgLogo from '../../assets/images/github_bg/github_bg.png';

export const BgImage = () => {
  return <Container source={bgLogo} resizeMode="contain" />;
}
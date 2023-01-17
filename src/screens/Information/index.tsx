import React from 'react';
import { useTheme } from 'styled-components';

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

const image = 'https://doodleipsum.com/700?i=c3fb7f663953a463ba30ffde7ce73077'

export const Information = () => {
  const theme = useTheme();

  return(
    <Container>
      <BgImage />
      <Header>
        <HeaderLogo source={logo} resizeMode="cover" />
        <HeaderArrow name="arrowleft" size={18} color={theme.colors.gray_500} />
      </Header>

      <Info>
        <InfoLogo 
          source={{
            uri: image
          }}
          resizeMode="contain"
        />
        <InfoContent>
          <InfoTitle numberOfLines={1}>facebook/react</InfoTitle>
          <InfoDescription numberOfLines={2}>
            A declarative, efficient, and flexible javascript library for building user intkjejk...
          </InfoDescription>
        </InfoContent>
      </Info>

      <InfoCardCountContent>
        <InfoCardCount>
          <InfoCardTitle>4158</InfoCardTitle>
          <InfoCardName>Stars</InfoCardName>
        </InfoCardCount>

        <InfoCardCount>
          <InfoCardTitle>734</InfoCardTitle>
          <InfoCardName>Forks</InfoCardName>
        </InfoCardCount>

        <InfoCardCount>
          <InfoCardTitle>4158</InfoCardTitle>
          <InfoCardName >Issues {'\n'} Abertas</InfoCardName>
        </InfoCardCount>
      </InfoCardCountContent>
    
      <InfoRepositories data={[]} />
    </Container>
  );
}
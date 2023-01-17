import React from 'react';
import { ListRenderItemInfo } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { InfoRepositoryCard, InfoRepositoryCardProps } from '../InfoRepositoryCard';

import { Container } from './styles';

interface InfoRepositoriesProps {
  data: InfoRepositoryCardProps[]
}

export const InfoRepositories = ({data}: InfoRepositoriesProps) => {
  return(
    <Container 
      data={Array.from(Array(10).keys())}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item: any) => item}
      contentContainerStyle={{
        paddingBottom: getBottomSpace()
      }}
      renderItem={({item}: ListRenderItemInfo<InfoRepositoryCardProps>) => (
        <InfoRepositoryCard />
      )}
    />
  );
}

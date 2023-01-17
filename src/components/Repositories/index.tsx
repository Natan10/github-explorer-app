import React from 'react';
import { ListRenderItemInfo } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';


import { RepositoryCard, RepositoryCardProps } from '../RepositoryCard';
import { Container } from './styles';

interface RepositoriesProps {
  data: RepositoryCardProps[]
}

export const Repositories = ({data}: RepositoriesProps) => {
  return(
    <Container
      data={Array.from(Array(10).keys())}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item: any) => item.title}
      contentContainerStyle={{
        paddingBottom: getBottomSpace()
      }}
      renderItem={({item}: ListRenderItemInfo<RepositoryCardProps>) => (
        <RepositoryCard {...item}  />
      )}
    />
  );
}
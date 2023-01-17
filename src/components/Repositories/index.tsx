import React from 'react';
import { ListRenderItemInfo } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

import { RepositoryCard } from '../RepositoryCard';
import { RepositoryCardDTO } from '../RepositoryCard/dtos/repositoryCardDTO';
import { Container } from './styles';

interface RepositoriesProps {
  data: RepositoryCardDTO[]
}

export const Repositories = ({data}: RepositoriesProps) => {
  return(
    <Container
      data={data}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item: any) => item.id}
      contentContainerStyle={{
        paddingBottom: getBottomSpace()
      }}
      renderItem={({item}: ListRenderItemInfo<RepositoryCardDTO>) => (
        <RepositoryCard   
          image={item.image}
          title={item.title}
          description={item.description}
        />
      )}
    />
  );
}
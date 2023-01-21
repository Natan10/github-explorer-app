import React from 'react';
import { ListRenderItemInfo } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import Animated from 'react-native-reanimated';

import { RepositoryCard } from '../RepositoryCard';
import { RepositoryCardDTO } from '../RepositoryCard/dtos/repositoryCardDTO';

interface RepositoriesProps {
  data: RepositoryCardDTO[]
}

export const Repositories = ({data}: RepositoriesProps) => {
  return(
    <Animated.FlatList
      style={{
        marginTop: 48,
        flex: 1
      }}
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
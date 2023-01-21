import React from 'react';
import { ListRenderItemInfo } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import Animated from 'react-native-reanimated';
import { Github } from '../../interfaces/github';

import { RepositoryCard } from '../RepositoryCard';

interface RepositoriesProps {
  data: Github[];
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
      renderItem={({item}: ListRenderItemInfo<Github>) => (
        <RepositoryCard 
          id={item.id}  
          image={item.avatar_url}
          title={item.title}
          description={item.description}
        />
      )}
    />
  );
}
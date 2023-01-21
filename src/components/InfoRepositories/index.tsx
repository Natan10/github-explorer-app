import React from 'react';
import { ListRenderItemInfo } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import Animated from 'react-native-reanimated';

import { RepositoryIssue } from '../../interfaces/issue';
import { InfoRepositoryCard } from '../InfoRepositoryCard';

interface InfoRepositoriesProps {
  data: RepositoryIssue[];
}

export const InfoRepositories = ({data}: InfoRepositoriesProps) => {
  return(
    <Animated.FlatList
      style={{
        marginTop: 42,
        paddingVertical: 0,
        paddingHorizontal: 20
      }} 
      data={data}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item: any) => item.id}
      contentContainerStyle={{
        paddingBottom: getBottomSpace()
      }}
      renderItem={({item}: ListRenderItemInfo<RepositoryIssue>) => (
        <InfoRepositoryCard data={item} />
      )}
    />
  );
}

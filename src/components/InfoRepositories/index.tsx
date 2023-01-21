import React from 'react';
import { ListRenderItemInfo } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

import { RepositoryIssue } from '../../interfaces/issue';
import { InfoRepositoryCard } from '../InfoRepositoryCard';

import { Container } from './styles';

interface InfoRepositoriesProps {
  data: RepositoryIssue[];
}

export const InfoRepositories = ({data}: InfoRepositoriesProps) => {
  return(
    <Container 
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

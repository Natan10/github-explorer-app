import React from 'react';
import {Alert} from 'react-native'
import { MaterialIcons, Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import {useNavigation} from '@react-navigation/native'
import Animated, { SlideInLeft, SlideInRight } from 'react-native-reanimated';
import {Swipeable} from 'react-native-gesture-handler'

import { useRepository } from '../../context/RepositoryContext';

import { 
  Container,
  Logo,
  Info,
  Title,
  Description,
  DeleteButton
} from './styles';

const mockImage = 'https://doodleipsum.com/700?i=c3fb7f663953a463ba30ffde7ce73077'

interface RepositoryCardProps {
  id: number;
  image?: string;
  title: string;
  description: string | null;
}

export const RepositoryCard = ({id, image = mockImage, title, description}: RepositoryCardProps) => {
  const {handleRemoveRepository: removeRepository} = useRepository()
  const theme = useTheme();
  const navigation = useNavigation();

  function navigate(){
    navigation.navigate('Information', { repositoryId: id });
  }

  const handleRemoveRepository = () => {
    return Alert.alert(
      'Remover repositório', 
      'Deseja realmente remover esse repositório?',
      [
        {
          text: 'Sim',
          onPress: () => removeRepository(id)
        },
        {
          text: 'Não',
        }
      ]
    )
  }

  const renderRightAction = () => {
    return(
      <DeleteButton onPress={handleRemoveRepository}>
        <Feather name="trash-2" size={32} color={theme.colors.white} />
      </DeleteButton>
    )
  }

  return(
    <Animated.View
      entering={SlideInRight.duration(500).damping(12)}
      exiting={SlideInLeft.duration(200).damping(12)}
    >
      <Swipeable renderRightActions={renderRightAction}> 
        <Container onPress={navigate}>
          <Logo 
            resizeMode='cover'
            source={{
              uri: image
            }}
            />
          <Info>
            <Title numberOfLines={1}>{title}</Title>
            <Description numberOfLines={1}>
              {description || 'Sem descrição'}
            </Description>
          </Info>
          <MaterialIcons 
            name="keyboard-arrow-right" 
            size={24} 
            color={theme.colors.gray_200} 
            />
        </Container>
      </Swipeable>
      </Animated.View>
  );
}

import {createStackNavigator} from '@react-navigation/stack';

const {Navigator, Screen} = createStackNavigator();

import { Home } from '../screens/Home';

export interface ListRoutes {
  Home: undefined;
}

export const AppRoutes = () => {
  return(
    <Navigator screenOptions={{headerShown: false}}>
      <Screen 
        name='Home'
        component={Home}
      />
    </Navigator>
  )
}
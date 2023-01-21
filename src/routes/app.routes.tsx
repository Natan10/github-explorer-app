import {createStackNavigator} from '@react-navigation/stack';

const {Navigator, Screen} = createStackNavigator();

import { Home } from '../screens/Home';
import { Information } from '../screens/Information';

export interface ListRoutes {
  Home: undefined;
  Information: {repositoryName: string};
}

export const AppRoutes = () => {
  return(
    <Navigator screenOptions={{headerShown: false}}>
      <Screen 
        name='Home'
        component={Home}
      />
      <Screen 
        name="Information"
        component={Information}
      />
    </Navigator>
  )
}
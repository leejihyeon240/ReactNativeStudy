import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import WelcomScreen from './screens/WelcomeScreen';
import UserScreen from './screens/UserScreen';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
  <NavigationContainer>
    <Drawer.Navigator initialRouteName='User'>
      <Drawer.Screen name='Welcome' component={WelcomScreen} />
      <Drawer.Screen name='User' component={UserScreen} />
    </Drawer.Navigator>
  </NavigationContainer>
  );
}

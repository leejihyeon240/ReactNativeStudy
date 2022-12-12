import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button } from 'react-native';

import CategorysScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDatailScreen from './screens/MealDetailScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: '#F2A6B6' },
            headerTintColor: 'white',
            contentStyle: { backgroundColor: '#F2BEB6' }, // 모든 네비게이션바의 제목과 배경색

          }}>
          <Stack.Screen name="MealsCategories" component={CategorysScreen} options={{ title: 'All Categories' } // ***name 말고 다른 걸로 타이틀 하고 싶을 때
          } />
          <Stack.Screen name='MealsOverview' component={MealsOverviewScreen} />
          <Stack.Screen name='MealDetail' component={MealDatailScreen}
          /* options={{
            headerRight: () => {
              return <Button title='Tap me!'>In the header</Button>
            }}} */ />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

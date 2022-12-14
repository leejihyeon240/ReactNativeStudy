import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import CategorysScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDatailScreen from './screens/MealDetailScreen';
import FavoriteScreen from './screens/FavoriteScreen';

import { Ionicons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

// 네비게이터 중첩하기 (즐겨찾기)
function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#F2A6B6' },
        headerTintColor: 'white',
        screenContentStyle: { backgroundColor: '#F2BEB6' }, // 모든 네비게이션바의 제목과 배경색
        drawerContentStyle: { backgroundColor: '#F2A6B6' },
        drawerInactiveTintColor: 'white',
        drawerActiveTintColor: '#F2BEB6',
        drawerActiveBackgroundColor: 'white'

      }}>
      <Drawer.Screen name='Categories' component={CategorysScreen}
        options={{
          title: 'All Categories',  // 상단 제목
          drawerIcon: ({ color, size }) => (
            <Ionicons name='list' color={color} size={size} />
          )
        }} />
      <Drawer.Screen name='Favorites' component={FavoriteScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name='star' color={color} size={size} />
          )
        }} />
    </Drawer.Navigator>
  )
}

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
          <Stack.Screen
            name="MealsCategories"
            component={DrawerNavigator}
            options={{
              title: 'All Categories',
              headerShown: false // 헤더 숨기기
            }} // ***name 말고 다른 걸로 타이틀 하고 싶을 때 
          />
          <Stack.Screen name='MealsOverview' component={MealsOverviewScreen} />
          <Stack.Screen name='MealDetail' component={MealDatailScreen}
            options={{
              title: 'About the Meeal',  // 상단 제목
            }}
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

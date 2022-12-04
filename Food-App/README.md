# Udemy Course
### 【한글자막 React Native – 완벽 가이드 [2022]

###- Food-App

<br>

<!-- <img src="https://user-images.githubusercontent.com/59243729/205455838-b0962320-00e7-48d0-81dd-06665e482467.gif" width="300" height="648"/> -->

<br>

# Record 01
### DATE. 2022-12-04
React-Navigation 패키지 시작하기

<참고 사이트>   
- https://reactnavigation.org/docs/hello-react-navigation

```
Microsoft Windows [Version 10.0.22000.1219]
(c) Microsoft Corporation. All rights reserved.

C:\Users\dihye\Desktop\ReactNativeStudy\Food-App>npm install @react-navigation/native

added 13 packages, and audited 1134 packages in 14s

54 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

C:\Users\dihye\Desktop\ReactNativeStudy\Food-App>npx expo install react-native-screens react-native-safe-area-context
› Installing 2 SDK 47.0.0 compatible native modules using npm
> npm install

added 4 packages, and audited 1138 packages in 4s

54 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities


C:\Users\dihye\Desktop\ReactNativeStudy\Food-App>expo install @react-navigation/native-stack

This command is being executed with the global Expo CLI. Learn more: https://blog.expo.dev/the-new-expo-cli-f4250d8e3421
To use the local CLI instead (recommended in SDK 46 and higher), run:
› npx expo install

Installing 1 other package using npm.
> npm install --save @react-navigation/native-stack

added 2 packages, and audited 1140 packages in 2s

54 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities


C:\Users\dihye\Desktop\ReactNativeStudy\Food-App>
```
<br>
<br>
<br>

# Record 02
### DATE. 2022-12-04
두 화면 사이에 네비게이션 구현하기 (화면 이동)

#### App.js
```javascript
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CategorysScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style='dark' />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="MealsCategories" component={CategorysScreen} />
          <Stack.Screen name='MealsOverview' component={MealsOverviewScreen} />
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

```

<br>

#### CategorysScreen.js
```javascript
import { FlatList } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";

import { CATEGORIES } from "../data/dummy-data";

function CategorysScreen({ navigation }) {
    function renderCategoryItem(itemData) {
        function pressHandler() {
            navigation.navigate('MealsOverview'); // React Navigation이 제공하는 메소드, 이동하려는 화면
        }

        return (
            <CategoryGridTile
                title={itemData.item.title}
                color={itemData.item.color}
                onPress={pressHandler} />
        );// FlatList에서 렌더링하는 모든 항목에 출력
    }

    return (
        <FlatList
            data={CATEGORIES}
            keyExtractor={(item) => item.id}
            renderItem={renderCategoryItem}
            numColumns={2} /> // keyExtractor는 자동으로 item을 매개변수로 받음
    );
}

export default CategorysScreen;
```
<br>

#### CategoryGridTile.js
```javascript
import { Pressable, View, Text, StyleSheet, Platform } from "react-native";

function CategoryGridTile({ title, color, onPress }) {
    return (
        <View style={styles.gridItem}>
            <Pressable
                android_ripple={{ color: '#ccc' }}
                style={({ pressed }) => [
                    styles.button,
                    pressed ? styles.buttonPressed : null] // 참일 경우 buttonPressed(눌렀을 때 효과)를 추가하고, 그렇지 않으면 null을 추가
                }
                onPress={onPress}
            >
                <View style={[styles.innerContainer, { backgroundColor: color }]// 아이템 색상 입히기,
                    // 배열로 변경하여 gridItem 기반의 스타일이 항상 추가되도록 하고, 배경색을 color로 설정한 다른 스타일 객체를 병합
                }>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </Pressable>
        </View>
    )
}

export default CategoryGridTile;

const styles = StyleSheet.create({
    gridItem: {
        flex: 1, // 사용 가능한 모든 공간을 확보
        margin: 16,
        height: 150,
        borderRadius: 8,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 8,
        backgroundColor: 'white', // ios에서는 배경색을 추가해야 그림자를 볼 수 있음 
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible' //  안드로이드 물결 효과 넘어서지 않도록 설정하는 것
    },
    button: { // Pressable이 차지하고 있는 공간이 없기 때문에 만들어줘야함
        flex: 1
    },
    buttonPressed: {
        opacity: 0.5
    },
    innerContainer: {
        flex: 1,
        padding: 16,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18
    }
})
```

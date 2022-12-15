// import { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import MealIsList from '../components/MealsList/MealsList';
import { MEALS } from '../data/dummy-data';
// import { FavoritesContext } from '../store/context/favorites-context';

function FavoritesScreen() {
  // const favoriteMealsCtx = useContext(FavoritesContext);

  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);

  // const favoriteMeals = MEALS.filter(meal => favoriteMealsCtx.ids.includes(meal.id)); // 즐겨찾기를 누른 아이템이 있다면 true를 반환

  
  const favoriteMeals = MEALS.filter((meal) => favoriteMealIds.includes(meal.id)); // 즐겨찾기를 누른 아이템이 있다면 true를 반환

  if (favoriteMeals.length === 0 ) { // 즐겨찾기에 아무 음식이 없을 때
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}> You have no favorite meals yet.</Text>
      </View>
    )
  }
  return <MealIsList items={favoriteMeals} />
}

export default FavoritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white'
  }
});


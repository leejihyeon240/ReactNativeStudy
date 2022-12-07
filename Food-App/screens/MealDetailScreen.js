import { Text, View, Image } from "react-native";
import MealDetails from "../components/MealDetails";

import { MEALS } from '../data/dummy-data'

function MealDatailScreen({ route }) {
    const mealId = route.params.mealId; // params = 화면에 전달했을 법한 매개변수를 포함한 객체 / mealId 아이디 전달 받기

    const selectedMeal = MEALS.find((meal) => meal.id === mealId);

    return (
        <View>
            <Image source={{ uri: selectedMeal.imageUrl }} />
            <Text>{selectedMeal.title}</Text>
            <MealDetails duration={selectedMeal.duration} affordability={selectedMeal.affordability} complexity={selectedMeal.complexity} />
            <Text>Ingredients</Text>
            {selectedMeal.ingredients.map((Ingredient) => (
                <Text key={Ingredient}>{Ingredient}</Text>
            ))}
            <Text>Steps</Text>
            {selectedMeal.steps.map((step) => (
                <Text key={step}>{step}</Text>
            ))}
        </View>
    );

}

export default MealDatailScreen;
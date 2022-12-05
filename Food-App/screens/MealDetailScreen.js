import { Text } from "react-native";

function MealDatailScreen( {route} ) {
    const mealId = route.params.mealId; // params = 화면에 전달했을 법한 매개변수를 포함한 객체 / mealId 아이디 전달 받기

    return <Text>This is the Meal Detail screen ({mealId})</Text>;
}

export default MealDatailScreen;
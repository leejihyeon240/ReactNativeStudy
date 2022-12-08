import { useLayoutEffect } from 'react';
import { Text, View, Image, StyleSheet, ScrollView, Button } from "react-native";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import { MEALS } from '../data/dummy-data'
import List from "../components/MealDetail/List";
import IconButton from '../components/IconButton';

function MealDatailScreen({ route, navigation }) {
    const mealId = route.params.mealId; // params = 화면에 전달했을 법한 매개변수를 포함한 객체 / mealId 아이디 전달 받기

    const selectedMeal = MEALS.find((meal) => meal.id === mealId);

    function headerButtonPressHandler() {
        console.log("Pressed!");
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <IconButton icon="star" color="white" onPress={headerButtonPressHandler}/>
            }
        });
    }, [navigation, headerButtonPressHandler]);

    return (
        <ScrollView style={styles.rootContainer}>
            <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
            <Text style={styles.title}>{selectedMeal.title}</Text>
            <MealDetails // import해서 가져온 거라서 스타일 적용 아래처럼 해줘야함
                duration={selectedMeal.duration}
                affordability={selectedMeal.affordability}
                complexity={selectedMeal.complexity}
                textStyle={styles.detailText} />
                <View style={styles.listOuterContainer}>

                <View style={styles.listContainer}>
                <Subtitle>Ingredient</Subtitle>
                <List data={selectedMeal.ingredients} />
                <Subtitle>Steps</Subtitle>
                <List data={selectedMeal.steps} />
            </View>
                </View>
        </ScrollView>
    );

}

export default MealDatailScreen;

const styles = StyleSheet.create({
    rootContainer: {
        marginBottom: 32
    },
    image: {
        width: '100%',
        height: 350
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
        color: 'white'
    },
    detailText: {
        color: 'white'
    },
    listOuterContainer: {
        alignItems: 'center'
    },
    listContainer: {
        width: '80%'
    }
});
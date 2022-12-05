import { useLayoutEffect } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import MealItem from "../components/MealItem";

import { CATEGORIES, MEALS } from "../data/dummy-data";
import Category from "../models/category";

function MealsOverviewScreen({ route, navigation }) { // route 프로퍼티
    const catId = route.params.categoryId // params = 화면에 전달했을 법한 매개변수를 포함한 객체 / categoryId 아이디 전달 받기

    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >= 0; // 0보다 크거나 같으면 일치하는 값이 있다는 뜻이니 true를 반환
    }); // 해당 카테고리에 해당하는 식단을 모두 반환, filter는 반드시 함수를 가짐

    useLayoutEffect(() => { // setOptions을 사용하려면 바로 사용하면 안 되고, useEffect(or useLayoutEffect[로딩 늦어지는 거 땜에 바꿈]) 를 사용하여 부수 효과를 처리해야한다
        const categoryTitle = CATEGORIES.find((category) => category.id === catId).title // 네비게이션바 제목을 카테고리 제목으로 바꾸기

        navigation.setOptions({
            title: categoryTitle
        });
    }, [catId, navigation]) // 의존성은 catId, navigation (함수 내부에서 사용하는 두 가지 외부 요소)
    

    function renderMealItem(itemData) {
        const item = itemData.item;

        const mealItemProps = {
            title: item.title,
            imageUrl: item.imageUrl, // 마찬가지로 meal.js에 this.imageUrl = imageUrl;가 있기 때문에 사용 가능한 것.
            affordability: item.affordability,
            complexity: item.complexity,
            duration: item.duration
        }
        return <MealItem {...mealItemProps} /> // 객체 내의 모든 프로퍼티를 컴포넌트의 프로퍼티로 배분
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={displayedMeals}
                keyExtractor={(item) => item.id}
                renderItem={renderMealItem}
            />
        </View>
    );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
});
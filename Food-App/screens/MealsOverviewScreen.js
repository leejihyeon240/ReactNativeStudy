import { View, Text, StyleSheet } from "react-native";

import { MEALS } from "../data/dummy-data";

function MealsOverviewScreen( { route }) { // route 프로퍼티
    const catId = route.params.categoryId // params = 화면에 전달했을 법한 매개변수를 포함한 객체 / categoryId 아이디 전달 받기
    return (
        <View style={styles.container}>
            <Text>Meals Overview Screen - {catId}</Text>
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
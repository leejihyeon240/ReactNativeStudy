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
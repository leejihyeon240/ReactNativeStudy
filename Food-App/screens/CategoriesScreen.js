import { FlatList } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";

import { CATEGORIES } from "../data/dummy-data";

function CategorysScreen({ navigation }) {
    function renderCategoryItem(itemData) {
        function pressHandler() {
            navigation.navigate('MealsOverview', {
                categoryId: itemData.item.id, // categoryId를 매개변수 객체로 설정 => 이 친구를 전달함
            }); // React Navigation이 제공하는 메소드, 이동하려는 화면
            // 두번째 매개변수의 값으로 전달하는 객체를 통해 paramas를 정의할 수 있음, 로딩될 화면에 전달해야하는 매개변수
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
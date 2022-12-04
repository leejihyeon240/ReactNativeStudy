import { FlatList } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";

import { CATEGORIES } from "../data/dummy-data";

function renderCategoryItem(itemData) {
    return <CategoryGridTile title={itemData.item.title} color={itemData.item.color} />; // FlatList에서 렌더링하는 모든 항목에 출력
}

function CategorysScreen() {
    return <FlatList data={CATEGORIES} keyExtractor={(item) => item.id} renderItem={renderCategoryItem} /> // keyExtractor는 자동으로 item을 매개변수로 받음
}

export default CategorysScreen;
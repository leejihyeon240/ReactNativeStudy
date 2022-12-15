import { createContext, useState } from "react";

export const FavoritesContext = createContext({
    ids: [],
    addFavorite: (id) => { },
    removeFavorite: (id) => { }
});

function FavoritesContextProvider({ children }) { // 즐겨찾기 음식의 id를 관리하는 데에 필요한 모든 논리를 포함해야 하고
    const [favoriteMealIds, setFavoriteMealIds] = useState([]); // 함수형 컴포넌트이므로 React의 useState 훅을 활용할 것, 즐겨찾기에 등록된 음식의 id로 이루어진 배열이 된다

    function addFavorite(id) {
        setFavoriteMealIds((currentFavIds) => [...currentFavIds, id]); // currentFavIds가 새로운 상태 스냅샷을 반환, 새롭게 수신된 id를 마지막 아이템으로 추가

    }

    function removeFavorite(id) {
        setFavoriteMealIds((currentFavIds) => currentFavIds.filter((mealId) => mealId !== id)); // filter를 통해 매개변수로 수신된 id를 걸러냄, 그렇게 하면 새로운 상태가 걸러진 이전의 상태가 된다
    }

    const value = { // 위의 값 전달
        ids: favoriteMealIds,
        addFavorite: addFavorite,
        removeFavorite: removeFavorite,
    };

    return (
        <FavoritesContext.Provider value={value} // 이 값의 경우 콘텍스트 제공자로 모든 컴포넌트를 둘러싸 준 덕에(App.js에서) 모든 컴포넌트에서 콘텍스트를 사용할 수 있게 됨
        // 즉, addFavorite와 removeFavorite 함수를 호출하거나 id를 읽을 수 있게 됨
        >
            {children}
        </FavoritesContext.Provider>
    );
}

export default FavoritesContextProvider;
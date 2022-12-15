// 슬라이스는 Redux ToolKit의 기능으로 상태(State)와 데이터 및 데이터를 변경할 수 있는 동작을 정의함
import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: {
        ids: []
    },
    reducers: { // 리듀서는 상태를 변경할 때 사용하는 함수
        addFavorite: (state, action) => {
            state.ids.push(action.payload.id); // 즐겨찾기가 추가되면 이 배열에 새 id를 푸시, payload란 전송되는 데이터
        }, // 리듀서로 정의하는 모든 메소드는 자동으로 최신 상태를 입력값으로 가져옴
        removeFavorite: (state, action) => {
            state.ids.splice(state.ids.indexOf(action.payload.id), 1); // 제거할 아이템의 인덱스를 가져옴
        }
    }
});

// 내보내야함
export const addFavorite = favoritesSlice.actions.addFavorite;
export const removeFavorite = favoritesSlice.actions.removeFavorite;
export default favoritesSlice.reducer;
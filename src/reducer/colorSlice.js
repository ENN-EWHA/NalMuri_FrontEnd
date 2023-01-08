import { createSlice } from "@reduxjs/toolkit";

export const colorSlice = createSlice({
    name: "color",
    initialState: {
        colorList: [
            { color: "#ACD6B9", lightColor: "#E7F3EA", emotion: "공포" },
            { color: "#FDBF88", lightColor: "#FFECDC", emotion: "놀람" },
            { color: "#F7778C", lightColor: "#FDD7DD", emotion: "분노" },
            { color: "#8DB6E9", lightColor: "#DDEAF9", emotion: "슬픔" },
            { color: "#BDBFC0", lightColor: "#ECECED", emotion: "중립" },
            { color: "#FFE880", lightColor: "#FFECDC", emotion: "기쁨" },
            { color: "#BBACE0", lightColor: "#FFF9D9", emotion: "혐오" },
        ],
    },
    reducers: {
        colorReducer: (state, action) => {
            state.colorList = "";
        },
    },
});

export const { colorReducer } = colorSlice.actions;
export default colorSlice.reducer;

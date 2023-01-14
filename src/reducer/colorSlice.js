import { createSlice } from "@reduxjs/toolkit";

export const colorSlice = createSlice({
    name: "color",
    initialState: {
        colorList: [
            {
                color: "#ACD6B9",
                lightColor: "#E7F3EA",
                light2Color: "#D5EADB",
                light3Color: "#C3E0CC",
                emotion: "공포",
            },
            {
                color: "#FDBF88",
                lightColor: "#FFECDC",
                light2Color: "#FDDEC3",
                light3Color: "#FED3AC",
                emotion: "놀람",
            },
            {
                color: "#F7778C",
                lightColor: "#FDD7DD",
                light2Color: "#FABAC5",
                light3Color: "#FAA0AF",
                emotion: "분노",
            },
            {
                color: "#8DB6E9",
                lightColor: "#DDEAF9",
                light2Color: "#C5DAF3",
                light3Color: "#B0CCF0",
                emotion: "슬픔",
            },
            {
                color: "#BDBFC0",
                lightColor: "#ECECED",
                light2Color: "#DDDEDF",
                light3Color: "#D1D3D3",
                emotion: "중립",
            },
            {
                color: "#FFE880",
                lightColor: "#FFF9D9",
                light2Color: "#FFF3BF",
                light3Color: "#FFEFA7",
                emotion: "기쁨",
            },
            {
                color: "#BBACE0",
                lightColor: "#EDE8F8",
                light2Color: "#DFD7F2",
                light3Color: "#D4C9EF",
                emotion: "혐오",
            },
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

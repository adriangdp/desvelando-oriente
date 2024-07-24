import { createSlice } from '@reduxjs/toolkit';

const initialState ={
    theme: "light"
}

const appSlice = createSlice({
    name: "AppVariables",
    initialState,
    reducers:{
        toggleTheme(state, action){
            console.log("Cambiando tema");
            state.theme === "light" ? state.theme = "dark" : state.theme = "light";
            document.documentElement.setAttribute('data-bs-theme', state.theme);
        }
    }
})

export const {toggleTheme} = appSlice.actions;
export default appSlice.reducer

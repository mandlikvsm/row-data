import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    isAuthenticated : false,
}

export const authReducer = createReducer(initialState,
    
    {


    loginRequest: (state) => {
        state.loading = true;
    },

    loginSuccess: (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.message = action.payload.message;

    },

    loginFailure: (state, action) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.error = action.payload.message;


    },





    loadUserRequest: (state) => {
        state.loading = true;
    },

    loadUserSuccess: (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.message = action.payload.message;

    },
    loadUserFailure: (state, action) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.error = action.payload;


    },







    clearMessage: (state) => {
        state.message = null;
    },

    clearError: (state) => {
        state.error = null;
    },

})

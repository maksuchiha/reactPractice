import { loadingReducer } from './loadingReducer'
import { combineReducers } from 'redux'
import { themeReducer } from '../../hw12/bll/themeReducer'
import {configureStore, ThunkDispatch, UnknownAction} from "@reduxjs/toolkit";

const reducers = combineReducers({
    loading: loadingReducer, // hw10
    theme: themeReducer, // hw12
})

export type AppRootState = ReturnType<typeof reducers>;
export type AppDispatch = ThunkDispatch<AppRootState, unknown, UnknownAction>;

const store = configureStore({
    reducer: reducers,
});

export default store

export type AppStoreType = ReturnType<typeof reducers>

// @ts-ignore
window.store = store // for dev // для того чтобы автотесты видели состояние данных

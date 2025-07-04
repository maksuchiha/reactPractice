import React, {useEffect} from 'react'
import s from './HW12.module.css'
import s2 from '../../s1-main/App.module.css'
import SuperSelect from '../hw07/common/c5-SuperSelect/SuperSelect'
import {useDispatch, useSelector} from 'react-redux'
import {changeThemeIdAC, ThemeReducerInitStateType} from './bll/themeReducer'
import {AppDispatch, AppRootState} from "../hw10/bll/store";

/*
* 1 - в файле themeReducer.ts написать нужные типы вместо any, дописать редьюсер
* 2 - получить themeId из редакса
* 3 - дописать тип и логику функции change
* 4 - передать пропсы в SuperSelect
* */


type ThemesValueTypes = 'light' | 'blue' | 'dark'

export type ThemesType = {
    id: number
    value: string | number
}

const themes: ThemesType[] = [
    {id: 1, value: 'light'},
    {id: 2, value: 'blue'},
    {id: 3, value: 'dark'},
]

const HW12 = () => {
    // взять ид темы из редакса
    const {themeId} = useSelector<AppRootState, ThemeReducerInitStateType>((state) => state.theme)
    const dispatch = useDispatch<AppDispatch>()

    const change = (id: number) => { // дописать функцию
        dispatch(changeThemeIdAC(id))
    }

    useEffect(() => {
        document.documentElement.dataset.theme = themeId + ''
    }, [themeId])

    return (
        <div id={'hw12'}>
            <div id={'hw12-text'} className={s2.hwTitle}>
                Homework #12
            </div>

            <div className={s2.hw}>
                <SuperSelect
                    id={'hw12-select-theme'}
                    className={s.select}
                    // сделать переключение тем
                    options={themes}
                    onChangeOption={(value) => change(value)}
                />
            </div>
        </div>
    )
}

export default HW12

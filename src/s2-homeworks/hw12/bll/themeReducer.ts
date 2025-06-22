type ChangeThemeIdACType = ReturnType<typeof changeThemeIdAC>
type ThemeReducerACType = ChangeThemeIdACType
export type ThemeReducerInitStateType = {
    themeId: number
}

const themeReducerInitState: ThemeReducerInitStateType = {
    themeId: 1,
}

export const themeReducer = (state: ThemeReducerInitStateType = themeReducerInitState, action: ThemeReducerACType): ThemeReducerInitStateType => { // fix any
    switch (action.type) {
        // дописать
        case "SET_THEME_ID": {
            return {...state, themeId: action.payload.id}
        }
        default:
            return state
    }
}

export const changeThemeIdAC = (id: number) => {
    return {
        type: 'SET_THEME_ID',
        payload: {
            id
        }
    } as const
}

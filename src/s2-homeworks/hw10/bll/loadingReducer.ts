export type LoadingReducerInitStateType = {
    isLoading: boolean
}
type LoadingACType = ReturnType<typeof loadingAC>
type LoadingReducerACType = LoadingACType

const initState: LoadingReducerInitStateType = {
    isLoading: false,
}

export const loadingReducer = (state = initState, action: LoadingReducerACType): LoadingReducerInitStateType => { // fix any
    switch (action.type) {
        // пишет студент  // need to fix
        case "CHANGE_LOADING": {
            return {...state, isLoading: action.payload.isLoading}
        }
        default:
            return state
    }
}



export const loadingAC = (isLoading: boolean) => {
    return {
        type: 'CHANGE_LOADING',
        payload: {
            isLoading
        }
    } as const
}

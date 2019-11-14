import { constants } from './index'
import { fromJS } from 'immutable'

const defaultStore = fromJS({ // 将state变成一个不可修改的对象
    loginStatus: false
})

export default (state = defaultStore, action) => {
    switch (action.type) {
        case constants.LOGIN:
            return state.set('loginStatus', true)
        case constants.LOGOUT:
            return state.set('loginStatus', false)
        default:
            return state
    }
}
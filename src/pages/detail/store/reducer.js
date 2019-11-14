import * as constants from './constants'
import { fromJS } from 'immutable'

const defaultStore = fromJS({ // 将state变成一个不可修改的对象
    title: '',
    content: ''
})

export default (state = defaultStore, action) => {
    switch (action.type) {
        case constants.DETAIL_DATA:
            return state.merge({
                'title': action.title + action.id,
                'content': action.content
            })
        default:
            return state
    }
}
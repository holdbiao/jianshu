import axios from 'axios'
import { constants } from './index'

const getDetailAction = (title, content, id) => ({
    type: constants.DETAIL_DATA,
    title,
    content,
    id
})
export const getDetail = (id) => {
    return (dispatch) => {
        axios.get('/api/detail.json?id=' + id).then(res => {
            let result = res.data.data
            dispatch(getDetailAction(result.title, result.content, id))
        })
    }
}
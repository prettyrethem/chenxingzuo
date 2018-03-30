import { UPDATE_GOODS_COUNT, SELECTED_OR } from '../../store/reducers'

export default function mapDispatchToProps (dispatch) {
    return {
        updataCount(conut, id) {
            return dispatch({
                 type: UPDATE_GOODS_COUNT,
                 data: conut,
                 id
             })
         },
        toggleClass (selected,id) {
            return dispatch({
               type:SELECTED_OR,
               data:selected,
               id
           })
        }
    }
}
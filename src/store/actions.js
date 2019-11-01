import * as types from './mutations-types'
const actions={
    [types.set_songsList]:(context,songlist)=>{
        context.commit(types.set_songsList,songlist)
        
    }
}
export default actions
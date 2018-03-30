import React, {Component} from 'react'
import { Route, Redirect } from 'react-router-dom'
import { getCookie } from '../utils/utils'
function isLogin () {
   return !!getCookie('token')
}
class RoutesCommon extends Component {
    render () {
        const { routes } = this.props
        return (
           <div style={{'height':'100%'}}>
               {
                   routes.map((item, idx) => {
                       return (
                           <Route key={idx} path={item.path} render={(route)=>{
                               return item.autherization && !isLogin() ? <Redirect to='/login'></Redirect>
                               : 
                               <item.component {...route} routes={item.children}></item.component>                             
                           }}></Route>
                       )
                   })
               }
           </div>
        )
    }
}
export default RoutesCommon
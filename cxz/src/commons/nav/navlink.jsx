import React, {Component} from 'react'
import { NavLink } from 'react-router-dom'
import './navlink.css'
class RoutesCommonLink extends Component {
    render () {
        const { routes } = this.props
        return (
           <div className='nav'>
               {
                   routes.map((item, idx) => {
                       return (
                           <NavLink key={idx} to={item.path}>{item.tit}</NavLink>
                       )
                   })
               }
           </div>
        )
    }
}
export default RoutesCommonLink
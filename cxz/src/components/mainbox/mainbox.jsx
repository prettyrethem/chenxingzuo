import React, { Component } from 'react'
import RoutersCommon from '../../commons/router'
import RoutesCommonLink from '../../commons/nav'
import './mainbox.css'
class Mainbox extends Component {
    render () {
        const { routes } = this.props
        return (
            <div className='wrap'>
                <div className='con'>
                    <RoutersCommon routes={routes}></RoutersCommon>
                </div>
                <div className='footer'>
                     <RoutesCommonLink routes={routes}></RoutesCommonLink>
                </div>              
            </div>
        )
    }
}
export default Mainbox
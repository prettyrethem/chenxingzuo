import React, { Component } from 'react'
import './dialog.css'
class Dialog extends Component {
    render (){
        const { tit } = this.props
        return <div className='content'>
             {tit}
        </div>
    }
}

export default Dialog
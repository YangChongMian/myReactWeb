import React,{ Component } from 'react'
import '../html/knowledge.css'

import store from '../../sotre/dataStatus';

export default class Knowledge extends Component {
    constructor(){
        super();
        
        this.state=store.getState();
    }
    render(){
        return (<div className='zhishi'>
            <ul>{
                   this.state.data.htmlPage1.map((item)=>{
                        return <li key={ item.index2 }>
                            <h3 className='titles'>{ item.name }</h3>
                            <span className='fonts'>{ item.res }</span>
                        </li>
                    })
            }</ul>
        </div>)
    }
}

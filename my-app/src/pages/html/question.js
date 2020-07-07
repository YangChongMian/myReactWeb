import React,{ Component } from 'react'
import '../html/question.css'

import store from '../../sotre/dataStatus';

export default class Qustion extends Component {
    constructor(){
        super();
        this.state=store.getState();
    }
    render(){
        return (<div className='zhishi'>
                <ul>{
                    this.state.data.htmlPage2.map((item)=>{
                            return <li key={ item.index2 }>
                                <h3 className='titles'>{ item.name }</h3>
                                { 
                                    item.res.length > 1 ? 
                                    item.res.map((item2,index2s)=>{
                                        return (<div key={ index2s }>
                                            <span>{ item2 }</span>
                                            <br/>
                                            <br/>
                                        </div>)
                                    }) : 
                                    <span className='fonts'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ item.res }</span>
                                }
                            </li>
                        })
                }</ul>
            </div>)
    }
}

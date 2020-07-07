import React,{ Component } from 'react'
import '../pageBlock/pageBlock.css'
import right_arrow from '../../iconFont/jiantou_you.png'

export default class pageBlock extends Component {
    // constructor(props){
    //     super(props);
    // }
    render(){
        let lefts = [];
        let rights = [];
        this.props.arr.forEach( (element,index) => {
            if(index %2 === 1){
               lefts.push(element);
            }else{
                rights.push(element);
            }
        });
        return (
            <div className='pageBlock'>
                <div className='items rights'>
                    {
                        
                        rights.map(( item )=>{
                            return (<div className='blocks' key={ item.pageIndex } style={ item.backgroundColor }>
                            <div className='titles'>{ item.title }</div>
                            <div>
                                    <ul>
                                        { 
                                            item.lists.map(( item2 )=>{
                                                if(item2.src === undefined){
                                                    return (<li className='li-item' onMouseEnter={ ()=>this.overItem(item2.name) } onClick={ ()=>this.clickItem(item2.name) } key={ item2.index2 }>
                                                                <span>{ item2.name }</span>
                                                                
                                                                <img src={ right_arrow } alt='右箭头'/>
                                                            </li>)
                                                }else{
                                                    return (<li className='li-item' onMouseEnter={ ()=>this.overItem(item2.name) } onClick={ ()=>this.clickItem(item2.name) } key={ item2.index2 }>
                                                                <a href={ item2.src }>{ item2.name }</a>
                                                                
                                                                <img src={ right_arrow } alt='右箭头'/>
                                                            </li>)
                                                }
                                            })
                                        }
                                    </ul>  
                                
                            </div>
                        </div>)
                        })
                    }
                </div>
                
                <div className='items lefts'>
                    {
                        
                        lefts.map(( item )=>{
                            return (<div className='blocks' key={ item.pageIndex } style={ item.backgroundColor }>
                            <div className='titles'>{ item.title }</div>
                            <div>
                                    <ul>
                                        { 
                                            item.lists.map(( item2 )=>{
                                                return (<li className='li-item' onMouseEnter={ ()=>this.overItem(item2.name) } onClick={ ()=>this.clickItem(item2.name) } key={ item2.index2 }>
                                                    <span>{ item2.name }</span>
                                                    <img src={ right_arrow } alt='右箭头'/>
                                                </li>)
                                            })
                                        }
                                    </ul>  
                                
                            </div>
                        </div>)
                        })
                    }
                </div>
            </div>
        )
    }
    clickItem(item2){
        //  console.log(item2);
    }
    overItem(item2){
        // console.log(item2);
    }
}

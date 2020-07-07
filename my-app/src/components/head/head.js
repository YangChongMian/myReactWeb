import React,{ Component } from 'react';
import './head.css';
import { NavLink } from 'react-router-dom';
import store from '../../sotre/dataStatus';


export default class Head extends Component{
    constructor(props){
        super(props);
        this.state=store.getState();
        this.getStatus = this.getStatus.bind(this)
        this.pathChange = this.pathChange.bind(this)
        //如果组件加载完成了，可以改变state的值，下面的this.loads用来标志组件有没有加载完成
        if(this.loads === true){
            store.subscribe(this.pathChange);
        }
    }
    componentDidMount(){
        this.loads = true;
    }
    componentWillUnmount(){
        this.loads = false;
    }
    render(){
        return (
            <div>
                <div className='head'>
                    
                    <div className='page-lits'>
                        <ul>
                            <li>
                                <div className='appTitle'>
                                    <div className='font1'>烟&nbsp;村&nbsp;梦</div>
                                    <div className='font2'>&nbsp;Y&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;C&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;M</div>
                                </div>
                            </li>
                            {
                                this.state.data.headList.map((item,index) => {
                                    return <li key={item.index} >
                                        <NavLink onClick={ ()=> this.getStatus(item.path) } to={ item.path } activeClassName='active'>
                                            { item.name }
                                            {/* { console.log(item.path === this.state.data.navHeightLight) } */}
                                            <span></span>
                                        </NavLink>
                                    </li>
                                })
                            }
                        </ul>
                    </div>
                </div>
                <div className='head2'>
                    <ul className='bottoms'>
                        {
                            this.state.data.headModule.map((item)=>{
                            return (<li key={item.name} style={ item.backgroundColor }>
                                {
                                    item.list.map( (item2)=>{
                                        return <NavLink onClick={ () => { this.getStatus(item2.linkTo) } } to={ item2.linkTo } key={ item2.name }>{ item2.name }</NavLink>
                                    } )    
                                }
                            </li>)
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
    getThisPath(path){
        // if('html'.includes(path)){
        //     path = '/html'
        // }else if('css'.includes(path)){
        //     path = '/css'
        // }else if('js'.includes(path)){
        //     path = '/js'
        // }else if('ts'.includes(path)){
        //     path = '/ts'
        // }else if('react'.includes(path)){
        //     path = '/react'
        // }else if('vue'.includes(path)){
        //     path = '/vue'
        // }else if('uniapp'.includes(path)){
        //     path = '/uniapp'
        // }
        // return path;
    }
    getStatus(path){
        // let s = this.getThisPath(path);
        // console.log(s)
        // if('html'.includes(path)){
        //     path = '/html'
        // }else if('css'.includes(path)){
        //     path = '/css'
        // }else if('js'.includes(path)){
        //     path = '/js'
        // }else if('ts'.includes(path)){
        //     path = '/ts'
        // }else if('react'.includes(path)){
        //     path = '/react'
        // }else if('vue'.includes(path)){
        //     path = '/vue'
        // }else if('uniapp'.includes(path)){
        //     path = '/uniapp'
        // }


        const action = {
            type:'path_status',
            value:path
        }
        
        let store_path = this.state.data.navHeightLight;
        // console.log(store_path);
        if(store_path.includes(path)){
            // console.log(1)
        }else{
            // console.log(-1)
        }
        store.dispatch(action);
        // console.log(path);
    }
    pathChange(){
        this.setState(store.getState());
    }
}
import React,{ Component } from 'react'
import '../html/htmls.css'
import Head from '../../components/head/head'
import Footer from '../../components/footer/footer'
import Knowledge from './knowledge'
import Question from './question'
import Video from './video'
import Book from './book'

import store from '../../sotre/dataStatus';



export default class HtmlKnowledge extends Component {
    constructor(){
        super();
        this.state=store.getState();
    }
    componentWillMount(){
        // console.log(this.props.match.params.childName);
        // switch(this.props.match.params.childName){
        //     case 'knowledge':
        //         this.setState(this.state.path = <Knowledge />);
        //         break;
        //     case 'question':
        //         this.setState(this.state.path = <Question />);
        //         break;
        //     case 'book':
        //         this.setState(this.state.path = <Book />);
        //         break;
        //     case 'video':
        //         this.setState(this.state.path = <Video />);
        //         break;
        //     default:
        //         this.state.path = '';
        //         break;
        // }
    }
    componentDidUpdate(){

    }
    render(){
        return (<div>
                <Head> /</Head>
                <div className='contents'>{
                    this.props.match.params.childName === 'book' ? <Book /> : 
                    this.props.match.params.childName === 'knowledge' ? <Knowledge /> : 
                    this.props.match.params.childName === 'question' ? <Question /> : <Video /> 
                }</div>
                <Footer />    
        </div>)
    }
}
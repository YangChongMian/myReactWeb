import React,{ Component } from 'react';
import '../js/js.css';
import datas from '../../datas'
import Head from '../../components/head/head'
import Footer from '../../components/footer/footer'
import PageBlock from '../../components/pageBlock/pageBlock'



export default class Css extends Component{
    constructor(){
        super()
        this.state={
            pageBlockList:datas.jsList
        }
    }
    render(){
        return (<div className='html'>
            <Head />
            <PageBlock arr={ this.state.pageBlockList }/>
            <Footer />
        </div>)
    }

}
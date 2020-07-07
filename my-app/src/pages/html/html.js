import React, { Component } from 'react'
import datas from '../../datas'
import '../html/html.css'
import Head from '../../components/head/head'
import Footer from '../../components/footer/footer'
import PageBlock from '../../components/pageBlock/pageBlock'


export default class Body extends Component{
    constructor(){
        super()
        this.state={
            pageBlockList:datas.htmlList
        }
    }
    render(){
        return (
            <div className='html'>
                <Head />
                    <PageBlock arr={ this.state.pageBlockList }/>
                <Footer />
            </div>
        )
    }
}

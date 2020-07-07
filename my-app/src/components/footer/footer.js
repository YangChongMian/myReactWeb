import React, { Component } from 'react'
import '../footer/footer.css'

export default class Footer extends Component {
    render(){
        return (<div className='footer'>
            <div className='appTitle'>
                <div className='font1'>烟&nbsp;村&nbsp;梦</div>
                <div className='font2'>&nbsp;Y&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;C&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;M</div>
            </div>
            <div>
                个人微信
                <img className='imgSize' src={ require("../../imgs/WX/wx.jpg") } alt='微信二维码' />
            </div>
        </div>)
    }
}
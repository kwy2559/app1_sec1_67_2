import React from 'react'

export function Header() {
    const aStyle = {
        display: 'inline-block',
        color: 'blue',
        margin: '7px',
        TextDecoration:'none'
    }


    return(
        <div style={{backgroundColor:'#ccc'}}>
            <a href='' style={aStyle}>Home</a> |&nbsp;
            <a href='' style={aStyle}>React</a> |&nbsp;
            <a href='' style={aStyle}>React Native</a>

        </div>  
    )
}

export function Content(){
    return (
        <div style={{textAlign:'center'}}>
            <h2>Hello<br/>React & ReactNative</h2>
            <br/><br/><br/>
        </div>
    )
}

export const Footer = () =>{
    return (
        <div style={{textAlign:'center'}}>
            &copy; {new Date().getFullYear()} All rights reserved
        </div>
    )
}
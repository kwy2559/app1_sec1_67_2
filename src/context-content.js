import React from "react";
import { userContext } from "./context";

export default function Content(){
    let user =  React.userContext(userContext)

    const ContentStyle={
        backgroundColor:'#ddd',
        textAlign:10,
        margin:10,
        padding:10
    }
    return(
        <div style={ContentStyle}>
            Hello{user}
        </div>
    )
}
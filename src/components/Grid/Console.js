import React from "react";
import { useParams } from "react-router-dom";
function Console(){
    const {console} = useParams()
    return (
        <p>{console} from Console.js</p>
    )
}

export default Console
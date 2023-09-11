import { Link, useParams } from "react-router-dom"
export default function Thank(){

    const {name}=useParams();
    const Hide={
        textDecoration: "none",
        color:"black"
    }
    return(
        <center>
            <h1><Link style={Hide} to='/score'>Thank you for attending our quiz {name}</Link></h1>
        </center>
    )
}
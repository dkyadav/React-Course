import {useParams} from "react-router-dom"

export default function Blogpage(){

    const {id} = useParams();
    
    return(
        <h1>Blog page for id: {id}</h1>
    )
}
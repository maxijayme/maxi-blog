import { useEffect, useState } from "react"
import PostSectionUI from "./PostSectionUI"
import {URL} from '../../utils/url.jsx'

export default function PostSection() {
    const [allEntries, setAllEntries] = useState([])
    useEffect(() => {
        getAllEntries()
    }, [])
    
    async function getAllEntries(userId){
        try{
            await fetch(`${URL}/getpost`,{
                method: "get",
                headers: {
                    "Content-Type": "application/json",
                },   
             }).then(async response => {
                if(response.status === 200){
                    const responseJson = await response.json()
                    setAllEntries(responseJson)
                }
            })
        }
        catch(e){
            console.log(e)
        }
    }
    return (           
        <PostSectionUI allEntries={allEntries}/>
    )
}

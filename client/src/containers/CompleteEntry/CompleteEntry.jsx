import CompleteEntryUi from "./CompleteEntryUi"
import Layout from '../../components/Layout/Layout.jsx'
import { useEffect, useState } from "react"
import {useParams} from 'react-router-dom';
import {URL} from '../../utils/url'

export default function CompleteEntry() {
    const { id } = useParams();
    const [entryData, setEntryData] = useState([])
   

    useEffect(()=>{
        getPost(id)
    },[])

    const getPost= async (id)=>{
        try{
            await fetch(`${URL}/getpost/${id}`,{
                method: "get",
                headers: {
                    "Content-Type": "application/json",
                },   
             }).then(async response => {
                if(response.status === 200){
                    const responseJson = await response.json()
                    setEntryData(responseJson[0])
                }
            })
        }
        catch(e){
            console.log(e)
        }
    }

    return (
        <Layout enablePostBtns={true} entryData = {entryData}>
            <CompleteEntryUi entryData={entryData} />
        </Layout>
    )
}

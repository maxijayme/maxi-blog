import CompleteEntryUi from "./CompleteEntryUi"
import Layout from '../../components/Layout/Layout.jsx'
import { useEffect, useState } from "react"
import {useParams, useNavigate} from 'react-router-dom';
import {URL} from '../../utils/url'

export default function CompleteEntry() {
    const { id } = useParams();
    const [entryData, setEntryData] = useState([])
    const navigate = useNavigate()

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
                    if(responseJson.length>0){
                        setEntryData(responseJson[0])
                    }else{
                        navigate('/')
                    }
                }
            })
        }
        catch(e){
            console.log(e)
            location('/')
        }
    }

    return (
        <Layout enablePostBtns={true} entryData = {entryData}>
            <CompleteEntryUi entryData={entryData} />
        </Layout>
    )
}

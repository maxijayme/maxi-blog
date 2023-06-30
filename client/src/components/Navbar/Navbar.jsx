import { useNavigate } from "react-router-dom";
import NavbarUi from "./NavbarUi"
import {URL} from '../../utils/url'
import { useState } from "react";

export default function Navbar({enablePostBtns, entryData}) {
    const [showModal,setShowModal] = useState(false)
    const [msg, setMsg] = useState("")
    const navigate = useNavigate()
    const handleCreate = ()=>{
        navigate('/newPost')
    }

    const handleDelete = async ()=>{
        const response = await fetch(`${URL}/deletepost/${entryData.id}`,{
            method:'DELETE',
            headers: {
                "Content-Type": "application/json"
            },
            body : JSON.stringify({
                imagePath: entryData.image
            })
        }).then (response => {
            if(response.status === 200) {
                setShowModal(true)
                setMsg("Entrada eliminada con éxito")
                setTimeout(()=>{
                    navigate('/')
                },2000)
            }
        })
    }

    return (
        <NavbarUi handleCreate={handleCreate} handleDelete={handleDelete} showModal={showModal} enablePostBtns={enablePostBtns} msg={msg}/>
    )
}

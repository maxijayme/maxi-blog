import { useNavigate, useLocation  } from "react-router-dom";
import NavbarUi from "./NavbarUi"
import {URL} from '../../utils/url'
import PostContext from "../../context/postContext";
import { useState, useContext, useEffect } from "react";
import LocationContext from '../../context/locationContext.jsx'
export default function Navbar({enablePostBtns, entryData}) {
    const [showModal,setShowModal] = useState(false)
    const [enableEdit,setEnableEdit] = useState(false)
    const [msg, setMsg] = useState("")
    const {setPostData} = useContext(PostContext)
    const location = useLocation()
    const {previousLocation} = useContext(LocationContext)
    const {setPreviousLocation} = useContext(LocationContext)
    const navigate = useNavigate()

    useEffect(()=>{
        if(previousLocation ==='/' ){
            setEnableEdit(true)
        }else{
            setEnableEdit(false)
        }
    },[enableEdit])

    const handleCreate = ()=>{
        setPostData({})
        setPreviousLocation(location.pathname)
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

    const handleEdit = ()=>{
        setPostData(entryData)
        setPreviousLocation(location.pathname)
        setEnableEdit(true)
        navigate('/newPost')
    }

    return (
        <NavbarUi enableEdit={enableEdit} handleCreate={handleCreate} handleDelete={handleDelete} handleEdit={handleEdit}  showModal={showModal} enablePostBtns={enablePostBtns} msg={msg}/>
    )
}

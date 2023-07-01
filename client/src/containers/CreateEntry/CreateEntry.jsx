import CreateEntryUI from './CreateEntryUI'
import Layout from "../../components/Layout/Layout.jsx"
import { useState, useContext, useEffect } from 'react'
import {URL} from '../../utils/url'
import { useNavigate } from 'react-router-dom'
import LocationContext from '../../context/locationContext.jsx'

export default function CreateEntry() {
    const navigate = useNavigate()
    const [showModal,setShowModal] = useState(false)
    const [msg,setMsg] = useState("")
    const [enablePostBtns, setEnalePostBtns] = useState (false)
    const [saveOrUpdateBtns,setSaveOrUpdateBtns] = useState(false)
    const {previousLocation} = useContext(LocationContext)
    const getLocalStorageData = localStorage.maxiBlogPostData
    let savedData;

    if(getLocalStorageData){
        savedData = JSON.parse(getLocalStorageData)
    }
    useEffect(()=>{
        if(savedData?.title){
            setEnalePostBtns(true)
        }
        if(previousLocation === '/'){
            setSaveOrUpdateBtns(false)
        }else{
            setSaveOrUpdateBtns(true)
        }
    },[])

    const [entryForm, setEntryForm] = useState(
        savedData?.image?
        {
            title:savedData.title,
            image:"image",
            imageUrl:`${URL}/${savedData.image}`,
            paragraph:savedData.entry_content
        }:{
            title:"",
            image:"",
            imageUrl:"",
            paragraph:""
        }
    )
   
    const [labelsData, setLabelsData] = useState(
        {
            title:"",
            paragraph:""
        }
    )

    const handleInputForm = (e)=>{
        const inputName = e.target.name;
        const inputValue = e.target.value;
        setEntryForm(values => ({...values, [inputName]: inputValue}))
    }

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = (e) => {
            const imageDataURL = e.target.result;
            setEntryForm(values => ({...values, image: file}))
            setEntryForm(values => ({...values, imageUrl: imageDataURL}))
          };
          reader.readAsDataURL(file);
        }
    };

    const handleFormSubmit = async (e)=>{
        e.preventDefault();
        const form = new FormData()
        form.append('title', entryForm.title)
        form.append('image', entryForm.image)
        form.append('paragraph', entryForm.paragraph)
        await fetch(`${URL}/newpost`, {
            method: 'POST',
            body: form
        })
        .then(data=>{
            if (data.status === 200){
                setShowModal(true);
                setMsg("El post se creó con éxito")
                setTimeout(()=>{
                    navigate('/')
                }, 2000)
            }
        })
    }

    const handleFormUpdate = async (e)=>{
        e.preventDefault();
        const form = new FormData()
        form.append('id', savedData.id)
        form.append('title', entryForm.title)
        form.append('paragraph', entryForm.paragraph)
        if(entryForm.image !== 'image'){
            form.append('image', entryForm.image)
            form.append('prevImage', savedData.image)
        }
        await fetch(`${URL}/updatepost`, {
            method: 'PATCH',
            body: form
        })
        .then(data=>{
            if (data.status === 200){
                setShowModal(true);
                setMsg("El post se actualizó con éxito")
                setTimeout(()=>{
                    navigate('/')
                }, 2000)
            }
        })
    }

    return (
        <Layout enablePostBtns={enablePostBtns}>
            { <CreateEntryUI saveOrUpdateBtns={saveOrUpdateBtns} showModal={showModal} msg={msg} handleInputForm={handleInputForm} handleFormUpdate={handleFormUpdate} handleImageUpload ={handleImageUpload} handleFormSubmit={handleFormSubmit} entryForm={entryForm} labelsData={labelsData}/>}
        </Layout>
    )
}

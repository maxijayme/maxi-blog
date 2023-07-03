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
    const [enableSubmitBtn, setEnableSubmitBtn] = useState (true)
    const [enablePostBtns, setEnablePostBtns] = useState (false)
    const [saveOrUpdateBtns,setSaveOrUpdateBtns] = useState(false)
    const {previousLocation} = useContext(LocationContext)
    const getLocalStorageData = localStorage.maxiBlogPostData;
    const [validForm, setValidForm] = useState({
        title:false,
        image:false,
        paragraph:false
    })
    let savedData;

    if(getLocalStorageData){
        savedData = JSON.parse(getLocalStorageData)
    }
    useEffect(()=>{
        if(savedData?.title){
            setEnablePostBtns(true)
            setEnableSubmitBtn(false)
            setValidForm({
                title:true,
                image:true,
                paragraph:true
            })
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

    const handleInputForm = (e)=>{
        const inputName = e.target.name;
        const inputValue = e.target.value;
        setEntryForm(values => ({...values, [inputName]: inputValue}))
        if(inputName === 'title'){
            if(inputValue.length>150){
                setLabelsData({...labelsData, [inputName]: "El título no puede superar los 150 caracteres"});
                setValidForm(validForm, validForm.title=false);  
            }
            if(inputValue.length===0){
                setLabelsData({...labelsData, [inputName]: "El título es un campo obligatorio"});
                setValidForm(validForm, validForm.title=false);  
            }
            else{
              setLabelsData({...labelsData, [inputName]: ""});
              setValidForm(validForm, validForm.title=true); 
            }
        }
        if(inputName === 'paragraph'){
            if(inputValue.length>1500){
                setLabelsData({...labelsData, [inputName]: "La entrada no puede superar los 1500 caracteres"});
                setValidForm(validForm, validForm.paragraph=false);  
            }
            if(inputValue.length===0){
                setLabelsData({...labelsData, [inputName]: "La entrada no puede estar vacía"});
                setValidForm(validForm, validForm.paragraph=false);  
            }
            else{
              setLabelsData({...labelsData, [inputName]: ""});
              setValidForm(validForm, validForm.paragraph=true); 
            }
        }
        validForm.title && validForm.paragraph && entryForm.imageUrl !=="" ?
        setEnableSubmitBtn(false)
        :setEnableSubmitBtn(true);
    }

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
                window.scroll({
                    top: 0,
                    behavior: 'smooth'
                });
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
            { <CreateEntryUI enableSubmitBtn={enableSubmitBtn} saveOrUpdateBtns={saveOrUpdateBtns} showModal={showModal} msg={msg} handleInputForm={handleInputForm} handleFormUpdate={handleFormUpdate} handleImageUpload ={handleImageUpload} handleFormSubmit={handleFormSubmit} entryForm={entryForm} labelsData={labelsData}/>}
        </Layout>
    )
}

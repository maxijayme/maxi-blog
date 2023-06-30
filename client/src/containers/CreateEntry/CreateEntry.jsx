import CreateEntryUI from './CreateEntryUI'
import Layout from "../../components/Layout/Layout.jsx"
import { useState } from 'react'
import {URL} from '../../utils/url'
import { useNavigate } from 'react-router-dom'

export default function CreateEntry() {
    const navigate = useNavigate()
    const [showModal,setShowModal] = useState(false)
    const [entryForm, setEntryForm] = useState(
        {
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
                setTimeout(()=>{
                    navigate('/')
                }, 2000)
            }
        })
    }

    return (
        <Layout>
            <CreateEntryUI showModal={showModal} handleInputForm={handleInputForm} handleImageUpload ={handleImageUpload} handleFormSubmit={handleFormSubmit} entryForm={entryForm} labelsData={labelsData}/>
        </Layout>
    )
}

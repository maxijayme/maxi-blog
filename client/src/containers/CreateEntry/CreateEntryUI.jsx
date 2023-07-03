import Modal from '../../components/Modal/Modal.jsx'
import { DocumentTextIcon } from '@heroicons/react/24/solid'

export default function CreateEntryUI({enableSubmitBtn, saveOrUpdateBtns, showModal, msg,entryForm, labelsData, handleInputForm, handleImageUpload, handleFormSubmit, handleFormUpdate}) {
    return (
        <div className='container w-10/12 p-3'>
            <form encType="multipart/form-data" method="post" className='grid gap-4'>
                <input type="text" 
                    name="title" 
                    placeholder="Título de la entrada" 
                    id="entryTitle" value={entryForm.title} 
                    maxLength={150}
                    onChange={handleInputForm} 
                    className='px-2'
                />
                <label  id="labelTitle" >{labelsData.title}</label> 
                <input type="file" accept="image/*" onChange={handleImageUpload} className='px-2'/>
                {entryForm.image && <img src={entryForm.imageUrl} alt="Post image"/>}
                <textarea 
                    name="paragraph" 
                    placeholder="Texto de la entrada" 
                    id="entryParagraph" 
                    value={entryForm.paragraph} 
                    maxLength={1500}
                    onChange={handleInputForm} 
                    className='resize-none h-60 px-2'
                />
                <label  id="labelParagraph" >{labelsData.paragraph}</label> 
                {!saveOrUpdateBtns && <button id="createPost_button" onClick={handleFormSubmit} disabled={enableSubmitBtn} className='w-fit justify-self-end bg-slate-500 rounded-md m-3 p-3 flex gap-2 items-center disabled:bg-slate-500/20'>
                    <DocumentTextIcon className='h-4 w-4'/>
                    <p>Guardar entrada</p>
                </button>}
                {saveOrUpdateBtns && <button id="updatePost_button" onClick={handleFormUpdate} disabled={enableSubmitBtn} className='w-fit justify-self-end bg-slate-500 rounded-md m-3 p-3 flex gap-2 items-center disabled:bg-slate-500/20' >   
                    <DocumentTextIcon className='h-4 w-4'/>
                    <p>Guardar cambios</p>
                </button>}
            </form>
            {showModal && <Modal msg={msg}/>}
        </div>
    )
}

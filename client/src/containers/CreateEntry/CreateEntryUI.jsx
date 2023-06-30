import Modal from '../../components/Modal/Modal.jsx'

export default function CreateEntryUI({showModal,entryForm, labelsData, handleInputForm, handleImageUpload, handleFormSubmit}) {
    return (
        <>
            <form encType="multipart/form-data" method="post">
                <input type="text" 
                    name="title" 
                    placeholder="Título de la entrada" 
                    id="entryTitle" value={entryForm.title} 
                    maxLength={150}
                    onChange={handleInputForm} 
                />
                <label  id="title" >{labelsData.title}</label> 
                <input type="file" accept="image/*" onChange={handleImageUpload} />
                {entryForm.image && <img src={entryForm.imageUrl} alt="Post image"/>}
                <textarea 
                    name="paragraph" 
                    placeholder="Texto de la entrada" 
                    id="entryParagraph" 
                    value={entryForm.paragraph} 
                    maxLength={1500}
                    onChange={handleInputForm} 
                />
                <label  id="title" >{labelsData.title}</label> 
                <button id="createPost_button" onClick={handleFormSubmit} >Guardar entrada</button>
            </form>
            {showModal && <Modal msg="El post se creó exitosamente"/>}
        </>
    )
}

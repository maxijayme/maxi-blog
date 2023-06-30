import Modal from '../Modal/Modal.jsx'
export default function NavbarUi({handleCreate,handleEdit, handleSave, handleDelete, enablePostBtns, showModal, msg}) {
    return (
        <nav>
            {!enablePostBtns && <button onClick={handleCreate}>
                Añadir entrada
            </button>}
            {enablePostBtns && 
            <div>
                <button onClick={handleEdit}>
                     Editar entrada
                </button>
                <button onClick={handleSave}>
                     Guardar entrada
                </button>
                <button onClick={handleDelete}>
                     Eliminar entrada
                </button>
            </div>}
            {showModal && <Modal msg={msg}/>}
        </nav>
    )
}

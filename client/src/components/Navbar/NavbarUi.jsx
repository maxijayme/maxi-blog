import Modal from '../Modal/Modal.jsx'
export default function NavbarUi({handleCreate,handleEdit, handleDelete, enablePostBtns, showModal, msg, enableEdit}) {
    
    return (
        <nav>
            {!enablePostBtns && <button onClick={handleCreate}>
                Añadir entrada
            </button>}
            {enablePostBtns && 
            <div>
                {enableEdit && <button onClick={handleEdit}>
                    Editar entrada
                </button>}
                {enableEdit && <button onClick={handleDelete}>
                     Eliminar entrada
                </button>}
            </div>}
            {showModal && <Modal msg={msg}/>}
        </nav>
    )
}

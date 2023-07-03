import Modal from '../Modal/Modal.jsx'
import { PlusIcon, PencilSquareIcon, TrashIcon } from '@heroicons/react/24/solid'
export default function NavbarUi({showBar,handleCreate,handleEdit, handleDelete, enablePostBtns, showModal, msg, enableEdit}) {
    
    return (
        <nav className='w-full h-0 max-sm:h-16 relative max-lg:ml-5 max-sm:ml-0' hidden={showBar}>
            {!enablePostBtns && <button onClick={handleCreate} className='bg-slate-500 rounded-md m-3 p-3 flex gap-2 items-center float-right'>
                <PlusIcon className="h-4 w-4"/>
                <p className='max-lg:hidden'>Añadir entrada</p>
            </button>}
            {enablePostBtns && 
            <div className='flex flex-row sm:flex-col float-right'>
                {enableEdit && <button onClick={handleEdit} className='bg-slate-500 rounded-md m-3 p-3 flex gap-2 items-center float-right'>
                    <PencilSquareIcon className="h-4 w-4"/>
                    <p className='max-lg:hidden'>Editar entrada</p>
                </button>}
                {enableEdit && <button onClick={handleDelete} className='bg-slate-500 rounded-md m-3 p-3 flex gap-2 items-center float-right'>
                <TrashIcon className="h-4 w-4"/>
                    <p className='max-lg:hidden'>Eliminar entrada</p>
                </button>}
            </div>}
            {showModal && <Modal msg={msg} className="absolute left-0"/>}
        </nav>
    )
}

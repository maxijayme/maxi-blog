export default function ModalUi(props) {
    return (
        <div className="w-[20rem] h-[10rem] bg-slate-500 absolute rounded-xl flex justify-center items-center top-40 ml-auto mr-auto left-0 right-0 ">
            <p>{props.msg}</p>
        </div>
    )
}

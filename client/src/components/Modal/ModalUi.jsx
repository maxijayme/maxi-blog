export default function ModalUi(props) {
    console.log(props)
    return (
        <div className="container mx-auto w-1/2">
            <p>{props.msg}</p>
        </div>
    )
}

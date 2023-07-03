import HeaderUi from "./HeaderUi"

export default function Header({showComponent}) {
    

    return (
        <>
            {showComponent && <HeaderUi />}
        </>
    )
}

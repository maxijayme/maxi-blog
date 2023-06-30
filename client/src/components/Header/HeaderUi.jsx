import { Link } from "react-router-dom"
export default function HeaderUi() {
    return (
        <header>
            <Link to="/">
                <img src="../logo.svg" alt="maxi vlog logo" className="w-40" /> 
            </Link>
        </header>
    )
}

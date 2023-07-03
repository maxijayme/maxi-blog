import { Link } from "react-router-dom"
export default function HeaderUi() {
    return (
        <header className="flex w-auto justify-center max-md:justify-start mb-3 border-b border-slate-500/50">
            <div className="lg:w-5/12 lg:max-w-[360px]  max-md:w-40 mx-3 mb-3 mt-3">
                <Link to="/">
                    <img src="../logo.svg" alt="maxi vlog logo" className="w-full m-0 auto" /> 
                </Link>
            </div>
        </header>
    )
}

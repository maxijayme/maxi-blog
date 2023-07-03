import { Link } from "react-router-dom"
import { BuildingStorefrontIcon} from '@heroicons/react/24/solid'
export default function ErrorUI() {
    return (
        <div className="container mx-auto">
            <div className="w-full flex flex-col justify-center mb-6">
                <h2 className="mt-3  text-6xl text-center">Página web no encontrada</h2>
                <h4 className="mt-3  text-md text-center">No te preocupes, lo importante es que te quedes con este mensaje</h4>
            </div>
            <div className="overflow-hidden">
                    <img className="mx-auto" src="./public/404-vegan.gif" alt="Page not found" />
            </div>
            <div className="flex justify-center">
                <Link className="w-fit" to={"../"}>
                    <button className='bg-slate-500 rounded-md m-3 p-3 flex gap-2 w-40 justify-center'>
                        <p>ir a Home</p>
                        <BuildingStorefrontIcon className="w-6 h-6"/>
                    </button>
                </Link>
            </div>
        </div>
    )
}

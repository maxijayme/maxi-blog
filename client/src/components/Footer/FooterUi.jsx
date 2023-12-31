export default function FooterUi() {
    return (
        <footer className="container  flex flex-wrap justify-between h-20 border-t mt-4 border-slate-500/50 py-3 self-end ">
            <div className="flex flex-col justify-center mt-2">
                <p>Copyright © 2023. Maxi Vlog. Todos los derechos reservados.</p>
                <p>Blog desarrollado para la preba técnica de Ensenada</p>
            </div>
            <div className="flex  gap-3 justify-center mt-2">
                <img src="./public/sheap.svg" fill= 'red' className="w-6 h-6 slate-500"/>
                <p>Come lentejas y deja a las ovejas.</p>
            </div>
        </footer>
    )
}

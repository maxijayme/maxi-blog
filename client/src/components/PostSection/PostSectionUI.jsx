import PostCard from '../PostCard/PostCard.jsx'
export default function PostSectionUI({allEntries}) {
    return (
        <section className='flex flex-wrap gap-3 overflow-y-auto scrollbar-hide max-lg:justify-center mx-2'>
            {allEntries.length > 0 ?
            allEntries.map(entry=>(
                <article key={entry.id} className='flex flex-col w-2/5 h-fit min-w-[330px] shadow-[2px_2px_0px_0px] shadow-slate-500/50'>
                    <PostCard entry={entry}/>
                </article>
            ))
            :<p>Nada que mostrar</p>}
        </section>
    )
}

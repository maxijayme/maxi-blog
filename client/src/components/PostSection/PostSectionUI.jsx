import PostCard from '../PostCard/PostCard.jsx'
export default function PostSectionUI({allEntries}) {
    return (
        <section>
            {allEntries.length > 0 ?
            allEntries.map(entry=>(
                <article key={entry.id}>
                    <PostCard entry={entry}/>
                </article>
            ))
            :<p>Nada que mostrar</p>}
        </section>
    )
}

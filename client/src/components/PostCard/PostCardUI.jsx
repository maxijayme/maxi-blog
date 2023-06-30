import {URL}from '../../utils/url.jsx'
import { Link } from 'react-router-dom'
export default function PostCardUI({entry}) {
    const date = entry.date.split('T')[0]
    return (
        <article>
            <Link to={`/${entry.id}`}>
                <h2>{entry.title}</h2>
                <img src={`${URL}/${entry.image}`}/>
            </Link>
            <span>{date}</span>
            <p>{entry.entry_content}</p>
        </article>
    )
}

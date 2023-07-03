import {URL}from '../../utils/url.jsx'
import { Link } from 'react-router-dom'
import { CalendarIcon } from '@heroicons/react/24/solid'

export default function PostCardUI({entry, handleSetLocation}) {
    const date = entry.date.split('T')[0]
    const limitedParagraph = entry.entry_content.slice(0,50)
    return (
        <>
            <Link to={`/${entry.id}`} onClick={handleSetLocation}>
                <div className='w-100'>
                    <img src={`${URL}/${entry.image}`}/>
                </div>
            </Link>
            <div className='border border-t-0 border-slate-500/50 flex flex-col gap-4 p-4 h-full'>
                <Link to={`/${entry.id}`} onClick={handleSetLocation}>
                    <h2 className='text-2xl'>{entry.title}</h2>
                </Link>
                <div className='flex gap-2 text-slate-500'>
                    <CalendarIcon className="h-4 w-4 " />
                    <span className='text-sm align-middle'>{date}</span>
                </div>
                <p>{limitedParagraph}...</p>
            </div>
        </>
    )
}

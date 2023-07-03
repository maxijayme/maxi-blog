import {URL}from '../../utils/url.jsx'
import { CalendarIcon } from '@heroicons/react/24/solid'
export default function CompleteEntryUi({entryData}) {
    const date = entryData?.date?.split('T')[0]
    return (
        <>
            {entryData && <div div className='container w-4/6 max-md:w-4/5 max-sm:w-full mb-5 flex flex-col gap-3'>
                <img src={`${URL}/${entryData.image}`}/>
                <h2 className='text-3xl '>{entryData.title}</h2>
                <div className='flex gap-2 text-slate-500'>
                    <CalendarIcon className="h-4 w-4 " />
                    <span className='text-sm align-middle'>{date}</span>
                </div>
                <p>{entryData.entry_content}</p>
            </div>}
        </>
    )
}

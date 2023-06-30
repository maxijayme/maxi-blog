import {URL}from '../../utils/url.jsx'
export default function CompleteEntryUi({entryData}) {
    const date = entryData?.date?.split('T')[0]
    return (
        <>
            {entryData && <div>
                <h2>{entryData.title}</h2>
                <img src={`${URL}/${entryData.image}`}/>
                <span>{date}</span>
                <p>{entryData.entry_content}</p>
            </div>}
        </>
    )
}

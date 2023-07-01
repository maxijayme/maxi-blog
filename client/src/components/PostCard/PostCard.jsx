import PostCardUI from "./PostCardUI"
import { useLocation  } from "react-router-dom";
import { useContext} from "react";
import LocationContext from '../../context/locationContext.jsx'
export default function PostCard({entry}) {
    const {setPreviousLocation} = useContext(LocationContext)
    const location = useLocation()
    const handleSetLocation = ()=>{
        setPreviousLocation(location.pathname)
    }
    return (           
        <PostCardUI entry={entry} handleSetLocation={handleSetLocation}/>
    )
}

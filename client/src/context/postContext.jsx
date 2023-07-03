import { createContext, useState } from 'react'

const PostContext = createContext()

export const PostContextProvider = ({children}) =>{
    const [postData,setPostData] = useState({});
    return(
        <PostContext.Provider value={{postData,setPostData}}>
            {children}
        </PostContext.Provider>
    )
}

export default PostContext;
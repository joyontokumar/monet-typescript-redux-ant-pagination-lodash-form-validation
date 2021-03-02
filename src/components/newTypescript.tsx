import React, { ReactElement, useEffect, useState } from 'react'

interface PostsInterface {
    title:string,
    body:string,
    id: number
}
interface propsdata {
    name: string
}

const NewTypescript = ({ name }: propsdata): ReactElement  =>{
    const [posts, setPosts] = useState<PostsInterface[]>()
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res =>  res.json())
        .then(data => setPosts(data))
        .catch(err => console.log(err))
    }, [])
    return (
        <div>
            <p>{name}</p>
            <div className="posts-data-show">
                {posts && posts?.map((single,index)=>(
                    <div className="single-posts" key={index}>
                        <h3>{single?.title}</h3>
                        <p>{single?.body}</p>
                    </div>
                ))}

            </div>
        </div>
    )
}
export default NewTypescript

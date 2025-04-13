import React from "react";

type ItemPost = { id: string; title: string; body: string }

const fetchPosts = () => fetch('https://jsonplaceholder.typicode.com/posts').then((res) => res.json() as Promise<ItemPost[]>);

const ImportPost = ({ count }: { count: number }) => {
    const [data, setData] = React.useState<ItemPost[]>([])

    React.useEffect(() => {
        fetchPosts().then(setData)
    }, [])

    return (
        <ul className="posts">
            <li>Parent count: {count}</li>
            {data.map((post) => (
                <li key={post.id} className="post">
                    <h4>{post.title}</h4>
                    <p>{post.body}</p>
                </li>
            ))}
        </ul>
    )
}

export default ImportPost;
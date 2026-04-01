import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"

export const PostDetail = () => {

    const {id} = useParams()
    const [post, setPost] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        fetch(`http://localhost:3000/posts/${id}`)
        .then(res => res.json())
        .then(data => setPost(data))
    }, [id])

    if (!post) return <div>Carregando...</div>

    return (
        <div className={`p-4`}>
            <h1 className="text-xl font-bold"> {post.title}</h1>
            <img src={post.image} alt={post.title} />
            <h2>{post.title}</h2>
            <h3>{post.views}</h3>
            <p>{post.description}</p>
            <button type="submit" className="bg-blue-600 text-white text-xl mt-4 px-5 py-2 rounded hover:bg-blue-700 cursor-pointer" onClick={()=> navigate(-1)}>
                Voltar
            </button>
        </div>
    )
}

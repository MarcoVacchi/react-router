import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function PostDetails() {
    const [posts, setPosts] = useState({});
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const endPoint = `https://jsonplaceholder.typicode.com/posts/${id}`;

    function getPosts() {
        axios.get(endPoint)
            .then(res => {
                setPosts(res.data)
                setLoading(false);
                setError(false);
            })
            .catch(err => {
                console.error(err);
                setError(true);
                setLoading(false);
            });

    }
    useEffect(getPosts, []);

    const navigate = useNavigate();

    if (error) {
        return <div>Error</div>
    }


    if (loading) {
        return <div>Loading</div>
    }

    return <div>
        <h1>{posts.title}</h1>
        <p>{posts.body}</p>
        <p>sono il titolo del post con id: {posts.id}</p>
        <button onClick={() =>
            navigate(-1)
        }>Torna alla pagina precedente</button>
    </div>

};

export default PostDetails;


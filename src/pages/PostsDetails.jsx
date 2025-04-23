import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function PostDetails() {
    const [posts, setPosts] = useState({});
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [prevPost, setPrevPost] = useState(0);
    const [nextPost, setNextPost] = useState(0);

    const endPoint = `https://jsonplaceholder.typicode.com/posts/${id}`;

    function getPosts() {
        axios.get(endPoint)
            .then(res => {
                setPosts(res.data)
                setLoading(false);
                setError(false);
                setPrevPost(Number(id) - 1);
                setNextPost(Number(id) + 1);
            })
            .catch(err => {
                console.error(err);
                setError(true);
                setLoading(false);
            });

    }
    useEffect(getPosts, [id]);

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
        <Link to={`/posts/${prevPost}`} className="p-3"><button className="p-3 bg-primary">Prev post</button></Link>
        <Link to={`/posts/${nextPost}`} className="p-3"><button className="p-3 bg-primary">Next post</button></Link>
    </div>

};

export default PostDetails;


import { useEffect, useState } from "react";
import axios from "axios";

const PostList = () => {
    useEffect(() => {
        console.log('mount pagina PostList');
        return () => {
            console.log('unmount pagina PostList')
        }
    }, [])

    const endPoint = ('https://jsonplaceholder.typicode.com/posts');
    const [array, setArray] = useState([]);


    function takePost() {
        axios.get(endPoint)
            .then(res => {
                setArray(res.data)
            })
            .catch(err => {
                console.error(err)
                alert('error, change the URL');
            });
    };

    useEffect(takePost, []);
    console.log(array);

    return <div className="container">

        <header>
            <h1 className="text-center">PostList</h1>
        </header>
        <main>
            <ol className="list-group list-group-numbered">
                {array.map(({ id, title, body }) => (
                    <div key={id} className="container">
                        <li className="list-group-item p-2 bg-secondary list-style-none"><h2>Title: {title}</h2></li>
                        <li className="list-group-item p-2 bg-secondary fw-bold list-style-none">{body}</li>
                    </div>
                ))}
            </ol>
        </main>
    </div>
}
export default PostList;


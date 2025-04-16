import { useEffect } from "react"

const PostList = () => {
    useEffect(() => {
        console.log('mount pagina PostList');
        return () => {
            console.log('unmount pagina PostList')
        }
    }, [])

    return <div>

        <header>Header PostList</header>
        <h1>PostList</h1>

    </div>
}
export default PostList;
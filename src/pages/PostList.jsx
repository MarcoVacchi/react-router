import { useEffect } from "react"

const PostList = () => {
    useEffect(() => {
        console.log('mount pagina PostList');
        return () => {
            console.log('unmount pagina PostList')
        }
    }, [])

    return <div>

        <header>
            <h1>PostList</h1>
        </header>
        <main>
            <ol>
                <li>post</li>
                <li>post</li>
                <li>post</li>
                <li>post</li>
                <li>post</li>
                <li>post</li>
            </ol>
        </main>
    </div>
}
export default PostList;
import { useEffect } from "react"

const HomePage = () => {
    useEffect(() => {
        console.log('mount pagina homepage');
        return () => {
            console.log('unmount pagina homepage')
        }
    }, [])

    return <div>

        <header>Header</header>
        <h1>Home Page</h1>

    </div>


}
export default HomePage;
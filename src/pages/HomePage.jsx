import { useEffect } from "react"
const HomePage = () => {
    useEffect(() => {
        console.log('mount pagina homepage');
        return () => {
            console.log('unmount pagina homepage')
        }
    }, [])

    return <div>
        <h1>HomePage</h1>
    </div>

}
export default HomePage;
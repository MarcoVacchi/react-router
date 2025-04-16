import { useEffect } from "react"

const AboutUs = () => {
    useEffect(() => {
        console.log('mount pagina About');
        return () => {
            console.log('unmount pagina About')
        }
    }, [])

    return <div>
        <header>Header AboutUs</header>
        <h1>About</h1>
    </div>


}
export default AboutUs;
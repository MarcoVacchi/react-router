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

    </div>


}
export default AboutUs;
import Link from "next/link"

function About(){
    return (
    <>
    <h1>Admin</h1>

    <ul>
        <li>
            <Link href="./signin">signin</Link>
            
           
           
            
        </li>
        <li>
        <Link href="./signout">signout</Link>
        </li>

        <li>
        <Link href="./signup">signup</Link>
        </li>
    </ul>

    <h2>pakckage information</h2>
    <Link href="../package">packageInfo</Link>
    </>
    )
}
export default About
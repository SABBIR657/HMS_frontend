import Link from "next/link";

function signin(){
    return (
    <>
    
    <h1>signin</h1>
    <form>
        <fieldset>
        <legend>Login</legend>
        
        <label for="email">Email:</label>
        <input type="email" id="email" name="email"></input><br></br>
        <label for="password">password:</label>
        <input type="password" id="password" name="password"></input><br></br>
        

        <button type="submit">Login</button>
        </fieldset>
       </form>
    </>
    )
}
export default signin
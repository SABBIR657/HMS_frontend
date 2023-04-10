import Link from "next/link";

export default function signup(){
    return(
        <>
       
        <h1>signup</h1>

        <form>
        <fieldset>
        <legend>Personal Information</legend>
        <label for="name">Name:</label>
        <input type="text" id="name" name="name"></input><br></br>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email"></input><br></br>
        <label for="password">password:</label>
        <input type="password" id="password" name="password"></input><br></br>
        <label for="phone">Phone:</label>
        <input type="text" id="phone" name="phone"></input><br></br>
        <label for="Address">address:</label>
        <input type="text" id="address" name="address"></input><br></br>
        

        <button type="submit">Signup</button>
        </fieldset>
       </form>

        </>
    )
}
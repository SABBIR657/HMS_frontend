import MyLayout from "./component/layout"
import Header from "./component/header"

export default function Home() {
  const names = ['Admin', 'Manager', 'Patient','doctor'];
  return (
    <>
  
    <MyLayout title="Home"/>

    <h1>welcome HMS</h1>
    
    <ul >
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>

    </>
  )
}

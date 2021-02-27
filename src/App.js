import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
 const friends = [
   {name:'tarif1', age: '211'},
   {name:'tarif2', age: '212'},
   {name:'tarif2.5', age: '222'},
   {name:'tarif3', age: '213'}
 ]
  return (
    <div className="App">
      <header className="App-header">
        <Counter></Counter>
        <Users></Users>
       {
         friends.map(fr => <Friend friend={fr}></Friend>)
       }
      </header>
    </div>
  );
}

function Counter() {
  const [count,setCount] = useState(0);
  return(
    <div>
      <h1>count: {count}</h1>
      <button onClick={()=> setCount(count - 1)}>Decrease</button>
      <button onClick={()=> setCount(count + 1)}>Increase</button>
    </div>
  )
}
function Users() {
  const [users,setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  
  },[])
  return(
    <div>
      <h1>user:{users.length}</h1>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
          // console.log(users)
          // users.array.forEach(element => {
          //   return <li>{element.name}</li>
          // });
        }
      </ul>
    </div>
  )
}
function Friend(props) {
  const frisendsStyle = {
    color:'red',
    backgroundColor: 'blue',
    border:'1px solid red',
    margin:'10px',
    width:'300px'
  }
  const {name,age} = props.friend;
  return (<div style={frisendsStyle}>
    <h2>name:{name}</h2>
    <h1>{age}</h1>
  </div>)
}
export default App;

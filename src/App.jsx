import { useState , useEffect } from "react";
import RepoList from "./RepoList";
function Header({title,subtitle}){
  return (
    <>
    <h1>{title}</h1>
    <p>{subtitle}</p>
    </>
    
  )
}


function App(){
  const [ isOnline, setIsOnline] = useState(true);
  const [ user , setUser] = useState(null);
  const [error, setError] = useState(false);
  const [repos, setRepos] = useState([]);



useEffect(() => {
  fetch('https://api.github.com/users/octocat/repos')
.then(response => {
  if(!response.ok) {
    throw new Error("Could not load the user");
  }
  return response.json();
})
.then((data)=>setRepos(data))
.catch((err) => setError(err.message));

fetch("https://api.github.com/users/octocat")
  .then(response => {
    if(!response.ok){
      throw new Error("Could not load the user");
    }
    return response.json();
  })
  .then(data => setUser(data))
  .catch(err => setError(err.message))
}
,[]);

  return (
    
    <div className = "first">
      <RepoList repositories = {repos}/>
      <Header title = "My Developer Journey" subtitle = "Building a freelance portfolio"/>
      <h1>{user ? user.name : "Loading..."}</h1>
      {error && <p style={{color:"red"}}>{error}</p>}
      <p>solve real problem</p>
      <button onClick={() => setIsOnline(!isOnline)}>Toggle Status</button>
      <p>Status: {isOnline ? "Online 🟢" : "Offline 🔴"}</p>
    </div>
  
  )

}

export default App;
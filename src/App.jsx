import { useState, useEffect } from "react";

function App() {
  const [username, setUsername] = useState("octocat");
  const [user, setUser] = useState(null);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
      });
  }, [username]);

  return (
    <div>
      <h1>My GitHub Dashboard</h1>
      <input 
      type="text"
      placeholder="Enter GitHub username..."
      value={searchInput}
      onChange={
        (e)=> setSearchInput(e.target.value)
      }
      />
      <button onClick={
        () => setUsername(searchInput)}>Search</button>
      
      <p>{username}</p>

      {user && (
        <div>
          <img
            src={user.avatar_url}
            alt="User Avatar"
            width="100"
            style={{ borderRadius: "50%" }}
          />
          <h2>{user.name}</h2>
          <p>{user.bio || "no bio"}</p>
        </div>
      )}
    </div>
  );
}

export default App;
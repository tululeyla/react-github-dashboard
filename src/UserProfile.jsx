export default function({user}){
    return (
        <div className="profile-card">
        <h1>{user ? user.name : "Loading profile..."}</h1>
        <p>{user ? user.bio : "No bio"}</p>
        {user && <img src={user.avatar_url} alt={user.name} /> }
        </div>
    )
}
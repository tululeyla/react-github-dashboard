export default function RepoList({repositories}){
  return(
    <>
      <ul>{repositories.map(repo =>
          <li key={repo.id}>{repo.name}</li>
       )}</ul>
    </>
  )
}

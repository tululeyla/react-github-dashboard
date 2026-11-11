export default function RepoList({ repositories = [] }){
  return(
    <section>
      <ul>{repositories.map(repo => (<li key={repo.id}>{repo.name}</li>)
       )}</ul>
    </section>
  );
}

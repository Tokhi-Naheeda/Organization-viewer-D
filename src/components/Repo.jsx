import "./Repo.css";

function Repo({ repo }) {
  return (
    <li>
      &nbsp;({repo.stargazers_count}&nbsp;⭐)&nbsp;
      <a href={repo.html_url} target="_blank" title={repo.description}>
        {repo.full_name.split("/")[1]}
      </a>
      &nbsp;
      {repo.description}
    </li>
  );
}

export default Repo;

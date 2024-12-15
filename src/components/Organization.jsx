import "./Organization.css";
import {useState, useEffect} from 'react'
import Repo from "./Repo"
function Organization({ orgs, currentOrg, currentOrgData, setCurrentOrg }) {
  const [repos, setRepos]=useState([])
  const [loading, setLoading] = useState(true);

  function handleNext() {
    let nextOrg = orgs[orgs.indexOf(currentOrg) + 1];
    if (!nextOrg) {
      nextOrg = orgs[0];
    }
    setCurrentOrg(nextOrg);
    setLoading(true);
  }

  useEffect(()=>{
    const timer=setTimeout(()=>{
    const fetchRepos=async()=>{
      try{
        const repo=await fetch(`https://api.github.com/orgs/${currentOrg}/repos `)
        const repoData=await repo.json()
        setRepos(repoData);
        setLoading(false);
        console.log(repo)
      }catch(error){
        console.log("Error by Fetching Data from Repos",error)
      }
    };
    fetchRepos()
    },5000);
    return()=>clearTimeout(timer);
    },[currentOrg])
    return (
      <div className="org">
        <button onClick={handleNext}>Next</button>
  
        <h2>{currentOrgData.name}</h2>
        <img src={currentOrgData.avatar_url} alt="" />
        <p>{currentOrgData.description}</p>
        <p>
          {currentOrgData.location} {currentOrgData.followers} followers
        </p>
        <ul>
        {loading ? (
          <p></p>
        ) : (
          repos.map((repo) => (
            <Repo key={repo.id} repo={repo} />
          ))
        )}
        </ul>
      </div>
    );
  }

export default Organization;

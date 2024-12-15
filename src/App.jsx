import {useState} from 'react'
import {useEffect} from 'react'
import Organization from './components/Organization'
function App() {

  const [orgs, setOrgs]= useState([])
  const [currentOrg, setCurrentOrg]= useState("")
  const [currentOrgData, setCurrentOrgData]=useState(null)
  const fetchOrgs=async ()=>{
    try{
      const response=await fetch("/orgs.csv");
      const responseText=await response.text();
      const responseArray=responseText.split(",")
      setOrgs(responseArray);
      console.log(responseArray)
      if(responseArray.length>0){  //frage: if(orgs>0)
        setCurrentOrg(responseArray[0])
      }
      console.log(currentOrg)
    }catch(error){
      console.log("Error by Fetching", error);
    }
  }
  useEffect(()=>{
    fetchOrgs();
  },[]);

  const fetchOrganization = async () => {
    if (!currentOrg) return; // If no currentOrg is set, return early

    try {
      const organization = await fetch(`https://api.github.com/orgs/${currentOrg}`);
      const organizationData = await organization.json();
      setCurrentOrgData(organizationData); 
      console.log(organizationData);
    } catch (error) {
      console.error('Error fetching data from GitHub:', error);
    }
  };

  useEffect(() => {
    fetchOrganization(); 
  }, [currentOrg]);


return (
<div>
{currentOrgData ? (
  <Organization
    orgs={orgs}
    currentOrg={currentOrg}
    currentOrgData={currentOrgData}
    setCurrentOrg={setCurrentOrg}
  />
) : (
<p>Loading...</p>
)}
</div>
);
}

export default App;

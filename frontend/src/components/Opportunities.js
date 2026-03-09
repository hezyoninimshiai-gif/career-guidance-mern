import React,{useEffect,useState} from "react";
import axios from "axios";

function Opportunities(){

const [jobs,setJobs]=useState([]);
useEffect(()=>{
axios.get("http://localhost:5000/api/opportunities")
.then(res=>{
setJobs(res.data)
})
.catch(err=>console.log(err))
},[])

return(
<div>
<h2>Government & Private Opportunities</h2>
{jobs.map(job=>(
<div key={job._id}>
<h3>{job.title}</h3>
<p>Salary: {job.salary}</p>
<p>Location: {job.location}</p>
</div>
))}
</div>
)
}

export default Opportunities;
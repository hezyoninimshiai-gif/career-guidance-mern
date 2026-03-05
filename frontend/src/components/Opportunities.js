import React from "react";

function Opportunities(){

const jobs = [
{
title:"Software Engineer",
salary:"₹8 LPA",
location:"Hyderabad"
},
{
title:"Doctor",
salary:"₹10 LPA",
location:"India"
},
{
title:"Chartered Accountant",
salary:"₹7 LPA",
location:"Mumbai"
},
{
title:"Civil Services",
salary:"₹9 LPA",
location:"India"
}
]

return(
<div style={{padding:"50px"}}>
<h2>Government & Private Opportunities</h2>
<div style={{
display:"grid",
gridTemplateColumns:"repeat(2,1fr)",
gap:"20px",
marginTop:"30px"
}}>

{jobs.map((job,index)=>(
<div key={index}
style={{
border:"1px solid #ddd",
padding:"20px",
borderRadius:"10px",
background:"white"
}}>

<h3>{job.title}</h3>
<p>Salary: {job.salary}</p>
<p>Location: {job.location}</p>
<div style={{
marginTop:"10px",
padding:"5px 10px",
background:"#eee",
display:"inline-block",
borderRadius:"6px"
}}>
🔒 Login to see Match %
</div>
</div>
))}
</div>
</div>
)
}

export default Opportunities;
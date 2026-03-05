function OpportunityTile({title,salary,location}){
return(
<div className="card">
<h3>{title}</h3>
<p>Salary: {salary}</p>
<p>Location: {location}</p>
<span style={{
background:"#3498DB",
color:"white",
padding:"4px 8px",
borderRadius:"4px"
}}>
Match % 🔒
</span>
</div>
)
}

export default OpportunityTile
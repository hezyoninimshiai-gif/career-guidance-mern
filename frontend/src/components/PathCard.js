function PathCard({title,description}){
return(
<div className="card">
<h3>{title}</h3>
<p>{description}</p>
<button>Explore</button>
</div>
)
}

export default PathCard
import PathCard from "../components/PathCard"

function Dashboard(){
return(
<div className="container">
<h2>Explore Career Paths</h2>
<div className="grid">
<PathCard 
title="10th Foundation"
description="Explore streams after 10th"
/>

<PathCard 
title="Intermediate Streams"
description="MPC, BiPC, CEC, MEC, HEC"
/>

<PathCard 
title="Professional Growth"
description="Upskilling & career switch"
/>
</div>
</div>
)
}

export default Dashboard
function AuthModal(){

return(

<div style={{
position:"fixed",
top:"0",
left:"0",
width:"100%",
height:"100%",
background:"rgba(0,0,0,0.4)",
display:"flex",
justifyContent:"center",
alignItems:"center"
}}>

<div style={{
background:"rgba(255,255,255,0.2)",
backdropFilter:"blur(10px)",
padding:"30px",
borderRadius:"10px"
}}>

<h2>Login / Register</h2>
<p>
Register to save your path and get job alerts
</p>
<input placeholder="Email"/>
<input placeholder="Password"/>
<button>Register</button>
</div>
</div>
)
}

export default AuthModal
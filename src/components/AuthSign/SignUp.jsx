import {useState} from 'react'

export default function SignUp({setToken}) {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

async function handleSubmit(e){
    e.preventDefault();
    setError(null);

    try {
    // throw new Error('Parameter is not a number!');
      const response = await fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" }, 
        body: JSON.stringify({username:login, password}),
      })
      const result = await response.json();
      setToken(result.token);
      console.log(result);
    } catch (error) {
        setError(error.message);
    }
}
    return (
    <>  
        
        <h2 className='header-signup'>Sign Up</h2> 
        {error && <p>{error}</p>}

        <form onSubmit={handleSubmit} className="form-front">
            <label>Login: <input value={login} onChange={(e) => setLogin(e.target.value)}/>
            </label>
            <label>Password: <input value={password} onChange={(e) => setPassword(e.target.value)}/>
            </label>
            <button>Submit</button>
        </form>
        {/* <div>
      {isAuthenticated ? (
        <div>
          <p>Welcome! You are logged in.</p>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <div>
          <p>Please login</p>
          <button onClick={login}>Login</button>
        </div>
      )}
    </div> */}
    </>
    )
}
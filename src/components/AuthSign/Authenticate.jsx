

export default function Auth() {
    // const [error, setError] = useState(null)
    // const [successMessage, setSuccessMessage] = useState(null)

    // async function handleClick() {
    //     // console.log("Do the thing!")
    //     try {
    //         const response = await fetch("https://fakestoreapi.com/auth/login",{
    //             method: "GET", 
    //             headers: { 
    //               "Content-Type": "application/json",
    //               "Authorization": `Bearer ${token}`}
    //         });
    //         const result = await response.json();
    //         // console.log(result);
    //         setSuccessMessage(result.message);
    //     } catch (error) {
    //         setError(error.message);
    //     }
    // }
    return (
        <>
        <h2 className="Auth">Authenticate</h2>
        {/* {error && <p>{error}</p>}
        {successMessage && <p>{successMessage}</p>}
        <button onClick={handleClick}>Authenticate Token</button> */}
        </>
        )
}
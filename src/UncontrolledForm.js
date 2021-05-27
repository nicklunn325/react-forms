
const UncontrolledForm = () => {
    
    const handleSubmit = (e) => {
        e.preventDefault()
        let firstName = e.target.children[1].value
        let lastName = document.querySelector("#lastName").value
        let location = e.target.children[7].value
        let age = e.target.children[10].value 
        e.target.reset()
        let config = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accepts": "application/json"
            },
            body: JSON.stringify({
                firstName: firstName,
                lastName: lastName,
                location: location,
                age: age
            })
        }

        fetch("http://localhost:3000/people", config)
        .then(res => res.json())
        .then(data => console.log(data))

    }

//    function handleSubmit(e){
//         console.log(e)
//     }
    return(
        <>
            <form onSubmit={handleSubmit}>
                <label>First Name: </label>
                <input type="text"></input>
                <br/>
                <label>Last Name: </label>
                <input id="lastName" type="text"></input>
                <br/>
                <label>Location: </label>
                <input type="text"></input>
                <br/>
                <label>Age: </label>
                <input type="number"></input>
                <br></br>
                <input type="submit" value="Sign Up!"/>
            </form>
        </>
    )
}

export default UncontrolledForm;
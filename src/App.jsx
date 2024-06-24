import React, { useState } from "react";

const App = () => {
    const [name, setname] = useState()
    const [fullname, setFullname] = useState()
    const [password, setpassword] = useState()
    const [newpassword, setnewpassword] = useState()

    const textChange = (event) => {
        setname(event.target.value)
    }
    const passChange = (event) => {
        setpassword(event.target.value)
    }
    const submitText = (event) => {
        event.preventDefault();
        setFullname(name)
        setnewpassword(password)

    }
    return (
        <>
            <div className="container">
                <form onSubmit={submitText}>
                <div class="main_div">
                <h1>Hello {fullname} {newpassword}</h1>
                
                    <input type="text" placeholder="Enter Your Name" defaultValue="" value={name} onChange={textChange} />
                    <input type="text" placeholder="Enter Your Password" defaultValue="" value={password} onChange={passChange} />
                    <button >Submit 👍</button>
                    </div>
                    </form>
            </div>

        </>
    )
}

export default App;
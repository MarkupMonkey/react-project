import { useState } from "react"

export function Login() {
    const [data, setData] = useState({
        username: '',
        password: '',
        remember: false
    })

    function handleInputChange(event) {
        const { name, type, value, checked } = event.target

        setData((data) => { // track the object whit setter function /whenever the next state  of our state variable depends of current state of state variable we must use callback
            return {
                ...data,// we overwrite value so we have to do something to keep the previous value and merge it with the new value   
                [name]: type === 'checkbox' ? checked : value
            }
        })
    }

    function onLogin() {

        console.log(data)
    }
  
    return (
        <>

            <div>
                <button onClick={onLogin} disabled={!data.username + !data.password}>login</button>
            </div>

            <form>
                <input value={data.username} name='username' onChange={handleInputChange} />
                <input value={data.password} type='password' name='password' onChange={handleInputChange} />
                <input checked={data.remember} type='checkbox' name='remember' onChange={handleInputChange} />
            </form>
        </>
    )
}
import { useState } from "react"

function Add() {
    const [user, setUser] = useState(
        {
            name: '',
            phone: '',
            email: ''
        }
        )
    console.log(user);
    const handleChange = (e:React.SyntheticEvent):void =>{
        console.log('e',e)
        setUser(prev=> {
            return {
            ...prev,
            [e.target.name]: e.target.value
        }
        })
    }
  return (
    <form className="add-person">
        <input name="name" value={user.name} placeholder="name" onChange={handleChange}></input>
        <input name="phone" value={user.phone} placeholder="phone"  onChange={handleChange}></input>
        <input name="email" value={user.email} placeholder="email"  onChange={handleChange}></input>
        <button>add</button>
    </form>
  )
}

export default Add
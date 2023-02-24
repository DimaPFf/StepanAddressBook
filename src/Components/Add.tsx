import { useState } from "react"

type Props = {
  handleClose: () => void,
  showModal: boolean
}

function Add({handleClose}: Props) {
  const [user, setUser] = useState(
    {
      name: '',
      phone: '',
      email: ''
    }
  )
  console.log(user);
  const handleChange = (e: React.SyntheticEvent): void => {
    setUser(prev => {
      return {
        ...prev,
        [e.target.name]: e.target.value
      }
    })
  }
  return (
    <div className="add-form-modal">
      <div className="add-form-modal-content">
      <form className="add-person">
        <input name="name" value={user.name} placeholder="name" onChange={handleChange}></input>
        <input name="phone" value={user.phone} placeholder="phone" onChange={handleChange}></input>
        <input name="email" value={user.email} placeholder="email" onChange={handleChange}></input>
        <button>add</button>
        <button onClick={handleClose}>X</button>
      </form>
        </div>
    </div>
  )
}

export default Add

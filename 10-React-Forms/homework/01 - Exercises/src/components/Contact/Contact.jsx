import React from 'react'
import './Contact.modules.css'

// eslint-disable-next-line
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

export function validate({name,email,message}) {
  const errors = {}
  if(!name) errors.name='Se requiere un nombre'

  if(!regexEmail.test(email)) errors.email ='Debe ser un correo electrónico'

  if(!message) errors.message='Se requiere un mensaje'
  
  console.log(errors);
  return errors
  }
  

export default function Contact () {
  const [inputs, setInputs]= React.useState({
      name:'',
      email:'',
      message:''
    })

    const [errors, setErrors]= React.useState({
      name:'',
      email:'',
      message:''
    })


const handleChange = (e)=>{
  
  const {name,value}= e.target
  
  setInputs({...inputs, [name]:value})

  setErrors(validate({...inputs, [name]:value}))

  console.log(errors);
}


const handleSubmit = (e) => {
  e.preventDefault()
  const errorCount= Object.keys(errors).length;
  
  if(!errorCount){
    alert("Datos completos")
  }
  else{
    alert("Debe llenar todos los campos")
  }
}
  return  <div>
            <form onSubmit={handleSubmit}>
              <label>Nombre:</label>
              <input className={errors.name && 'warning'} name="name" onChange={handleChange} placeholder='Escribe tu nombre...'type="text" value={inputs.name}/>
              {errors.name && <p className={'danger'}>{errors.name}</p>}
              <label>Correo Electrónico:</label>
              <input className={errors.email && 'warning'} name="email" onChange={handleChange} placeholder='Escribe tu email...'type="text" value={inputs.email}/>
              {errors.email && <p className={'danger'}>{errors.email}</p>}
              <label>Mensaje:</label>
              <textarea className={errors.message && 'warning'} name="message" onChange={handleChange} placeholder='Escribe tu mensaje...'type="text" value={inputs.message}/>
              {errors.message && <p className={'danger'}>{errors.message}</p>}
              <button type="submit">Enviar</button>
            </form>
          </div>
}

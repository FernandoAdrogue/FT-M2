import React from "react";
import {useDispatch} from 'react-redux'
import {enviarForm} from  '../../redux/actions/actions'
const ContactUs = () => {

  const dispatch = useDispatch()

  const [form, setForm] = React.useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: "",
  });

  const handleSubmit = (event)=>{
    console.log(event.target);
    event.preventDefault()
    dispatch(enviarForm(form))
    // event.target.reset()
    setForm({
      ...form,
      nombre: "",
      email: "",
      asunto: "",
      mensaje: "",
    })
  }

  const handleInput = ({target})=> {
    const {name,value} = target
    setForm({
      ...form,
      [name]: value
    })
  }

 return (
    <div>
      <form className="contactBg" onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre: </label>
        <input name="nombre" onChange={handleInput} value={form.nombre} />
        <label htmlFor="email">Email: </label>
        <input name="email" onChange={handleInput} value={form.email}/>
        <label htmlFor="asunto">Asunto: </label>
        <input name="asunto" onChange={handleInput} value={form.asunto}/>
        <label htmlFor="mensaje">Mensaje: </label>
        <input name="mensaje" onChange={handleInput} value={form.mensaje}/>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default ContactUs;

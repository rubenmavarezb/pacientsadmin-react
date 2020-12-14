import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

const Form = ({ createAppo }) => {

    //useState hook of cita, it will content the value that the user is input
    const [appointment, actAppointment] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    });

    //useState
    const [error, setError] = useState(false)

    //Reading the inputs and target the value to save it
    const actState = (e) => {
        actAppointment({
            ...appointment,
            [e.target.name]: e.target.value
        })
    }

    const { mascota, propietario, fecha, hora, sintomas } = appointment;

    const submitAppointment = (e) => {
        e.preventDefault();

        //validate form
        if(mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === ''){
            setError(true);
            return; //Prevents the code to keep running
        }

        //Delete error message
        setError(false);

        //Assign an ID
        appointment.id = uuidv4();

        //Creating appoinment through a prop sending through the main app
        createAppo(appointment)

        //Restart form
        actAppointment({
            mascota: '',
            propietario: '',
            fecha: '',
            hora: '',
            sintomas: '' 
        })

    }
    return ( 
        <React.Fragment>
            <h2>Crear cita</h2>

            {error ? <p className="alerta-error">Todos los campos deben ser llenados</p> : null}

            <form
                onSubmit={submitAppointment}
            >
                <label>Nombre mascota</label>
                <input
                    type='text'
                    name='mascota'
                    className='u-full-width'
                    placeholder='Nombre de la mascota'
                    onChange={actState}
                    value={mascota}
                />
                <label>Nombre del dueño</label>
                <input
                    type='text'
                    name='propietario'
                    className='u-full-width'
                    placeholder='Dueño de la mascota'
                    onChange={actState}
                    value={propietario}
                />
                <label>Fecha</label>
                <input
                    type='date'
                    name='fecha'
                    className='u-full-width'
                    onChange={actState}
                    value={fecha}
                />
                <label>Hora</label>
                <input
                    type='time'
                    name='hora'
                    className='u-full-width'
                    onChange={actState}
                    value={hora}
                />
                <label>Sintomas</label>
                <textarea
                    className='u-full-width'
                    name='sintomas'
                    onChange={actState}
                    value={sintomas}
                ></textarea>

                <button
                    type='submit'
                    className='u-full-width button-primary'
                >Agregar cita</button>
            </form>
        </React.Fragment>
     );
}

Form.propTypes = {
    createAppo: PropTypes.func.isRequired
}
 
export default Form;
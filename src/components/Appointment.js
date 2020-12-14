import React from 'react';
import PropTypes from 'prop-types';

const Appointment = ({appo, deleteAppointment}) => {
    return ( 
        <div className='cita'>
            <p>Mascota: <span>{appo.mascota}</span></p>
            <p>Propietario: <span>{appo.propietario}</span></p>
            <p>Fecha: <span>{appo.fecha}</span></p>
            <p>Hora: <span>{appo.hora}</span></p>
            <p>Síntomas: <span>{appo.sintomas}</span></p>

            <button
               className='button eliminar u-full-width' 
               onClick={ () => deleteAppointment(appo.id) }
            >Delete &times;</button>
        </div>
     );
}
 
Appointment.propTypes = {
    appo: PropTypes.object.isRequired,
    deleteAppointment: PropTypes.func.isRequired
}

export default Appointment;
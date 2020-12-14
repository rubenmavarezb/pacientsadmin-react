import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import Appointment from './components/Appointment';


function App() {

  let initialAppointment = JSON.parse(localStorage.getItem('Appointments'));

  if(!initialAppointment){
    initialAppointment = []
  }

  const [appointments, saveAppointment] = useState(initialAppointment)

  useEffect( () => {
    if(initialAppointment){
      localStorage.setItem('Appointments', JSON.stringify(appointments));
    } else {
      localStorage.setItem('Appointments', JSON.stringify([]));
    }
  }, [appointments, initialAppointment])

  const createAppo = c => {
    saveAppointment([
      ...appointments,
      c
    ])
  }

  const deleteAppo = itemID => {
    const newAppo = appointments.filter(appointment => (
      appointment.id !== itemID
    ))
    saveAppointment(newAppo)
  }

  const title = appointments.length === 0 ? 'Agrega una cita' : 'Administra tus citas'

  return (
    <React.Fragment>
      <h1>Administrador de pacientes</h1>
      <div className='container'>
        <div className="row">
          <div className="one-half column">
            <Form
              createAppo={createAppo}
            />
          </div>
          <div className="one-half column">
          <h2>{title}</h2>
            {appointments.map(appointment => (
              <Appointment
                key={appointment.id}
                appo={appointment}
                deleteAppointment={deleteAppo}
              />
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>

  );
}

export default App;

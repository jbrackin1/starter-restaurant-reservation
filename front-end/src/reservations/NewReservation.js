import React, {useState}  from 'react'
import {useHistory} from "react-router-dom";
import ReservationForm from './ReservationForm';
import { createReservation } from '../utils/api';

const NewReservation = () => {
  const defaultReservation = {
    first_name: "",
    last_name: "",
    mobile_number: "",
    reservation_date: "",
    reservation_time: "",
    people: 0,
  };

  const [reservation, setReservation] = useState({...defaultReservation});

  const handleFormChange = (e) => {
    setReservation({
      ...reservation,
      [e.target.name]: e.target.value,
    });
  };

  const history = useHistory();
  const handleSubmit = async (e) => {
    const controller = new AbortController();
      reservation.people = Number(reservation.people);
      await createReservation(reservation, controller.signal);
      const date = reservation.reservation_date;
      history.push(`/dashboard?date=${date}`);
    
  };

  return (
    <>
      <ReservationForm
        defaultReservation={reservation}
        handleFormChange={handleFormChange}
        handleSubmit={handleSubmit}
      />
    </>
  );
}

export default NewReservation
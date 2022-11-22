import React, {useState}  from 'react'
import {useHistory} from "react-router-dom";


const NewReservation = () => {
  const defaultReservation = {
    first_name: "",
    last_name: "",
    mobile_number: "",
    reservation_date: "",
    reservation_time: "",
    people: 0,
  };

  const handleSubmit = (e) => {

  }

  const [reservation, setReservation] = useState({...defaultReservation});
}

export default NewReservation
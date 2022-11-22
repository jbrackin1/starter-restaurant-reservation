import React, {useState}  from 'react'

const NewReservation = () => {
  const defaultReservation = {
    first_name: "",
    last_name: "",
    mobile_number: "",
    reservation_date: "",
    reservation_time: "",
    people: 0,
  };

  const handleSubmit = (event) => {

  }
  
  const [reservation, setReservation] = useState({...defaultReservation});
}

export default NewReservation
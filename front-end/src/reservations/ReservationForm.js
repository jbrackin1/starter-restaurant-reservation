import React from 'react'
import {useHistory} from 'react-router-dom'

const ReservationForm = () => {

    const history = useHistory();
    return (
          <form>
            <fieldset>
              <legend className="d-flex justify-content-center">
                Guest Information
              </legend>
              <div className="pb-1">
                <label for="first_name">First Name</label>
                <input
                  type="text"
                  name="first_name"
                  required
                />
              </div>
              <div className="pb-1">
              <label for="last_name">Last Name</label>
                <input
                
                  type="text"
                  name="last_name"
                  required
                />
              </div>
              <div className="pb-1">
            <label for="telephone">Phone</label>
                <input
                  type="tel"
                  name="mobile_number"
                  required
                />
              </div>
              <div className="pb-1">
              <label for="people">Number of People</label>
                <input
                  type="number"
                  name="people"
                  min="1"
                  required
                />
              </div>
              <div>
              <label for="date">Date</label>
              <input
                
                type="date"
                name="reservation_date"
                required
              />
              </div>
              <div>
              <label for="reservation_time">Reservation Time</label>
              <input
                type="time"
                name="reservation_time"
                required
              />
              </div>
            </fieldset>
              <button type="submit"
              >
    
                Submit
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => history.goBack()}
              >
                Cancel
              </button>
          </form>
        )
    };

export default ReservationForm
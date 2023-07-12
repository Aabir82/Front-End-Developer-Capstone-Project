
import {dateToString} from "./utils"

import "./BookingForm.css";

function BookingForm({
  availableTimes,
  setAvailableTimes,
  formData,
  setFormData,
  setTrigger,
  setSubStatus,
  setSave,
}) {
  function handleChange(event) {
    setFormData((e) => {
      //First update the form data object
      //Next check to see if the event type is date, then will have to call the api to update available times.

   

      return {
        ...e,
        [event.target.name]: event.target.value,
      };
    });

    if (event.target.name === "date") {
      setTrigger((e) => e + 1);
      setAvailableTimes({ type: "date", value: event.target.value });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSave((e) => e + 1);
    setTrigger((e) => e + 1);
  }

     const today = new Date();
      const todayStr = dateToString(today);

  return (
    <>
      <form className="booking-form " onSubmit={handleSubmit}>
        <label htmlFor="res-date">Choose date </label>
        <input
          type="date"
          id="res-date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          min={todayStr}
          aria-label="Select todays date or any future date"
          
        />

        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time "
          onChange={handleChange}
          name="time"
          value={formData.time}
          disabled={formData.time === ""}
          min={today}
          aria-label="Select the time for table reservation"
        >
          {availableTimes.map((x) => (
            <option key={x}>{x}</option>
          ))}
        </select>

        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          onChange={handleChange}
          name="guests"
          value={formData.guests}
          aria-label="Provide the number of guests"
        />

        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          onChange={handleChange}
          name="occasion"
          value={formData.occasion}
          aria-label="Select the occasion for the booking"
        >
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>

           <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="someone@example.com"
          id="email"
          onChange={handleChange}
          name="email"
          value={formData.email}
          required
          aria-label="input field for email"
        />

        {formData.time && (
          <input
            className="submit-button button-rounded-corners"
            type="submit"
            value="Make Your reservation"
            aria-label="Click to make a reservation"
          />
        )}
      </form>

      <ul className="available-times">
        <li>Available Slots</li>
        {availableTimes.map((x) => {
          return <li key={x}>{x}</li>;
        })}
      </ul>
      {!formData.time && (
        <p className="no-availability">No slots available for booking</p>
      )}
      
    </>
  );
}

export default BookingForm;

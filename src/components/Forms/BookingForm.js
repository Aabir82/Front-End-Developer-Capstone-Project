import React from "react";
import { useNavigate } from "react-router-dom";

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
        />

        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time "
          onChange={handleChange}
          name="time"
          value={formData.time}
          disabled={formData.time === ""}
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
        />

        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          onChange={handleChange}
          name="occasion"
          value={formData.occasion}
        >
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>

        {formData.time && (
          <input
            className="submit-button button-rounded-corners"
            type="submit"
            value="Make Your reservation"
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

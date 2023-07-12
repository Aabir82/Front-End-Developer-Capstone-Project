import { useReducer, useState, useEffect } from "react";
import BookingForm from "./BookingForm";
import "./BookingPage.css";
import { fetchAPI, submitAPI } from "../../api";
import { dateFromString, dateToString } from "./utils";
import { useNavigate } from "react-router-dom";

//variables for tests
const initializeTimes_test = () => {
  const today = new Date();
  return fetchAPI(today);
};

//update times _ test mimics the initializeTimes_test with its first condition when the date changes
const updateTimes_test = (preDate) => {
  return fetchAPI(preDate);
};

//read from local storage
let availableTimes_test;


function BookingPage() {
  const [formData, setFormData] = useState(initialData());
  const [availableTimes, setAvailableTimes] = useReducer(
    updateItems,
    initializeTimes()
  );
  const [save, setSave] = useState(0);
  const [trigger, setTrigger] = useState(0);
  const navigate = useNavigate();

  function initialData() {
    const date = new Date();
    const obj = {};
    const time = fetchAPI(date);
    obj.date = dateToString(date);
    obj.time = time[0];
    obj.guests = 2;
    obj.occasion = "Birthday";
    obj.email = "";
    return obj;
  }

  function updateItems(state, action) {
    if (action.type === "date") {
      availableTimes_test = fetchAPI(dateFromString(action.value))[0];
      return fetchAPI(dateFromString(action.value));
    }
    if (action.type === "filteredarray") {
      return action.value;
    }
    
  }

  useEffect(() => {
    if (localStorage.getItem(formData.date) !== null) {
      const arr = JSON.parse(localStorage.getItem(formData.date));
      const arr2 = fetchAPI(dateFromString(formData.date));

      arr.map((x) => {
        arr2.splice(arr2.indexOf(x.time), 1);
      });

      setAvailableTimes({ type: "filteredarray", value: arr2 });
      setFormData((e) => {
        return {
          ...e,
          time: arr2[0],
        };
      });
    } else {
      setAvailableTimes({ type: "date", value: formData.date });
      setFormData((e) => {
        return {
          ...e,
          time: availableTimes[0],
        };
      });
    }
    
  }, [trigger]);

  //save the form

  useEffect(() => {
    if (save > 0) {
      if (submitAPI(formData) === true) {
        if (localStorage.getItem(formData.date) !== null) {
          const bookedData = JSON.parse(localStorage.getItem(formData.date));
          bookedData.push(formData);
          localStorage.setItem(formData.date, JSON.stringify(bookedData));

          setTrigger((e) => e + 1);
        } else {
          const bookedData = [];
          bookedData.push(formData);
          localStorage.setItem(formData.date, JSON.stringify(bookedData));

          setTrigger((e) => e + 1);
        }
      }
      navigate("/booking-confirmation");
    }
  }, [save]);

  function initializeTimes() {
    return fetchAPI(dateFromString(formData.date));
  }

  return (
    <div className="booking-section">
      <h2>Book a table</h2>
      <p className="alert-storage">Please note that local browser storage is being used to save the booking data and it needs to be manually cleaned.</p>
      <BookingForm
        availableTimes={availableTimes} //passing the list of available times
        setAvailableTimes={setAvailableTimes}
        formData={formData}
        setFormData={setFormData}
        setSave={setSave}
        setTrigger={setTrigger}
      />
    </div>
  );
}

export default BookingPage;
export { initializeTimes_test, updateTimes_test, availableTimes_test };

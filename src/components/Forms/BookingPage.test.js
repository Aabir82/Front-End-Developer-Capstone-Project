import { initializeTimes_test, updateTimes_test, availableTimes_test } from "./BookingPage";
import { fetchAPI } from "../../api";

import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import BookingPage from "./BookingPage";
import { dateFromString, dateToString } from "./utils";

//The commented out tests were tested before moving ahead with development of more features.

test("Testing initializeTimes function for expected array", () => {
  const today = new Date();
  const fetchedArray = fetchAPI(today);

  expect(initializeTimes_test()).toEqual(fetchedArray);
});

test("Testing function updateTimes to ensure that it returns the same value that is provided in the state ", () => {
  const dateToCheck = new Date("2023-07-12");
  const fetchedArray = fetchAPI(dateToCheck);

  expect(updateTimes_test(dateToCheck)).toEqual(fetchedArray);
});

test("Is data being written to local storage?", () => {
  render(
    <BrowserRouter>
      <BookingPage />
    </BrowserRouter>
  );

  fireEvent.click(screen.getByDisplayValue("Make Your reservation"));
  const today = new Date();
  expect(localStorage.getItem(dateToString(today))).not.toEqual(null);
});

test("Is data being read from local storage?", () => {
    render(
      <BrowserRouter>
        <BookingPage />
      </BrowserRouter>
    );
  
    fireEvent.click(screen.getByDisplayValue("Make Your reservation"));
    const today = new Date();
    expect(localStorage.getItem(dateToString(today)).time).not.toEqual(availableTimes_test);
  });

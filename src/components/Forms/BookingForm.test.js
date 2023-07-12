import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import BookingPage from './BookingPage';

test("Can the booking form be submitted?", () => {
   
    render(
        <BrowserRouter>
            <BookingPage />
        </BrowserRouter>
    )
    
    fireEvent.click(screen.getByDisplayValue("Make Your reservation"));

});
// src/components/TableBookingForm.jsx
import React from 'react';

const TableBookingForm = () => {
  return (
    <div className="container-fluid">
      <h2 className="text-center mb-4">Reserve Your Table</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="date" className="form-label">
            Date
          </label>
          <input
            type="date"
            className="form-control"
            id="date"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="time" className="form-label">
            Time
          </label>
          <input
            type="time"
            className="form-control"
            id="time"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="guests" className="form-label">
            Number of Guests
          </label>
          <input
            type="number"
            className="form-control"
            id="guests"
            placeholder="Enter number of guests"
          />
        </div>
        <button type="submit"  className="btn btn-primary px-3 py-2">
          Reserve
        </button>
      </form>
    </div>
  );
};

export default TableBookingForm;

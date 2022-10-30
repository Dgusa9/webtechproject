import React from "react";
import "./Form.css";

export function Form() {
  return (
    <div className="border rounded mx-auto w-75 p-3">
      <h3>Business search</h3>
      <form className="row row-cols-2 g-5">
        <div className="col-12 ">
          <label for="keyword" className="text-start required">
            Keyword
          </label>
          <input type="text" className="form-control" id="keyword" />
        </div>
        <div className="col-6">
          <label for="distance" className="form-label">
            Distance
          </label>
          <input type="text" className="form-control" id="distance" />
        </div>
        <div className="col-6">
          <label for="category" className="required">
            Category
          </label>

          <select id="location" className="form-select form-control">
            <option selected>Default</option>
            <option>Arts & Entertainment</option>
            <option>Health & Medical</option>
            <option>Food</option>
            <option>Professional Services</option>
          </select>
        </div>
        <div className="col-12">
          <label for="location" className="required">
            Location
          </label>
          <input type="text" id="location" className="form-control" />
        </div>
        <div className="col-12">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="gridCheck"
            />
            <label className="form-check-label" for="gridCheck">
              Auto-detect my location
            </label>
          </div>
        </div>
        <div className="col-12  justify-content-between text-center">
          <button type="submit" className="btn btn-danger m-2">
            Sign in
          </button>

          <button type="submit" className="btn btn-primary m-2">
            Clear
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;

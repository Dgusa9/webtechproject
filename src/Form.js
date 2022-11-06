import axios from "axios";
import React, { useState, useEffect } from "react";
import "./Form.css";

const categories = [
  "Default",
  "Arts & Entertainment",
  "Health & Medical",
  "Hotels & Travel",
  "Food",
  "Professional Services",
];

export function Form() {
  const [keyword, setKeyword] = useState("");
  const [suggestions, setSuggestions] = useState({});
  const [suggestionsActive, setSuggestionsActive] = useState([]);
  const [suggestionIndex, setSuggestionIndex] = useState(-1);
  const [category, setCategory] = useState(categories[0]);
  const [isAutoDetectChecked, setIsAutoDetectChecked] = useState(false);

  useEffect(() => {
    async function getSuggestions() {
      if (keyword.length > 1) {
        const fetchedSuggestions = await axios.get(
          `http://localhost:3002/autocomplete/${keyword}`
        );
        setSuggestions(fetchedSuggestions.data);
        setSuggestionsActive(true);
      } else {
        setSuggestionsActive(false);
      }
    }
    getSuggestions();
  }, [keyword]);

  const handleChange = (e) => {
    console.log("inside handle change ");
    const query = e.target.value.toLowerCase();
    setKeyword(query);
  };

  const handleClick = (e) => {
    setSuggestions([]);
    setKeyword(e.target.innerText);
    setSuggestionsActive(false);
  };

  const handleKeyDown = (e) => {
    // UP ARROW
    if (e.keyCode === 38) {
      if (suggestionIndex === 0) {
        return;
      }
      setSuggestionIndex(suggestionIndex - 1);
    }
    // DOWN ARROW
    else if (e.keyCode === 40) {
      if (suggestionIndex - 1 === suggestions.length) {
        return;
      }
      setSuggestionIndex(suggestionIndex + 1);
    }
    // ENTER
    else if (e.keyCode === 13) {
      setKeyword(suggestions.terms[suggestionIndex].text);
      setCategory(suggestions.categories[suggestionIndex].title);
      setSuggestionIndex(0);
      setSuggestionsActive(false);
    }
  };

  const Suggestions = () => {
    return (
      <ul className="list-group">
        {(suggestions.terms || []).map((suggestion, index) => {
          return (
            <li
              className={`list-group-item list-group-item-action  ${
                index === suggestionIndex ? " active" : ""
              }`}
              key={index}
              onClick={handleClick}
            >
              {suggestion.text}
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <div className="border rounded mx-auto w-75 p-3">
      <h3>Business search</h3>
      <form className="row row-cols-2 g-5">
        <div className="col-12 ">
          <label for="keyword" className="text-start required">
            Keyword
          </label>
          <input
            type="text"
            className="form-control"
            id="keyword"
            value={keyword}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
          {suggestionsActive && <Suggestions />}
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
            {categories.map((cat) => {
              if (cat == category) {
                return <option selected>{cat}</option>;
              } else {
                return <option>{cat}</option>;
              }
            })}
          </select>
        </div>
        <div className="col-12">
          <label for="location" className="required">
            Location
          </label>
          <input
            type="text"
            id="location"
            className="form-control"
            disabled={isAutoDetectChecked}
          />
        </div>
        <div className="col-12">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="gridCheck"
              checked={isAutoDetectChecked}
              onChange={() => setIsAutoDetectChecked((prev) => !prev)}
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

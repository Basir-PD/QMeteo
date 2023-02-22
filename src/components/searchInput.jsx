import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSearchedQuery, setCityWeather } from "../store/features/weather/weatherSlice";
import { BsSearch } from "react-icons/bs";

function searchInput() {
  const { weatherData, searchedQuery } = useSelector((state) => state.weather);
  const [searchInput, setSearchInput] = useState(searchedQuery);
  const dispatch = useDispatch();
  const inputRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    let foundMatch = false;

    Object.keys(weatherData).forEach((item) => {
      if (item?.toLowerCase() === searchInput?.toLowerCase()) {
        dispatch(setCityWeather(weatherData[item]));
        foundMatch = true;
      }
    });

    if (!foundMatch) {
      dispatch(setCityWeather({notFound: true}));
    }
  };

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
    dispatch(setSearchedQuery(e.target.value));
  };

  useEffect(() => {
    inputRef.current.focus();
  }, [])

  return (
    <form onSubmit={handleSubmit} className="relative z-10">
      <div className="bg-white rounded-md overflow-hidden flex items-center justify-between pr-1 py-1">
        <input
          type="text"
          value={searchInput}
          placeholder="Search"
          ref={inputRef}
          onChange={handleInputChange}
          name="search"
          className="p-2 lg:pl-4 lg:p-2.5 text-base lg:text-lg w-full outline-none border-none focus:ring-0"
        />

        <button type="submit" className="p-2 lg:p-2.5 rounded-md text-lg text-white uppercase bg-gradient-to-br from-blue-300 to-blue-500 hover:scale-95 duration-300">
          <BsSearch className="text-lg lg:text-2xl text-white" />
        </button>
      </div>
    </form>
  );
}

export default searchInput;

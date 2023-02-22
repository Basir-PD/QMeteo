import { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setMeasurement } from "../../store/features/weather/weatherSlice";
import { Link } from "react-router-dom";
import Container from "./container";
// Assets
import Logo from '../../assets/logo.png';
import { MdSettings } from "react-icons/md";

function navbar() {
  const dispatch = useDispatch();
  const mesurement = useSelector((state) => state.weather.measurement);
  const [showSettings, setShowSettings] = useState(false);
  const [isChecked, setIsChecked] = useState(mesurement === "c" ? false : true);

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowSettings(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [dropdownRef]);

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
    dispatch(setMeasurement(e.target.checked ? "f" : "c"));
  };

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50">
      <Container>
        <nav className="flex items-center py-4 justify-between">
          <Link to="/">
            <div className="flex items-center space-x-2 text-white">
              <img src={Logo} className="w-9 aspect-square" alt="Logo" />
              <p className="text-lg">QMeteo</p>
            </div>
          </Link>

          <ul className="flex flex-row space-x-5 lg:space-x-7 m-0">
            <li>
              <Link to="/cities" className="text-white hover:text-blue-200 flex items-center space-x-1 text-lg">
                All Cities
              </Link>
            </li>
            <li className="relative" ref={dropdownRef}>
              <button type="button" className="text-white hover:text-blue-200 flex items-center space-x-1 text-lg" onClick={() => setShowSettings(!showSettings)}>
                <MdSettings />
                <span>Settings</span>
              </button>
              {showSettings && (
                <div className="dropdown-container absolute left-1/2 -translate-x-1/2 top-[calc(100%+5px+.9375rem)] flex flex-col space-y-1 text-white rounded-lg bg-white p-8">
                  <label htmlFor="cf-checkbox" className="cf-toggler">
                    <input type="checkbox" checked={isChecked} id="cf-checkbox" className="cf-checkbox" onChange={handleCheckboxChange} />
                    <div className="switch">
                      <span className="absolute left-1.5 font-semibold text-blue-400">°C</span>
                      <span className="absolute right-2 font-semibold text-blue-400">°F</span>
                    </div>
                  </label>
                </div>
              )}
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default navbar;

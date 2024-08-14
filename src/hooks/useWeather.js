import { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchWeatherByCoords,
  fetchWeatherByCity,
  setLocation,
} from "../features/weatherSlice";
import _ from "lodash";

const useWeather = () => {
  const dispatch = useDispatch();
  const weather = useSelector((state) => state.weather);
  const { data, status, error, location } = weather;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedFetchWeather = useCallback(
    _.debounce((city) => {
      dispatch(fetchWeatherByCity(city));
    }, 500),
    [dispatch]
  );

  useEffect(() => {
    if (!location) {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            dispatch(fetchWeatherByCoords({ latitude, longitude }));
          },
          (error) => {
            console.error("Error fetching geolocation:", error);
            dispatch(fetchWeatherByCity("New York")); // Fallback to a default city
          }
        );
      } else {
        dispatch(fetchWeatherByCity("New York")); // Fallback to a default city
      }
    } else {
      debouncedFetchWeather(location);
    }
  }, [dispatch, location, debouncedFetchWeather]);

  return {
    data,
    status,
    error,
    setLocation: (city) => dispatch(setLocation(city)),
  };
};

export default useWeather;

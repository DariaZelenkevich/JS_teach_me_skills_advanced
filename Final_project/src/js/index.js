import React from "react";
import {render} from "react-dom";

import WeatherList from "./components/weather-list";

import '../assets/css/main.css';
import '../assets/scss/main.scss'

const app = document.getElementById("app");

render(<WeatherList />, app);
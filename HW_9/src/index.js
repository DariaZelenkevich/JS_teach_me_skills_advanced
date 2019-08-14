import React from "react";
import {render} from "react-dom";

import TodoList from "./components/todo-list";

const app = document.getElementById("app");

render(<TodoList />, app);
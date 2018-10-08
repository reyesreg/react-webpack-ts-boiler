import React from "react";
import { render } from "react-dom";

import App from "./app/";

const root = document.getElementById("app");
render(<App name="Regine" number={5}/>, root);

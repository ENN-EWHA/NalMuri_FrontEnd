import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import store from "./reducer/store.js";
import { Provider } from "react-redux";
import "./index.css";

// index.js

const http = require('http');
const express = require('express');
const app = express();
const server = createServer(app);
const cors = require('cors');

const PORT = 8080;

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

server.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);

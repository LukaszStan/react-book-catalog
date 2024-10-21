import React from "react";
import {createRoot} from "react-dom/client";
import BookCatalog from "./BookCatalog"
import data from "./books.json"
import './style.css';

const root = createRoot(document.getElementById("root"))
root.render(<BookCatalog books={data}/>)
import React,{useState} from "react";
import "./Style.css";
import book_data from "./BooksApi";
import Navbar from "./Navbar";
import BookCard from "./BookCard";

const Books=()=>{
    const [book,setBook] = useState(book_data);

    return(
        <>
        <Navbar/>
        <BookCard bookData={book_data}/>
        </>
    )
}

export default Books

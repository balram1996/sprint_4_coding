import React,{useState,useEffect} from "react";
import "./Style.css";
import bookdata from "./BooksApi";
import Navbar from "./Navbar";
import BookCard from "./BookCard";

const Books=()=>{

    const [book,setBook] = useState([]);
    const [page,setPage] =  useState(1);
    useEffect(() => {
        fetch(`http://localhost:3002/bookdata?_page=${page}&limit=10`)
        .then((data)=>data.json())
        .then(({data})=>{
            setBook(data)
        })
    }, [page])
    

    return(
        <>
        <Navbar/>
        <BookCard book_Data={bookdata}/>
        </>
    )
}

export default Books

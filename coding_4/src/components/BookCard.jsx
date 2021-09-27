import React, { useState, useEffect } from "react";
import BookDetail from "./BookDetail"
import "./Style.css";



function BookCard({book_Data}){
     
    const [page,setPage] =  useState(1);
    
    return(
        <>
        <section className="main-card--container">
            {
               book_Data.map((curElem)=>{
                   const {id,rating,title,author,image,description} = curElem;
                   return(
                       <>
                       <div className="card">
                       <div className="card-container" key={id}>
                           <div className="card-body">
                               <span>
                                   <p className="book-rating">{rating}</p>
                               </span>
                               <span className="book-title">
                                   <h3>{title}</h3>
                               </span>
                               <span className="book-author">
                                   <h4>{author}</h4>
                               </span>
                               <span className="book-desc">
                                   <p>{description}</p>
                               </span>
                           </div>
                           <img src={image} alt="images" className="book-image"/>
                        </div>
                       </div>
                    
                       </>
                   )
               })
            }
            
        </section>
        <div className="page-btns-div">
        <button className="page-btns" onClick={()=>setPage(page-1)}>Previous</button>
        <button className="page-btns" onClick={()=>setPage(page+1)}>Next</button>
        </div>
        </>
    )
}

export default BookCard;
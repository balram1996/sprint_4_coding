import React from "react";

function BookCard({bookData}){

    return(
        <>
        <section className="main-card--container">
            {
               bookData.map((curElem)=>{
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
        </>
    )
}

export default BookCard;
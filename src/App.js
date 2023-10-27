  // import { NewsContextProvider } from "./NewsContext";
  import React, { useState,useEffect } from 'react'
  import axios from "axios";

  export default function App() {
    const [news,setNews] = useState([])
    useEffect(()=>{
      axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=20ad7c62eb9f41e78c0fcf9997bfc1dd")
      .then((you)=>{
        console.log(you.data.articles);
        setNews(you.data.articles)
      })
    },[])
    return (
    <>  
    <div className="container">
      <div className="row text-center">
     {
      news.map((the)=>{
        return (
          <div className="col my-3">
          <div className="card" style={{width:"18rem"}}>
          <img src={vue.urlToImage == null ? "https://static.foxnews.com/foxnews.com/content/uploads/2023/10/Israeli-airstrike-in-Gaza.jpg" : vue.urlToImage} className="card-img-top" alt="..."/>
          <div className="card-body">
          <div className="card-name">{the.author}</div>
          <h1 className="card-title">{the.title}</h1>
          <p className="card-text">{the.description}</p>
          <h4 className="card-content">{the.content}</h4>
          <h6 className="publisher-name">{the.publishedAt}</h6>
          <a href={vue.url} target="_blank" className="btn btn-primary">Read More</a>

        </div>
      </div>
      </div>
        )
      })
     }
      </div>
    </div>
    </>
    )
  }


// import React, { useEffect, useState } from "react";
// import axios from "axios";


// function Api() {

//     const [data, setData] = useState([]);
//     const API_KEY = "afc8a38f221b4187b2f86384bafc7a81"
//     const URL = "https://newsapi.org/v2/top-headlines?country=us&apiKey=";

//     useEffect(() => {
//         axios
//             .get(URL+API_KEY)
//             .then((response) => {
//                 console.log(response.data);
//                 setData(response.data.articles);
//             })
//             .catch((error) => {
//                 console.log(error);
//             });
//     }, []);

//   return (
//     <div>
//         <h1>Miller</h1>
//         <ul className="space-y-4">
//                 {data.map((article, index) => (
//                     <li key={index} className="bg-gray-100 p-4 rounded-lg shadow-md">
//                         <h3 className="text-xl font-semibold">{article.title}</h3>
//                         <p className="text-gray-600">{article.author}</p>
//                         <p className="text-gray-600">{article.publishedAt}</p>
//                         <a href={article.url} className="text-gray-600">Noticias</a>
//                     </li>
//                 ))}
//             </ul>
//     </div>
//   )
// }

// export default Api

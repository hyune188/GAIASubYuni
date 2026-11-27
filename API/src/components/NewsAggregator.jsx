// import { useState, useEffect } from "react";

// function NewsAggregator() {
//     const [articles, setArticles] = useState([]);

//     useEffect(() => {
//         async function fetchNews() {
//             const res = await fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=nquFDXtickbXItdIOUevnekPd-q-HliGNbEvz6j-bWsDdB_A");
//             const data = await res.json();
//             setArticles(data.articles);
//         }
//         fetchNews();
//     }, []);

//     return (
//         <div>
//             <h2>Latest News</h2>
//             <ul>
//                 {articles.map((article, index) => (
//                     <li key={index}>{article.title}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// }
// export default NewsAggregator;

import { useState, useEffect } from "react";

function NewsAggregator() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        async function fetchNews() {
            try {
                const res = await fetch(
                    `https://newsapi.org/v2/top-headlines?country=us&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`
                );

                const data = await res.json();

                setArticles(data.articles);
            } catch (error) {
                console.error("Error fetching news:", error);
            }
        }

        fetchNews();
    }, []);

    return (
        <div>
            <h2>Latest News</h2>

            <ul>
                {articles.map((article, index) => (
                    <li key={index}>
                        {article.title}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default NewsAggregator;
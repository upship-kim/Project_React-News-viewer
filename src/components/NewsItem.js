import React from 'react'
import styled from 'styled-components'

const NewsItemBlock = styled.div`
    display: flex;
    .thumbnail {
        margin-right: 1rem;
        img {
            display: block;
            width: 160px;
            height: 100px;
            object-fit: cover;
        }
    }
    .content {
        h2 {
            margin: 0;
            a {
                color: black;
            }
        }
        p{
            margin : 0;
            line-height: 1.5;
            margin-top: 0.5rem;
            white-space: normal;
        }
    }
    & + & {
        margin-top: 3rem;
    }
    `;

// {
//     "status": "ok",
//     "totalResults": 22,
//     "articles": [
//       {
//         "source": {
//           "id": null,
//           "name": "Slist.kr"
//         },
//         "author": null,
//         "title": "양준혁♥박현선, 결혼식 사진 공개 '행복하게 잘 살겠습니다' - 싱글리스트",
//         "description": "전 야구선수 양준혁이 결혼 소감을 전했다.\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t15일 양준혁은 자신의 SNS에 \"제가 드디어 유부남이 됐습니다\"라며 결혼...",
//         "url": "http://www.slist.kr/news/articleView.html?idxno=234405",
//         "urlToImage": "http://www.slist.kr/news/photo/202103/234405_394202_1414.jpg",
//         "publishedAt": "2021-03-15T02:13:44Z",
//         "content": "<table><tr><td></td></tr><table><tr><td></td></tr></table><table><tr><td> .\r\n15 SNS \" \" .\r\n\" \" \" . \" .\r\n \" \" .\r\n19 . 12 19 13 . \r\nKBS2 ' 2' .\r\n  kways123@slist.kr\r\n&lt; © , &gt;\r\n</td><td></td><td></… [+38 chars]"
//       },
//     }
// }

const NewsItem = ( {article} ) => {
    const { title, description, url, urlToImage } = article;
    return (
        <NewsItemBlock>
            {urlToImage && (
                <div className="thumbnail">
                    <a href={url} target="_blank" rel="noopener noreferrer">
                        <img src={urlToImage} alt="thumbnail"/>
                    </a>
                </div>
            )}
            <div className="contents">
                <h2>
                    <a href={url} target="_blank" rel="noopener noreferrer">
                        {title}
                    </a>
                </h2>
                <p>{description}</p>
            </div>    
        </NewsItemBlock>
    );
};


export default NewsItem;
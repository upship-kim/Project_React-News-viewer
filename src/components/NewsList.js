import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import axios from 'axios';
import NewsItem from './NewsItem'


const NewsListBlock = styled.div`
    box-sizing: border-box;
    padding-bottom: 3rem;
    width: 768px;
    margin: 0 auto;
    margin-top: 2rem;
    @media screen and (max-width: 768px){
        width: 100%;
        padding-left: 1rem;
        padding-right: 1rem;
    } 
`;



const NewsList = ({ category}) => {
    const [articles, setArticles] = useState(null); 
    const [loading, setLoading] = useState(false);

    useEffect( () => {
        //async를 사용하는 함수 따로 선언
        const fetchData = async () => {
            setLoading(true); 
            try {
                console.log('category',category);
                const query = category === 'all'?'':`&category=${category}`; 
                const response = await axios.get(
                    `http://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=87adf8cd864b4d4e914cb9d92302b635`,
                );
                setArticles(response.data.articles);
                
            } catch (e) {
                console.log(e);
            } setLoading(false);
        };
        fetchData();    //초기 렌더링 
    }, [category]);
    
    //대기중일때 
    if(loading) {
        return <NewsListBlock>대기중...</NewsListBlock>
    }

    //아직 articles 값이 설정되지 않았을 때 
    if(!articles) {
        return null;
    }

    //ariticles 값이 유효 할때
    return (
        <NewsListBlock>
            {articles.map(article => (
                <NewsItem key={article.url} article={article}/>
            ))}
        </NewsListBlock>
    )
}

export default NewsList

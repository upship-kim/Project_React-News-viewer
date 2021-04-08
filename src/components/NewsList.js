import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import NewsItem from './NewsItem';
import usePromise from '../lib/usePromise';

const NewsListBlock = styled.div`
    box-sizing: border-box;
    padding-bottom: 3rem;
    width: 768px;
    margin: 0 auto;
    margin-top: 2rem;
    @media screen and (max-width: 768px) {
        width: 100%;
        padding-left: 1rem;
        padding-right: 1rem;
    }
`;

const NewsList = ({ category }) => {
    // router 로 구현하기
    // const [articles, setArticles] = useState(null);
    // const [loading, setLoading] = useState(false);

    //커스텀 hooks 만들어 구현한기 (usePromise)
    const [loading, response, error] = usePromise(() => {
        const query = category === 'all' ? '' : `&category=${category}`; //아래 주소로 들어가기 위한 query문
        return axios.get(
            `http://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=87adf8cd864b4d4e914cb9d92302b635`,
        );
    }, [category]);

    //대기중일때
    if (loading) {
        return <NewsListBlock>대기중...</NewsListBlock>;
    }

    //아직 articles 값이 설정되지 않았을 때
    if (!response) {
        return null;
    }

    if (error) {
        return <NewsListBlock>에러발생 ! </NewsListBlock>;
    }

    //ariticles 값이 유효 할때
    const { articles } = response.data;
    return (
        <NewsListBlock>
            {articles.map((article) => (
                <NewsItem key={article.url} article={article} />
            ))}
        </NewsListBlock>
    );
};

export default NewsList;

import React,{ useState, useCallback } from 'react';
import axios from 'axios';
import NewsList from './components/NewsList';
import Categories from './components/Categories';
import NewsPage from './pages/NewsPage';
import {Route} from 'react-router-dom';

const App = () => {
  //state로 카테고리 관리할때 
  // const [category, setCategory] = useState('all');
  // const onSelect = useCallback(
  //   category => {
  //     console.log('app=', category);
  //     setCategory(category)
  //   },
  //   [],
  // )
  
  // return (
  //   <>
  //     <Categories category={category} onSelect={onSelect}/>
  //     <NewsList category={category}/>
  //   </>
  // )

  //react router로 연결할 때 
  return <Route path = "/:category?" component={NewsPage}/>;
}


export default App

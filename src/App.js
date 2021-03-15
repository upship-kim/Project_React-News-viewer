import React,{ useState } from 'react';
import axios from 'axios';
import NewsList from './components/NewsList';
import Categories from './components/Categories';

const App = () => {
  const [data, setData] = useState(null);
  const onClick = async () => {
    try{
      const response = await axios.get(
        'http://newsapi.org/v2/top-headlines?country=kr&category=entertainment&apiKey=87adf8cd864b4d4e914cb9d92302b635',
      );
      setData(response.data);
      } catch(e){
        console.log(e);
      }
  };
  return (
    <div>
      <Categories/>
      <NewsList/>
    </div>
  )
}


export default App

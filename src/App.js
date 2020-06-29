import React , {useState, useEffect}from 'react';
import './App.css';
import Topbar from './layouts/Topbar';
import Sidebar from './layouts/Sidebar';
import Footer from './layouts/Footer';
import News from './components/News'
import Axios from 'axios';

function App() {

  const [ news, setNews ] = useState();
  // const { loading, setLoading} = useState(true);

  const [categories, setCategories ] =  useState([
    {
      name : 'Headlines',
      selected  : true
    },
    {
      name : 'Business',
      selected  : false
    },
    {
      name : 'Entertainment',
      selected  : false
    },
    {
      name : 'General',
      selected  : false
    },
    {
      name : 'Health',
      selected  : false
    },
    {
      name : 'Science',
      selected  : false
    },
    {
      name : 'Sports',
      selected  : false
    },
    {
      name : 'Technology',
      selected  : false
    }
]);

  function searchByKeyword(query){
    console.log('\n\n keyword obtained as ', query);

    Axios.get(`http://newsapi.org/v2/everything?q=${query}&sortBy=popularity&apiKey=c342e8b7541b42c08fd08283274acb79`)
    .then(res =>{
      console.log('Queried news are ', res.data);
      setNews(res.data.articles);
    })
  }

  function categorySelected(selectedCategory) {
    console.log('\n\n Selected Category is ', selectedCategory);
    let newCategories = categories.map(item => {
      if(item.name === selectedCategory){
        item.selected = true;
      }else{
        item.selected = false;
      }
      return item;
    })
    setCategories(newCategories);
    console.log('\n\n Updated Categories are ', categories);

    if(selectedCategory === 'Headlines'){
      Axios.get('https://newsapi.org/v2/top-headlines?country=in&sortBy=popularity&apiKey=c342e8b7541b42c08fd08283274acb79')
      .then(res =>{
        console.log('All Indian new headlines are ', res.data);
        setNews(res.data.articles);
      })
    }else{
      Axios.get(`http://newsapi.org/v2/top-headlines?country=in&category=${selectedCategory}&sortBy=popularity&apiKey=c342e8b7541b42c08fd08283274acb79`)
      .then(res =>{
        console.log('Queried news are ', res.data);
        setNews(res.data.articles);
      })
    }
  }

  useEffect( ()=>{
    Axios.get('https://newsapi.org/v2/top-headlines?country=in&sortBy=popularity&apiKey=c342e8b7541b42c08fd08283274acb79')
      .then(res =>{
        console.log('All Indian new headlines are ', res.data);
        setNews(res.data.articles);
      })
  },[]);


  return (
    <div className="main-container">
      <div className="topbar-style"><Topbar executeSearch={searchByKeyword}/></div>
      <div className="sidebar-style"><Sidebar categorySelection={categorySelected} categories={categories}/></div>
      <div className="content-style" >{ news && news.length > 0 && <News news={news}/> }</div>
      <div className="footer-style"><Footer/></div>
    </div>
  );
}

export default App;

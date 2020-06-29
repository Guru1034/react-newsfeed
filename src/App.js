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

  // News API
//   const everythingUrl = 'http://newsapi.org/v2/everything?sortBy=publishedAt&apiKey=c342e8b7541b42c08fd08283274acb79&pageSize=18';
//   const headlinesUrl = 'https://newsapi.org/v2/top-headlines?sortBy=publishedAt&apiKey=c342e8b7541b42c08fd08283274acb79&pageSize=18&country=in';

//   const [categories, setCategories ] =  useState([
//     {
//       name : 'Headlines',
//       selected  : true
//     },
//     {
//       name : 'Business',
//       selected  : false
//     },
//     {
//       name : 'Entertainment',
//       selected  : false
//     },
//     {
//       name : 'General',
//       selected  : false
//     },
//     {
//       name : 'Health',
//       selected  : false
//     },
//     {
//       name : 'Science',
//       selected  : false
//     },
//     {
//       name : 'Sports',
//       selected  : false
//     },
//     {
//       name : 'Technology',
//       selected  : false
//     }
// ]);

//   function searchByKeyword(query){
//     console.log('\n\n keyword obtained as ', query);
//     // Keywork search, so mark all selcted categories as false
//     let newCategories = categories.map(item => {
//         item.selected = false;
//         return item;
//     })
//     setCategories(newCategories);

//     Axios.get(`${everythingUrl}&q=${query}`)
//     .then(res =>{
//       console.log('Queried news are ', res.data);
//       setNews(res.data.articles);
//     })
//   }

//   function categorySelected(selectedCategory) {
//     console.log('\n\n Selected Category is ', selectedCategory);
//     let newCategories = categories.map(item => {
//       if(item.name === selectedCategory){
//         item.selected = true;
//       }else{
//         item.selected = false;
//       }
//       return item;
//     })
//     setCategories(newCategories);
//     console.log('\n\n Updated Categories are ', categories);

//     if(selectedCategory === 'Headlines'){
//       Axios.get(`${headlinesUrl}`)
//       .then(res =>{
//         console.log('All Indian new headlines are ', res.data);
//         setNews(res.data.articles);
//       })
//     }else{
//       Axios.get(`${headlinesUrl}&category=${selectedCategory}`)
//       .then(res =>{
//         console.log('Queried news are ', res.data);
//         setNews(res.data.articles);
//       })
//     }
//   }

//   useEffect( ()=>{
//     Axios.get(`${headlinesUrl}`)
//       .then(res =>{
//         console.log('All Indian new headlines are ', res.data);
//         setNews(res.data.articles);
//       })
//   },[]);

  useEffect( ()=>{
    window.scrollTo(0, 0)
  },[news]);



// Google News
const [categories, setCategories ] =  useState([
  {
    name : 'Top',
    selected  : true
  },
  {
    name : 'World',
    selected  : false
  },
  {
    name : 'Nation',
    selected  : false
  },
  {
    name : 'Business',
    selected  : false
  },
  {
    name : 'Technology',
    selected  : false
  },
  {
    name : 'Entertainment',
    selected  : false
  },
  {
    name : 'Sports',
    selected  : false
  },
  {
    name : 'Science',
    selected  : false
  },
  {
    name : 'Health',
    selected  : false
  }
]);

function searchByKeyword(query){
  console.log('\n\n keyword obtained as ', query);

  Axios.get(`http://gnews.io/api/v3/search?q=${query}&token=9a6674bf15bab6a11b3752f09986d972`)
  .then(res =>{
    console.log('Queried news are ', res.data);
    setNews(res.data.articles);
  })
}

function categorySelected(category) {
  let selectedCategory = category.toLowerCase();
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

  if(selectedCategory === 'Top'){
    Axios.get('https://gnews.io/api/v3/top-news?token=9a6674bf15bab6a11b3752f09986d972&country=in')
    .then(res =>{
      console.log('All Indian new headlines are ', res.data);
      setNews(res.data.articles);
    })
  }else{
    Axios.get(`https://gnews.io/api/v3/topics/${selectedCategory}?token=9a6674bf15bab6a11b3752f09986d972`)
    .then(res =>{
      console.log('Queried news are ', res.data);
      setNews(res.data.articles);
    })
  }
}

useEffect( ()=>{
  Axios.get('https://gnews.io/api/v3/top-news?token=9a6674bf15bab6a11b3752f09986d972&country=in')
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

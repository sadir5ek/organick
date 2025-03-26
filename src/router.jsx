import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Blog from "./components/blog/Blog";
import Home from "./components/home/Home";
 import About from "./components/about/About";
import Shop from "./components/shop/Shop";
import Contact from "./components/contact/Contact";
import Servicesingle from "./components/service-single/Servicesingle";
import Portfolio from "./components/portfolio/Portfolio";
import Ourteam from "./components/our-team/Ourteam";
import News from "./components/news/News";
import Services from "./components/servises/Services";
import Shopcard from "./components/shopcard/Shopcard";
import Blogcard from "./components/cards/Blogcard";
import Blockcard from "./components/cards/Blockcard";
import Blokcard from "./components/cards/Blokcard";
import Bloccard from "./components/cards/BLoccard";
import Blokkcard from "./components/cards/blokkard";
import Blokard from "./components/cards/Blokard";
import Card from "./components/card/Card";
import Pfcard1 from "./components/portfolioCard.jsx/Pfcard1";
import Pfcard2 from "./components/portfolioCard.jsx/Pfcard2";
import Pfcard3 from "./components/portfolioCard.jsx/Pfcard3";
import Pfcard4 from "./components/portfolioCard.jsx/Pfcard4";
import Pfcard5 from "./components/portfolioCard.jsx/Pfcard5";
import Pfcard6 from "./components/portfolioCard.jsx/Pfcard6";
import Fotcard1 from "./components/fotcard/fotcard1";
import Fotcard2 from "./components/fotcard/Fotcard2";
import Fotcard3 from "./components/fotcard/Fotcard3";
import Fotcard4 from "./components/fotcard/Fotcard4";
import Fotcard5 from "./components/fotcard/Fotcard5";

export const myRouter = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                path:'header',
                element: <Header/>
            },
            {
                path:'footer',
                element: <Footer/>
            },
            {
                path:'blog',
                element: <Blog/>
            },
            {
                path:'/',
                element: <Home/>
            },
            {
                path:'cardPage',
                element: <Card/>
            },
          
              {
                path: '/about',  
                element: <About/> 
              }  ,
              {
                path: '/shop',  
                element: <Shop/> 
              } ,
              {
                path: '/contact',  
                element: <Contact/> 
              },
              {
                path: '/services',  
                element: <Services/> 
              },
              {
                path: '/service-single',  
                element: <Servicesingle/> 
              },
              {
                path: '/portfolio',  
                element: <Portfolio/> 
              },
              {
                path: '/our-team',  
                element: <Ourteam/> 
              },
              {
                path: '/news',  
                element: <News/> 
              }, 
              {
                path: '/shopcard/:id',
                element: <Shopcard/>
              },
              {
                path: '/blogcard/:id',
                element: <Blogcard/>
              },
              {
                path: '/blockcard/:id',
                element: <Blockcard/>
              },
              {
                path: '/blokcard/:id',
                element: <Blokcard/>
              },
              {
                path: '/bloccard/:id',
                element: <Bloccard/>
              },
              {
                path: '/blokkard/:id',
                element: <Blokkcard/>
              },
              {
                path: '/blokard/:id',
                element: <Blokard/>
              },
              {
                path: '/pcard1',
                element: <Pfcard1/>
              },
              {
                path: '/pcard2',
                element: <Pfcard2/>
              },
              {
                path: '/pcard3',
                element: <Pfcard3/>
              },
              {
                path: '/pcard4',
                element: <Pfcard4/>
              },
              {
                path: '/pcard5',
                element: <Pfcard5/>
              },
              {
                path: '/pcard6',
                element: <Pfcard6/>
              },
              {
                path: '/fotcard2',
                element: <Fotcard2/>
              },
              {
                path: '/fotcard3',
                element: <Fotcard3/>
              },
              {
                path: '/fotcard4',
                element: <Fotcard4/>
              },
              {
                path: '/fotcard5',
                element: <Fotcard5/>
              },
              {
                path: '/fotcard1',
                element: <Fotcard1/>
              },
        ]
    }
])
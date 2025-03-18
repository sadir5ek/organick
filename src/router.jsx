import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Blog from "./components/blog/Blog";
import Home from "./components/home/Home";
import Card from "./components/card/Card";
import About from "./components/about/About";
import Shop from "./components/shop/Shop";
import Contact from "./components/contact/Contact";
import Servicesingle from "./components/service-single/Servicesingle";
import Portfolio from "./components/portfolio/Portfolio";
import Ourteam from "./components/our-team/Ourteam";
import News from "./components/news/News";
import Services from "./components/servises/Services";

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
        ]
    }
])
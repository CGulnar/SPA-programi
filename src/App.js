import './App.css';
import {
  BrowserRouter,
  Route,
  Link,
  Routes
} from "react-router-dom";

function Actress(){
  return(
    <div>
    <h2>Actress</h2>
    </div>
  )
}
function About(){
  return (
    <div className='about'>
      <h2>About</h2>
      <p>
      Emma Charlotte Duerre Watson (born 15 April 1990) is an English actress and activist. Known for her roles in both blockbusters and independent films, as well as for her women's rights work, she has received a selection of accolades, including a Young Artist Award and three MTV Movie Awards. Watson has been ranked among the world's highest-paid actresses by Forbes and Vanity Fair, and was named one of the 100 most influential people in the world by Time magazine in 2015
      </p>
    </div>
  )
}

function ExamplesOfWork(){
  return(
    <div className='example'>
    <h2>Example</h2>
    <p>
  Watson began acting in earnest in 1999 after she auditioned for a part in the film adaptation of J.K. Rowling’s Harry Potter and the Sorcerer’s Stone (2001). She won the role of smart and logical Hermione.
  After the Potter films ended, Watson began to look for more mature roles. For example The Perks of Being a Wallflower,The Bling Ring,The Colony,The Circle,Beauty and the Beast and another. In 2005, Watson began her modelling career with a photo shoot for Teen Vogue, which made her the youngest person to cover the magazine.
  </p>
    </div>
  )
}
function Contacts(){
  return (
    <div className='contacts'>
          <h2>Contact</h2>
      <p>Instagram: <a href='https://www.instagram.com/emmawatson//'>Emma Watson</a></p>
    </div>
  )
}
function Page(){
  return(
    <header>
     <nav>
        <Link to="/">Actress</Link>
        <Link to="/about">About</Link>
        <Link to='/examples'>Example</Link>
        <Link to='/contact'>Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Actress />} />
        <Route path="/about" element={<About/>}/>
        <Route path='/examples' element={<ExamplesOfWork/>}/>
        <Route path='/contact' element={<Contacts/>}/>
      </Routes> 
    </header>
  )
}

function App() {
  return (
    <BrowserRouter> 
      <Page />
    </BrowserRouter>
  );
}

export default App;

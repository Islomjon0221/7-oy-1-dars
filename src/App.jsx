import './App.css'
import About from "./pages/About";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Cart from './pages/Cart';
import moon from "/public/moon-regular.svg"
import { NavLink, BrowserRouter, Routes, Route } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

function App() {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState("en");

  const post = useSelector(state =>
    state
  )

  useEffect(() => {
    let lang = localStorage.getItem('lang');
    if (lang) {
      i18n.changeLanguage(lang);
      setLang(lang);
    }
  }, []);
  
  function handleLang(e) {
    setLang(e.target.value);
    i18n.changeLanguage(e.target.value)
    localStorage.setItem('lang', e.target.value)
  }

  return (
    <BrowserRouter>
    <header className='light-header'>
    <div className="containers">
     <div className="header">
     <div className="logo">
        <a href="/">C</a>
      </div>
    <nav>
        <ul>
          <li>
            <NavLink to="/">{t("header-1")}</NavLink>
          </li>
          <li>
            <NavLink to="/about">{t("header-2")}</NavLink>
          </li>
          <li>
            <NavLink to="/products">{t("header-3")}</NavLink>
          </li>

          <li>
            <NavLink to="/cart">{t("header-4")}</NavLink>
          </li>
        </ul>
      </nav>
      <div className="icon">
        <a><img width='22' height='22' src={moon} alt="moon" /></a>
      <select value={lang} onChange={handleLang}>
        <option value="en">Enlish</option>
        <option value="uz">Uzbek</option>
        <option value="ru">Russian</option>
      </select>
      <span>{post.length}</span>
      </div>
     </div>
    </div>
    </header>
        <Routes>
          <Route path="/products" element={<Product />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
import axios from "axios";
import { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';

function Home() {

    const {t } = useTranslation();
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("https://strapi-store-server.onrender.com/api/products")
    .then(res => {
      setData(res.data.data);
      console.log(res.data.data);
    })
    .catch(err => {
        console.log(err);
    })
  }, [])



  return (
    <div className="wrapper-home">
      <div className="containers">
      <div className="home">
      <div className="text">
        <h1>{t("home-h1")}</h1>
        <p>{t("home-p")}</p>
        <a  href="/products">{t("home-button")}</a>
      </div>
      <div className="slideShow" >
      {
        data.slice(3, 7).map((res, i) =>{
            return(
                    <div className="carouselItem" key={i}>
              <img className="imageWrapper" src={res.attributes.image} alt="" />
            </div>
            )
        })
    }
    </div>
      
      </div>
      <h2 className="f-text">{t("home-feature")}</h2>
      <div className="feature">
        {
          data.slice(0, 3).map((res, i) => {
              let x = res.attributes.price
              const y = x.toString().split('').slice(0, -2).join('')
              const newNum = Number(y)
            return(
              <a key={i} href="/products" className="card">
                <img width="320" height='192' src={res.attributes.image} alt="" />
                <h3 className="card-h3">{res.attributes.title}</h3>
              <p className="card-p">${newNum}.99</p>
          </a>
            )
          })
        }
        
      </div>
    </div>
    </div>
  )
}

export default Home
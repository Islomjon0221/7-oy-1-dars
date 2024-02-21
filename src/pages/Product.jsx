import "../App.css"
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

function Product() {
  const dispatch = useDispatch();

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
  }, []);
  function handleBuy(data) {
    console.log(data);
    dispatch({type: "ADD", payload: data})
  }

  return (
    <div className="Product">
    <div className="containers">
      <div className="wrapper-product">
      {
          data.map((res, i) => {
            let x = res.attributes.price
              const y = x.toString().split('').slice(0, -2).join('')
              const newNum = Number(y)
            return(
              <div key={i} className="card">
                <img width="320" height='192' src={res.attributes.image} alt="" />
                <h3 className="card-h3">{res.attributes.title}</h3>
              <p className="card-p">${newNum}.99</p>
                <button onClick={() => {handleBuy(res.attributes)}}>BUY</button>
          </div>
            )
          })
        }
      </div>
    </div>
    </div>
  )
}

export default Product
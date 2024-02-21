import { useSelector } from "react-redux"

function Cart() {
    const post = useSelector(state =>
        state
      )
      console.log(post);
      let counter = 0;
      function dollar(ex) {
        let x = ex
        const y = x.toString().split('').slice(0, -2).join('')
        const newNum = Number(y);
        return newNum
      }

      function outMoney(number) {
        let lastMoney = number.toString().split('').slice(-2).join('')
        return Number(lastMoney)
      }
      
  return (
    <div className="containers">
        <div className="wrapper-sell">
        {
        post.map((res, i) => {
            counter = counter + Number(res.card.price);
            let x = res.card.price
              const y = x.toString().split('').slice(0, -2).join('')
              const newNum = Number(y);

            return (<div className="wrapper-cart"  key={i}>
                <div className="cart">
                    <img width="392" height="300" src={res.card.image} alt="" />
                    <div><h3 className="cart-h3">Name:{res.card.title}</h3>
                    <h3 className="cart-h3">Company:{res.card.company}</h3>
                    <p className="card-d"><span>Description:</span>{res.card.description}</p>
                    <h3 className="cart-p">Price:${newNum}.99</h3></div>
                </div>
            </div>
            )
        })
    }
     <div className="count-body">
        <h3>Amount: ${dollar(counter)}.{outMoney(counter)}</h3>
    </div>
        </div>
    </div>
  )
}

export default Cart
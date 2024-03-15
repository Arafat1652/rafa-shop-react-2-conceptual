
const Cart = ({cart, handleAddtoCart}) => {
    const {title,price,image,id,description}=cart
    // console.log(cart)
    return (
      <div>
        <div>
          <div className="card bg-base-100 shadow-xl w[300px] h-[400px]">
            <figure>
              <img className="h-full p-2" src={image} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{title.slice(0, 10)}</h2>
              <p>{description.slice(0, 80)}</p>
              <h3 className="text-xl">
                <span className="font-semibold">Price:</span>
                {price}
              </h3>
              <div className="card-actions justify-end">
                <button onClick={()=>handleAddtoCart(cart)} className="btn bg-pink-400 font-bold text-white">Add to cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Cart;
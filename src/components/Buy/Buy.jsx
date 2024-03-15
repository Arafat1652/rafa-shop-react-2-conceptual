

const Buy = ({buys, handleRemove}) => {
    // console.log(buys)
    return (
        <div className="bg-gray-300 ml-4 rounded-xl">
            <div className="flex gap-10 p-5">
            <p className="text-xl font-semibold">SL.</p>
            <p className="text-xl font-semibold">Name</p>
            <p className="text-xl font-semibold">Price</p>
            </div>
            <hr className="border-gray-900-300 border-2" />
            {
                buys.map((buy, index)=>(<div className="flex justify-between items-center p-3">
                <p>{index+1}</p>
                <p>{buy.title.slice(0,10)}</p>
                <p>{buy.price}</p>
                <button onClick={()=>handleRemove(buy.id)} className="btn btn-disable">Remove</button>
            </div>))
            }
            
            
        </div>
    );
};

export default Buy;
import { useEffect, useState } from "react";

const RelatedCards = () => {
    const [data, setData] = useState()
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setData(data))
    },[])
  return (
    <div className="px-4 my-12">
      <h1 className="text-4xl mb-6">Related deals you might like for</h1>
      <div className="px-6 md:flex gap-6">
      {
        data?.map(data => <>
        <div className="card bg-white shadow-xl mb-4">
        <figure className="my-6">
          <img
            src={data?.imageUrl}
            alt=""
          />
        </figure>
        <div className="px-8">
          <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
            {data?.discounts1}
          </span>
          <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
          {data?.discounts2}
          </span>
        </div>
        <div className="card-body">
          <h2 className="text-2xl text-center">{data?.title}</h2>
          <p>{data?.description}</p>
          <div className="flex items-center gap-4">
            <h2 className="text-3xl">{data?.price}</h2>
            <h2 className="text-xl text-gray-400">{data?.originalPrice}</h2>
            <h2 className="text-xl text-[#EF4C5D]">(20% Off)</h2>
          </div>
          <div className="card-actions justify-center">
            <button className="btn bg-[#1B88F4] text-white w-full">View Deals</button>
          </div>
        </div>
      </div>
        </>)
      }
      </div>
    </div>
  );
};

export default RelatedCards;

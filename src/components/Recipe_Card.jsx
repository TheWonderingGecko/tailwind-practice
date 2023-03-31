const Recipe_Card = (props) => {
  return (
    <>
      <div className=" border-2  rounded  overflow-hidden shadow-md w-3/4 relative font-roboto cursor-pointer transition-transform duration-500 transform hover:scale-110 md:w-full">
        <img src={props.img} alt="stew" className="   " />
        <div className="bg-white flex flex-col gap-1 ">
          <span className=" font-roboto-bold text-gray-600">{props.title}</span>
          <span className=" text-gray-500">{props.owner}</span>
        </div>
        <div className=" absolute top-2 left-2 bg-green-300 rounded-xl p-1">
          {props.time} min
        </div>
      </div>
    </>
  )
}

export default Recipe_Card

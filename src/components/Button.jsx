const Button = (props) => {
  return (
    <a href="#" className={props.height}>
      <span className=" border-red-500   inline-block box-border p-1 rounded-2xl text-red-500 border-2 uppercase hover:bg-red-200 text-xs w-fit md:text-m font-roboto-bold">
        {props.name}
      </span>
    </a>
  )
}
export default Button

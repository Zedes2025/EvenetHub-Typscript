export default function EventCard() {
  // {
  //   title,
  //   date,
  //   image,
  //   content,
  //   onClickCard,
  // }
  console.log("EventCard rendered");

  return (
    <div className="card m-10  bg-stone-100 w-96 shadow-sm ">
      {/* onClick={onClickCard} */}
      <div className="card-title justify-center mt-6 mb-0">today</div>
      {/* <figure className="px-10 pt-10">
        <img
          src={image}
          alt={title}
          className="rounded-xl h-80 w-full object-cover"
        />
      </figure> */}
      <div className="card-body items-center text-center">
        <h2 className="card-title">title</h2>
        <p className="line-clamp-3">content</p>
      </div>
    </div>
  );
}

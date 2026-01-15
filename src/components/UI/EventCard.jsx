export default function EventCard({
  id,
  title,
  description,
  date,
  time,
  location,
  ViewDetailsBtn,
}) {
  return (
    <div className="card m-10  bg-stone-100 w-96 shadow-sm ">
      {/* onClick={onClickCard} */}
      <div className="card-body">
        <h2 className="card-title text-blue-950"> {title}</h2>
        <p className="line-clamp-3">{description}</p>
      </div>

      <div className="card-title  mt-6 mb-0 m-4 p-4">Date: {date}</div>
      <div className="card-title  mt-0 mb-0 m-4 p-4">Time: {time}</div>
      <div className="card-title  mt-0 mb-6 m-4 p-4">Location: {location} </div>
      <button onClick={ViewDetailsBtn} className="btn  btn-primary text-lg">
        View Details
      </button>
    </div>
  );
}

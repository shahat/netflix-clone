import "./featured.scss";
export default function Featured({ featured }) {
  return (
    <>
      {" "}
      {featured.map((item) => (
        <div key={item.title} className="featured">
          <h1 className="featuredTitle">{item.title}</h1>
          <p className="featuredAmount">
            {item.amount} {item.icon}
          </p>
          <span className="featuredDesc">{item.paragraph}</span>
        </div>
      ))}
    </>
  );
}

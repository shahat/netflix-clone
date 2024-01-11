import "./featured.scss";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
function Featured({ type }) {
  return (
    <div className="featured ">
<div className="feturedImgContainer">
<img
        src="https://wallpaperbat.com/img/236791-hd-movie-wallpaper-top-free-hd-movie-background.jpg"
        alt="image of the movie "
      />
</div>
      {type && (
        <div className="category">
          <span>{type === "movie" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">adventure</option>
            <option value="Comedy">Comedy</option>
            <option value="Crime">Crime</option>
            <option value="Fantasy">Fantasy</option>
            <option value="honnor">honnor</option>
            <option value="romance">romance</option>
            <option value="western">western</option>
            <option value="thriller">Thriller</option>
            <option value="animation">Animation</option>
            <option value="documentary">documentary</option>
            <option value="drama">Drama</option>
          </select>
        </div>
      )}
      <div className="info container">
        <div>
          <h2 className="title"> Movie name </h2>
          <span className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
            incidunt eum. Saepe culpa facere totam enim corporis enpm staer
            fdfxpedita voluptas quis repellendus recusandae ullam illo quidem
            est, quia minima quam accusantium.
          </span>
          <div className="buttons">
            <button className="play">
              <PlayCircleIcon />
              <span>Play</span>
            </button>
            <button className="more">
              <InfoOutlinedIcon />
              <span>Info</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;

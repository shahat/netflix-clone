import { AcUnit } from "@mui/icons-material";
import "./home.scss";
import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import "./home.scss";
function Home() {
  return (
    <div className="home">
      <Navbar />
      <Featured type={"movie"} />
      <List />
      <List />
      <List />
      <List />
    </div>
  );
}
export default Home;

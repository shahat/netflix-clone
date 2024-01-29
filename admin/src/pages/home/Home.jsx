import React from "react";
import Chart from "../../components/chart/chart";
import Featured from "../../components/featured/Featured";
import "./home.scss";
import { FaArrowDown } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";
import { data } from "../../components/data/chart";
import { BiParagraph } from "react-icons/bi";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import { Link } from "react-router-dom";

export default function Home() {
  const featured = [
    {
      title: "Revanue",
      amount: "$12,000.40",
      paragraph: "Compared to last month",
      icon: <FaArrowDown />,
    },
    {
      title: "Sales",
      amount: "$1,200,050.40",
      paragraph: "Compared to last month",
      icon: <FaArrowDown />,
    },
    {
      title: "Cost",
      amount: "$1,251,480.40",
      paragraph: "Compared to last month",
      icon: <FaArrowUp />,
    },
  ];
  return (
    <div className="home">
      <Link to="/users">users</Link>
      <h1 className="homeTitle">Home</h1>
      <div className="featuredContainer">
        <Featured featured={featured} />
      </div>
      <div className="chartContainer">
        <Chart data={data} title="Users Analysis" dataKey="active Users" />
      </div>

      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}

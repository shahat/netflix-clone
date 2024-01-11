export default function SideBarItem({ sideBarItems }) {
  return (
    <>
      {sideBarItems.map((sideItem) => (
        <div key={sideItem.title} className="sidebarMenu">
          <h3 className="sidebarTitle">{sideItem.title}</h3>
          <ul className="sidebarList">
            {sideItem.subTitle.map((subTitle, index) => (
              <li key={index} className="sidebarListItem active">
                {subTitle.icon}
                {subTitle.title}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}

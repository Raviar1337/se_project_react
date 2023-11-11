import "../Header/Header.css";

function Header() {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <div className="header">
        <image className="header__logo" />
        <div>{currentDate}</div>
        <div className="header__userName">Patrick A</div>
        <image className="header__userAvatar" />
      </div>
    </>
  );
}

export default Header;

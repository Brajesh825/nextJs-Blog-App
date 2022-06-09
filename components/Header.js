import headerStyles from "../styles/Header.module.css";

const Header = ({ children }) => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>Testing</span>
      </h1>
      <br/>
    </div>
  );
};

export default Header;

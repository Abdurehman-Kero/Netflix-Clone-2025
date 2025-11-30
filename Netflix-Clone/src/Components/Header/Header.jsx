 
import NetflixLogo from "../../assets/netflix.svg";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <>
      <div className={`${styles.headerContainer}`}>
        <ul className={`${styles.LeftHeaderList}`}>
          <li><img src={NetflixLogo} alt="" /></li>
          <li>Home</li>
          <li>TVShows</li>
          <li>Movies</li>
          <li>Latest</li>
          <li>MyList</li>
          <li>Browse by Languages</li>
        </ul>

        <ul className={`${styles.headerRight}`}>
          <li>
            <SearchIcon />
          </li>
          <li>
            <NotificationsNoneIcon />
          </li>
          <li>
            <AccountBoxIcon />
          </li>
          <li>
            <ArrowDropDownIcon />
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;

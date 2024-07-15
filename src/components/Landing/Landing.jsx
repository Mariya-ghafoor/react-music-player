import styles from "./Landing.module.scss";
import { RotatingSquare } from "react-loader-spinner";
function Landing() {
  return (
    <div className={styles.landing__main}>
      <h2>
        Welcome to Taylor Swift's radio <br />
        where we only play Taylor Swift's songs
      </h2>
      <div className={styles.landing__spinner}>
        <h3>Entering the site...</h3>

        <RotatingSquare
          visible={true}
          height="100"
          width="100"
          color="#4fa94d"
          ariaLabel="rotating-square-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    </div>
  );
}

export default Landing;

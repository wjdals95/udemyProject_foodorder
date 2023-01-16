import { Fragment } from "react";
import mealsImage from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton  onClick={props.onShowCart}/>
      </header>
      {/* css이름에 '-'가 들어가면 '.'표기법으론 안되므로 아래의 방법으로 해야한다. */}
      <div className={classes['main-image']}>
        {/* 어느 서버의 이미지를 가져올때는 url을 쓰면 된다.
            ex) <img src="https://some-url.com/to-some.image.jpg" /> */}
        <img src={mealsImage} alt="A table full of delicious food!" />
      </div>
    </Fragment>
  );
};

export default Header;

import Style from './button.module.css';
import Link from 'next/link';
const Button = ({ type, to }) => {
  if (type == 'register') {
    return (
      <div>
        <Link href={`/${to}`}>
          <a><button className={`text-nunito ${Style.button} ${Style.button1} ${Style.color1}`}>{type}</button></a>
        </Link>
      </div>
    );
  } else if (type == 'login') {
    return (
      <div>
        <Link href={`/${to}`}>
          <a><button className={`text-nunito ${Style.button} ${Style.button1} ${Style.color2}`}>{type}</button></a>
        </Link>
      </div>
    );
  } else {
    return (
      <div>
        <Link href={`/#`}>
          <a><button className={`text-nunito ${Style.button} ${Style.button1} ${Style.color1}`}>explore</button></a>
        </Link>
      </div>
    );
  }
};

export default Button;

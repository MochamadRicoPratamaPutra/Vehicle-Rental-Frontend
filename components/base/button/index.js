import Style from './button.module.css';
import Link from 'next/link';
const Button = ({ type, to, text, colorCode }) => {
  if (type == 'register') {
    return (
      <div>
        <Link href={`/${to}`}>
          <a>
            <button className={`text-nunito text-black ${Style.button} ${Style.button1} ${Style.color1}`}>
              {type}
            </button>
          </a>
        </Link>
      </div>
    );
  } else if (type == 'login') {
    return (
      <div>
        <Link href={`/${to}`}>
          <a>
            <button className={`text-nunito text-black ${Style.button} ${Style.button1} ${Style.color2}`}>
              {type}
            </button>
          </a>
        </Link>
      </div>
    );
  } else if (type === 'reservation') {
    return (
      <div>
        <Link href={`/${to}`}>
          <a>
            <button
              className={`text-nunito text-24 text-w700 ${Style.button} ${Style.button2} ${
                colorCode === 1 ? Style.color1 : Style.color3
              } ${colorCode === 1 ? `text-black` : `text-yellow`}`}
            >
              {text}
            </button>
          </a>
        </Link>
      </div>
    );
  } else if (type === 'like') {
    return (
      <div>
        <Link href={`/${to}`}>
          <a>
            <button
              className={`text-nunito text-24 text-w700 text-yellow ${Style.button} ${Style.color3} ${Style.like}`}
            >
              <img src="/like.svg" alt="like" />
              <p>Like</p>
            </button>
          </a>
        </Link>
      </div>
    );
  } else if (type === 'plus') {
    return (
      <div>
        <a>
          <button
            className={`text-nunito text-48 text-w900 ${Style.button} ${Style.button3} ${Style.color1} text-black`}
          >
            +
          </button>
        </a>
      </div>
    );
  } else if (type === 'minus') {
    return (
      <div>
        <a>
          <button
            className={`text-nunito text-48 text-w900 ${Style.button} ${Style.button3} ${Style.color4} text-black`}
          >
            -
          </button>
        </a>
      </div>
    );
  } else if (type === 'confirmation') {
    return (
      <div>
        <a>
          <button
            className={`text-nunito text-24 text-w900 ${Style.button} ${Style.button4} ${Style.color1} text-black`}
          >
            {text}
          </button>
        </a>
      </div>
    );
  } else if (type === 'category') {
    return (
      <div>
          <select
            className={`text-nunito text-24 text-w900 ${Style.button} ${Style.button4} ${Style.color3} text-yellow`}
          >
            <option disabled selected value>Add item to?</option>
            <option value="car">Car</option>
            <option value="motorbike">Motorbike</option>
            <option value="bike">Bike</option>
          </select>
      </div>
    );
  } else {
    return (
      <div>
        <Link href={`/#`}>
          <a>
            <button className={`text-nunito ${Style.button} ${Style.button1} ${Style.color1}`}>explore</button>
          </a>
        </Link>
      </div>
    );
  }
};

export default Button;

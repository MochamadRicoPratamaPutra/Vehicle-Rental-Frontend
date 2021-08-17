import Style from './card.module.css';
const Card = ({ type }) => {
  if (type === 'product') {
    return (
      <div>
        <div className={Style.cardContainer}>
          <img src="/yogyakarta.png" alt="1" className={Style.image} />
          <div className={Style.textBox}>
            <p className="text-nunito text-black text-17 text-w600">Merapi</p>
            <p className="text-nunito text-grey text-17 text-w400">Yogyakarta</p>
          </div>
        </div>
      </div>
    );
  } else if (type === 'testimonial') {
    return (
      <div>
        <div className={Style.cardContainer}>
          <img src="/person1.png" alt="person" className={Style.image} />
          <div className={Style.buttonBox}>
            <img src="/previous.svg" alt="prev" />
            <img src="/next.svg" alt="next" />
          </div>
        </div>
      </div>
    );
  }
};

export default Card;

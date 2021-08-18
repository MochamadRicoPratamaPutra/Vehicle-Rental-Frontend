import Style from './card.module.css';
import Link from 'next/link';
const Card = ({ type, img, title, city, id }) => {
  if (type === 'product') {
    return (
      <div>
        <Link href={`/vehicle/${id}`}>
          <a>
            <div className={Style.cardContainer}>
              <img src={img ? img : '/yogyakarta.png'} alt="1" className={Style.image} />
              <div className={Style.textBox}>
                <p className="text-nunito text-black text-17 text-w600">{title}</p>
                <p className="text-nunito text-grey text-17 text-w400">{city}</p>
              </div>
            </div>
          </a>
        </Link>
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

import Style from './footer.module.css';
import Image from 'next/image'
const Footer = () => {
  return (
    <div>
      <div className={Style.container}>
        <div className={`text-mulish ${Style.containerFooter}`}>
          <div className={Style.about}>
            <Image src="/Logo.svg" alt="Logo" width="44px" height="44px"/>
            <p className="text-grey">Plan and book your perfect trip with expert advice, travel tips for vehicle information from us</p>
            <p className="text-grey">©2020 Vehicle Rental Center. All rights reserved</p>
          </div>
          <div className={Style.content}>
            <h1 className="text-mulish">Destination</h1>
            <p className="text-grey">Bandung</p>
            <p className="text-grey">Yogyakarta</p>
            <p className="text-grey">Jakarta</p>
            <p className="text-grey">Kalimantan</p>
            <p className="text-grey">Malang</p>
          </div>
          <div className={Style.content}>
            <h1 className="text-mulish">Vehicle</h1>
            <p className="text-grey">Bike</p>
            <p className="text-grey">Cars</p>
            <p className="text-grey">Motorbike</p>
            <p className="text-grey">Return TImes</p>
            <p className="text-grey">FAQs</p>
          </div>
          <div className={Style.content}>
            <h1 className="text-mulish">Interests</h1>
            <p className="text-grey">Adventure Travel</p>
            <p className="text-grey">Art and Culture</p>
            <p className="text-grey">Wildlife and Nature</p>
            <p className="text-grey">Family Holdays</p>
            <p className="text-grey">Culinary Trip</p>
          </div>
        </div>
        <hr className={Style.hrLine}/>
        <div className={Style.logoContainer}>
          <Image src="/twitter.svg" alt="Twitter" width="20px" height="20px"/>
          <Image src="/facebook.svg" alt="Facebook" width="20px" height="20px"/>
          <Image src="/instagram.svg" alt="Instagram" width="20px" height="20px"/>
          <Image src="/linkedin.svg" alt="LinkedIn" width="20px" height="20px"/>
          <Image src="/youtube.svg" alt="Youtube" width="20px" height="20px"/>
        </div>
      </div>
    </div>
  );
};

export default Footer;

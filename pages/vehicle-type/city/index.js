import Layout from '../../../components/Layout';
import Style from '../../../styles/vehicleType.module.css';
import Card from '../../../components/base/card';
const VehicleType = () => {
  return (
    <div>
      <Layout>
        <div className="contentBox">
          <div className={Style.cardTitle}>
            <p className="text-playfair text-36 text-bold">Bandung</p>
            <p className="text-nunito text-17 text-orange">View more {'>'}</p>
          </div>
          <div className={Style.cardTitle}>
            <Card type="product" />
            <Card type="product" />
            <Card type="product" />
            <Card type="product" />
          </div>
          <div className={Style.cardTitle}>
            <p className="text-playfair text-36 text-bold">Yogyakarta</p>
            <p className="text-nunito text-17 text-orange">View more {'>'}</p>
          </div>
          <div className={Style.cardTitle}>
            <Card type="product" />
            <Card type="product" />
            <Card type="product" />
            <Card type="product" />
          </div>
          <div className={Style.cardTitle}>
            <p className="text-playfair text-36 text-bold">Jakarta</p>
            <p className="text-nunito text-17 text-orange">View more {'>'}</p>
          </div>
          <div className={Style.cardTitle}>
            <Card type="product" />
            <Card type="product" />
            <Card type="product" />
            <Card type="product" />
          </div>
          <div className={Style.cardTitle}>
            <p className="text-playfair text-36 text-bold">Kalimantan</p>
            <p className="text-nunito text-17 text-orange">View more {'>'}</p>
          </div>
          <div className={Style.cardTitle}>
            <Card type="product" />
            <Card type="product" />
            <Card type="product" />
            <Card type="product" />
          </div>
          <div className={Style.cardTitle}>
            <p className="text-playfair text-36 text-bold">Malang</p>
            <p className="text-nunito text-17 text-orange">View more {'>'}</p>
          </div>
          <div className={Style.cardTitle}>
            <Card type="product" />
            <Card type="product" />
            <Card type="product" />
            <Card type="product" />
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default VehicleType;

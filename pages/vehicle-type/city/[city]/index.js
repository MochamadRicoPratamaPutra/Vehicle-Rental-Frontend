import Layout from '../../../../components/Layout';
import Style from '../../../../styles/vehicleType.module.css';
import Card from '../../../../components/base/card';
import { useRouter } from 'next/dist/client/router';
const VehicleType = () => {
  const router = useRouter();
  const str = router.query.city;
  const arr = str.split(' ');
  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  const title = arr.join(" ");
  return (
    <div>
      <Layout>
        <div className="contentBox">
          <div className={Style.cardTitle}>
            <p className={`text-playfair text-36 text-bold ${Style.cap}`}>{title}</p>
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

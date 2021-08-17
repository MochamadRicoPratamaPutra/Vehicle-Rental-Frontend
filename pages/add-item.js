import Layout from '../components/Layout';
import Style from '../styles/addItem.module.css';
import Button from '../components/base/button';
const AddItem = () => {
  return (
    <div>
      <Layout>
        <div className="contentBox">
          <p className="text-nunito text-w700 text-36">{"<"} Add new item</p>
          <div className={Style.inputContainer}>
            <div className={Style.leftSide}>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name (max up to 50 words)"
                className={`text-nunito text-24 ${Style.inputBox}`}
              />
              <div className={Style.photoContainer}>
                <img src="/photo.svg" alt="photo" />
                <p className="text-nunito text-w700 text-18 text-grey">Click to add image</p>
              </div>
            </div>
            <div className={Style.rightSide}>
              <input
                type="text"
                name="location"
                id="location"
                placeholder="Location"
                className={`text-nunito text-24 ${Style.inputBox}`}
              />
              <input
                type="text"
                name="Description"
                id="Description"
                placeholder="Description (max up to 150 words)"
                className={`text-nunito text-24 ${Style.inputBox}`}
              />
              <label htmlFor="price" className="text-playfair text-w700 text-24">Price: </label>
              <input type="text" name="price" placeholder="Type the price" className={Style.inputBlock} />
              <label htmlFor="stock" className="text-playfair text-w700 text-24">Stock: </label>
              <input type="text" name="stock" placeholder="Type the stock" className={Style.inputBlock} />
            </div>
          </div>
          <div className={Style.buttonContainer}>
            <Button type="category"/>
            <Button type="confirmation" text="Save changes"/>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default AddItem;

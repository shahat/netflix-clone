import "./newProduct.scss";

import { useState } from "react";
export default function NewProduct() {
  const [images, setImages] = useState([]);
  const handleImageChange = (e, index) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const updatedImages = [...images];
        updatedImages[index] = reader.result;
        setImages(updatedImages);
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Product</h1>
      <form className="addProductForm">
        <div className="inputContainer">
          <div className="addProductItem">
            <label>Name</label>
            <input type="text" placeholder="Apple Airpods" />
          </div>
          <div className="addProductItem">
            <label>Stock</label>
            <input type="text" placeholder="123" />
          </div>
          <div className="addProductItem">
            <label>Active</label>
            <select name="active" id="active">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
        </div>
        <div className="addProductItem images">
          <h1 className="ProductImagesTitle"> Upload Product Images</h1>
          <div className="ImageContainer">
            <label
              htmlFor={`file1`}
              className="custom_file_upload"
              style={{
                padding: images[1] ? "0 0" : "40px 80px",
                border: images[1] ? "none" : "1px solid gray",
              }}
            >
              <input
                type="file"
                id={`file1`}
                onChange={(e) => handleImageChange(e, 1)}
              />{" "}
              {images[1] ? (
                <img
                  src={images[1]}
                  alt={`Product Image ${1}`}
                  className="previewImage"
                />
              ) : (
                "+"
              )}
            </label>
            <label
              htmlFor={`file2`}
              className="custom_file_upload"
              style={{
                padding: images[2] ? "0 0" : "40px 80px",
                border: images[2] ? "none" : "1px solid gray",
              }}
            >
              <input
                type="file"
                id={`file2`}
                onChange={(e) => handleImageChange(e, 2)}
              />{" "}
              {images[2] ? (
                <img
                  src={images[2]}
                  alt={`Product Image ${2}`}
                  className="previewImage"
                />
              ) : (
                "+"
              )}
            </label>
            <label
              htmlFor={`file3`}
              className="custom_file_upload"
              style={{
                padding: images[3] ? "0 0" : "40px 80px",
                border: images[3] ? "none" : "1px solid gray",
              }}
            >
              <input
                type="file"
                id={`file3`}
                onChange={(e) => handleImageChange(e, 3)}
              />{" "}
              {images[3] ? (
                <img
                  src={images[3]}
                  alt={`Product Image ${3}`}
                  className="previewImage"
                />
              ) : (
                "+"
              )}
            </label>
            <label
              htmlFor={`file4`}
              className="custom_file_upload"
              style={{
                padding: images[4] ? "0 0" : "40px 80px",
                border: images[4] ? "none" : "1px solid gray",
              }}
            >
              <input
                type="file"
                id={`file4`}
                onChange={(e) => handleImageChange(e, 4)}
              />{" "}
              {images[4] ? (
                <img
                  src={images[4]}
                  alt={`Product Image ${4}`}
                  className="previewImage"
                />
              ) : (
                "+"
              )}
            </label>
          </div>
        </div>

        <button className="addProductButton">Create</button>
      </form>
    </div>
  );
}

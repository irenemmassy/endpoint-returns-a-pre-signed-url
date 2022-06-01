import React, { useState } from "react";
import Header from "../Components/Header";
import UploadComponent from "../Components/HomeComponents/UploadComponent";
import { GetUrlApi } from "../APIs/API";

function HomeScreen() {
  const [image, setImage] = useState();
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState();

  const onChangeHandler = (e) => {
    setImage(e.target.files[0]);
  };

  //   Submit Handler
  const uploadFile = async (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("file", image);
    // API
    if (!image) {
      alert("Image Required");
    } else {
      GetUrlApi({ formData, setLoading, setResult });
    }
  };

  return (
    <>
      <Header />
      <div className=" pt-24">
        <form onSubmit={uploadFile} className="flex-colo">
          {result ? (
            <>
              <img
                src={result.Location}
                className="w-2/5 h-64 rounded object-cover mb-5"
              />
              <h1>
                Image Url :<a href={`${result.Location}`}>{result.Location}</a>
              </h1>
            </>
          ) : (
            //  Select Image Button
            <UploadComponent
              image={image}
              onChangeHandler={onChangeHandler}
              loading={loading}
            />
          )}
        </form>
      </div>
    </>
  );
}

export default HomeScreen;

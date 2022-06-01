import React from "react";

function UploadComponent({ image, onChangeHandler, loading }) {
  return (
    <>
      <label htmlFor="file" className="w-full flex-colo">
        <div className="w-2/5 cursor-pointer rounded flex-colo h-32 border-main border-4 border-dashed">
          {image ? `(1) Image Choosen` : "Choose Image"}
        </div>
      </label>
      <input
        type="file"
        id="file"
        accept="image/*"
        name="file"
        className="hidden"
        onChange={onChangeHandler}
      />
      <button
        type="submit"
        className="w-2/5 bg-main text-white font-bold text-lg mt-4 py-4 rounded"
      >
        {loading ? "Loading...." : "SUBMIT"}
      </button>
    </>
  );
}

export default UploadComponent;

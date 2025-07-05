import React, { useState } from "react";

function ImageUplode() {
  const [imageURL, setImageURL] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const objectURL = URL.createObjectURL(file);
      setImageURL(objectURL);
    }
  };
  return (
    <div>
      <main className="image_uplode_main">
        <div className="uplode_container">
          <section className="imageuplode_section_1">
            <form>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
              <button type="submit">Submit</button>
            </form>

            <div className="preview_image">
              {imageURL && <img src={imageURL} alt="Preview" />}
            </div>
          </section>

          <section className="imageuplode_section_2"></section>
        </div>
      </main>
    </div>
  );
}

export default ImageUplode;

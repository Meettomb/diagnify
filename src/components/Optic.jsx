import React, { useRef, useState } from "react";

function Optic() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const fileInputRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setSelectedFile(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handelClearImage = () => {
    setPreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = null;
    }
  };

  return (
    <div>
      <main className="image_uplode_main">
        <div className="uplode_container">
          <h1>Optic</h1>
          <section className="imageuplode_section_1">
            <div className="form">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />

              {preview && (
                <div className="preview_image">
                  <img src={preview} alt="Preview" />
                  <i
                    className="fa-solid fa-xmark"
                    onClick={handelClearImage}
                  ></i>
                </div>
              )}
            </div>
            <div className="button">
              <button type="submit">Submit</button>
            </div>
          </section>

          <section className="imageuplode_section_2"></section>
        </div>
      </main>
    </div>
  );
}

export default Optic;
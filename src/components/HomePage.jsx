import React from "react";
function HomePage() {
  return (
    <div>
      <main className="home_page_main">
      <section className="home_section_1">
        <div className="text_div">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        
        <img src={`${import.meta.env.BASE_URL}/images/home_section_1_image.jpg`} alt="home" />

      </section>

      <section className="home_section_2">
        <h1>Hello im Meet Patel</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
      </section>

      </main>
    </div>
  );
}

export default HomePage;

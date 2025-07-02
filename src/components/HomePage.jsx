import React, { useEffect, useRef } from "react";
function HomePage() {
  const aboutImage = useRef();
  const lil1 = useRef();
  const lil2 = useRef();
  const lil3 = useRef();
  const lir1 = useRef();
  const lir2 = useRef();
  const lir3 = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.05) {
          const target = entry.target;
          if (target.classList.contains("lir1")) {
            target.classList.add("animate_right1");
          } else if (target.classList.contains("lir2")) {
            target.classList.add("animate_right2");
          } else if (target.classList.contains("lir3")) {
            target.classList.add("animate_right3");
          } else if (target.classList.contains("lil1")) {
            target.classList.add("animate_left1");
          } else if (target.classList.contains("lil2")) {
            target.classList.add("animate_left2");
          } else if (target.classList.contains("lil3")) {
            target.classList.add("animate_left3");
          } else if (target.classList.contains("aboutImage")) {
            target.classList.add("animate_aboutImage");
          }
        }
      },
      {
        threshold: [0.2],
      }
    );
    if (aboutImage.current) observer.observe(aboutImage.current);
    if (lil1.current) observer.observe(lil1.current);
    if (lil2.current) observer.observe(lil2.current);
    if (lil3.current) observer.observe(lil3.current);
    if (lir1.current) observer.observe(lir1.current);
    if (lir2.current) observer.observe(lir2.current);
    if (lir3.current) observer.observe(lir3.current);
    return () => observer.disconnect();
  }, []);
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

          <img
            src={`${import.meta.env.BASE_URL}/images/home_section_1_image.jpg`}
            alt="home"
            loading="lazy"
          />
        </section>

        <section className="home_section_2">
          <div className="home_about_container">
            <h1>About</h1>
            <div className="home_about_div1">
              <div className="home_about_image">
                <img
                  ref={aboutImage}
                  className="aboutImage"
                  src={`${
                    import.meta.env.BASE_URL
                  }/public/images/human_ai_collab.jpg`}
                  alt=""
                />
              </div>
              <div className="paregraph1">
                <p>
                  At <b>Diagnify</b>, we believe advanced medical insights
                  should be available to everyone—instantly, affordably, and
                  without needing a specialist on call.
                </p>
                <p>
                  We’re a team of engineers, medical advisors, and AI experts
                  working together to make healthcare more accessible. Our
                  platform uses state-of-the-art artificial intelligence to
                  analyze X-rays, CT scans, MRIs, ultrasounds, and more—giving
                  you a fast, easy-to-understand report in seconds.
                </p>
                <p>
                  Whether you're a patient looking for peace of mind, a
                  caregiver wanting a second opinion, or a professional needing
                  quick insights—we’re here to support you.
                </p>
              </div>
            </div>
            <div className="home_about_div2">
              <div className="home_about_whay">
                <p>Why We Exist</p>
                <ul>
                  <li ref={lil1} className="lil1">
                    To bridge the gap between medical imaging and understanding
                  </li>
                  <li ref={lil2} className="lil2">
                    To offer 24/7 access to AI-based interpretations
                  </li>
                  <li ref={lil3} className="lil3">
                    To empower people to take control of their health decisions
                  </li>
                </ul>
              </div>
              <div className="home_about_promise">
                <p>Our Promise</p>
                <ul>
                  <li ref={lir1} className="lir1">
                    Fast, reliable results
                  </li>
                  <li ref={lir2} className="lir2">
                    Support for all major image types (JPG, PNG, JPEG)
                  </li>
                  <li ref={lir3} className="lir3">
                    Your data stays private—always
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default HomePage;

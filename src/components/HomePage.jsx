import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function HomePage() {
  const techImage1 = useRef();
  const techImage2 = useRef();
  const techImage3 = useRef();
  const techImage4 = useRef();
  const aboutImage = useRef();
  const aboutImage2 = useRef();
  const lil1 = useRef();
  const lil2 = useRef();
  const lil3 = useRef();
  const lir1 = useRef();
  const lir2 = useRef();
  const lir3 = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
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
            } else if (target.classList.contains("aboutImage2")) {
              target.classList.add("animate_aboutImage2");
            } else if (target.classList.contains("techImage1")) {
              target.classList.add("animate_techImage1");
            } else if (target.classList.contains("techImage2")) {
              target.classList.add("animate_techImage2");
            } else if (target.classList.contains("techImage3")) {
              target.classList.add("animate_techImage3");
            } else if (target.classList.contains("techImage4")) {
              target.classList.add("animate_techImage4");
            }
          }
        });
      },
      {
        threshold: [0.2],
      }
    );
    if (aboutImage.current) observer.observe(aboutImage.current);
    if (aboutImage2.current) observer.observe(aboutImage2.current);
    if (techImage1.current) observer.observe(techImage1.current);
    if (techImage2.current) observer.observe(techImage2.current);
    if (techImage3.current) observer.observe(techImage3.current);
    if (techImage4.current) observer.observe(techImage4.current);
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
           <div className="hero_containet">
             <div className="text_div_container">
               <p>
                 Understand Your Medical Images in Seconds — Powered by AI,
                 Designed for You.
               </p>
               <p>
                 Upload your finger print and receive instant, AI-powered
                 interpretations — no waiting, no complicated reports. Whether
                 you're a patient, caregiver, or healthcare professional, our
                 platform helps you understand what your images mean in seconds,
                 anytime, anywhere.
               </p>
               <img src={`${import.meta.env.BASE_URL}/images/Group-1-dot.png`} alt="" loading="lazy" />
             </div>
             <div className="hero_image">
               <img src={`${import.meta.env.BASE_URL}/images/doctor_image.png`} alt="" loading="lazy" />
             </div>
           </div>
         </section>
 
         <section className="home_section_0">
           <div className="home_section_0_container">
             <h1>The Technology Behind Our Platform</h1>
             <div className="tech_image">
               <img
                 ref={techImage1}
                 className="techImage1"
                 src={`${import.meta.env.BASE_URL}/images/python.png`}
                 alt="Python"
                 loading="lazy"
               />
 
               <img
                 ref={techImage2}
                 className="techImage2"
                 src={`${import.meta.env.BASE_URL}/images/keras.png`}
                 alt="Keras"
                 loading="lazy"
               />
 
               <img
                 ref={techImage3}
                 className="techImage3"
                 src={`${import.meta.env.BASE_URL}/images/matplotlib.png`}
                 alt="Matplotlib"
                 loading="lazy"
               />
 
               <img
                 ref={techImage4}
                 className="techImage4"
                 src={`${import.meta.env.BASE_URL}/images/tensorflow.png`}
                 alt="TensorFlow"
                 loading="lazy"
               />
             </div>
           </div>
         </section>
 
         <section className="home_section_2">
           <div className="home_about_container">
             <h1>About Us</h1>
             <div className="home_about_div1">
               <div className="home_about_image">
                 <img
                   ref={aboutImage}
                   className="aboutImage"
                   src={`${import.meta.env.BASE_URL}/images/human_ai_collab.jpg`}
                   alt=""
                   loading="lazy"
                 />
               </div>
               <div className="paregraph1">
                 <p>
                   At <b>Diagnify</b>, we believe advanced medical insights
                   should be available to everyone—instantly, affordably, and
                   without needing a specialist on call.
                 </p>
                 <p>
                   We're a team of engineers, medical advisors, and AI experts
                   working together to make healthcare more accessible. Our
                   platform uses state-of-the-art artificial intelligence to
                   analyze X-rays, CT scans, MRIs, ultrasounds, and more—giving
                   you a fast, easy-to-understand report in seconds.
                 </p>
                 <p>
                   Whether you're a patient looking for peace of mind, a
                   caregiver wanting a second opinion, or a professional needing
                   quick insights—we're here to support you.
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
 
                 <p className="our_promise_p">Our Promise</p>
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
 
               <div className="home_about_image2">
                 <img
                   ref={aboutImage2}
                   className="aboutImage2"
                   src={`${import.meta.env.BASE_URL}/images/body_ai_chackup.jpg`}
                   alt=""
                   loading="lazy"
                 />
               </div>
             </div>
           </div>
         </section>
 
         <section className="home_section_3">
           <div className="how_work_container">
             <h1>Simple, Swift, and Straightforward</h1>
             <h3>
               Get expertly crafted reports with layman-friendly summaries and
               personalized follow-up explanations.
             </h3>
             <div className="staps_container">
               <div className="steps">
                 <i className="fa-solid fa-upload"></i>
                 <b>Upload Your Image</b>
                 <p>Quickly upload your image through our secure platform.</p>
               </div>
               <div className="steps">
                 <i className="fa-solid fa-clipboard-list"></i>
                 <b>Receive Your Report</b>
                 <p>Get a detailed report with easy-to-understand summaries.</p>
               </div>
               <div className="steps">
                 <i className="fa-solid fa-message"></i>
                 <b>Ask Follow-Up Questions</b>
                 <p>Easily ask questions for further explanations.</p>
               </div>
             </div>
 
             
           </div>
         </section>
       </main>
     </div>
  );
}

export default HomePage;

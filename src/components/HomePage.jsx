import React, { useEffect, useRef, useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

function HomePage({ onSuccess }) {
  const [showSuccess, setShowSuccess] = useState(false);

  const blog1 = useRef();
  const blog2 = useRef();
  const blog3 = useRef();
  const blog4 = useRef();
  const blog5 = useRef();
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
          if (entry.isIntersecting && entry.intersectionRatio >= 0.06) {
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
            } else if (target.classList.contains("blog1")) {
              target.classList.add("animate_blog1");
            } else if (target.classList.contains("blog2")) {
              target.classList.add("animate_blog2");
            } else if (target.classList.contains("blog3")) {
              target.classList.add("animate_blog3");
            } else if (target.classList.contains("blog4")) {
              target.classList.add("animate_blog4");
            } else if (target.classList.contains("blog5")) {
              target.classList.add("animate_blog5");
            }
          }
        });
      },
      {
        threshold: [0.2],
      }
    );
    if (blog1.current) observer.observe(blog1.current);
    if (blog2.current) observer.observe(blog2.current);
    if (blog3.current) observer.observe(blog3.current);
    if (blog4.current) observer.observe(blog4.current);
    if (blog5.current) observer.observe(blog5.current);

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

  const location = useLocation();
  useEffect(() => {
    if (location.hash && location.hash !== "#") {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  const faqData = [
    {
      question: "What is this for?",
      answer:
        "This platform helps patients, caregivers, and healthcare professionals better understand medical images using AI. It provides fast, easy-to-understand insights—without waiting for clinical reports.",
    },
    {
      question: "How accurate is it?",
      answer:
        "Our AI models are trained on thousands of verified medical images and are continually refined. While reliable, results should supplement—not replace—professional medical advice.",
    },
    {
      question: "Is data secure?",
      answer:
        "Yes. We process all images securely. We never store personal data or use uploads without explicit consent.",
    },
    {
      question: "What image quality is needed?",
      answer:
        "For best accuracy, upload clear, high-resolution images in JPG, PNG, PDF, or DICOM format. Blurry scans may reduce interpretation quality.",
    },
  ];
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };
  const validate = () => {
    const newErrors = {};

    const nameRegex = /^[A-Za-z\s]+$/;

    if (!form.firstName.trim()) {
      newErrors.firstName = "First name is required";
    } else if (!nameRegex.test(form.firstName)) {
      newErrors.firstName = "First name can only contain letters";
    }

    if (!form.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    } else if (!nameRegex.test(form.lastName)) {
      newErrors.lastName = "Last name can only contain letters";
    }

    if (!form.email.trim()) newErrors.email = "Email is required";
    if (!form.message.trim()) {
      newErrors.message = "Message is required";
    } else {
      const wordCount = form.message.trim().split(/\s+/).length;

      if (wordCount < 10) {
        newErrors.message = "Message must be at least 10 words";
      } else if (wordCount > 500) {
        newErrors.message = "Message cannot exceed 500 words";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
      }, 2000);

      setForm({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
      });
      setErrors({});
    }
  };

  const blogContainerRef = useRef(null);

  const scrollLeft = () => {
    blogContainerRef.current.scrollBy({
      left: -350,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    blogContainerRef.current.scrollBy({
      left: 350,
      behavior: "smooth",
    });
  };

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
              <img src="/images/Group-1-dot.png" alt="" />
            </div>
            <div className="hero_image">
              <img src="/images/doctor_image.png" alt="" />
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
                src="/images/python.png"
                alt="Python"
              />

              <img
                ref={techImage2}
                className="techImage2"
                src="/images/keras.png"
                alt="Keras"
              />

              <img
                ref={techImage3}
                className="techImage3"
                src="/images/matplotlib.png"
                alt="Matplotlib"
              />

              <img
                ref={techImage4}
                className="techImage4"
                src="/images/tensorflow.png"
                alt="TensorFlow"
              />
            </div>
          </div>
        </section>

        <section className="home_section_2" id="About">
          <div className="home_about_container">
            <h1>About Us</h1>
            <div className="home_about_div1">
              <div className="home_about_image">
                <img
                  ref={aboutImage}
                  className="aboutImage"
                  src="/images/human_ai_collab.jpg"
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
                  src="/images/body_ai_chackup.jpg"
                  alt=""
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

        <section className="home_section_4">
          <div className="home_blog_container">
            <h1>Latest Blogs</h1>
            <div className="home_single_blog_container" ref={blogContainerRef}>
              <div className="home_single_blog blog1" ref={blog1}>
                <Link to="/BlogDetails">
                  <div className="blog_image">
                    <img src="/images/blog1.jpg" alt="" />
                  </div>
                  <p className="blog_date">04-07-2025</p>
                  <p className="blog_title">
                    What Is Biometric Authentication? Use Cases and Benefits
                  </p>
                  <p className="home_blog_contant">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                    tenetur, distinctio iure qui hic animi ratione eligendi
                    reprehenderit repudiandae, iste consequatur in voluptatibus
                    commodi aspernatur id fugiat vitae consectetur ab unde
                    veritatis quis velit accusantium totam! Ipsum ducimus
                    distinctio vitae aliquid sed qui libero ex. Vel unde nulla
                    dignissimos a! veritatis quis velit accusantium totam! Ipsum
                    ducimus distinctio vitae aliquid sed qui libero ex. Vel unde
                    nulla dignissimos a!
                  </p>

                  <p>
                    <Link to="/BlogDetails">Read more...</Link>
                  </p>
                </Link>
              </div>

              <div className="home_single_blog blog2" ref={blog2}>
                <Link to="/BlogDetails">
                  <div className="blog_image">
                    <img src="/images/blog2.jpg" alt="" />
                  </div>
                  <p className="blog_date">04-07-2025</p>
                  <p className="blog_title">
                    6 Things You May Not Know About Biometrics | Blog | CGAP
                  </p>
                  <p className="home_blog_contant">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                    tenetur, distinctio iure qui hic animi ratione eligendi
                    reprehenderit repudiandae, iste consequatur in voluptatibus
                    commodi aspernatur id fugiat vitae consectetur ab unde
                    veritatis quis velit accusantium totam! Ipsum ducimus
                    distinctio vitae aliquid sed qui libero ex. Vel unde nulla
                    dignissimos a! veritatis quis velit accusantium totam! Ipsum
                    ducimus distinctio vitae aliquid sed qui libero ex. Vel unde
                    nulla dignissimos a!
                  </p>

                  <p>
                    <Link to="/BlogDetails">Read more...</Link>
                  </p>
                </Link>
              </div>

              <div className="home_single_blog blog3" ref={blog3}>
                <Link to="/BlogDetails">
                  <div className="blog_image">
                    <img src="/images/blog3.jpg" alt="" />
                  </div>
                  <p className="blog_date">04-07-2025</p>
                  <p className="blog_title">
                    Future of Biometrics: AI, Fraud Prevention & Industry Growth
                  </p>
                  <p className="home_blog_contant">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                    tenetur, distinctio iure qui hic animi ratione eligendi
                    reprehenderit repudiandae, iste consequatur in voluptatibus
                    commodi aspernatur id fugiat vitae consectetur ab unde
                    veritatis quis velit accusantium totam! Ipsum ducimus
                    distinctio vitae aliquid sed qui libero ex. Vel unde nulla
                    dignissimos a! veritatis quis velit accusantium totam! Ipsum
                    ducimus distinctio vitae aliquid sed qui libero ex. Vel unde
                    nulla dignissimos a!
                  </p>

                  <p>
                    <Link to="/BlogDetails">Read more...</Link>
                  </p>
                </Link>
              </div>

              <div className="home_single_blog blog4" ref={blog4}>
                <Link to="/BlogDetails">
                  <div className="blog_image">
                    <img src="/images/blog3.jpg" alt="" />
                  </div>
                  <p className="blog_date">04-07-2025</p>
                  <p className="blog_title">
                    Future of Biometrics: AI, Fraud Prevention & Industry Growth
                  </p>
                  <p className="home_blog_contant">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                    tenetur, distinctio iure qui hic animi ratione eligendi
                    reprehenderit repudiandae, iste consequatur in voluptatibus
                    commodi aspernatur id fugiat vitae consectetur ab unde
                    veritatis quis velit accusantium totam! Ipsum ducimus
                    distinctio vitae aliquid sed qui libero ex. Vel unde nulla
                    dignissimos a! veritatis quis velit accusantium totam! Ipsum
                    ducimus distinctio vitae aliquid sed qui libero ex. Vel unde
                    nulla dignissimos a!
                  </p>

                  <p>
                    <Link to="/BlogDetails">Read more...</Link>
                  </p>
                </Link>
              </div>

              <div className="home_single_blog blog5" ref={blog5}>
                <Link to="/BlogDetails">
                  <div className="blog_image">
                    <img src="/images/blog3.jpg" alt="" />
                  </div>
                  <p className="blog_date">04-07-2025</p>
                  <p className="blog_title">
                    Future of Biometrics: AI, Fraud Prevention & Industry Growth
                  </p>
                  <p className="home_blog_contant">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                    tenetur, distinctio iure qui hic animi ratione eligendi
                    reprehenderit repudiandae, iste consequatur in voluptatibus
                    commodi aspernatur id fugiat vitae consectetur ab unde
                    veritatis quis velit accusantium totam! Ipsum ducimus
                    distinctio vitae aliquid sed qui libero ex. Vel unde nulla
                    dignissimos a! veritatis quis velit accusantium totam! Ipsum
                    ducimus distinctio vitae aliquid sed qui libero ex. Vel unde
                    nulla dignissimos a!
                  </p>

                  <p>
                    <Link to="/BlogDetails">Read more...</Link>
                  </p>
                </Link>
              </div>
            </div>

            <div className="slider_button">
              <i className="fa-solid fa-chevron-left" onClick={scrollLeft}></i>
              <i
                className="fa-solid fa-chevron-right"
                onClick={scrollRight}
              ></i>
            </div>
          </div>
        </section>

        <section className="home_section_6">
          <div className="fqa_container">
            <h1>FAQ</h1>
            <div className="fqa_div">
              {faqData.map((item, index) => (
                <div className="faq_item" key={index}>
                  <div className="question" onClick={() => toggleFAQ(index)}>
                    <span>{item.question}</span>
                    {openIndex === index ? <FaMinus /> : <FaPlus />}
                  </div>
                  {openIndex === index && (
                    <p className="answer" aria-live="polite">
                      {item.answer}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="home_section_5" id="ContactUs">
          <div className="contact_us_container">
            <h1>Contact Us</h1>

            {showSuccess && (
              <p className="success_message">
                <i className="fa-regular fa-circle-check"></i> Feedback saved
                Successful
              </p>
            )}

            <div className="conact_div">
              <div className="contact_form">
                <form onSubmit={handleSubmit}>
                  <div className="user_wrap">
                    <label>First Name</label>
                    <input
                      type="text"
                      name="first_name"
                      placeholder="First Name"
                      autoComplete="off"
                      value={form.firstName}
                      onChange={(e) =>
                        handleChange("firstName", e.target.value)
                      }
                    />
                    <p style={{ color: "red" }}>{errors.firstName}</p>
                  </div>

                  <div className="user_wrap">
                    <label>Last Name</label>
                    <input
                      type="text"
                      name="last_name"
                      placeholder="Last Name"
                      autoComplete="off"
                      value={form.lastName}
                      onChange={(e) => handleChange("lastName", e.target.value)}
                    />
                    <p style={{ color: "red" }}>{errors.lastName}</p>
                  </div>

                  <div className="user_wrap">
                    <label>Email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      autoComplete="off"
                      value={form.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                    />
                    <p style={{ color: "red" }}>{errors.email}</p>
                  </div>

                  <div className="user_wrap">
                    <label>Message</label>
                    <textarea
                      placeholder="Type your quary"
                      autoComplete="off"
                      value={form.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                    ></textarea>
                    <p style={{ color: "red" }}>{errors.message}</p>
                  </div>

                  <button type="submit">
                    Send <i className="fa-solid fa-paper-plane"></i>
                  </button>
                </form>
              </div>
              <div className="map_div">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.748297170293!2d72.49964718939324!3d22.996281466184115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b2a41bde76d%3A0xdf3dc198626a6d56!2sTitanium%20Business%20Park!5e0!3m2!1sen!2sin!4v1751655143545!5m2!1sen!2sin"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Map"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default HomePage;

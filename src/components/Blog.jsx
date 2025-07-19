import React, {useEffect, useRef} from "react";

import { Link } from "react-router-dom";
function Blog() {
 

  return (
    <div>
      <section className="blog_section_1">
        <div className="blog_container">
          <h1>All Blogs</h1>
          <div className="single_blog_container">
            
            <div className="single_blog blog1" >
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
                commodi aspernatur id fugiat vitae consectetur ab unde veritatis
                quis velit accusantium totam! Ipsum ducimus distinctio vitae
                aliquid sed qui libero ex. Vel unde nulla dignissimos a!
                veritatis quis velit accusantium totam! Ipsum ducimus distinctio
                vitae aliquid sed qui libero ex. Vel unde nulla dignissimos a!
              </p>

              <p>
                <Link to="/BlogDetails">Read more...</Link>
              </p>
            </div>

            <div className="single_blog blog2">
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
                commodi aspernatur id fugiat vitae consectetur ab unde veritatis
                quis velit accusantium totam! Ipsum ducimus distinctio vitae
                aliquid sed qui libero ex. Vel unde nulla dignissimos a!
                veritatis quis velit accusantium totam! Ipsum ducimus distinctio
                vitae aliquid sed qui libero ex. Vel unde nulla dignissimos a!
              </p>

              <p>
                <Link to="/BlogDetails">Read more...</Link>
              </p>
            </div>

            <div className="single_blog blog3">
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
                commodi aspernatur id fugiat vitae consectetur ab unde veritatis
                quis velit accusantium totam! Ipsum ducimus distinctio vitae
                aliquid sed qui libero ex. Vel unde nulla dignissimos a!
                veritatis quis velit accusantium totam! Ipsum ducimus distinctio
                vitae aliquid sed qui libero ex. Vel unde nulla dignissimos a!
              </p>

              <p>
                <Link to="/BlogDetails">Read more...</Link>
              </p>
            </div>

            <div className="single_blog blog3">
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
                commodi aspernatur id fugiat vitae consectetur ab unde veritatis
                quis velit accusantium totam! Ipsum ducimus distinctio vitae
                aliquid sed qui libero ex. Vel unde nulla dignissimos a!
                veritatis quis velit accusantium totam! Ipsum ducimus distinctio
                vitae aliquid sed qui libero ex. Vel unde nulla dignissimos a!
              </p>

              <p>
                <Link to="/BlogDetails">Read more...</Link>
              </p>
            </div>


          </div>
        </div>
      </section>
    </div>
  );
}

export default Blog;

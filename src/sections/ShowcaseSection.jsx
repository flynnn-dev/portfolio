import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);

  useGSAP(
    () => {
      const projects = [
        project1Ref.current,
        project2Ref.current,
        project3Ref.current,
      ].filter(Boolean);

      projects.forEach((card, index) => {
        gsap.fromTo(
          card,
          {
            y: 50,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            delay: index * 0.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top bottom-=100",
              toggleActions: "play none none none",
            },
          },
        );
      });

      gsap.fromTo(
        sectionRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1.2,
          ease: "power2.out",
        },
      );
    },
    { scope: sectionRef },
  );

  return (
    <section id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          {/* LEFT */}
          <div className="first-project-wrapper" ref={project1Ref}>
            <div className="image-wrapper">
              <img src="images/project1.png" alt="Tracker" />
            </div>

            <div className="text-content">
              <h2>QR-Based Attendance Tracker System</h2>

              <p className="text-white-50 md:text-xl">
                Automates attendance monitoring with QR technology, providing
                fast, accurate, and paperless attendance management.
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={project2Ref}>
              <div className="image-wrapper">
                <img src="images/project2.png" alt="Facetime" />
              </div>

              <h2>Facial Recognition-Based FaceTime</h2>
            </div>

            <div className="project" ref={project3Ref}>
              <div className="image-wrapper">
                <img src="images/project3.png" alt="Whanau" />
              </div>

              <h2>Whanau Tui - Class Portfolio</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;

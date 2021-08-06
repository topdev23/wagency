import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Section from "./index";
const ThirdSection = () => (
  <Section id="grey">
    <div className="sub-section full bottom">
      <div className="content full">
        <div className="text-container">
          <h2 className="container-highlight-title montserrat">
            Business Automation
          </h2>
          <div className="container-highlight-text small multiple-bg">
            <p>
              At ITIO we create tools to make it easier for businesses to tracks
              their metrics and automate themselves.
              <br />
              <br />
              Regardless of the industry nay business can improve the creation,
              delivery or care of their products or services.
              <br />
              <br />
              We created custome controllers for solar farms in order to
              generate optimal eneryg outputs, and customized ticketing systems
              to fit their business needs.
              <br />
              <br />
              We turned an account as a service company into a SASS company by
              integrating state of the art off the shelf software. <br />
              <br />
              We believe that the best solution is not most custom one but the
              one that can satisfy the business as fast as possible.
            </p>
          </div>
        </div>
        <div className="section-background">
          <div className="bg-image-container small left">
            <svg className="little-cubes-svg" viewBox="0 0 122 122">
              {/* <style jsx>{`
            .main-cricle{fill:var(--pink);}
            .cls-2{
                fill:none;stroke:#000;
            stroke-miterlimit:10;
            stroke-width:6px;}
            `}</style> */}
              <g id="Layer_2" data-name="Layer 2">
                <g id="Objects">
                  <circle
                    className="main-cricle"
                    cx="66.09"
                    cy="64.08"
                    r="54.51"
                  />
                  <path d="M38.52,78.92a2.18,2.18,0,0,0-2.24,2.36,2.28,2.28,0,1,0,4.54-.19A2.26,2.26,0,0,0,38.52,78.92Z" />
                  <path d="M8.53,49.11a2.19,2.19,0,0,0-2.37,2.11,2.33,2.33,0,0,0,2.12,2.56,2.34,2.34,0,1,0,.25-4.67Z" />
                  <path d="M78.29,39.15a2.3,2.3,0,0,0-2.24,2.43,2.27,2.27,0,0,0,2.24,2.24,2.19,2.19,0,0,0,2.3-2.3A2.28,2.28,0,0,0,78.29,39.15Z" />
                  <path d="M48,14a2.28,2.28,0,0,0,2.49-2.18,2.36,2.36,0,0,0-2.18-2.49A2.23,2.23,0,0,0,46,11.4,2.2,2.2,0,0,0,48,14Z" />
                  <path d="M18.67,79a2.3,2.3,0,1,0,0,4.6,2.23,2.23,0,0,0,2.24-2.24A2.27,2.27,0,0,0,18.67,79Z" />
                  <path d="M78.29,83.65a2.28,2.28,0,0,0,2.3-2.37,2.22,2.22,0,0,0-2.3-2.3,2.34,2.34,0,0,0-2.24,2.43A2.31,2.31,0,0,0,78.29,83.65Z" />
                  <path d="M48.23,53.71a2.26,2.26,0,0,0,2.3-2.36,2.31,2.31,0,0,0-2.43-2.24,2.18,2.18,0,0,0-2.17,2.43A2.22,2.22,0,0,0,48.23,53.71Z" />
                  <path d="M38.52,39.21a2.24,2.24,0,0,0-2.24,2.24,2.4,2.4,0,0,0,2.24,2.43,2.19,2.19,0,0,0,2.3-2.18A2.27,2.27,0,0,0,38.52,39.21Z" />
                  <path d="M68.14,9.34a2.23,2.23,0,0,0-2.24,2.37,2.27,2.27,0,0,0,4.54-.06A2.26,2.26,0,0,0,68.14,9.34Z" />
                  <path d="M8.59,69.08A2.15,2.15,0,0,0,6.16,71.2,2.19,2.19,0,0,0,8.4,73.56a2.23,2.23,0,0,0,2.37-2.24A2.27,2.27,0,0,0,8.59,69.08Z" />
                  <path d="M48.23,108.85a2.11,2.11,0,0,0-2.3,2.12A2.07,2.07,0,0,0,48,113.39a2.2,2.2,0,0,0,2.43-2.18A2.22,2.22,0,0,0,48.23,108.85Z" />
                  <path d="M98.39,79A2.45,2.45,0,0,0,96,81.28a2.3,2.3,0,1,0,4.6.06A2.36,2.36,0,0,0,98.39,79Z" />
                  <path d="M98,39.21A2.34,2.34,0,0,0,96,41.64a2.23,2.23,0,0,0,2.36,2.12,2.46,2.46,0,0,0,2.31-2.43A2.54,2.54,0,0,0,98,39.21Z" />
                  <path d="M88.06,49.11c-1.31.06-2.24.62-2.31,2.11a2.2,2.2,0,0,0,2.12,2.49,2.22,2.22,0,0,0,2.43-2.17A2.32,2.32,0,0,0,88.06,49.11Z" />
                  <path d="M18.73,43.82a2.2,2.2,0,0,0,2.18-2.3,2.23,2.23,0,0,0-2.3-2.31c-1.31.19-2.18.81-2.18,2.31A2.22,2.22,0,0,0,18.73,43.82Z" />
                  <path d="M68.08,53.71a2.18,2.18,0,0,0,2.3-2.3A2.15,2.15,0,0,0,68,49.17a2.11,2.11,0,0,0-2.12,2.3A2.14,2.14,0,0,0,68.08,53.71Z" />
                  <path d="M107.85,53.71a2.3,2.3,0,1,0,.06-4.6,2.3,2.3,0,0,0-.06,4.6Z" />
                  <path d="M108,73.63a2.28,2.28,0,1,0-2.3-2.37A2.27,2.27,0,0,0,108,73.63Z" />
                  <path d="M48.17,88.94c-1.5,0-2.12.8-2.24,2.17a2.27,2.27,0,1,0,4.54.13A2.18,2.18,0,0,0,48.17,88.94Z" />
                  <path d="M48.29,69.08A2.11,2.11,0,0,0,46,71.2a2.17,2.17,0,0,0,2.18,2.43,2.28,2.28,0,0,0,2.36-2.31A2.24,2.24,0,0,0,48.29,69.08Z" />
                  <path d="M28.31,88.87a2.2,2.2,0,0,0-2.17,2.31,2.15,2.15,0,0,0,2.11,2.3,2.4,2.4,0,0,0,2.43-2.24A2.37,2.37,0,0,0,28.31,88.87Z" />
                  <path d="M68,108.85a2.23,2.23,0,0,0-2.18,2.3,2.27,2.27,0,0,0,2.18,2.3,2.18,2.18,0,0,0,2.3-2.3A2.16,2.16,0,0,0,68,108.85Z" />
                  <path d="M78.53,98.89a2.35,2.35,0,0,0-2.48,2.18,2.43,2.43,0,0,0,2.24,2.43,2.27,2.27,0,0,0,2.3-2.18A2.18,2.18,0,0,0,78.53,98.89Z" />
                  <path d="M28.38,53.71a2.32,2.32,0,0,0,2.36-2.17,2.35,2.35,0,0,0-2.24-2.43,2.23,2.23,0,0,0-2.3,2.36A2.17,2.17,0,0,0,28.38,53.71Z" />
                  <path d="M78.29,59a2.39,2.39,0,0,0-2.24,2.43,2.15,2.15,0,0,0,2.3,2.12,2.08,2.08,0,0,0,2.24-2.18A2.32,2.32,0,0,0,78.29,59Z" />
                  <path d="M78.29,23.78a2.15,2.15,0,0,0,2.3-2.12,2.12,2.12,0,0,0-2.24-2.36,2.26,2.26,0,0,0-2.3,2.3A2.17,2.17,0,0,0,78.29,23.78Z" />
                  <path d="M58.43,39.21a2.35,2.35,0,0,0-2.3,2.37,2.21,2.21,0,0,0,2.3,2.18,2.13,2.13,0,0,0,2.24-2.37A2.3,2.3,0,0,0,58.43,39.21Z" />
                  <path d="M68,88.94a2,2,0,0,0-2.12,2.11A2.13,2.13,0,0,0,68,93.42a2.28,2.28,0,0,0,2.48-2.18A2.25,2.25,0,0,0,68,88.94Z" />
                  <path d="M88.06,88.94a2.1,2.1,0,0,0-2.24,2.17,2.16,2.16,0,0,0,2.24,2.37,2.27,2.27,0,1,0,0-4.54Z" />
                  <path d="M58.5,79a2.49,2.49,0,0,0-2.37,2.36,2.55,2.55,0,0,0,2.43,2.31,2.24,2.24,0,0,0,2.11-2.37A2.26,2.26,0,0,0,58.5,79Z" />
                  <path d="M68.08,73.63a2.24,2.24,0,0,0,2.36-2.31,2.07,2.07,0,0,0-2.17-2.24,2.2,2.2,0,0,0-2.37,2.24A2.17,2.17,0,0,0,68.08,73.63Z" />
                  <path d="M28.25,73.63a2.37,2.37,0,0,0,2.43-2.31,2.32,2.32,0,0,0-2.24-2.24,2.14,2.14,0,0,0-2.24,2.18A2.06,2.06,0,0,0,28.25,73.63Z" />
                  <path d="M48.17,29.38a2.07,2.07,0,0,0-2.24,2.18,2.3,2.3,0,0,0,2.3,2.36,2.4,2.4,0,0,0,2.24-2.42A2.11,2.11,0,0,0,48.17,29.38Z" />
                  <path d="M68.08,33.86a2.4,2.4,0,0,0,2.36-2.36,2.07,2.07,0,0,0-2.24-2.18A2,2,0,0,0,66,31.5,2.21,2.21,0,0,0,68.08,33.86Z" />
                  <path d="M38.65,23.78a2.14,2.14,0,0,0,2.17-2.24,2.24,2.24,0,1,0-4.48.12A2.08,2.08,0,0,0,38.65,23.78Z" />
                  <path d="M88,33.86a2.34,2.34,0,0,0,2.24-2.43,2.15,2.15,0,0,0-2.36-2.05,2,2,0,0,0-2.12,2.3A2.22,2.22,0,0,0,88,33.86Z" />
                  <path d="M88.06,73.63a2.28,2.28,0,0,0-.13-4.55,2.15,2.15,0,0,0-2.18,2.24A2.2,2.2,0,0,0,88.06,73.63Z" />
                  <path d="M40.82,61.43A2.24,2.24,0,0,0,38.58,59a2.41,2.41,0,0,0-2.3,2.24,2.1,2.1,0,0,0,2.18,2.24A2,2,0,0,0,40.82,61.43Z" />
                  <path d="M18.54,63.55a2.16,2.16,0,0,0,2.37-2.06,2.33,2.33,0,0,0-2.05-2.42,2.48,2.48,0,0,0-2.49,2.24A2.14,2.14,0,0,0,18.54,63.55Z" />
                  <path d="M98.26,63.55a2.48,2.48,0,0,0,2.37-2.18A2.72,2.72,0,0,0,98.2,59,2.54,2.54,0,0,0,96,61.37,2.11,2.11,0,0,0,98.26,63.55Z" />
                  <path d="M28.31,33.86a2.54,2.54,0,0,0,2.37-2.36,2.21,2.21,0,0,0-2.37-2.12,1.92,1.92,0,0,0-2.17,2A2.32,2.32,0,0,0,28.31,33.86Z" />
                  <path d="M38.58,98.89a2.45,2.45,0,0,0-2.3,2.43,2.38,2.38,0,0,0,2.37,2.18,2.19,2.19,0,0,0,2.17-2.3A2.32,2.32,0,0,0,38.58,98.89Z" />
                  <path d="M58.37,23.78a2.14,2.14,0,0,0,2.24-2.18,2.15,2.15,0,0,0-2.11-2.36,2.31,2.31,0,0,0-2.37,2.3A2.36,2.36,0,0,0,58.37,23.78Z" />
                  <path d="M58.37,63.55a2.14,2.14,0,0,0,2.24-2.18,2.27,2.27,0,0,0-2.18-2.3,2.54,2.54,0,0,0-2.3,2.42A2.26,2.26,0,0,0,58.37,63.55Z" />
                  <path d="M58.37,98.89a2.71,2.71,0,0,0-2.24,2.37,2.65,2.65,0,0,0,2.37,2.24,2.31,2.31,0,0,0-.13-4.61Z" />
                  <path
                    className="cls-2"
                    d="M61,119a58,58,0,1,1,58-58A58.06,58.06,0,0,1,61,119Z"
                  />
                </g>
              </g>
            </svg>
            <StaticImage
              alt="Beautiful picture of a building in Chicago with bright blue sky"
              src="../../../images/home/boat-build.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  </Section>
);

export default ThirdSection;

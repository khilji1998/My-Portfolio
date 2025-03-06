import React from "react";

export const Qualification = () => {
  return (
    <>
      <section className="qualification section">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My Personal Journey</span>
        <div className="qualification__container container">
        <div className="qualification__button button--flex">
              <i className="uil uil-graduation-cap qualification__icon"></i>
              Education
            </div>
            <div className="qualification__button button--flex">
              <i className="uil uil-briefcase-alt qualification__icon"></i>
              Work
            </div>
          <div className="qualification__tabs">
           
            <div className="qualification__sections">
              <div className="qualification__content">
                <div className="qualification__data">
                  <div>
                    <h3 className="qualification__title">A</h3>
                    <span className="qualification__subtitle">aaa</span>
                    <div className="qualification__calender">
                    <i className="uil uil-calendar-alt"></i>
                      2009-2014
                    </div>
                  </div>

                  <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                  </div>
                </div>
                <div className="qualification__data">
                    <div></div>
                    <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                  </div>
                  <div>
                    <h3 className="qualification__title">A</h3>
                    <span className="qualification__subtitle">aaa</span>
                    <div className="qualification__calender">
                    <i className="uil uil-calendar-alt"></i>
                      2009-2014
                    </div>
                  </div>

                 
                </div>
                <div className="qualification__data">
                  <div>
                    <h3 className="qualification__title">A</h3>
                    <span className="qualification__subtitle">aaa</span>
                    <div className="qualification__calender">
                    <i className="uil uil-calendar-alt"></i>
                      2009-2014
                    </div>
                  </div>

                  <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

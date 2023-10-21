import React, { useState } from "react";
import "./index.css";
import MyImage from "../assests/bulb-image.png";

function SectionWithAccordions() {
  const accordionData = [
    {
      question: "Is there a free trial available?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      question: "Can I change my plan later?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      question: "Can other info be added to an invoice?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      question: "How does billing work?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      question: "How do I change my account email?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
  ];

  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    if (openAccordion === index) {
      setOpenAccordion(null);
    } else {
      setOpenAccordion(index);
    }
  };

  return (
    <div className="accordian-main-section-new">
      <div className="heading-container">
        <p>FAQs</p>
        <h4>Everything you need to know about the product and billing.</h4>
      </div>
      <div className="accordian-main-section">
        <div className="left-container">
          {accordionData.map((item, index) => (
            <div className="border-line" key={index}>
              <div
                className={`button-container ${
                  openAccordion === index ? "active" : ""
                }`}
              >
                <div
                  className="accordion-button"
                  onClick={() => toggleAccordion(index)}
                >
                  <p>{item.question}</p>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M6 9L12 15L18 9"
                      stroke="#98A2B3"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>

              {openAccordion === index && (
                <div className="accordion-content">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="right-container">
          <div className="image-container">
            <img src={MyImage} className="image-tag" alt="{My Image}" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionWithAccordions;

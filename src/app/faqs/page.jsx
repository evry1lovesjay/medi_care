"use client"

// pages/faq.js
import { useState } from 'react';

const Faqs = () => {
  const [showAnswers, setShowAnswers] = useState([]);

  const toggleAnswer = (index) => {
    const newShowAnswers = [...showAnswers];
    newShowAnswers[index] = !newShowAnswers[index];
    setShowAnswers(newShowAnswers);
  };

  return (
    <div className="max-w-lg mx-auto py-8 px-4">
      <h1 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h1>
      <div className="space-y-4">
        {questions.map((question, index) => (
          <div key={index} className="border rounded-md p-4">
            <button
              className="flex items-center justify-between w-full"
              onClick={() => toggleAnswer(index)}
            >
              <span className="text-lg font-medium">{question.question}</span>
              <svg
                className={`w-5 h-5 text-gray-600 transform transition-transform ${
                  showAnswers[index] ? 'rotate-180' : ''
                }`}
                viewBox="0 0 20 20"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 12a.75.75 0 0 1-.53-.22l-3-3a.75.75 0 0 1 1.06-1.06L10 10.94l4.47-4.47a.75.75 0 0 1 1.06 1.06l-5 5a.75.75 0 0 1-.53.22z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {showAnswers[index] && <p className="text-gray-600 mt-2">{question.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

const questions = [
  {
    question: 'How much notice do you need to get started?',
    answer:
      'At GUIDING HANDS CARE SERVICES, we strive to fill your needs as soon as possible. Call as soon as you think you may have a need, and while the more notice the better, if urgent, we will try to initiate services immediately.',
  },
  {
    question: 'Are GUIDING HANDS CARE SERVICES’ Caregivers licensed, bonded and insured?',
    answer:
      'Yes, GUIDING HANDS CARE SERVICES is licensed by the Texas Department of Health and Human Services to provide Personal Assistant Services. All Caregivers are company employees, and are therefore covered under our licensure and insurance.',
  },
  {
    question: 'Does insurance cover the cost of this service?',
    answer:
      'GUIDING HANDS CARE SERVICES accepts Long Term Care Insurance, and we will assist with the billing for such plans. However, because Personal Assistance Service does not require the services of a nurse or physical therapist, medical insurance will not cover the cost of care.',
  },
  {
    question: 'What services does GUIDING HANDS CARE SERVICES provide?',
    answer:
      'Please click on the Services page for an extensive explanation of the care we can provide. If your need is not listed, please call us and we’ll be happy to discuss whether we can help with any special circumstance.',
  },
  {
    question: 'Can GUIDING HANDS CARE SERVICES take my loved one to appointments? Is there an additional cost for this?',
    answer:
      'Yes, our Caregivers can drive the Client’s vehicle, for which the cost is included with the time. Or, the Caregiver can drive the Client in their own vehicle, which incurs a $.70 per mile charge. GUIDING HANDS CARE SERVICES runs DPS backgrounds on all Caregivers, and are covered through company insurance.  *If Long-Term Care Insurance or Medicaid/MCOs are paying for the services, mileage fees may be the responsibility of the client.',
  },
];

export default Faqs;

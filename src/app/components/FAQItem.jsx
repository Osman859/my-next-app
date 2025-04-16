// FAQAccordion.jsx
"use client";
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQItem = ({ question, answer, isOpen, toggleOpen }) => {
  return (
    <div className="border-b border-gray-700">
      <button
        className="w-full flex items-center justify-between cursor-pointer py-6 text-left hover:shadow hover:shadow-white transition-shadow duration-300"
        onClick={toggleOpen}
      >
        <h3 className="text-xl text-white font-medium">{question}</h3>
        <ChevronDown 
          className={`text-white transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''}`} 
          size={24} 
        />
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 pb-6' : 'max-h-0'
        }`}
      >
        <p className="text-gray-300">{answer}</p>
      </div>
    </div>
  );
};

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "What is your development process?",
      answer: "Our development process follows an agile methodology which includes requirement gathering, planning, design, development, testing, deployment, and maintenance. We ensure regular client communication throughout the project lifecycle to deliver exactly what you need."
    },
    {
      question: "How long does it take to build a React application?",
      answer: "The timeline for building a React application varies based on complexity and scope. Simple applications may take 2-4 weeks, while complex enterprise solutions could take several months. We'll provide a detailed timeline estimate after understanding your specific requirements."
    },
    {
      question: "Do you offer post-launch support and maintenance?",
      answer: "Yes, we provide comprehensive post-launch support and maintenance services. Our team ensures your application remains secure, up-to-date, and optimized for performance. We offer various maintenance packages to suit your specific needs."
    },
    {
      question: "Can you help with both frontend and backend development?",
      answer: "Absolutely! We specialize in full-stack development, covering both frontend and backend. Our developers are experienced in creating seamless integrations between beautiful user interfaces and robust server-side functionality."
    },
    {
      question: "What technologies do you use for backend development?",
      answer: "For backend development, we utilize a range of technologies including Node.js, Express, Python/Django, Ruby on Rails, PHP/Laravel, and Java Spring Boot. We also work with various database systems such as MongoDB, PostgreSQL, MySQL, and Firebase."
    },
    {
      question: "Do you provide custom solutions tailored to our specific needs?",
      answer: "Yes, we specialize in developing custom solutions tailored specifically to your business requirements. We take time to understand your unique challenges and objectives before crafting a solution that addresses your specific needs."
    }
  ];

  return (
    <div className="bg-black text-white py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3">
            <h2 className="text-5xl font-bold mb-6">
              <span className="text-green-500">FREQUENTLY</span> 
              <span className="text-white"> ASKED</span><br />
              <span className="text-white">QUESTIONS!</span>
            </h2>
            <p className="text-gray-400 mb-4">Can't find the answer you're looking for? <br />
            <a href="#contact" className="text-green-500 hover:underline">Reach out</a>
            <span className="text-gray-400"> to us and we will get in touch <br /> with you</span>
            </p>
          
          </div>
          
          <div className="md:w-2/3">
            {faqItems.map((item, index) => (
              <FAQItem
                key={index}
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === index}
                toggleOpen={() => toggleFAQ(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQAccordion;
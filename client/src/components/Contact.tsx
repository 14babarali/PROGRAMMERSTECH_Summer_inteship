import React from 'react';
import ContactForm from "./ContactForm";

const Contact: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <ContactForm />
      <section id="contact" className="mt-8 bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
        <p className="text-lg mb-2">Email: <a href="mailto:your-email@example.com" className="text-blue-500 hover:underline">your-email@example.com</a></p>
        <p className="text-lg">Phone: <a href="tel:+1234567890" className="text-blue-500 hover:underline">+123-456-7890</a></p>
      </section>
    </div>
  );
};

export default Contact;

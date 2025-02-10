import React from 'react';
import { motion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { faqCategories } from '../data/faq';

const FAQ: React.FC = () => {
  const [openQuestions, setOpenQuestions] = React.useState<string[]>([]);

  const toggleQuestion = (id: string) => {
    setOpenQuestions(prev =>
      prev.includes(id)
        ? prev.filter(q => q !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              Frequently Asked Questions
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-300 max-w-2xl mx-auto"
            >
              Find answers to common questions about our detailing services
            </motion.p>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {faqCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="space-y-6"
              >
                <h2 className="text-3xl font-bold text-gray-900">{category.title}</h2>
                <div className="space-y-4">
                  {category.questions.map((item) => (
                    <div
                      key={item.id}
                      className="bg-white rounded-lg shadow-md overflow-hidden"
                    >
                      <button
                        onClick={() => toggleQuestion(item.id)}
                        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                      >
                        <span className="text-lg font-semibold text-gray-900">
                          {item.question}
                        </span>
                        {openQuestions.includes(item.id) ? (
                          <Minus className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                        ) : (
                          <Plus className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                        )}
                      </button>
                      <motion.div
                        initial={false}
                        animate={{
                          height: openQuestions.includes(item.id) ? 'auto' : 0,
                          opacity: openQuestions.includes(item.id) ? 1 : 0
                        }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-4 text-gray-600">
                          {item.answer}
                        </div>
                      </motion.div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Still Have Questions?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us directly and we'll be happy to help you with any questions about our services.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="tel:267-356-1409"
              className="bg-yellow-500 text-black px-8 py-3 rounded-md font-semibold hover:bg-yellow-400 transition-colors"
            >
              Call Now
            </a>
            <a
              href="/contact"
              className="bg-white text-black px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;

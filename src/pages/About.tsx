import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Leaf, PenTool as Tool, Clock, Award, GraduationCap } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      title: 'EV Detailing Expertise',
      description: 'Specialized knowledge in electric vehicle care, including advanced techniques for EV-specific materials and components.',
      icon: Shield,
    },
    {
      title: 'Eco-Conscious Approach',
      description: 'Committed to environmental responsibility through sustainable practices and eco-friendly premium products.',
      icon: Leaf,
    },
    {
      title: 'Precision & Care',
      description: 'Meticulous attention to every detail, taking the time to ensure exceptional results for every vehicle.',
      icon: Tool,
    },
    {
      title: 'Dedicated Service',
      description: 'Personalized attention and flexible scheduling to accommodate your needs and exceed expectations.',
      icon: Clock,
    },
    {
      title: 'Quality Guarantee',
      description: 'Unwavering commitment to excellence, backed by our satisfaction guarantee on all services.',
      icon: Award,
    },
    {
      title: 'Customer Education',
      description: 'Empowering clients with knowledge about proper vehicle care and maintenance through transparent communication.',
      icon: GraduationCap,
    }
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-black">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: 'url("https://www.lovelaceautodetailing.com/assets/images/about_hero_bkg.avif")',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              About Lovelace Auto Detailing
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-300 max-w-2xl mx-auto"
            >
              Premium auto detailing services with specialized EV expertise, serving Wilkes-Barre and Philadelphia
            </motion.p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded with a passion for automotive excellence, Lovelace Auto Detailing has emerged as a dedicated provider of premium vehicle care. Our journey began with a simple mission: to provide unparalleled detailing services that meet the exacting standards of all discerning vehicle owners, regardless of make or model.
                </p>
                <p>
                  As electric vehicle specialists, we've developed extensive expertise in handling the unique requirements of EVs while maintaining our commitment to environmental responsibility through eco-friendly detailing practices.
                </p>
                <p>
                  Today, we proudly serve clients across Wilkes-Barre and Philadelphia, combining traditional detailing craftsmanship with modern techniques and premium products to deliver exceptional results for every vehicle we touch.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <img
                src="https://www.lovelaceautodetailing.com/assets/images/about_us.avif"
                alt="Professional car detailing"
                className="rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-center mb-12"
          >
            What Sets Us Apart
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800 rounded-lg p-8 text-center border border-gray-700 hover:border-yellow-500 transition-colors"
              >
                <value.icon className="w-12 h-12 mx-auto mb-6 text-yellow-500" />
                <h3 className="text-xl font-bold mb-4 text-white">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Experience Premium Auto Detailing
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Book your appointment today and give your vehicle the premium care it deserves
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="/services"
                className="bg-black text-white px-8 py-3 rounded-md font-semibold hover:bg-gray-800 transition-colors"
              >
                View Services
              </a>
              <a
                href="/contact"
                className="bg-yellow-500 text-black px-8 py-3 rounded-md font-semibold hover:bg-yellow-400 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;

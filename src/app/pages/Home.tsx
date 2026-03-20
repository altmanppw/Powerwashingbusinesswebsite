import { Link } from "react-router";
import { motion } from "motion/react";
import { Phone, Award, Clock, Shield, Droplets } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Home() {
  const beforeAfterImages = [
    {
      before: "https://images.unsplash.com/photo-1591188185682-41f5c74781f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXJ0eSUyMGRyaXZld2F5JTIwY29uY3JldGV8ZW58MXx8fHwxNzc0MDI1NjAwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      after: "https://images.unsplash.com/photo-1633677095081-492aad9530d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMGNvbmNyZXRlJTIwcGF0aW98ZW58MXx8fHwxNzc0MDI1NTk3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Driveway Transformation",
    },
    {
      before: "https://images.unsplash.com/photo-1605018075968-b014b8d2e487?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzdWJ1cmJhbiUyMGhvbWV8ZW58MXx8fHwxNzc0MDI1NjAwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      after: "https://images.unsplash.com/photo-1769341026650-744661ffc6d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMHdoaXRlJTIwaG91c2UlMjBleHRlcmlvcnxlbnwxfHx8fDE3NzQwMjU1OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "House Washing",
    },
  ];

  const trustBadges = [
    { icon: Award, text: "Locally Owned" },
    { icon: Clock, text: "Fast Response" },
    { icon: Shield, text: "Fully Insured" },
    { icon: Droplets, text: "Eco-Friendly" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1e3a8a] to-[#0ea5e9] text-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Make Your Home Look Brand New Again
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl mb-8 text-gray-100"
            >
              Local, reliable, and affordable power washing service in Timonium, MD and surrounding areas
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                to="/contact"
                className="bg-white text-[#1e3a8a] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors text-center"
              >
                Get a Free Quote
              </Link>
              <a
                href="tel:410-555-0123"
                className="bg-[#0ea5e9] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#0284c7] transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </motion.div>
          </div>
        </div>
        {/* Decorative water droplets */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustBadges.map((badge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center p-4"
              >
                <div className="bg-[#0ea5e9] text-white p-4 rounded-full mb-3">
                  <badge.icon className="w-6 h-6" />
                </div>
                <span className="font-semibold text-gray-700">{badge.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a8a] mb-4">
              Stunning Transformations
            </h2>
            <p className="text-xl text-gray-600">
              See the difference professional power washing makes
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {beforeAfterImages.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <h3 className="text-xl font-semibold text-center py-4 bg-gray-50 text-[#1e3a8a]">
                  {item.title}
                </h3>
                <div className="grid grid-cols-2">
                  <div className="relative">
                    <div className="absolute top-2 left-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold z-10">
                      Before
                    </div>
                    <ImageWithFallback
                      src={item.before}
                      alt="Before power washing"
                      className="w-full h-64 object-cover"
                    />
                  </div>
                  <div className="relative">
                    <div className="absolute top-2 right-2 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold z-10">
                      After
                    </div>
                    <ImageWithFallback
                      src={item.after}
                      alt="After power washing"
                      className="w-full h-64 object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/gallery"
              className="inline-block bg-[#0ea5e9] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#0284c7] transition-colors"
            >
              View More Transformations
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a8a] mb-6">
                Your Local Power Washing Experts
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                At Altman's Pristine Power Washing, we're a small, locally-owned business
                dedicated to making homes in Timonium and surrounding Maryland areas look
                their absolute best.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                We take pride in our attention to detail and commitment to quality work.
                Every job is done with care, using safe and effective cleaning methods
                that protect your property while delivering outstanding results.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                When you choose us, you're supporting a local business that genuinely
                cares about customer satisfaction and the community we serve.
              </p>
              <Link
                to="/about"
                className="inline-block bg-[#1e3a8a] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#0ea5e9] transition-colors"
              >
                Learn More About Us
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1765021689917-ac93566d4cf3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b3JrZXIlMjBjbGVhbmluZ3xlbnwxfHx8fDE3NzQwMjU1OTh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Professional power washing service"
                className="rounded-lg shadow-xl w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#1e3a8a] to-[#0ea5e9] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Property?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get your free estimate today! No obligation, just honest advice and competitive pricing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-[#1e3a8a] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Get Free Estimate
            </Link>
            <a
              href="tel:410-555-0123"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-[#1e3a8a] transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              (410) 555-0123
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

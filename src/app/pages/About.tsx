import { Link } from "react-router";
import { motion } from "motion/react";
import { Heart, Users, Award, MapPin } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function About() {
  const values = [
    {
      icon: Heart,
      title: "Customer Satisfaction",
      description:
        "Your happiness is our success. We go above and beyond to ensure every customer is completely satisfied with our work.",
    },
    {
      icon: Award,
      title: "Quality Work",
      description:
        "We take pride in delivering exceptional results every time. No shortcuts, no compromises—just quality workmanship.",
    },
    {
      icon: Users,
      title: "Local & Reliable",
      description:
        "As a local business, we're invested in our community. You can count on us to show up on time and get the job done right.",
    },
    {
      icon: MapPin,
      title: "Community Focused",
      description:
        "We're proud to serve Timonium and the surrounding Maryland areas, helping our neighbors maintain beautiful homes.",
    },
  ];

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-r from-[#1e3a8a] to-[#0ea5e9] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            About Altman's Pristine Power Washing
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto"
          >
            Your trusted local partner for professional power washing services
          </motion.p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a8a] mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                Altman's Pristine Power Washing started with a simple idea: provide
                honest, high-quality power washing services to homeowners in Timonium and
                the surrounding Maryland communities.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                As a small, locally-owned business, we understand the importance of trust
                and reliability. We're not a big corporation—we're your neighbors, and we
                treat every home as if it were our own.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Our commitment to attention to detail and customer satisfaction has helped
                us build lasting relationships with homeowners throughout the area. When
                you hire us, you're not just getting a service—you're supporting a local
                business that genuinely cares about the community.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1605018075968-b014b8d2e487?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzdWJ1cmJhbiUyMGhvbWV8ZW58MXx8fHwxNzc0MDI1NjAwfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Beautiful home in Timonium"
                className="rounded-lg shadow-xl w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a8a] mb-4">
              What We Stand For
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our values guide everything we do, from how we interact with customers to the
              quality of work we deliver.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-lg text-center"
              >
                <div className="bg-[#0ea5e9] text-white p-4 rounded-full w-fit mx-auto mb-4">
                  <value.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-[#1e3a8a] mb-3">{value.title}</h3>
                <p className="text-gray-700">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a8a] mb-6">
                Serving Timonium & Beyond
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                We proudly serve Timonium, Maryland and the surrounding areas including:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                {[
                  "Timonium",
                  "Towson",
                  "Cockeysville",
                  "Hunt Valley",
                  "Lutherville",
                  "Baltimore County",
                ].map((area, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 p-4 rounded-lg text-center font-semibold text-gray-700"
                  >
                    {area}
                  </div>
                ))}
              </div>
              <p className="text-lg text-gray-700 mb-8">
                Don't see your area listed? Give us a call! We may still be able to serve you.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-r from-[#1e3a8a] to-[#0ea5e9] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Us?</h2>
              <p className="text-xl mb-8">
                We're not just another power washing company. We're hardworking, detail-oriented,
                and committed to earning your trust with every job. When you choose Altman's
                Pristine Power Washing, you're choosing:
              </p>
              <ul className="text-lg space-y-3 mb-8 text-left max-w-2xl mx-auto">
                <li className="flex items-start gap-3">
                  <span className="text-[#0ea5e9] text-2xl">✓</span>
                  <span>A local business that cares about the community</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#0ea5e9] text-2xl">✓</span>
                  <span>Reliable service and on-time arrivals</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#0ea5e9] text-2xl">✓</span>
                  <span>Attention to detail in every project</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#0ea5e9] text-2xl">✓</span>
                  <span>Competitive, honest pricing with no hidden fees</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#0ea5e9] text-2xl">✓</span>
                  <span>Safe, effective cleaning methods</span>
                </li>
              </ul>
              <Link
                to="/contact"
                className="inline-block bg-white text-[#1e3a8a] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
              >
                Get Your Free Estimate
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

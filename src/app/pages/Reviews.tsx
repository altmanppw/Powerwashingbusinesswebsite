import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";
import { Link } from "react-router";

export function Reviews() {
  const reviews = [
    {
      name: "Sarah Johnson",
      location: "Timonium, MD",
      rating: 5,
      date: "March 2026",
      text: "Absolutely fantastic service! Our driveway looked brand new after they were done. The team was professional, on time, and the pricing was very fair. Highly recommend Altman's!",
      service: "Driveway Cleaning",
    },
    {
      name: "Michael Chen",
      location: "Towson, MD",
      rating: 5,
      date: "February 2026",
      text: "I was amazed at the transformation of our house exterior. They removed years of dirt and algae buildup that I didn't even realize was there. Great attention to detail and very reliable.",
      service: "House Washing",
    },
    {
      name: "Jennifer Martinez",
      location: "Cockeysville, MD",
      rating: 5,
      date: "January 2026",
      text: "Our deck looked terrible before they came out. Now it looks incredible! They were careful, thorough, and cleaned up everything when they were done. Couldn't be happier!",
      service: "Deck Cleaning",
    },
    {
      name: "Robert Williams",
      location: "Hunt Valley, MD",
      rating: 5,
      date: "December 2025",
      text: "As a local small business owner myself, I really appreciate the personal touch and quality work from Altman's. They treated my property with care and delivered outstanding results.",
      service: "Fence & Patio Cleaning",
    },
    {
      name: "Emily Thompson",
      location: "Lutherville, MD",
      rating: 5,
      date: "November 2025",
      text: "Very impressed with the professionalism and results. They answered all my questions and the estimate was transparent with no hidden fees. Will definitely use them again!",
      service: "Sidewalk Cleaning",
    },
    {
      name: "David Anderson",
      location: "Timonium, MD",
      rating: 5,
      date: "October 2025",
      text: "Best power washing service in the area! They showed up exactly when they said they would and did an exceptional job. My wife and I are thrilled with how clean everything looks.",
      service: "Complete Property Cleaning",
    },
  ];

  const overallStats = {
    averageRating: 5.0,
    totalReviews: reviews.length,
    fiveStarPercentage: 100,
  };

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
            Customer Reviews
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto"
          >
            See what our satisfied customers have to say about our work
          </motion.p>
        </div>
      </section>

      {/* Overall Rating Stats */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <div className="text-4xl font-bold text-[#0ea5e9] mb-2">
                  {overallStats.averageRating}
                </div>
                <div className="flex justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <div className="text-gray-600">Average Rating</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <div className="text-4xl font-bold text-[#0ea5e9] mb-2">
                  {overallStats.totalReviews}+
                </div>
                <div className="text-gray-600">Happy Customers</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <div className="text-4xl font-bold text-[#0ea5e9] mb-2">
                  {overallStats.fiveStarPercentage}%
                </div>
                <div className="text-gray-600">5-Star Reviews</div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews List */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-8">
              {reviews.map((review, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-lg shadow-lg relative"
                >
                  <Quote className="absolute top-4 right-4 w-12 h-12 text-[#0ea5e9] opacity-20" />
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-[#1e3a8a]">{review.name}</h3>
                      <p className="text-gray-600">{review.location}</p>
                    </div>
                    <div className="text-right">
                      <div className="flex gap-1 mb-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <p className="text-sm text-gray-500">{review.date}</p>
                    </div>
                  </div>
                  <p className="text-lg text-gray-700 mb-4 leading-relaxed">{review.text}</p>
                  <div className="inline-block bg-[#0ea5e9] bg-opacity-10 text-[#0ea5e9] px-3 py-1 rounded-full text-sm font-semibold">
                    {review.service}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Highlight */}
      <section className="py-20 bg-gradient-to-r from-[#1e3a8a] to-[#0ea5e9] text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <Quote className="w-16 h-16 mx-auto mb-6 opacity-50" />
            <p className="text-2xl md:text-3xl font-semibold mb-6 leading-relaxed">
              "The quality of work and attention to detail is what sets Altman's apart.
              They truly care about customer satisfaction."
            </p>
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-xl">— Local Timonium Homeowner</p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a8a] mb-6">
              Join Our Happy Customers
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Experience the same quality service and professionalism that earned us these
              5-star reviews. Get your free estimate today!
            </p>
            <Link
              to="/contact"
              className="inline-block bg-[#0ea5e9] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#0284c7] transition-colors"
            >
              Get Free Estimate
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

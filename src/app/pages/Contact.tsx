import { motion } from "motion/react";
import { Phone, Mail, MapPin, Clock, CheckCircle } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the form data to a backend
    setSubmitted(true);
    // Reset form after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", phone: "", email: "", message: "" });
    }, 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      value: "(410) 555-0123",
      link: "tel:410-555-0123",
    },
    {
      icon: Mail,
      title: "Email",
      value: "info@altmanspowerwashing.com",
      link: "mailto:info@altmanspowerwashing.com",
    },
    {
      icon: MapPin,
      title: "Service Area",
      value: "Timonium, MD & Surrounding Areas",
      link: null,
    },
    {
      icon: Clock,
      title: "Hours",
      value: "Monday - Saturday: 7am - 7pm",
      link: null,
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
            Get Your Free Estimate
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto"
          >
            Ready to transform your property? Contact us today for a free, no-obligation
            estimate
          </motion.p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-lg text-center"
              >
                <div className="bg-[#0ea5e9] text-white p-4 rounded-full w-fit mx-auto mb-4">
                  <info.icon className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-gray-700 mb-2">{info.title}</h3>
                {info.link ? (
                  <a
                    href={info.link}
                    className="text-[#1e3a8a] hover:text-[#0ea5e9] transition-colors"
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="text-gray-600">{info.value}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-[#1e3a8a] mb-6">
                Request a Free Quote
              </h2>
              <p className="text-gray-700 mb-6">
                Fill out the form below and we'll get back to you as soon as possible with
                a free estimate.
              </p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-50 border-2 border-green-500 rounded-lg p-8 text-center"
                >
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-green-700 mb-2">
                    Thank You!
                  </h3>
                  <p className="text-gray-700">
                    Your request has been received. We'll contact you shortly with your
                    free estimate!
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0ea5e9]"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0ea5e9]"
                      placeholder="(410) 555-0123"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0ea5e9]"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                      Tell Us About Your Project *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0ea5e9] resize-none"
                      placeholder="Please describe what you need cleaned (driveway, house, deck, etc.) and any other details..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#0ea5e9] text-white py-4 rounded-lg font-semibold text-lg hover:bg-[#0284c7] transition-colors"
                  >
                    Send Request
                  </button>
                  <p className="text-sm text-gray-600 text-center">
                    * Required fields. We typically respond within 24 hours.
                  </p>
                </form>
              )}
            </motion.div>

            {/* Why Choose Us */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-[#1e3a8a] mb-6">Why Choose Us?</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-[#0ea5e9] text-white p-3 rounded-full h-fit">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-[#1e3a8a] mb-2">
                      Free Estimates
                    </h3>
                    <p className="text-gray-700">
                      No obligation, no pressure. Get an honest, competitive quote for your
                      project completely free.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-[#0ea5e9] text-white p-3 rounded-full h-fit">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-[#1e3a8a] mb-2">
                      Fast Response Time
                    </h3>
                    <p className="text-gray-700">
                      We value your time. Expect a prompt response and quick scheduling for
                      your convenience.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-[#0ea5e9] text-white p-3 rounded-full h-fit">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-[#1e3a8a] mb-2">
                      Local & Trusted
                    </h3>
                    <p className="text-gray-700">
                      We're part of the Timonium community. Your neighbors trust us, and
                      we're here to earn your trust too.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-[#0ea5e9] text-white p-3 rounded-full h-fit">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-[#1e3a8a] mb-2">
                      Quality Guaranteed
                    </h3>
                    <p className="text-gray-700">
                      We stand behind our work. If you're not satisfied, we'll make it
                      right—that's our promise.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-[#1e3a8a] to-[#0ea5e9] text-white rounded-lg">
                <h3 className="text-xl font-bold mb-4">Prefer to Call?</h3>
                <p className="mb-4">
                  We're happy to discuss your project over the phone and answer any
                  questions you may have.
                </p>
                <a
                  href="tel:410-555-0123"
                  className="inline-flex items-center gap-2 bg-white text-[#1e3a8a] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  (410) 555-0123
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-[#1e3a8a] mb-6">
                Proudly Serving the Timonium Area
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                We provide professional power washing services throughout Timonium, MD and
                the surrounding communities including:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
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
                    className="bg-white p-4 rounded-lg shadow font-semibold text-gray-700"
                  >
                    {area}
                  </div>
                ))}
              </div>
              <p className="text-gray-700 mt-6">
                Not sure if we service your area? Give us a call—we'd love to help!
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

import { Link } from "react-router";
import { motion } from "motion/react";
import { Home, Square, Grid3x3, Fence, CheckCircle2 } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: Square,
      title: "Driveway & Sidewalk Cleaning",
      description:
        "Remove years of dirt, oil stains, and grime from your concrete surfaces. Our high-pressure washing restores driveways and sidewalks to like-new condition, improving curb appeal and safety.",
      benefits: [
        "Removes oil and grease stains",
        "Eliminates mold and mildew",
        "Improves safety by removing slippery buildup",
        "Extends surface lifespan",
      ],
      image: "https://images.unsplash.com/photo-1633677095081-492aad9530d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMGNvbmNyZXRlJTIwcGF0aW98ZW58MXx8fHwxNzc0MDI1NTk3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      icon: Home,
      title: "House Washing",
      description:
        "Give your home's exterior a fresh, clean look with our gentle yet effective house washing service. We safely remove dirt, algae, and environmental pollutants without damaging siding or paint.",
      benefits: [
        "Removes dirt, algae, and mildew",
        "Safe for all siding types",
        "Protects paint and exterior surfaces",
        "Boosts home value and appearance",
      ],
      image: "https://images.unsplash.com/photo-1769341026650-744661ffc6d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMHdoaXRlJTIwaG91c2UlMjBleHRlcmlvcnxlbnwxfHx8fDE3NzQwMjU1OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      icon: Grid3x3,
      title: "Deck & Patio Cleaning",
      description:
        "Restore the beauty of your outdoor living spaces. Our specialized cleaning removes embedded dirt, mold, and discoloration, preparing surfaces for staining or sealing if desired.",
      benefits: [
        "Removes deep-set dirt and stains",
        "Prevents wood rot and decay",
        "Prepares surface for staining/sealing",
        "Extends deck lifespan",
      ],
      image: "https://images.unsplash.com/photo-1722881445918-75ae564ffced?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kZW4lMjBkZWNrJTIwYmFja3lhcmR8ZW58MXx8fHwxNzc0MDI1NjAwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      icon: Fence,
      title: "Fence Cleaning",
      description:
        "Bring your fence back to life with our professional cleaning service. We remove dirt, algae, and weathering to restore your fence's original appearance and extend its life.",
      benefits: [
        "Removes algae and weathering",
        "Restores original color",
        "Prevents premature deterioration",
        "Prepares for staining or painting",
      ],
      image: "https://images.unsplash.com/photo-1769078382658-898cd4023f6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMHdvb2RlbiUyMGZlbmNlfGVufDF8fHx8MTc3NDAyNTU5N3ww&ixlib=rb-4.1.0&q=80&w=1080",
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
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto"
          >
            Professional power washing services for every part of your property.
            Safe, effective, and affordable.
          </motion.p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className={`grid md:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "md:order-2" : ""}>
                  <div className="bg-[#0ea5e9] text-white p-3 rounded-full w-fit mb-4">
                    <service.icon className="w-8 h-8" />
                  </div>
                  <h2 className="text-3xl font-bold text-[#1e3a8a] mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-gray-700 mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={index % 2 === 1 ? "md:order-1" : ""}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="rounded-lg shadow-xl w-full h-80 object-cover"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Safe Methods Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a8a] mb-6">
                Safe & Effective Cleaning Methods
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                We use professional-grade equipment and environmentally friendly cleaning
                solutions that are tough on dirt but gentle on your property. Our
                experienced team knows exactly the right pressure and techniques for each
                surface type.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                From delicate vinyl siding to sturdy concrete driveways, we adjust our
                methods to ensure the best results without causing any damage. Your
                satisfaction and the integrity of your property are our top priorities.
              </p>
              <Link
                to="/contact"
                className="inline-block bg-[#0ea5e9] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#0284c7] transition-colors"
              >
                Request a Free Quote
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

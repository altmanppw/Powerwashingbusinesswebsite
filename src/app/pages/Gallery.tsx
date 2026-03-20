import { motion } from "motion/react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Link } from "react-router";

export function Gallery() {
  const projects = [
    {
      title: "Driveway Restoration",
      before: "https://images.unsplash.com/photo-1591188185682-41f5c74781f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXJ0eSUyMGRyaXZld2F5JTIwY29uY3JldGV8ZW58MXx8fHwxNzc0MDI1NjAwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      after: "https://images.unsplash.com/photo-1633677095081-492aad9530d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMGNvbmNyZXRlJTIwcGF0aW98ZW58MXx8fHwxNzc0MDI1NTk3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      location: "Timonium, MD",
      description: "Removed years of oil stains and grime to reveal like-new concrete.",
    },
    {
      title: "Complete House Wash",
      before: "https://images.unsplash.com/photo-1605018075968-b014b8d2e487?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzdWJ1cmJhbiUyMGhvbWV8ZW58MXx8fHwxNzc0MDI1NjAwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      after: "https://images.unsplash.com/photo-1769341026650-744661ffc6d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMHdoaXRlJTIwaG91c2UlMjBleHRlcmlvcnxlbnwxfHx8fDE3NzQwMjU1OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      location: "Towson, MD",
      description: "Eliminated algae and dirt buildup for a bright, clean exterior.",
    },
    {
      title: "Deck Renewal",
      before: "https://images.unsplash.com/photo-1722881445918-75ae564ffced?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kZW4lMjBkZWNrJTIwYmFja3lhcmR8ZW58MXx8fHwxNzc0MDI1NjAwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      after: "https://images.unsplash.com/photo-1722881445918-75ae564ffced?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kZW4lMjBkZWNrJTIwYmFja3lhcmR8ZW58MXx8fHwxNzc0MDI1NjAwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      location: "Cockeysville, MD",
      description: "Deep cleaned and prepared for staining, extending deck life.",
    },
    {
      title: "Fence Transformation",
      before: "https://images.unsplash.com/photo-1769078382658-898cd4023f6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMHdvb2RlbiUyMGZlbmNlfGVufDF8fHx8MTc3NDAyNTU5N3ww&ixlib=rb-4.1.0&q=80&w=1080",
      after: "https://images.unsplash.com/photo-1769078382658-898cd4023f6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMHdvb2RlbiUyMGZlbmNlfGVufDF8fHx8MTc3NDAyNTU5N3ww&ixlib=rb-4.1.0&q=80&w=1080",
      location: "Hunt Valley, MD",
      description: "Restored natural wood color by removing algae and weathering.",
    },
    {
      title: "Patio Cleaning",
      before: "https://images.unsplash.com/photo-1633677095081-492aad9530d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMGNvbmNyZXRlJTIwcGF0aW98ZW58MXx8fHwxNzc0MDI1NTk3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      after: "https://images.unsplash.com/photo-1633677095081-492aad9530d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMGNvbmNyZXRlJTIwcGF0aW98ZW58MXx8fHwxNzc0MDI1NTk3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      location: "Lutherville, MD",
      description: "Made outdoor living space inviting again with thorough cleaning.",
    },
    {
      title: "Sidewalk Revival",
      before: "https://images.unsplash.com/photo-1591188185682-41f5c74781f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXJ0eSUyMGRyaXZld2F5JTIwY29uY3JldGV8ZW58MXx8fHwxNzc0MDI1NjAwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      after: "https://images.unsplash.com/photo-1633677095081-492aad9530d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMGNvbmNyZXRlJTIwcGF0aW98ZW58MXx8fHwxNzc0MDI1NTk3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      location: "Timonium, MD",
      description: "Improved curb appeal and safety with professional cleaning.",
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
            Before & After Gallery
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto"
          >
            See the dramatic transformations we've achieved for homeowners across Timonium
            and surrounding areas
          </motion.p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-12">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-xl overflow-hidden"
              >
                <div className="grid md:grid-cols-2">
                  {/* Before Image */}
                  <div className="relative">
                    <div className="absolute top-4 left-4 bg-red-500 text-white px-4 py-2 rounded-full font-semibold z-10">
                      Before
                    </div>
                    <ImageWithFallback
                      src={project.before}
                      alt={`${project.title} - Before`}
                      className="w-full h-80 object-cover"
                    />
                  </div>
                  {/* After Image */}
                  <div className="relative">
                    <div className="absolute top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-full font-semibold z-10">
                      After
                    </div>
                    <ImageWithFallback
                      src={project.after}
                      alt={`${project.title} - After`}
                      className="w-full h-80 object-cover"
                    />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#1e3a8a] mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-2">{project.location}</p>
                  <p className="text-lg text-gray-700">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
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
              Ready for Your Own Transformation?
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              These are just a few examples of the results we deliver. Your property could
              be our next success story!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-[#0ea5e9] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#0284c7] transition-colors"
              >
                Get Free Estimate
              </Link>
              <Link
                to="/services"
                className="bg-[#1e3a8a] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#0ea5e9] transition-colors"
              >
                View Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

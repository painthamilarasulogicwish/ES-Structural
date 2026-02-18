import { Building2, Factory, GraduationCap, Heart, Briefcase, Landmark } from 'lucide-react';
import Container from '../components/Container';

const Clients = () => {
  const clientCategories = [
    {
      icon: Factory,
      title: 'Industrial & Manufacturing',
      description: 'Leading automotive, pharmaceutical, and manufacturing companies',
    },
    {
      icon: Building2,
      title: 'Real Estate Developers',
      description: 'Premium developers of residential and commercial properties',
    },
    {
      icon: Briefcase,
      title: 'Architects & Consultants',
      description: 'Renowned architectural and engineering consulting firms',
    },
    {
      icon: GraduationCap,
      title: 'Educational Institutions',
      description: 'Universities, colleges, and educational infrastructure',
    },
    {
      icon: Heart,
      title: 'Healthcare Organizations',
      description: 'Hospitals, medical colleges, and healthcare facilities',
    },
    {
      icon: Landmark,
      title: 'Government & PSUs',
      description: 'Public sector undertakings and government infrastructure projects',
    },
  ];

  const clientLogos = [
    { name: 'Client 1', initial: 'AC' },
    { name: 'Client 2', initial: 'BD' },
    { name: 'Client 3', initial: 'CE' },
    { name: 'Client 4', initial: 'DF' },
    { name: 'Client 5', initial: 'EG' },
    { name: 'Client 6', initial: 'FH' },
    { name: 'Client 7', initial: 'GI' },
    { name: 'Client 8', initial: 'HJ' },
    { name: 'Client 9', initial: 'IK' },
    { name: 'Client 10', initial: 'JL' },
    { name: 'Client 11', initial: 'KM' },
    { name: 'Client 12', initial: 'LN' },
  ];

  const testimonials = [
    {
      quote: 'Exceptional structural engineering expertise and professional service. Their precast concrete design solutions helped us optimize our project timeline and costs significantly.',
      client: 'Leading Real Estate Developer',
      project: 'Commercial Complex, Bangalore',
    },
    {
      quote: 'The team demonstrated outstanding technical competence in handling our complex industrial facility. Their attention to detail and code compliance was exemplary.',
      client: 'Automotive Manufacturing Company',
      project: 'Manufacturing Plant, Chennai',
    },
    {
      quote: 'Professional, responsive, and highly skilled. They delivered innovative structural solutions that met all our requirements while maintaining budget efficiency.',
      client: 'Infrastructure Development Authority',
      project: 'Bridge Project, Mumbai',
    },
  ];

  return (
    <div>
      <section className="bg-primary-blue text-white py-20">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-5xl font-heading font-bold mb-6">
              Our Clients
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Trusted by leading organizations across industries for structural engineering excellence and 100% client satisfaction.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-primary-blue mb-4">
              Client Sectors
            </h2>
            <p className="text-lg text-steel-grey max-w-2xl mx-auto">
              We serve diverse industries with specialized structural engineering solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clientCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div key={index} className="bg-white rounded-lg p-8 shadow-sm hover:shadow-lg transition-shadow text-center">
                  <div className="w-16 h-16 bg-light-bg rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon size={32} className="text-primary-blue" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-primary-blue mb-3">
                    {category.title}
                  </h3>
                  <p className="text-steel-grey leading-relaxed">
                    {category.description}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="py-20 bg-light-bg">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-primary-blue mb-4">
              Our Happy Clients
            </h2>
            <p className="text-lg text-steel-grey max-w-2xl mx-auto">
              Trusted partnerships built on excellence, reliability, and results
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {clientLogos.map((client, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow flex items-center justify-center h-32">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-blue rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-white font-heading font-bold text-xl">{client.initial}</span>
                  </div>
                  <p className="text-steel-grey text-sm">{client.name}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-primary-blue mb-4">
              Client Testimonials
            </h2>
            <p className="text-lg text-steel-grey max-w-2xl mx-auto">
              What our clients say about working with us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-6">
                  <svg className="w-12 h-12 text-accent-green" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-steel-grey leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div className="border-t pt-4">
                  <p className="text-primary-blue font-heading font-semibold mb-1">
                    {testimonial.client}
                  </p>
                  <p className="text-steel-grey text-sm">{testimonial.project}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 bg-primary-blue text-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-5xl font-heading font-bold mb-2">500+</p>
              <p className="text-gray-200">Projects Delivered</p>
            </div>
            <div>
              <p className="text-5xl font-heading font-bold mb-2">200+</p>
              <p className="text-gray-200">Happy Clients</p>
            </div>
            <div>
              <p className="text-5xl font-heading font-bold mb-2">100%</p>
              <p className="text-gray-200">Client Satisfaction</p>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Clients;

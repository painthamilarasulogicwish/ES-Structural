import { Factory, Building2, GraduationCap, Heart, Warehouse, Network, Shield } from 'lucide-react';
import Container from '../components/Container';

const Expertise = () => {
  const industries = [
    {
      icon: Factory,
      title: 'Industrial Facilities',
      description: 'Manufacturing plants, warehouses, factories, and industrial sheds with specialized requirements for heavy equipment and material handling systems.',
      highlights: [
        'Automotive assembly plants',
        'Pharmaceutical facilities',
        'Food processing plants',
        'Logistics and distribution centers',
        'Heavy machinery manufacturing units',
      ],
      image: '/expertise-industrial.jpg',
    },
    {
      icon: Building2,
      title: 'Commercial Buildings',
      description: 'Office buildings, shopping complexes, hotels, and mixed-use developments requiring efficient structural systems and aesthetic considerations.',
      highlights: [
        'High-rise office towers',
        'Shopping malls and retail centers',
        'Hotels and hospitality projects',
        'IT parks and business centers',
        'Mixed-use developments',
      ],
      image: '/expertise-commercial.jpg',
    },
    {
      icon: GraduationCap,
      title: 'Educational Institutions',
      description: 'Schools, colleges, universities, and research facilities designed for functionality, safety, and long-term durability.',
      highlights: [
        'University campus buildings',
        'School infrastructure',
        'Research laboratories',
        'Library and auditorium structures',
        'Sports complexes and facilities',
      ],
      image: '/expertise-education.jpg',
    },
    {
      icon: Heart,
      title: 'Healthcare Facilities',
      description: 'Hospitals, clinics, and medical centers with stringent structural requirements for critical equipment and patient safety.',
      highlights: [
        'Multi-specialty hospitals',
        'Medical colleges and teaching hospitals',
        'Diagnostic and imaging centers',
        'Pharmaceutical research facilities',
        'Healthcare infrastructure',
      ],
      image: '/expertise-healthcare.jpg',
    },
    {
      icon: Warehouse,
      title: 'Residential & Parking Structures',
      description: 'Specialized expertise in precast concrete structures for residential buildings, parking facilities, and modular construction systems.',
      highlights: [
        'Multi-story residential buildings',
        'Multi-level parking structures',
        'Hollow core slabs spanning up to 14.5 meters',
        'Double-tee slabs for clear spans up to 25.5 meters',
        'Precast sandwich wall panels with integrated insulation',
      ],
      image: '/expertise-residential.jpg',
    },
    {
      icon: Network,
      title: 'Infrastructure Projects',
      description: 'Bridges, culverts, storm water drainage systems, and transportation infrastructure requiring advanced engineering solutions.',
      highlights: [
        'Highway bridges and flyovers',
        'Pedestrian and vehicular bridges',
        'Culverts and drainage structures',
        'Storm water drainage systems',
        'Elevated metro corridors and railway infrastructure',
      ],
      image: '/expertise-infrastructure.jpg',
    },
    {
      icon: Shield,
      title: 'Specialized Structures',
      description: 'Advanced engineering for unique structural challenges including gantry crane systems, ropeway installations, and security-critical facilities.',
      highlights: [
        'Gantry crane systems and heavy lifting structures',
        'Ropeway installations and cable-supported structures',
        'Blast-resistant buildings',
        'Security-critical facilities',
        'High-performance specialized structural systems',
      ],
      image: '/expertise-specialized.jpg',
    },
  ];

  const capabilities = [
    {
      title: 'Precast Concrete Technology',
      description: 'Deep specialization in precast construction enabling innovative solutions that optimize construction speed, quality, and cost-efficiency with spans up to 25.5 meters.',
    },
    {
      title: 'BIM & Shop Drawings',
      description: 'Building Information Modeling and fabrication-ready shop drawings with precise geometric specifications ensuring seamless manufacturing and construction coordination.',
    },
    {
      title: 'International Standards',
      description: 'Multi-code design expertise: ACI, BS, IS, ASCE, AISC, PCI, AWS, ASTM, and Eurocode standards ensuring compliance regardless of project location.',
    },
    {
      title: 'Complete Project Administration',
      description: 'End-to-end management from initial feasibility through design development, procurement support, construction coordination, to final handover.',
    },
  ];

  return (
    <div>
      <section className="bg-primary-blue text-white py-20">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-5xl font-heading font-bold mb-6">
              Expertise & Industries
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Pioneers in precast concrete technology and advanced structural systems. Deep specialization in BIM, shop drawings, and complete project delivery from concept to commissioning.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-primary-blue mb-4">
              Industries We Serve
            </h2>
            <p className="text-lg text-steel-grey max-w-2xl mx-auto">
              Comprehensive structural engineering expertise across multiple sectors
            </p>
          </div>

          <div className="space-y-20">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              const isEven = index % 2 === 0;

              return (
                <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center`}>
                  <div className={isEven ? 'lg:order-1' : 'lg:order-2'}>
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-16 h-16 bg-light-bg rounded-lg flex items-center justify-center">
                        <Icon size={32} className="text-primary-blue" />
                      </div>
                      <h3 className="text-3xl font-heading font-bold text-primary-blue">
                        {industry.title}
                      </h3>
                    </div>
                    <p className="text-steel-grey leading-relaxed mb-6">
                      {industry.description}
                    </p>
                    <div>
                      <h4 className="font-heading font-semibold text-primary-blue mb-4">Key Project Types:</h4>
                      <ul className="space-y-2">
                        {industry.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start space-x-3">
                            <div className="w-5 h-5 bg-accent-green rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                              <div className="w-2 h-2 bg-primary-text rounded-full"></div>
                            </div>
                            <span className="text-primary-text">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className={isEven ? 'lg:order-2' : 'lg:order-1'}>
                    <div className="relative rounded-lg overflow-hidden shadow-lg h-96">
                      <img
                        src={industry.image}
                        alt={industry.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
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
              Our Core Capabilities
            </h2>
            <p className="text-lg text-steel-grey max-w-2xl mx-auto">
              Comprehensive engineering capabilities that set us apart
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-2xl font-heading font-semibold text-primary-blue mb-4">
                  {capability.title}
                </h3>
                <p className="text-steel-grey leading-relaxed">
                  {capability.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="bg-primary-blue rounded-2xl p-12 text-white text-center">
            <h2 className="text-4xl font-heading font-bold mb-6">
              Global Project Exposure
            </h2>
            <p className="text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto mb-8">
              With projects successfully executed in Norway, Abu Dhabi, and across India, we bring proven capability in navigating diverse regulatory environments and international design codes. Our portfolio includes landmark projects such as Nalanda University and India's First Glass Bridge.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div>
                <p className="text-5xl font-heading font-bold mb-2">Norway</p>
                <p className="text-gray-200">Eurocode Standards</p>
              </div>
              <div>
                <p className="text-5xl font-heading font-bold mb-2">Abu Dhabi</p>
                <p className="text-gray-200">UAE Regulations</p>
              </div>
              <div>
                <p className="text-5xl font-heading font-bold mb-2">India</p>
                <p className="text-gray-200">Landmark Structures</p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Expertise;

import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Layers, Award, Users, CheckCircle2 } from 'lucide-react';
import Container from '../components/Container';
import Button from '../components/Button';
import Banner from '../components/Banner';
import ParallaxCard from '../components/ParallaxCard';
import ParallaxImage from '../components/ParallaxImage';
import ScrollReveal from '../components/ScrollReveal';
import FloatingElement from '../components/FloatingElement';

const Home = () => {
  const metrics = [
    { value: '15+', label: 'Years Experience', icon: Award },
    { value: '50+', label: 'Engineers', icon: Users },
    { value: '100%', label: 'Client Satisfaction', icon: CheckCircle2 },
  ];

  const services = [
    {
      title: 'Precast Concrete Design',
      description: 'Complete design solutions for precast elements including columns, beams, wall panels, hollow core slabs, and double-tee slabs',
          image: '/services/structural-design.jpg',
      icon: Layers,
    },
    {
      title: 'BIM & Shop Drawings',
      description: 'Building Information Modeling, Revit modeling, and fabrication-ready shop drawings for integrated project delivery',
        image: '/services/bim-modelling.jpg',
      icon: Building2,
    },
    {
      title: 'Complete Project Administration',
      description: 'End-to-end management from tendering and scheduling to construction coordination and final handover',
        image: '/services/project-management-and-scheduling.jpg',
      icon: Building2,
    },
  ];

  const featuredProjects = [
    {
      name: 'S3 Mall - 12-Story Commercial Complex',
      location: 'India',
      area: '12 floors with theatres',
      image: '/featured-mall.jpg',
    },
    {
      name: 'Nalanda University Library - Dome Structure',
      location: 'Bihar, India',
      area: '5 floors',
      image: '/featured-nalanda.jpg',
    },
    {
      name: 'India\'s First Glass Bridge',
      location: 'Kanyakumari, India',
      area: 'Landmark infrastructure',
      image: '/featured-bridge.jpg',
    },
  ];

  return (
    <div>
      <Banner />

      <section className="py-16 bg-light-bg">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {metrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <ScrollReveal key={index} animation="zoom" delay={index * 0.2}>
                  <FloatingElement duration={3} delay={index * 0.5} distance={8}>
                    <div className="bg-white p-8 rounded-lg text-center shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer group">
                      <Icon size={48} className="text-accent-green mx-auto mb-4 group-hover:scale-110 transition-transform" />
                      <h3 className="text-4xl font-heading font-bold text-primary-blue mb-2 group-hover:text-secondary-blue transition-colors">
                        {metric.value}
                      </h3>
                      <p className="text-steel-grey font-medium">{metric.label}</p>
                    </div>
                  </FloatingElement>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-heading font-bold text-primary-blue mb-4">
                Our Services
              </h2>
              <p className="text-lg text-steel-grey max-w-2xl mx-auto">
                From conceptual design to shop drawings, BIM modeling, and complete project administration
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <ScrollReveal key={index} animation="slide-up" delay={index * 0.15}>
                  <div className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow">
                  <ParallaxCard
                    src={service.image}
                    alt={service.title}
                    className="relative h-48"
                    intensity={12}
                  >
                    <div className="absolute inset-0 bg-primary-blue bg-opacity-40 group-hover:bg-opacity-30 transition-all"></div>
                    <Icon size={48} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white" />
                  </ParallaxCard>
                  <div className="p-6">
                    <h3 className="text-xl font-heading font-semibold text-primary-blue mb-3">
                      {service.title}
                    </h3>
                    <p className="text-steel-grey leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <Link to="/services" className="text-secondary-blue font-medium hover:text-primary-blue transition-colors inline-flex items-center">
                      Learn More
                      <ArrowRight size={16} className="ml-2" />
                    </Link>
                  </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button variant="primary" size="lg">
                View All Services
              </Button>
            </Link>
          </div>
        </Container>
      </section>

      <section className="py-20 bg-light-bg">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-heading font-bold text-primary-blue mb-4">
                Featured Projects
              </h2>
              <p className="text-lg text-steel-grey max-w-2xl mx-auto">
                Landmark structures including Nalanda University and India's First Glass Bridge
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <ScrollReveal key={index} animation="slide-up" delay={index * 0.15}>
                <div className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow">
                <ParallaxCard
                  src={project.image}
                  alt={project.name}
                  className="relative h-64"
                  intensity={15}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-blue to-transparent opacity-60"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-heading font-semibold mb-2">
                      {project.name}
                    </h3>
                    <p className="text-sm text-gray-200">{project.location}</p>
                  </div>
                </ParallaxCard>
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <span className="text-steel-grey text-sm">Built-up Area</span>
                    <span className="text-primary-blue font-semibold">{project.area}</span>
                  </div>
                </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/projects">
              <Button variant="primary" size="lg">
                View All Projects
              </Button>
            </Link>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal animation="slide-right">
              <div>
              <h2 className="text-4xl font-heading font-bold text-primary-blue mb-6">
                Our Vision & Mission
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-heading font-semibold text-secondary-blue mb-3">
                    Vision
                  </h3>
                  <p className="text-steel-grey leading-relaxed">
                    To be recognized globally as pioneers in precast concrete technology and advanced structural systems, delivering innovative engineering solutions that combine technical rigor with practical construction expertise.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-heading font-semibold text-secondary-blue mb-3">
                    Core Competency
                  </h3>
                  <p className="text-steel-grey leading-relaxed">
                    We provide integrated engineering services from conceptual design and detailed engineering to shop drawings, BIM modeling, and full project administration. Our portfolio includes landmark projects such as Nalanda University and India's first glass bridge in Kanyakumari.
                  </p>
                </div>
              </div>
              <div className="mt-8">
                <Link to="/about">
                  <Button variant="primary">
                    Learn More About Us
                  </Button>
                </Link>
              </div>
              </div>
            </ScrollReveal>
            <ScrollReveal animation="slide-left" delay={0.2}>
              <div className="relative rounded-lg shadow-lg overflow-hidden">
              <ParallaxImage
                src="/vision.jpg"
                alt="Vision"
                className="h-96 rounded-lg"
                speed={0.3}
              />
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Home;

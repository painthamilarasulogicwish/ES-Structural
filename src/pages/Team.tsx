import { Users, Award, Briefcase, Code2, ClipboardCheck, HardHat } from 'lucide-react';
import Container from '../components/Container';
import ParallaxImage from '../components/ParallaxImage';

const Team = () => {
  const departments = [
    {
      icon: Briefcase,
      title: 'Structural Engineers',
      count: '25+',
      description: 'Expert structural engineers with diverse experience in industrial, commercial, and infrastructure projects',
      color: 'bg-primary-blue',
    },
    {
      icon: Award,
      title: 'Project Managers',
      count: '8+',
      description: 'Experienced project managers ensuring timely delivery and seamless coordination',
      color: 'bg-secondary-blue',
    },
    {
      icon: Code2,
      title: 'Design Engineers',
      count: '12+',
      description: 'Skilled design engineers proficient in advanced analysis software and tools',
      color: 'bg-primary-blue',
    },
    {
      icon: ClipboardCheck,
      title: 'Quality Assurance',
      count: '5+',
      description: 'Dedicated QA team ensuring accuracy, compliance, and design excellence',
      color: 'bg-secondary-blue',
    },
  ];

  const roles = [
    {
      title: 'Senior Structural Engineers',
      responsibilities: [
        'Lead structural design and analysis',
        'Review and approve design calculations',
        'Technical guidance and mentorship',
        'Client coordination and presentations',
      ],
    },
    {
      title: 'Structural Designers',
      responsibilities: [
        ' 3D modeling and structural analysis',
        'Preparation of design calculations',
        'Coordination with architectural teams',
        'Software-based design optimization',
      ],
    },
    {
      title: 'Detailing Team',
      responsibilities: [
        'Structural detailing and reinforcement drawings',
        'Shop drawings for precast elements',
        'Construction documentation',
        'As-built drawing preparation',
      ],
    },
    {
      title: 'Project Coordinators',
      responsibilities: [
        'Project planning and scheduling',
        'Stakeholder communication',
        'Documentation and reporting',
        'Quality control and compliance',
      ],
    },
  ];

  return (
    <div>
      <section className="bg-primary-blue text-white py-20">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-5xl font-heading font-bold mb-6">
              Our Team
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              A dedicated team of 50+ structural engineering professionals committed to delivering excellence in every project.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-primary-blue mb-4">
              Team Strength & Expertise
            </h2>
            <p className="text-lg text-steel-grey max-w-2xl mx-auto">
              Our multidisciplinary team brings together diverse skills and extensive experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {departments.map((dept, index) => {
              const Icon = dept.icon;
              return (
                <div key={index} className="bg-white rounded-lg p-8 shadow-sm hover:shadow-lg transition-shadow text-center">
                  <div className={`w-16 h-16 ${dept.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <Icon size={32} className="text-white" />
                  </div>
                  <p className="text-4xl font-heading font-bold text-primary-blue mb-2">
                    {dept.count}
                  </p>
                  <h3 className="text-xl font-heading font-semibold text-primary-text mb-3">
                    {dept.title}
                  </h3>
                  <p className="text-steel-grey leading-relaxed">
                    {dept.description}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="py-20 bg-light-bg">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl font-heading font-bold text-primary-blue mb-6">
                Building Excellence Together
              </h2>
              <p className="text-steel-grey leading-relaxed mb-6">
                Our team is our greatest asset. We bring together experienced professionals with diverse backgrounds and specializations to deliver comprehensive structural engineering solutions.
              </p>
              <p className="text-steel-grey leading-relaxed mb-6">
                From concept to completion, our collaborative approach ensures that every project benefits from multiple perspectives, technical expertise, and a commitment to excellence.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <Users size={32} className="text-accent-green mb-3" />
                  <p className="text-3xl font-heading font-bold text-primary-blue mb-1">50+</p>
                  <p className="text-steel-grey">Team Members</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <Award size={32} className="text-accent-green mb-3" />
                  <p className="text-3xl font-heading font-bold text-primary-blue mb-1">15+</p>
                  <p className="text-steel-grey">Avg. Experience</p>
                </div>
              </div>
            </div>
            <div className="relative rounded-lg shadow-lg overflow-hidden">
              <ParallaxImage
                src="/team-collaboration.jpg"
                alt="Team Collaboration"
                className="h-96"
                speed={0.3}
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-primary-blue mb-4">
              Team Roles & Responsibilities
            </h2>
            <p className="text-lg text-steel-grey max-w-2xl mx-auto">
              Specialized roles working together for project success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {roles.map((role, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-2xl font-heading font-semibold text-primary-blue mb-6">
                  {role.title}
                </h3>
                <ul className="space-y-3">
                  {role.responsibilities.map((responsibility, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <div className="w-5 h-5 bg-accent-green rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 bg-primary-text rounded-full"></div>
                      </div>
                      <span className="text-primary-text">{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 bg-primary-blue text-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <HardHat size={64} className="mx-auto mb-6 text-accent-green" />
            <h2 className="text-4xl font-heading font-bold mb-6">
              Join Our Team
            </h2>
            <p className="text-xl text-gray-200 leading-relaxed mb-8">
              We are always looking for talented structural engineers, designers, and project managers to join our growing team. If you are passionate about structural engineering and want to work on challenging projects, we would love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:careers@esstructural.com" className="px-8 py-3 bg-accent-green text-primary-text font-semibold rounded-md hover:bg-opacity-90 transition-all inline-block">
                careers@esstructural.com
              </a>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Team;

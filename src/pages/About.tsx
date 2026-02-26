import { Award, Users, Target, CheckCircle2, Code2 } from 'lucide-react';
import Container from '../components/Container';
import ParallaxImage from '../components/ParallaxImage';

const About = () => {
    const values = [
        {
            icon: Target,
            title: 'Excellence',
            description: 'Committed to delivering the highest quality structural engineering solutions',
        },
        {
            icon: CheckCircle2,
            title: 'Integrity',
            description: 'Honest, transparent, and ethical in all our professional relationships',
        },
        {
            icon: Users,
            title: 'Collaboration',
            description: 'Working closely with clients, architects, and contractors for project success',
        },
        {
            icon: Award,
            title: 'Innovation',
            description: 'Embracing advanced tools and methodologies for efficient design solutions',
        },
    ];

    const tools = [
        'STAAD.Pro',
        'ETABS',
        // 'SAP2000',
        'SAFE',
        'AutoCAD',
        'Revit Structure',
        // 'Tekla Structures',
    ];

    const standards = [
        'ACI (American Concrete Institute)',
        'IS (Indian Standards)',
        'BS (British Standards)',
        'ASCE (American Society of Civil Engineers)',
        'AISC (American Institute of Steel Construction)',
        'PCI (Precast/Prestressed Concrete Institute)',
        'AWS (American Welding Society)',
        'ASTM Material Standards',
        'Eurocode Standards',
    ];

    return (
        <div>
            <section className="bg-primary-blue text-white py-20">
                <Container>
                    <div className="max-w-3xl">
                        <h1 className="text-5xl font-heading font-bold mb-6">
                            About Us
                        </h1>
                        <p className="text-xl text-gray-200 leading-relaxed">
                            A leading structural engineering consultancy firm dedicated to delivering innovative, efficient, and sustainable structural solutions since 2015.
                        </p>
                    </div>
                </Container>
            </section>

            <section className="py-20">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-heading font-bold text-primary-blue mb-6">
                                Our Story
                            </h2>
                            <div className="space-y-4 text-steel-grey leading-relaxed">
                                <p>
                                    Established in 2015, ES Structural Consultant is a specialized consultancy firm delivering world-class design solutions and comprehensive project management services to leading multinational corporations and premier clients across the globe.
                                </p>
                                <p>
                                    Our expertise encompasses the complete spectrum of structural engineering—from conceptual design and detailed engineering to shop drawings, BIM modeling, and full project administration. We serve clients internationally, with notable projects executed in Norway, Abu Dhabi, and India, consistently delivering solutions that meet diverse international design codes and standards.
                                </p>
                                <p>
                                    As pioneers in precast concrete technology and advanced structural systems, we provide integrated engineering services for industrial facilities, commercial complexes, educational institutions, healthcare facilities, residential developments, bridges, and specialized structures. Our portfolio includes landmark projects such as the Nalanda University buildings and India's first glass bridge in Kanyakumari. We combine technical rigor with practical construction expertise, ensuring that every project we undertake is structurally sound, economically efficient, and executed to the highest international standards.
                                </p>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="rounded-lg shadow-lg overflow-hidden">
                                <ParallaxImage
                                    src="/about-us.jpg"
                                    alt="About Us"
                                    className="h-96"
                                    speed={0.3}
                                />
                            </div>
                            <div className="absolute -bottom-6 -left-6 bg-accent-green p-8 rounded-lg shadow-xl z-10">
                                <p className="text-4xl font-heading font-bold text-primary-text">15+</p>
                                <p className="text-primary-text font-semibold">Years Experience</p>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            <section className="py-20 bg-light-bg">
                <Container>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-heading font-bold text-primary-blue mb-4">
                            Meet Our Founder
                        </h2>
                        <p className="text-lg text-steel-grey max-w-2xl mx-auto">
                            Leadership built on expertise, experience, and excellence
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
                        <div className="grid grid-cols-1 md:grid-cols-3">
                            <div className="bg-primary-blue p-8 flex flex-col items-center justify-center text-white">
                                <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center mb-4">
                                    <span className="text-primary-blue font-heading font-bold text-5xl">ES</span>
                                </div>
                                <h3 className="text-2xl font-heading font-bold mb-2">Engineering Excellence</h3>
                                <p className="text-gray-200 text-center">Leadership & Technical Direction</p>
                            </div>
                            <div className="md:col-span-2 p-8">
                                <div className="space-y-4 text-steel-grey leading-relaxed">
                                    <p>
                                        ES Structural Consultant is led by a Principal Structural Engineer with a Bachelor of Civil Engineering (2006) from Adhiparasakthi Engineering College, Anna University, and a Master's Degree in Structural Engineering from College of Engineering Guindy (CEG), Anna University, Chennai.
                                    </p>
                                    <p>
                                        With 15+ years of progressive experience and specialized expertise in precast concrete industry, our leadership has successfully delivered industrial buildings, factory complexes, bridges, infrastructure projects, and landmark structures including Nalanda University and India's First Glass Bridge in Kanyakumari. With extensive international project exposure across multiple regulatory frameworks in Norway, Abu Dhabi, and India, our technical proficiency and commitment to excellence have been the driving force behind the firm's success.
                                    </p>
                                    <div className="pt-4">
                                        <h4 className="font-heading font-semibold text-primary-blue mb-3">Key Expertise:</h4>
                                        <ul className="space-y-2">
                                            <li className="flex items-start space-x-3">
                                                <CheckCircle2 size={20} className="text-accent-green flex-shrink-0 mt-0.5" />
                                                <span>Precast Concrete Design & Engineering</span>
                                            </li>
                                            <li className="flex items-start space-x-3">
                                                <CheckCircle2 size={20} className="text-accent-green flex-shrink-0 mt-0.5" />
                                                <span>Industrial & Commercial Building Structures</span>
                                            </li>
                                            <li className="flex items-start space-x-3">
                                                <CheckCircle2 size={20} className="text-accent-green flex-shrink-0 mt-0.5" />
                                                <span>Bridge & Infrastructure Engineering</span>
                                            </li>
                                            <li className="flex items-start space-x-3">
                                                <CheckCircle2 size={20} className="text-accent-green flex-shrink-0 mt-0.5" />
                                                <span>Advanced Structural Analysis & Optimization</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            <section className="py-20">
                <Container>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-heading font-bold text-primary-blue mb-4">
                            Our Core Values
                        </h2>
                        <p className="text-lg text-steel-grey max-w-2xl mx-auto">
                            Principles that guide everything we do
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => {
                            const Icon = value.icon;
                            return (
                                <div key={index} className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                    <div className="w-16 h-16 bg-light-bg rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Icon size={32} className="text-primary-blue" />
                                    </div>
                                    <h3 className="text-xl font-heading font-semibold text-primary-blue mb-3">
                                        {value.title}
                                    </h3>
                                    <p className="text-steel-grey leading-relaxed">
                                        {value.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </Container>
            </section>

            <section className="py-20 bg-light-bg">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div>
                            <div className="flex items-center space-x-3 mb-6">
                                <Code2 size={32} className="text-primary-blue" />
                                <h2 className="text-3xl font-heading font-bold text-primary-blue">
                                    Tools & Software
                                </h2>
                            </div>
                            <p className="text-steel-grey mb-6 leading-relaxed">
                                We leverage industry-leading software and tools to deliver accurate, efficient, and optimized structural designs.
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                {tools.map((tool, index) => (
                                    <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm">
                                        <div className="w-2 h-2 bg-accent-green rounded-full"></div>
                                        <span className="text-primary-text font-medium">{tool}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center space-x-3 mb-6">
                                <Award size={32} className="text-primary-blue" />
                                <h2 className="text-3xl font-heading font-bold text-primary-blue">
                                    Standards & Codes
                                </h2>
                            </div>
                            <p className="text-steel-grey mb-6 leading-relaxed">
                                Our designs comply with international and national codes and standards, ensuring safety, quality, and regulatory compliance.
                            </p>
                            <div className="space-y-3">
                                {standards.map((standard, index) => (
                                    <div key={index} className="flex items-start space-x-3 bg-white p-4 rounded-lg shadow-sm">
                                        <CheckCircle2 size={20} className="text-accent-green flex-shrink-0 mt-0.5" />
                                        <span className="text-primary-text">{standard}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    );
};

export default About;

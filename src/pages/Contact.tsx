import { useState, FormEvent } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import Container from '../components/Container';
import Button from '../components/Button';
import ScrollReveal from '../components/ScrollReveal';
import FloatingElement from '../components/FloatingElement';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        projectType: '',
        message: '',
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
          details: ['+91 98658 03764'],
    },
    {
      icon: Mail,
      title: 'Email',
        details: ['prabhu@esstruc.com'],
    },
    {
      icon: MapPin,
      title: 'Address',
        details: ['B167, 12th Cross Street,', 'Jawahar Nagar, NGO A Colony,', 'Palayamkottai,','Tirunelveli - 627007'],
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: ['Monday - Friday: 9:00 AM - 6:00 PM', 'Saturday: 9:00 AM - 1:00 PM', 'Sunday: Closed'],
    },
  ];

  const projectTypes = [
    'Industrial Building',
    'Commercial Building',
    'Residential Building',
    'Infrastructure / Bridge',
    'Institutional Building',
    'Precast Concrete Project',
    'Other',
  ];

  return (
    <div>
      <section className="bg-primary-blue text-white py-20">
        <Container>
          <div className="max-w-4xl">
            <h1 className="text-5xl font-heading font-bold mb-4">
              CONTACT US
            </h1>
            <h2 className="text-3xl font-heading font-semibold mb-8 text-accent-green">
              Let's Build Something Exceptional Together
            </h2>
            <p className="text-xl text-gray-200 leading-relaxed mb-6">
              Partner with a consultancy that combines technical excellence with comprehensive project delivery expertise.
              Whether you're planning an industrial facility in Norway, a commercial complex in Abu Dhabi, or a landmark
              structure in India, we bring the specialized knowledge and project management capabilities to ensure success.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed italic border-l-4 border-accent-green pl-6">
              <strong className="text-white">Our Promise:</strong> Professional service, innovative solutions, and unwavering commitment to your project's success
              from first concept to final handover.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <ScrollReveal animation="slide-right" className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300">
                <h2 className="text-3xl font-heading font-bold text-primary-blue mb-6">
                  Send Us an Enquiry
                </h2>
                <p className="text-steel-grey mb-8">
                  Fill out the form below and our team will get back to you within 24 hours.
                </p>

                {submitted ? (
                  <div className="bg-accent-green bg-opacity-20 border border-accent-green rounded-lg p-8 text-center">
                    <div className="w-16 h-16 bg-accent-green rounded-full flex items-center justify-center mx-auto mb-4">
                      <Send size={32} className="text-primary-text" />
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-primary-blue mb-2">
                      Thank You!
                    </h3>
                    <p className="text-steel-grey">
                      Your enquiry has been submitted successfully. We will contact you soon.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-primary-text mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-accent-green focus:ring-4 focus:ring-accent-green/20 transition-all duration-300 hover:border-gray-300"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-primary-text mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-accent-green focus:ring-4 focus:ring-accent-green/20 transition-all duration-300 hover:border-gray-300"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-primary-text mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-accent-green focus:ring-4 focus:ring-accent-green/20 transition-all duration-300 hover:border-gray-300"
                          placeholder="+91 98765 43210"
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-primary-text mb-2">
                          Company / Organization
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-accent-green focus:ring-4 focus:ring-accent-green/20 transition-all duration-300 hover:border-gray-300"
                          placeholder="Company name"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="projectType" className="block text-sm font-medium text-primary-text mb-2">
                        Project Type *
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-accent-green focus:ring-4 focus:ring-accent-green/20 transition-all duration-300 hover:border-gray-300 cursor-pointer"
                      >
                        <option value="">Select project type</option>
                        {projectTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-primary-text mb-2">
                        Project Details / Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-accent-green focus:ring-4 focus:ring-accent-green/20 resize-none transition-all duration-300 hover:border-gray-300"
                        placeholder="Tell us about your project requirements..."
                      />
                    </div>

                    <Button type="submit" variant="accent" size="lg" className="w-full">
                      Submit Enquiry
                      <Send size={20} className="ml-2" />
                    </Button>
                  </form>
                )}
              </div>
            </ScrollReveal>

            <ScrollReveal animation="slide-left" delay={0.2}>
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div key={index} className="bg-gradient-to-br from-light-bg to-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer group">
                      <div className="flex items-start space-x-4">
                        <div className="w-14 h-14 bg-gradient-to-br from-primary-blue to-secondary-blue rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                          <Icon size={24} className="text-white" />
                        </div>
                        <div>
                          <h3 className="font-heading font-bold text-primary-blue mb-2 group-hover:text-accent-green transition-colors">
                            {info.title}
                          </h3>
                          {info.details.map((detail, idx) => (
                            <p key={idx} className="text-steel-grey text-sm leading-relaxed">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      <section className="py-20 bg-light-bg">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-4xl font-heading font-bold text-primary-blue mb-6">
                Why Choose Us?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                {[
                  { value: '15+', label: 'Years Experience', delay: 0 },
                  { value: '50+', label: 'Expert Engineers', delay: 0.1 },
                  { value: '100%', label: 'Client Satisfaction', delay: 0.2 },
                ].map((stat, index) => (
                  <ScrollReveal key={index} animation="zoom" delay={stat.delay}>
                    <FloatingElement duration={3} delay={index * 0.5} distance={8}>
                      <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer group">
                        <p className="text-5xl font-heading font-bold text-primary-blue mb-3 group-hover:text-accent-green transition-colors">
                          {stat.value}
                        </p>
                        <p className="text-steel-grey font-medium">{stat.label}</p>
                      </div>
                    </FloatingElement>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </div>
  );
};

export default Contact;

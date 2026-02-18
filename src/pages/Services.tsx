import { Link } from 'react-router-dom';
import { Building2, Layers, FileText, Box, Network, ClipboardCheck, Code2, Warehouse } from 'lucide-react';
import Container from '../components/Container';
import Button from '../components/Button';
import VideoBanner from '../components/VideoBanner';
import ParallaxImage from '../components/ParallaxImage';

const Services = () => {
	const services = [
		{
			title: 'Structural Design for Precast Construction',
			description: 'Complete design solutions for precast concrete elements delivering optimized construction speed, quality, and cost-efficiency.',
			features: [
				'Precast columns, beams, and wall panels',
				'Hollow core slabs spanning up to 14.5 meters',
				'Double-tee slabs for clear spans up to 25.5 meters',
				'Precast sandwich wall panels with integrated insulation',
				'Complex geometries including curved and sloping wall systems',
			],
			image: '/services/structural-design.jpg',
			icon: Layers,
		},
		{
			title: 'Steel Structure Design',
			description: 'Industrial buildings, warehouses, and complex steel frameworks engineered for strength, efficiency, and durability.',
			features: [
				'Industrial buildings and manufacturing facilities',
				'Large-span warehouses and distribution centers',
				'Complex steel frameworks and structural systems',
				'Steel connection design and detailing',
				'Mixed steel and concrete structural solutions',
			],
			image: '/services/site-coordination.jpg',
			icon: Warehouse,
		},
		{
			title: 'RCC & Steel Structure Design',
			description: 'Reinforced concrete and steel structural design for all building typologies including industrial facilities, warehouses, and complex steel frameworks.',
			features: [
				'Reinforced concrete structures for all building types',
				'Steel structure design for industrial buildings',
				'Hybrid structural systems',
				'Foundation and superstructure design',
				'Connection design and detailing',
			],
			image: '/services/structural-design.jpg',
			icon: Building2,
		},
		{
			title: 'Specialized Structural Systems',
			description: 'Advanced engineering solutions for unique architectural and structural challenges requiring specialized expertise.',
			features: [
				'GRC (Glass Reinforced Concrete) panel design and detailing',
				'Sloping precast wall systems and dome structures',
				'Cantilever-supported auditorium seating structures',
				'Long-span solutions exceeding 30 meters',
				'Column-free spaces and blast-resistant buildings',
			],
			image: '/services/structural-design.jpg',
			icon: Network,
		},
		{
			title: 'Detailed Shop Drawings & Documentation',
			description: 'Fabrication-ready shop drawings with precise geometric specifications ensuring seamless manufacturing and construction coordination.',
			features: [
				'Shop drawings for all precast elements',
				'Reinforcement detailing and bar bending schedules',
				'Connection design and reinforcement detailing',
				'Material specifications and procurement documentation',
				'As-built documentation',
			],
			image: '/services/shop-drawings.jpg',
			icon: FileText,
		},
		{
			title: 'BIM & Digital Engineering',
			description: 'Building Information Modeling services ensuring coordination excellence, clash-free designs, and optimized constructability.',
			features: [
				'Revit modeling for integrated project delivery',
				'3D visualization and clash detection',
				'Coordinated multi-discipline models',
				'Quantity takeoffs and material tracking',
				'Construction sequencing and 4D planning',
			],
			image: '/services/bim-modelling.jpg',
			icon: Box,
		},
		{
			title: 'Analysis & Design Software Expertise',
			description: 'Advanced structural analysis using industry-leading software with compliance to multiple international design codes and standards.',
			features: [
				'STAAD.Pro and ETABS for structural analysis',
				'ACI, BS, IS, ASCE, AISC standards compliance',
				'PCI handbook for precast concrete design',
				'AWS welding and ASTM material specifications',
				'Multi-code design for international projects',
			],
			image: '/services/estimation-and-costing.jpg',
			icon: Code2,
		},
		{
			title: 'Complete Project Administration',
			description: 'End-to-end project management from initial feasibility through design development, procurement support, construction coordination, to final handover.',
			features: [
				'Tendering support and bill of quantities preparation',
				'Project scheduling and critical path analysis',
				'Site coordination and technical support',
				'Quality assurance and construction monitoring',
				'Project handover and commissioning support',
			],
			image: '/services/project-management-and-scheduling.jpg',
			icon: ClipboardCheck,
		},
	];

	return (
		<div>
			<VideoBanner
				title="Our Services"
				subtitle="Comprehensive Engineering Solutions"
				description="From conceptual design to shop drawings, BIM modeling, and complete project administration. We manage the entire project lifecycle ensuring seamless execution and client satisfaction."
				fallbackImage="services/shop-drawings.jpg"
				stats={[
					{ label: 'Service Areas', value: '8+' },
					{ label: 'Design Codes', value: '8+' },
					{ label: 'Project Phases', value: '7' },
					{ label: 'Delivery Models', value: 'All' },
				]}
			/>

			<section className="py-20">
				<Container>
					<div className="space-y-16">
						{services.map((service, index) => {
							const Icon = service.icon;
							const isEven = index % 2 === 0;

							return (
								<div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
									<div className={isEven ? 'lg:order-1' : 'lg:order-2'}>
										<div className="flex items-center space-x-4 mb-6">
											<div className="w-16 h-16 bg-light-bg rounded-lg flex items-center justify-center">
												<Icon size={32} className="text-primary-blue" />
											</div>
											<h2 className="text-3xl font-heading font-bold text-primary-blue">
												{service.title}
											</h2>
										</div>
										<p className="text-steel-grey leading-relaxed mb-6">
											{service.description}
										</p>
										<ul className="space-y-3">
											{service.features.map((feature, idx) => (
												<li key={idx} className="flex items-start space-x-3">
													<div className="w-5 h-5 bg-accent-green rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
														<div className="w-2 h-2 bg-primary-text rounded-full"></div>
													</div>
													<span className="text-primary-text">{feature}</span>
												</li>
											))}
										</ul>
									</div>
									<div className={isEven ? 'lg:order-2' : 'lg:order-1'}>
										<div className="relative rounded-lg overflow-hidden shadow-lg">
											<ParallaxImage
												src={service.image}
												alt={service.title}
												className="h-96"
												speed={0.4}
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
					<div className="text-center max-w-3xl mx-auto">
						<h2 className="text-4xl font-heading font-bold text-primary-blue mb-6">
							Integrated Project Delivery
						</h2>
						<p className="text-lg text-steel-grey leading-relaxed mb-8">
							Unlike consultancies offering only design services, we provide complete project administration from initial tendering through final handover. Our integrated approach ensures seamless execution, reduced site conflicts, and accelerated construction schedules.
						</p>
						<Link to="/contact">
							<Button variant="accent" size="lg">
								Discuss Your Project
							</Button>
						</Link>
					</div>
				</Container>
			</section>
		</div>
	);
};

export default Services;

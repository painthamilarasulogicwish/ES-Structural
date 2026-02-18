import { useState, useMemo, useEffect, useRef } from 'react';
import { motion, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { MapPin, Ruler, Search } from 'lucide-react';
import Container from '../components/Container';
import VideoBanner from '../components/VideoBanner';
import ProjectDetailSlide from '../components/ProjectDetailSlide';
import projectsData from '../data/projects.json';

interface Category {
	id: string;
	name: string;
	slug: string;
}

interface Subcategory {
	id: string;
	name: string;
	slug: string;
}

interface ProjectDetails {
	client: string;
	duration: string;
	completionYear: string;
	scope: string;
}

interface Project {
	id: string;
	name: string;
	location: string;
	area: string;
	type: string;
	category: string;
	subcategory?: string;
	description: string;
	images: string[];
	details: ProjectDetails;
}

interface ProjectCardProps {
	project: Project;
	subcategoryName?: string;
	onClick: () => void;
	isExpanded: boolean;
	cardRef?: (node: HTMLDivElement | null) => void;
}

const ProjectCard = ({ project, subcategoryName, onClick, isExpanded, cardRef }: ProjectCardProps) => {
	const buttonRef = useRef<HTMLButtonElement>(null);
	const [isMobile, setIsMobile] = useState(false);

	const mouseX = useSpring(0, { damping: 20, stiffness: 100 });
	const mouseY = useSpring(0, { damping: 20, stiffness: 100 });

	const rotateX = useTransform(mouseY, [-0.5, 0.5], [3, -3]);
	const rotateY = useTransform(mouseX, [-0.5, 0.5], [-3, 3]);

	useEffect(() => {
		const checkMobile = () => {
			setIsMobile(window.innerWidth < 768);
		};

		checkMobile();
		window.addEventListener('resize', checkMobile);

		return () => window.removeEventListener('resize', checkMobile);
	}, []);

	const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
		if (isMobile || !buttonRef.current) return;

		const rect = buttonRef.current.getBoundingClientRect();
		const x = (e.clientX - rect.left) / rect.width - 0.5;
		const y = (e.clientY - rect.top) / rect.height - 0.5;

		mouseX.set(x);
		mouseY.set(y);
	};

	const handleMouseLeave = () => {
		mouseX.set(0);
		mouseY.set(0);
	};

	if (isExpanded) {
		return null;
	}

	return (
		<div ref={cardRef}>
			<motion.button
				ref={buttonRef}
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.5 }}
				whileHover={{ y: -8, scale: 1.02 }}
				style={isMobile ? {} : { rotateX, rotateY, transformStyle: 'preserve-3d' }}
				onMouseMove={handleMouseMove}
				onMouseLeave={handleMouseLeave}
				onClick={onClick}
				className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all text-left w-full"
			>
				<div className="relative h-64 overflow-hidden">
					<motion.img
						whileHover={{ scale: 1.1 }}
						transition={{ duration: 0.4 }}
						src={`/projects/${project.id}/${project.images[0]}`}
						alt={project.name}
						className="w-full h-full object-cover"
					/>

					<div className="absolute inset-0 bg-gradient-to-t from-primary-blue/80 via-primary-blue/30 to-transparent" />

					<div className="absolute top-4 right-4 z-10">
						<span className="px-3 py-1.5 bg-accent-green text-primary-text text-xs font-bold rounded-full shadow-lg">
							{project.type}
						</span>
					</div>

					{subcategoryName && (
						<div className="absolute top-4 left-4 z-10">
							<span className="px-3 py-1.5 bg-white/90 text-primary-text text-xs font-bold rounded-full shadow-md">
								{subcategoryName}
							</span>
						</div>
					)}

					{project.images.length > 1 && (
						<div className="absolute bottom-4 left-4 z-10">
							<div className="px-3 py-1.5 bg-white/90 rounded-full text-primary-text text-xs font-semibold shadow-md">
								{project.images.length} images
							</div>
						</div>
					)}

					<div className="absolute bottom-0 left-0 right-0 p-6 z-10">
						<motion.h3
							className="text-2xl font-heading font-bold text-white mb-2 leading-tight drop-shadow-lg"
							style={{ transform: 'translateZ(20px)' }}
						>
							{project.name}
						</motion.h3>
					</div>
				</div>

				<div className="p-6 space-y-4">
					<div className="flex items-start space-x-3">
						<div className="p-2 bg-blue-50 rounded-lg">
							<MapPin size={16} className="text-secondary-blue" />
						</div>
						<span className="text-primary-text text-sm mt-1">{project.location}</span>
					</div>

					<div className="flex items-start space-x-3">
						<div className="p-2 bg-green-50 rounded-lg">
							<Ruler size={16} className="text-accent-green" />
						</div>
						<span className="text-primary-text text-sm font-semibold mt-1">{project.area}</span>
					</div>

					<p className="text-steel-grey text-sm leading-relaxed line-clamp-2">
						{project.description}
					</p>

					<motion.p
						whileHover={{ x: 5 }}
						className="text-primary-blue text-sm font-bold mt-4 flex items-center group-hover:text-secondary-blue transition-colors"
					>
						View details <span className="ml-2">→</span>
					</motion.p>
				</div>

				<div className="absolute inset-0 bg-gradient-to-br from-accent-green/0 via-accent-green/0 to-accent-green/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
			</motion.button>
		</div>
	);
};

const Projects = () => {
	const [activeCategory, setActiveCategory] = useState<string>('all');
	const [activeSubcategory, setActiveSubcategory] = useState<string>('all');
	const [searchQuery, setSearchQuery] = useState('');
	const [expandedProjectId, setExpandedProjectId] = useState<string | null>(null);
	const [expandedProjectIndex, setExpandedProjectIndex] = useState<number>(-1);

	const detailSlideRef = useRef<HTMLDivElement>(null);
	const projectCardRefs = useRef<Map<string, HTMLDivElement>>(new Map());

	const categories = projectsData.categories as Category[];
	const subcategories = projectsData.subcategories as Record<string, Subcategory[]>;
	const projects = projectsData.projects as Project[];

	useEffect(() => {
		if (expandedProjectId && detailSlideRef.current) {
			setTimeout(() => {
				detailSlideRef.current?.scrollIntoView({
					behavior: 'smooth',
					block: 'center',
				});
			}, 100);
		}
	}, [expandedProjectId]);

	const selectedCategory = categories.find(c => c.slug === activeCategory);
	const availableSubcategories = selectedCategory
		? subcategories[selectedCategory.slug] || []
		: [];

	const filteredProjects = useMemo(() => {
		return projects.filter(project => {
			const matchesCategory = activeCategory === 'all' || project.category === activeCategory;
			const matchesSubcategory = activeSubcategory === 'all' || project.subcategory === activeSubcategory;
			const matchesSearch = searchQuery === '' ||
				project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
				project.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
				project.description.toLowerCase().includes(searchQuery.toLowerCase());

			return matchesCategory && matchesSubcategory && matchesSearch;
		});
	}, [projects, activeCategory, activeSubcategory, searchQuery]);

	const handleCategoryChange = (categorySlug: string) => {
		setActiveCategory(categorySlug);
		setActiveSubcategory('all');
	};

	const getSubcategoryName = (slug: string) => {
		for (const categorySubcategories of Object.values(subcategories)) {
			const subcategory = categorySubcategories.find(sc => sc.slug === slug);
			if (subcategory) return subcategory.name;
		}
		return undefined;
	};

	return (
		<div>
			<VideoBanner
				title="Our Projects"
				subtitle="Landmark Structures Showcasing Excellence"
				description="From Nalanda University's iconic dome structure to India's First Glass Bridge in Kanyakumari. International projects delivered in Norway, Abu Dhabi, and across India."
				fallbackImage="/projects/25/1.jpeg"
				stats={[
					{ label: 'Landmark Projects', value: '4+' },
					{ label: 'Countries', value: '3+' },
					{ label: 'Project Types', value: '8+' },
					{ label: 'Max Span', value: '30m' },
				]}
			/>

			<section className="py-8 bg-light-bg sticky top-10 z-40 border-b border-gray-200">
				<Container>
					<motion.div
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						className="mb-6 mt-4"
					>
						<div className="relative max-w-2xl">
							<Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-steel-grey" size={20} />
							<input
								type="text"
								placeholder="Search projects by name, location, or description..."
								value={searchQuery}
								onChange={(e) => setSearchQuery(e.target.value)}
								className="w-full pl-12 pr-4 py-3 rounded-xl bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent text-primary-text placeholder-steel-grey shadow-sm"
							/>
						</div>
					</motion.div>

					<div className="space-y-4">
						<div>
							<h3 className="text-sm font-semibold text-steel-grey mb-3">CATEGORIES</h3>
							<div className="flex flex-wrap gap-2">
								<motion.button
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
									onClick={() => handleCategoryChange('all')}
									className={`px-5 py-2 rounded-xl font-medium text-sm transition-all ${activeCategory === 'all'
											? 'bg-primary-blue text-white shadow-md'
											: 'bg-white text-primary-text hover:bg-gray-50 border border-gray-300'
										}`}
								>
									All Projects
								</motion.button>
								{categories.map((category) => (
									<motion.button
										key={category.id}
										whileHover={{ scale: 1.05 }}
										whileTap={{ scale: 0.95 }}
										onClick={() => handleCategoryChange(category.slug)}
										className={`px-5 py-2 rounded-xl font-medium text-sm transition-all ${activeCategory === category.slug
												? 'bg-primary-blue text-white shadow-md'
												: 'bg-white text-primary-text hover:bg-gray-50 border border-gray-300'
											}`}
									>
										{category.name}
									</motion.button>
								))}
							</div>
						</div>

						{availableSubcategories.length > 0 && (
							<div className="pt-2">
								<h3 className="text-sm font-semibold text-steel-grey mb-3">
									{selectedCategory?.name.toUpperCase()} SUBCATEGORIES
								</h3>
								<div className="flex flex-wrap gap-2">
									<motion.button
										whileHover={{ scale: 1.05 }}
										whileTap={{ scale: 0.95 }}
										onClick={() => setActiveSubcategory('all')}
										className={`px-4 py-1.5 rounded-lg font-medium text-sm transition-all ${activeSubcategory === 'all'
												? 'bg-secondary-blue text-white shadow-md'
												: 'bg-gray-50 text-primary-text border border-gray-300 hover:bg-gray-100'
											}`}
									>
										All
									</motion.button>
									{availableSubcategories.map((subcategory) => (
										<motion.button
											key={subcategory.id}
											whileHover={{ scale: 1.05 }}
											whileTap={{ scale: 0.95 }}
											onClick={() => setActiveSubcategory(subcategory.slug)}
											className={`px-4 py-1.5 rounded-lg font-medium text-sm transition-all ${activeSubcategory === subcategory.slug
													? 'bg-secondary-blue text-white shadow-md'
													: 'bg-gray-50 text-primary-text border border-gray-300 hover:bg-gray-100'
												}`}
										>
											{subcategory.name}
										</motion.button>
									))}
								</div>
							</div>
						)}
					</div>
				</Container>
			</section>

			<section className="py-16">
				<Container>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						className="mb-6"
					>
						<p className="text-steel-grey">
							Showing {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'}
							{activeSubcategory !== 'all' && (
								<span className="font-semibold text-primary-blue">
									{' '}in {availableSubcategories.find(sc => sc.slug === activeSubcategory)?.name}
								</span>
							)}
						</p>
					</motion.div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{filteredProjects.map((project, index) => {
							const isExpanded = expandedProjectId === project.id;
							const columnsPerRow = 3;
							const currentRow = Math.floor(expandedProjectIndex / columnsPerRow);
							const lastIndexInRow = (currentRow + 1) * columnsPerRow - 1;
							const isLastInExpandedRow = expandedProjectIndex !== -1 &&
								(index === lastIndexInRow || index === filteredProjects.length - 1);
							const showDetailSlide = isLastInExpandedRow && index >= expandedProjectIndex;

							return (
								<>
									<ProjectCard
										key={project.id}
										project={project}
										subcategoryName={project.subcategory ? getSubcategoryName(project.subcategory) : undefined}
										onClick={() => {
											setExpandedProjectId(project.id);
											setExpandedProjectIndex(index);
										}}
										isExpanded={isExpanded}
										cardRef={(node) => {
											if (node) {
												projectCardRefs.current.set(project.id, node);
											} else {
												projectCardRefs.current.delete(project.id);
											}
										}}
									/>
									{showDetailSlide && expandedProjectId && (
										<AnimatePresence>
											<ProjectDetailSlide
												key={`detail-${expandedProjectId}`}
												project={filteredProjects[expandedProjectIndex]}
												subcategoryName={
													filteredProjects[expandedProjectIndex].subcategory
														? getSubcategoryName(filteredProjects[expandedProjectIndex].subcategory)
														: undefined
												}
												slideRef={detailSlideRef}
												onClose={() => {
													const closedProjectId = expandedProjectId;
													setExpandedProjectId(null);
													setExpandedProjectIndex(-1);

													setTimeout(() => {
														const cardElement = projectCardRefs.current.get(closedProjectId);
														if (cardElement) {
															cardElement.scrollIntoView({
																behavior: 'smooth',
																block: 'center',
															});
														}
													}, 100);
												}}
											/>
										</AnimatePresence>
									)}
								</>
							);
						})}
					</div>

					{filteredProjects.length === 0 && (
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							className="text-center py-16 col-span-full"
						>
							<p className="text-primary-text text-lg">No projects found matching your criteria.</p>
							<p className="text-steel-grey text-sm mt-2">Try adjusting your search or filters.</p>
						</motion.div>
					)}
				</Container>
			</section>
		</div>
	);
};

export default Projects;

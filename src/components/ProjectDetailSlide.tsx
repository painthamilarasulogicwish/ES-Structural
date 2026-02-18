import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, MapPin, Ruler, Calendar, Clock, User } from 'lucide-react';

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

interface ProjectDetailSlideProps {
	project: Project;
	subcategoryName?: string;
	onClose: () => void;
	slideRef?: React.RefObject<HTMLDivElement>;
}

const ProjectDetailSlide = ({ project, subcategoryName, onClose, slideRef }: ProjectDetailSlideProps) => {
	const [currentSlide, setCurrentSlide] = useState(0);
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	const slides = [
		{
			id: 'images',
			title: 'Gallery',
			content: (
				<div className="space-y-6">
					<div>
						<div className="flex flex-wrap gap-3 mb-6">
							<h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-blue mb-4 leading-tight">
								{project.name}

								<span className="px-4 py-2 ml-4 bg-accent-green text-primary-text text-sm font-bold rounded-full shadow-md">
									{project.type}
								</span>
								{subcategoryName && (
									<span className="px-4 py-2 bg-secondary-blue text-white text-sm font-bold rounded-full shadow-md">
										{subcategoryName}
									</span>
								)}
							</h2>
						</div>

						<p className="text-steel-grey text-base md:text-lg leading-relaxed">
							{project.description}
						</p>
					</div>
					<div className="relative h-[400px] bg-gray-100 rounded-xl overflow-hidden group">
						<motion.img
							key={currentImageIndex}
							initial={{ opacity: 0, scale: 1.05 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.5 }}
							src={`/projects/${project.id}/${project.images[currentImageIndex]}`}
							alt={`${project.name} - Image ${currentImageIndex + 1}`}
							className="w-full h-full object-cover"
						/>

						{project.images.length > 1 && (
							<>
								<motion.button
									whileHover={{ scale: 1.1, x: -5 }}
									whileTap={{ scale: 0.9 }}
									onClick={() => setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length)}
									className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-colors opacity-0 group-hover:opacity-100"
								>
									<ChevronLeft size={20} className="text-primary-text" />
								</motion.button>
								<motion.button
									whileHover={{ scale: 1.1, x: 5 }}
									whileTap={{ scale: 0.9 }}
									onClick={() => setCurrentImageIndex((prev) => (prev + 1) % project.images.length)}
									className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-colors opacity-0 group-hover:opacity-100"
								>
									<ChevronRight size={20} className="text-primary-text" />
								</motion.button>

								<div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
									{project.images.map((_, index) => (
										<button
											key={index}
											onClick={() => setCurrentImageIndex(index)}
											className={`h-2 rounded-full transition-all ${index === currentImageIndex
												? 'bg-white w-8 shadow-lg'
												: 'bg-white/60 hover:bg-white/80 w-2'
												}`}
										/>
									))}
								</div>
							</>
						)}
					</div>

					{project.images.length > 1 && (
						<div className="grid grid-cols-3 md:grid-cols-6 gap-2">
							{project.images.map((image, index) => (
								<button
									key={index}
									onClick={() => setCurrentImageIndex(index)}
									className={`relative aspect-video rounded-lg overflow-hidden transition-all ${index === currentImageIndex
										? 'ring-2 ring-primary-blue'
										: 'opacity-60 hover:opacity-100'
										}`}
								>
									<img
										src={`/projects/${project.id}/${image}`}
										alt={`${project.name} thumbnail ${index + 1}`}
										className="w-full h-full object-cover"
									/>
								</button>
							))}
						</div>
					)}
				</div>
			),
		},
		{
			id: 'overview',
			title: 'Overview',
			content: (
				<div className="space-y-6">
					<div>
						<div className="flex flex-wrap gap-3 mb-6">
							<h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-blue mb-4 leading-tight">
								{project.name}

								<span className="px-4 py-2 ml-4 bg-accent-green text-primary-text text-sm font-bold rounded-full shadow-md">
									{project.type}
								</span>
								{subcategoryName && (
									<span className="px-4 py-2 bg-secondary-blue text-white text-sm font-bold rounded-full shadow-md">
										{subcategoryName}
									</span>
								)}
							</h2>
						</div>

						<p className="text-steel-grey text-base md:text-lg leading-relaxed">
							{project.description}
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						<div className="flex items-start space-x-3 p-4 bg-blue-50 rounded-xl">
							<div className="p-2 bg-secondary-blue/20 rounded-lg">
								<MapPin size={18} className="text-secondary-blue" />
							</div>
							<div>
								<p className="text-xs text-steel-grey mb-1">Location</p>
								<p className="text-primary-text font-semibold text-sm">{project.location}</p>
							</div>
						</div>

						<div className="flex items-start space-x-3 p-4 bg-green-50 rounded-xl">
							<div className="p-2 bg-accent-green/20 rounded-lg">
								<Ruler size={18} className="text-accent-green" />
							</div>
							<div>
								<p className="text-xs text-steel-grey mb-1">Project Area</p>
								<p className="text-primary-text font-semibold text-sm">{project.area}</p>
							</div>
						</div>

						<div className="flex items-start space-x-3 p-4 bg-blue-50 rounded-xl">
							<div className="p-2 bg-secondary-blue/20 rounded-lg">
								<Calendar size={18} className="text-secondary-blue" />
							</div>
							<div>
								<p className="text-xs text-steel-grey mb-1">Completion Year</p>
								<p className="text-primary-text font-semibold text-sm">{project.details.completionYear}</p>
							</div>
						</div>

						<div className="flex items-start space-x-3 p-4 bg-green-50 rounded-xl">
							<div className="p-2 bg-accent-green/20 rounded-lg">
								<Clock size={18} className="text-accent-green" />
							</div>
							<div>
								<p className="text-xs text-steel-grey mb-1">Project Duration</p>
								<p className="text-primary-text font-semibold text-sm">{project.details.duration}</p>
							</div>
						</div>
					</div>
				</div>
			),
		},

		{
			id: 'details',
			title: 'Project Details',
			content: (
				<div className="space-y-6">
					<div>
						<div className="flex flex-wrap gap-3 mb-6">
							<h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-blue mb-4 leading-tight">
								{project.name}

								<span className="px-4 py-2 ml-4 bg-accent-green text-primary-text text-sm font-bold rounded-full shadow-md">
									{project.type}
								</span>
								{subcategoryName && (
									<span className="px-4 py-2 bg-secondary-blue text-white text-sm font-bold rounded-full shadow-md">
										{subcategoryName}
									</span>
								)}
							</h2>
						</div>

						<p className="text-steel-grey text-base md:text-lg leading-relaxed">
							{project.description}
						</p>
					</div>
					<div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-blue-100">
						<div className="flex items-start space-x-3 mb-4">
							<div className="p-2 bg-secondary-blue/20 rounded-lg">
								<User size={20} className="text-secondary-blue" />
							</div>
							<h3 className="text-xl font-semibold text-primary-blue mt-1">Client</h3>
						</div>
						<p className="text-steel-grey ml-11 text-base">{project.details.client}</p>
					</div>

					<div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-xl border border-green-100">
						<h3 className="text-xl font-semibold text-primary-blue mb-4">Scope of Work</h3>
						<p className="text-steel-grey text-base leading-relaxed">{project.details.scope}</p>
					</div>
				</div>
			),
		},
	];

	const nextSlide = () => {
		setCurrentSlide((prev) => (prev + 1) % slides.length);
	};

	const prevSlide = () => {
		setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
	};

	return (
		<motion.div
			ref={slideRef}
			initial={{ opacity: 0, height: 0 }}
			animate={{ opacity: 1, height: 'auto' }}
			exit={{ opacity: 0, height: 0 }}
			transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
			className="col-span-full overflow-hidden"
		>
			<div className="bg-white rounded-xl shadow-2xl border border-gray-200">
				<div className="relative p-6 md:p-8">
					<motion.button
						whileHover={{ scale: 1.1, rotate: 90 }}
						whileTap={{ scale: 0.9 }}
						onClick={onClose}
						className="absolute top-4 right-4 z-10 p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
					>
						<X size={20} className="text-primary-text" />
					</motion.button>

					<div className="mb-6">
						<div className="flex gap-2 mb-6 overflow-x-auto pb-2">
							{slides.map((slide, index) => (
								<button
									key={slide.id}
									onClick={() => setCurrentSlide(index)}
									className={`px-4 py-2 rounded-lg font-medium text-sm whitespace-nowrap transition-all ${currentSlide === index
										? 'bg-primary-blue text-white shadow-md'
										: 'bg-gray-100 text-steel-grey hover:bg-gray-200'
										}`}
								>
									{slide.title}
								</button>
							))}
						</div>

						<div className="relative min-h-[450px]">
							<AnimatePresence mode="wait">
								<motion.div
									key={currentSlide}
									initial={{ opacity: 0, x: 20 }}
									animate={{ opacity: 1, x: 0 }}
									exit={{ opacity: 0, x: -20 }}
									transition={{ duration: 0.3 }}
								>
									{slides[currentSlide].content}
								</motion.div>
							</AnimatePresence>
						</div>

						<div className="flex items-center justify-between mt-6 pt-6 border-t border-gray-200">
							<motion.button
								whileHover={{ scale: 1.05, x: -2 }}
								whileTap={{ scale: 0.95 }}
								onClick={prevSlide}
								disabled={currentSlide === 0}
								className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg transition-colors font-medium text-sm"
							>
								<ChevronLeft size={18} />
								Previous
							</motion.button>

							<div className="flex gap-1">
								{slides.map((_, index) => (
									<button
										key={index}
										onClick={() => setCurrentSlide(index)}
										className={`h-2 rounded-full transition-all ${index === currentSlide
											? 'bg-primary-blue w-8'
											: 'bg-gray-300 w-2 hover:bg-gray-400'
											}`}
									/>
								))}
							</div>

							<motion.button
								whileHover={{ scale: 1.05, x: 2 }}
								whileTap={{ scale: 0.95 }}
								onClick={nextSlide}
								disabled={currentSlide === slides.length - 1}
								className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg transition-colors font-medium text-sm"
							>
								Next
								<ChevronRight size={18} />
							</motion.button>
						</div>
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default ProjectDetailSlide;

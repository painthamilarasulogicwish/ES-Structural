import { useState, useEffect } from 'react';
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
	const [isHovered, setIsHovered] = useState(false);


	useEffect(() => {
		if (currentSlide !== 0) return;
		if (!project?.images || project.images.length <= 1) return;
		if (isHovered) return;

		const interval = setInterval(() => {
			setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
		}, 2000);

		return () => clearInterval(interval);
	}, [project, isHovered, currentSlide]);


	useEffect(() => {
		setCurrentImageIndex(0);
	}, [project]);

	const slides = [
		{
			id: 'images',
			title: 'Gallery',
			content: (
				<div className="space-y-6">
					<div>
						<h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-blue mb-4 leading-tight">
							{project.name}
							<span className="px-4 py-2 ml-4 bg-accent-green text-primary-text text-sm font-bold rounded-full shadow-md">
								{project.type}
							</span>
							{subcategoryName && (
								<span className="px-4 py-2 ml-2 bg-secondary-blue text-white text-sm font-bold rounded-full shadow-md">
									{subcategoryName}
								</span>
							)}
						</h2>

						<p className="text-steel-grey text-base md:text-lg leading-relaxed">
							{project.description}
						</p>
					</div>


					<div
						className="relative h-[400px] bg-gray-100 rounded-xl overflow-hidden group"
						onMouseEnter={() => setIsHovered(true)}
						onMouseLeave={() => setIsHovered(false)}
					>
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
								{/* Left Arrow */}
								<motion.button
									whileHover={{ scale: 1.1 }}
									whileTap={{ scale: 0.9 }}
									onClick={() =>
										setCurrentImageIndex(
											(prev) => (prev - 1 + project.images.length) % project.images.length
										)
									}
									className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/90 rounded-full shadow-lg opacity-0 group-hover:opacity-100"
								>
									<ChevronLeft size={20} />
								</motion.button>

								{/* Right Arrow */}
								<motion.button
									whileHover={{ scale: 1.1 }}
									whileTap={{ scale: 0.9 }}
									onClick={() =>
										setCurrentImageIndex(
											(prev) => (prev + 1) % project.images.length
										)
									}
									className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/90 rounded-full shadow-lg opacity-0 group-hover:opacity-100"
								>
									<ChevronRight size={20} />
								</motion.button>

								{/* Dots */}
								<div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
									{project.images.map((_, index) => (
										<button
											key={index}
											onClick={() => setCurrentImageIndex(index)}
											className={`h-2 rounded-full transition-all ${index === currentImageIndex
													? 'bg-white w-8'
													: 'bg-white/60 w-2'
												}`}
										/>
									))}
								</div>
							</>
						)}
					</div>

					{/* Thumbnails */}
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
	];

	return (
		<motion.div
			ref={slideRef}
			initial={{ opacity: 0, height: 0 }}
			animate={{ opacity: 1, height: 'auto' }}
			exit={{ opacity: 0, height: 0 }}
			transition={{ duration: 0.4 }}
			className="col-span-full overflow-hidden"
		>
			<div className="bg-white rounded-xl shadow-2xl border border-gray-200 p-6 md:p-8">
				<motion.button
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.9 }}
					onClick={onClose}
					className="absolute top-4 right-4 p-2 bg-gray-100 rounded-full"
				>
					<X size={20} />
				</motion.button>

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
		</motion.div>
	);
};

export default ProjectDetailSlide;
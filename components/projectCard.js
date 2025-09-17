import Image from 'next/image';
import Link from 'next/link';

export default function ProjectCard({ project }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative bg-gray-200 h-48">

      </div>
      <div className="p-6">
        <h3 className="text-xl text-gray-500 font-semibold mb-2">{project.titre}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        
        {project.technologies && (
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span 
                  key={index} 
                  className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
        
        <Link 
          href={project.lien} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white font-medium py-2 px-4 rounded hover:bg-blue-700 transition-colors"
        >
          Voir le projet
        </Link>
      </div>
    </div>
  );
}
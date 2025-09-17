import Image from 'next/image';
import Link from 'next/link';

async function getRandomProject() {
  // Dans une application réelle, vous pourriez récupérer un projet mis en avant
  // ici, nous récupérons juste le premier projet de notre API
  const response = await fetch('http://localhost:3000/api/projets', { 
    cache: 'no-store' 
  });
  const projects = await response.json();
  return projects[0]; // Retourne le premier projet
}

export default async function Home() {
  const featuredProject = await getRandomProject();

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white">
        <div className="container mx-auto px-6 py-24 md:py-32">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Baptiste Kerroué
              </h1>
              <h2 className="text-2xl md:text-3xl mb-6">
                Développeur Web Full-Stack
              </h2>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link 
                  href="/projects" 
                  className="bg-white text-blue-900 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-colors"
                >
                  Voir mes projets
                </Link>
                <Link 
                  href="/contact" 
                  className="bg-transparent hover:bg-blue-800 border border-white font-semibold py-3 px-6 rounded-lg transition-colors"
                >
                  Me contacter
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Projet mis en avant */}
      {featuredProject && (
        <section className="py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Projet en vedette</h2>
            
            <div className="flex flex-col md:flex-row items-center justify-center bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="md:w-1/2 p-8">
                <h3 className="text-gray-600 text-2xl font-bold mb-4">{featuredProject.titre}</h3>
                <p className="text-gray-600 mb-6">{featuredProject.description}</p>
                
                {featuredProject.technologies && (
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {featuredProject.technologies.map((tech, index) => (
                        <span 
                          key={index} 
                          className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                <div className="flex space-x-4">
                  <Link 
                    href={featuredProject.lien} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Voir le projet
                  </Link>
                  <Link 
                    href="/projects" 
                    className="border border-blue-600 text-blue-600 font-semibold py-2 px-6 rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    Tous les projets
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}


    </>
  );
}
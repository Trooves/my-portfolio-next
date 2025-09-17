import ProjectCard from '@/components/projectCard';

// Fonction pour récupérer les projets de notre API locale
async function getProjects() {
  const res = await fetch('http://localhost:3000/api/projets', { 
    cache: 'no-store'
  });
  
  if (!res.ok) {
    throw new Error('Impossible de récupérer les projets');
  }
  
  return res.json();
}

export default async function Projects() {
  const projects = await getProjects();
  
  return (
    <>
      {/* Header */}
      <section className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">Mes Projets</h1>
        </div>
      </section>
      
      {/* Liste des projets */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          
          {projects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">Aucun projet trouvé.</p>
            </div>
          )}
        </div>
      </section>

    </>
  );
}
import Image from 'next/image';

// Cette fonction simule la récupération de données à partir d'une API ou d'une base de données
// Elle est exécutée côté serveur, ce qui est parfait pour des données statiques
async function getAboutData() {
  return {
    name: "Baptiste Kerroué",
    title: "Développeur Web Full-Stack",
    description: `
      Avec plus de 3 ans d'expérience dans le développement web, 
      je suis passionné par la création d'applications web esthétiques.
      Mon objectif est de créer des expériences utilisateur agréables 
      en utilisant les technologies web modernes.
    `,
    longDescription: `
      Mes compétences techniques incluent une maîtrise approfondie des technologies front-end telles que React,
      ainsi que des connaissances solides en back-end avec Node.js et diverses bases de données.
      Je suis également familier avec les méthodologies agiles et les outils de collaboration comme Git.

      En dehors du code, je m'intéresse à la conception UX/UI, à l'accessibilité web, et je reste constamment
      à jour sur les dernières tendances et évolutions du domaine.
    `,
    skills: [
      { category: "Front-end", items: ["React", "Next.js", "HTML5/CSS3", "Tailwind CSS"] },
      { category: "Back-end", items: ["Node.js", "MySQL"] },
      { category: "Outils", items: ["Git", "Figma", "Procreate"] }
    ],
    education: [
      {
        degree: "License DEUST",
        institution: "CNAM Paris",
        year: "2022",
        description: "Spécialité Informatique"
      },
      {
        degree: "Diplôme d'ingénieur",
        institution: "CNAM Paris",
        year: "2024 - Présent",
        description: "Spécialité informatique"
      }
    ],
    experience: [
      {
        position: "Développeur Web Full-Stack",
        company: "Institut Adios",
        period: "2023 - 2024",
        description: "Développement d'applications web avec Wordpress et remise aux normes de technologies existantes"
      },
      {
        position: "Développeur Web Full-Stack",
        company: "Inseparables Studio",
        period: "2022 - 2023",
        description: "Création depuis scratch d'un site d'E-Commerce en React"
      }
    ]
  };
}

export const metadata = {
  title: 'À propos | Baptiste Kerroué Portfolio',
  description: 'En savoir plus sur Baptiste Kerroué, développeur web full-stack',
};

export default async function About() {
  const aboutData = await getAboutData();
  
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 md:pl-12">
              <h1 className="text-4xl text-gray-500 font-bold mb-4">{aboutData.name}</h1>
              <h2 className="text-2xl text-gray-600 mb-6">{aboutData.title}</h2>
              <p className="text-lg text-gray-700 mb-6">
                {aboutData.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bio détaillée */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">Mon parcours</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-400 whitespace-pre-line">
              {aboutData.longDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Compétences */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-gray-700 text-3xl font-bold mb-12 text-center">Mes compétences</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {aboutData.skills.map((skillGroup, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-gray-700 text-xl font-semibold mb-4">{skillGroup.category}</h3>
                <ul className="text-gray-500 space-y-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <li key={skillIndex} className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expérience professionnelle */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Expérience professionnelle</h2>
          
          <div className="max-w-4xl mx-auto">
            {aboutData.experience.map((job, index) => (
              <div key={index} className="mb-12 relative pl-8 border-l-2 border-blue-500">
                <span className="absolute left-0 top-0 transform -translate-x-1/2 w-5 h-5 bg-blue-500 rounded-full"></span>
                <h3 className="text-xl font-bold">{job.position}</h3>
                <p className="text-blue-600 font-medium">{job.company}</p>
                <p className="text-gray-500 mb-4">{job.period}</p>
                <p className="text-gray-400">{job.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formation */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-gray-500 text-3xl font-bold mb-12 text-center">Formation</h2>
          
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {aboutData.education.map((edu, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-gray-500 text-xl font-bold mb-2">{edu.degree}</h3>
                <p className="text-blue-600 font-medium">{edu.institution}</p>
                <p className="text-gray-600 mb-4">{edu.year}</p>
                <p className="text-gray-700">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
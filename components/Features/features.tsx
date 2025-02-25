const features = [
  { 
    title: "Instalação", 
    description: "Instalação de Equipamentos para Controle Eletrônico de Ponto, Acesso, Catracas, Cancelas.",
    icon: "🔧" // Adicione ícones relevantes
  },
  { 
    title: "Treinamento", 
    description: "Treinamento Completo para uso do Software de Gerenciamento (Top Ponto Rep e Top Acesso).",
    icon: "🎓" 
  },
  { 
    title: "Manutenção", 
    description: "Manutenção de Equipamentos para Controle Eletrônico de Ponto, Acesso, Catracas, Cancelas.",
    icon: "🛠️" 
  },
  { 
    title: "Projetos", 
    description: "Projetos para Controle de Acesso.",
    icon: "📐" 
  }
];

export default function Features() {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 relative inline-block">
            <span className="relative z-10">
              Nossos Serviços
            </span>
            <span className="absolute bottom-0 left-0 w-full h-2 bg-blue-200 transform translate-y-2 z-0"></span>
          </h2>
          <p className="text-lg text-gray-600 mt-4">Soluções completas para gestão de acesso e ponto eletrônico</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out hover:-translate-y-2 transform"
            >
              <div className="mb-6 text-4xl text-blue-600">
                {feature.icon}
              </div>
              <h4 className="text-2xl font-semibold text-gray-800 mb-4">
                {feature.title}
              </h4>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
              <div className="mt-6">
                <div className="w-8 h-1 bg-blue-600 transition-all duration-300 group-hover:w-12"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
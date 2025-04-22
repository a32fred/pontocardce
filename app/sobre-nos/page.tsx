'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import { Clock, ShieldCheck, Users, Award, Target, BarChart } from "lucide-react";

export default function SobreNosPage() {
  const valores = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-green-600" />,
      title: "Integridade",
      description: "Agimos com ética e transparência em todas as nossas relações"
    },
    {
      icon: <Users className="w-8 h-8 text-green-600" />,
      title: "Valorização",
      description: "Investimos no desenvolvimento de nossos colaboradores e clientes"
    },
    {
      icon: <Award className="w-8 h-8 text-green-600" />,
      title: "Excelência",
      description: "Buscamos a perfeição em cada solução que oferecemos"
    },
    {
      icon: <Target className="w-8 h-8 text-green-600" />,
      title: "Inovação",
      description: "Pioneiros em tecnologia para controle de ponto e acesso"
    }
  ];

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/BGHERO.png"
            alt="Equipe PontoCard CE"
            fill
            className="object-cover opacity-40"
            priority
            quality={90}
          />
          <div  className="absolute inset-0 bg-gradient-to-r from-green-600/70 to-gray-100/70" />
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4 max-w-6xl mx-auto"
        >
          <div className="mb-6">
            <motion.span 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="inline-block bg-green-100 px-4 py-2 rounded-full text-green-700 text-sm font-medium mb-4 border border-green-200"
            >
              Desde 2007
            </motion.span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight">
            Transformando o <span className="text-green-600">controle de acesso</span>
            
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
            Mais de uma década de inovação e excelência em soluções para gestão de pessoas
          </p>
        </motion.div>
      </section>

      {/* Conteúdo Principal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
        {/* História */}
        <section className="mb-24">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
                Nossa <span className="text-green-600">Jornada</span>
              </h2>
              
              <div className="space-y-6">
                <p className="text-gray-600 leading-relaxed">
                  Fundada em 2007, a PontoCard CE surgiu com a missão de revolucionar o mercado de controle de ponto e acesso no Ceará. 
                  Nossa equipe traz mais de 15 anos de experiência especializada no segmento.
                </p>
                
                <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-500">
                  <div className="flex items-center gap-4 mb-3">
                    <Award className="w-8 h-8 text-green-600" />
                    <h3 className="text-xl font-bold text-gray-800">
                      Certificação TOPDATA
                    </h3>
                  </div>
                  <p className="text-gray-600">
                    Em apenas 2 anos de atuação, conquistamos o título de Representante Especializado Certificado pela fabricante, 
                    comprovando nossa excelência técnica e compromisso com a qualidade.
                  </p>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ scale: 0.95 }}
              whileInView={{ scale: 1 }}
              className="relative h-80 lg:h-96 rounded-2xl overflow-hidden border border-gray-200"
            >
              <Image
                src="/BGHERO.png"
                alt="Equipe PontoCard CE"
                fill
                className="object-cover border-none"
                quality={90}
              />
            </motion.div>
          </motion.div>
        </section>

        {/* Valores */}
        <section className="mb-24">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="bg-gray-50 rounded-2xl p-8 md:p-12 border border-gray-200"
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Pilares da <span className="text-green-600">PontoCard</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Fundamentos que guiam cada decisão e ação em nossa empresa
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Valores */}
              <div className="space-y-8">
                <div className="flex items-center gap-4 mb-6">
                  <BarChart className="w-8 h-8 text-green-600" />
                  <h3 className="text-2xl font-bold text-gray-800">
                    Nossos Valores
                  </h3>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {valores.map((valor, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ y: -5 }}
                      className="bg-white p-6 rounded-xl border border-gray-200 hover:border-green-300 transition-all shadow-sm"
                    >
                      <div className="mb-4">
                        {valor.icon}
                      </div>
                      <h4 className="text-xl font-bold text-gray-800 mb-2">{valor.title}</h4>
                      <p className="text-gray-600">{valor.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Estratégia */}
              <div className="space-y-8">
                <div className="flex items-center gap-4 mb-6">
                  <Target className="w-8 h-8 text-gray-600" />
                  <h3 className="text-2xl font-bold text-gray-800">
                    Nossa Estratégia
                  </h3>
                </div>
                
                <div className="space-y-6">
                  <p className="text-gray-600 leading-relaxed">
                    Mantemos parcerias estratégicas com os principais fabricantes nacionais para oferecer 
                    as soluções mais avançadas em controle de ponto e acesso.
                  </p>
                  
                  <div className="bg-gray-100 p-6 rounded-xl">
                    <h4 className="text-xl font-bold text-gray-800 mb-3">Diferenciais Competitivos</h4>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-start gap-3">
                        <span className="text-green-600 mt-1">✓</span>
                        Suporte técnico especializado local
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-green-600 mt-1">✓</span>
                        Soluções personalizadas para cada cliente
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-green-600 mt-1">✓</span>
                        Atendimento ágil e eficiente
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-green-600 mt-1">✓</span>
                        Conformidade com todas as normas trabalhistas
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Missão */}
        <section className="mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-br from-green-100 to-gray-50 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
            <div className="relative z-10 max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full text-green-700 text-sm font-medium mb-6 border border-green-200">
                <Target className="w-4 h-4" />
                Propósito
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Nossa <span className="text-green-600">Missão</span>
              </h2>
              
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Ser determinante para o sucesso dos nossos clientes através de soluções inovadoras 
                em controle de ponto e acesso, tornando-nos referência em excelência e confiabilidade no Nordeste.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                  <Clock className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <p className="text-gray-800 font-medium">+15 anos</p>
                  <p className="text-gray-500 text-sm">de experiência</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                  <Users className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <p className="text-gray-800 font-medium">+500</p>
                  <p className="text-gray-500 text-sm">clientes atendidos</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                  <ShieldCheck className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <p className="text-gray-800 font-medium">100%</p>
                  <p className="text-gray-500 text-sm">compliance</p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Filosofia */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center"
        >
          <div className="inline-block bg-white px-8 py-6 rounded-xl border border-gray-200 hover:border-green-300 transition-colors shadow-sm">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
              Life-Run: My/His Comodo
            </h3>
            <p className="text-gray-600 max-w-md">
              Nossa filosofia que combina excelência técnica com cuidado personalizado
            </p>
          </div>
        </motion.section>
      </div>
    </main>
  );
}
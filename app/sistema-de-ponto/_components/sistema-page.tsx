'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Separator } from '@/components/ui/separator'
import { BeneficioCard } from './BeneficioCard'
import softwares from '@/data/softwares.json'
import Image from 'next/image'
import { ArrowDown, Check, ChevronRight, Play } from 'lucide-react'
import * as Dialog from '@radix-ui/react-dialog'

// Types
interface Beneficio {
  title: string
  description: string
  icon?: string
}

interface SistemaHero {
  title: string
  subtitle: string
  description: string
  videoSrc: string
  videoPoster: string
}

interface SistemaData {
  hero: SistemaHero
  beneficios: Beneficio[]
}

interface Produto {
  id: string
  name: string
  description: string
  details?: string
  image: string
}

interface SoftwareCategory {
  label: string
  products: Produto[]
}

interface FAQItem {
  question: string
  answer: string
}

interface Segmento {
  icon: string
  title: string
  description: string
}

// Data
const sistemaData: SistemaData = {
  hero: {
    title: 'Sistema de Ponto',
    subtitle: 'Tecnologia, simplicidade e segurança',
    description:
      'Gerencie a jornada de trabalho dos seus colaboradores com precisão e praticidade. Nosso sistema é intuitivo, robusto e acessível de qualquer lugar.',
    videoSrc: '/video/sistema.mp4',
    videoPoster: '/sistema-poster.jpg',
  },
  beneficios: [
    {
      title: 'Controle Total',
      description: 'Visualize e edite a jornada de trabalho com precisão milimétrica.',
      icon: 'shield',
    },
    {
      title: 'Acesso Remoto',
      description: 'Monitore registros em tempo real, de onde estiver.',
      icon: 'globe',
    },
    {
      title: 'Segurança de Dados',
      description: 'Tecnologia de ponta protegendo todas as informações da sua empresa.',
      icon: 'lock',
    },
    {
      title: 'Relatórios Detalhados',
      description: 'Gere relatórios completos para análise e tomada de decisão.',
      icon: 'file-text',
    },
  ],
}

const softwareCategory: SoftwareCategory | undefined = softwares.controleDePonto
  ? {
      label: 'Softwares de Controle de Ponto',
      products: softwares.controleDePonto,
    }
  : undefined

const segmentos: Segmento[] = [
  {
    icon: '🏢',
    title: 'Empresas de Escritório',
    description: 'Gerencie horários flexíveis com praticidade e controle de múltiplas jornadas.',
  },
  {
    icon: '🏭',
    title: 'Indústrias',
    description: 'Controle múltiplos turnos com precisão e acompanhe produtividade.',
  },
  {
    icon: '🛍️',
    title: 'Comércio e Varejo',
    description: 'Acompanhe a jornada dos colaboradores em lojas físicas com facilidade.',
  },
  {
    icon: '🏥',
    title: 'Saúde',
    description: 'Ideal para clínicas e hospitais com escalas complexas e turnos variados.',
  },
  {
    icon: '🏫',
    title: 'Educação',
    description: 'Controle a frequência de professores e funcionários em instituições de ensino.',
  },
  {
    icon: '🏗️',
    title: 'Construção Civil',
    description: 'Acompanhe a jornada em obras e canteiros de forma prática e segura.',
  },
]

const faqItems: FAQItem[] = [
  {
    question: 'Preciso de internet para registrar o ponto?',
    answer: 'Sim, o sistema funciona via web, então uma conexão é necessária para registrar os pontos em tempo real. Porém, oferecemos soluções offline que sincronizam quando a conexão é reestabelecida.',
  },
  {
    question: 'O sistema é compatível com celular?',
    answer: 'Sim! É totalmente responsivo e pode ser acessado de celulares e tablets com facilidade. Também oferecemos aplicativos nativos para Android e iOS.',
  },
  {
    question: 'Consigo exportar os dados para o meu contador?',
    answer: 'Sim, oferecemos relatórios em Excel e PDF compatíveis com os principais sistemas contábeis do mercado. Também é possível integrar via API com outros sistemas.',
  },
  {
    question: 'O sistema atende à legislação trabalhista?',
    answer: 'Sim, nosso sistema está em conformidade com as leis trabalhistas brasileiras, incluindo as portarias do Ministério do Trabalho sobre registro eletrônico de ponto.',
  },
  {
    question: 'É possível registrar ponto via biometria?',
    answer: 'Sim, oferecemos suporte para registro biométrico, incluindo impressão digital, reconhecimento facial e até mesmo leitura da íris, dependendo do plano contratado.',
  },
  {
    question: 'Oferece suporte para banco de horas?',
    answer: 'Sim, o sistema calcula automaticamente banco de horas, horas extras, faltas, atrasos e todas as ocorrências relacionadas à jornada de trabalho.',
  },
]

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" },
  }),
}



const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

// Components
const VideoModal = ({ videoSrc, videoPoster }: { videoSrc: string; videoPoster: string }) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="rounded-full bg-white/20 backdrop-blur-sm p-4 hover:bg-white/30 transition-all flex items-center justify-center"
        >
          <Play size={32} className="text-white fill-white" />
        </motion.button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50" />
        <Dialog.Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-4xl z-50">
          <div className="relative w-full aspect-video bg-black rounded-lg overflow-hidden">
            <video 
              controls 
              autoPlay 
              className="w-full h-full object-cover" 
              poster={videoPoster}
            >
              <source src={videoSrc} type="video/mp4" />
              Seu navegador não suporta vídeos.
            </video>
          </div>
          <Dialog.Close className="absolute top-4 right-4 p-2 bg-black/50 rounded-full text-white hover:bg-black/70">
            <ChevronRight className="w-6 h-6" />
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

const ProdutoCard = ({ product, index }: { product: Produto; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(cardRef, { once: true, margin: "-100px" })
  
  return (
    <motion.div
      ref={cardRef}
      variants={fadeInUp}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      custom={index * 0.1}
      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all p-6 text-left border border-gray-100 hover:border-green-100"
    >
      <div className="relative h-48 w-full mb-6 bg-green-50/50 rounded-xl overflow-hidden flex items-center justify-center">
        <Image 
          src={product.image} 
          alt={product.name} 
          width={400}
          height={600}
          className="object-contain"
        />
      </div>
      <h3 className="text-xl font-bold text-green-700 mb-2">{product.name}</h3>
      <p className="text-gray-600">{product.description}</p>
      {product.details && (
        <p className="mt-3 text-sm text-gray-500 border-t border-gray-100 pt-3">{product.details}</p>
      )}
      <div className="mt-4 pt-2">
      </div>
    </motion.div>
  )
}

const SegmentoCard = ({ segmento, index }: { segmento: Segmento; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(cardRef, { once: true, margin: "-100px" })
  
  return (
    <motion.div
      ref={cardRef}
      variants={fadeInUp}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      custom={index * 0.1}
      className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all border border-green-50"
    >
      <div className="text-4xl mb-4">{segmento.icon}</div>
      <h3 className="text-xl font-semibold text-green-700 mb-2">{segmento.title}</h3>
      <p className="text-gray-600">{segmento.description}</p>
    </motion.div>
  )
}

const FAQItem = ({ 
  faq, 
  index, 
  isOpen, 
  onToggle 
}: { 
  faq: FAQItem; 
  index: number; 
  isOpen: boolean; 
  onToggle: () => void;
}) => {
  const itemRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(itemRef, { once: true, margin: "-100px" })
  
  return (
    <motion.div
      ref={itemRef}
      variants={fadeInUp}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      custom={index * 0.1}
      className="border-b border-green-100 last:border-b-0"
    >
      <button
        onClick={onToggle}
        className="w-full py-4 flex items-center justify-between text-left focus:outline-none"
      >
        <h3 className="text-lg font-semibold text-green-800">{faq.question}</h3>
        <ChevronRight
          className={`transform transition-transform duration-300 text-green-600 ${
            isOpen ? 'rotate-90' : 'rotate-0'
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 mb-4' : 'max-h-0'
        }`}
      >
        <p className="text-gray-700">{faq.answer}</p>
      </div>
    </motion.div>
  )
}

export default function SistemaDePontoPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)
  const beneficiosRef = useRef<HTMLDivElement>(null)
  const beneficiosInView = useInView(beneficiosRef, { once: true, margin: "-100px" })
  
  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  return (
    <main className="min-h-screen w-full bg-white text-gray-800 scroll-smooth overflow-hidden">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center text-white">
        <div className="absolute inset-0 z-0">
          {sistemaData.hero.videoSrc ? (
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover brightness-[0.35]"
              poster={sistemaData.hero.videoPoster}
            >
              <source src={sistemaData.hero.videoSrc} type="video/mp4" />
              Seu navegador não suporta vídeos.
            </video>
          ) : (
            <div className="relative w-full h-full">
              <Image
                src={sistemaData.hero.videoPoster}
                alt="Sistema de Ponto"
                fill
                className="object-cover brightness-50"
                priority
              />
            </div>
          )}
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-green-900/30 z-[1]" />

        <div className="container relative z-10 px-6 pt-28 pb-20 flex flex-col items-center justify-center text-center">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-4xl md:text-6xl font-extrabold mb-6 max-w-4xl leading-tight"
          >
            {sistemaData.hero.title}
            <span className="block text-green-400 mt-2">{sistemaData.hero.subtitle}</span>
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            custom={0.2}
            className="text-lg md:text-xl text-white/90 max-w-2xl mb-10"
          >
            {sistemaData.hero.description}
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            custom={0.3}
            className="mb-8"
          >
            <VideoModal 
              videoSrc={sistemaData.hero.videoSrc} 
              videoPoster={sistemaData.hero.videoPoster}
            />
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            custom={0.4}
            className="flex flex-col sm:flex-row justify-center gap-4 mt-8"
          >
           
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce"
        >
          <a href="#beneficios" className="text-white/70 hover:text-white">
            <ArrowDown size={28} />
          </a>
        </motion.div>
      </section>

      {/* Benefícios */}
      <section 
        id="beneficios" 
        ref={beneficiosRef}
        className="py-24 bg-gradient-to-b from-green-50 to-white text-gray-900"
      >
        <div className="container mx-auto px-6">
          <motion.div
            variants={staggerChildren}
            initial="hidden"
            animate={beneficiosInView ? "visible" : "hidden"}
            className="text-center mb-16"
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-3xl md:text-5xl font-bold mb-4 text-green-700"
            >
              Por que escolher nosso sistema?
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-lg text-gray-600 max-w-3xl mx-auto"
            >
              Oferecemos o melhor em tecnologia para controle de ponto, 
              com recursos inovadores que facilitam a gestão de sua equipe.
            </motion.p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sistemaData.beneficios.map((beneficio, index) => (
              <BeneficioCard key={index} {...beneficio} delay={index * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Softwares Compatíveis */}
      {softwareCategory && (
        <section id="softwares" className="py-24 px-6 bg-white">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <motion.h2
                initial="hidden"
                whileInView="visible"
                variants={fadeInUp}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold mb-4 text-green-700"
              >
                {softwareCategory.label}
              </motion.h2>
              <motion.p
                initial="hidden"
                whileInView="visible"
                variants={fadeInUp}
                viewport={{ once: true }}
                custom={0.2}
                className="text-lg text-gray-600 max-w-3xl mx-auto"
              >
                Conheça as soluções que desenvolvemos para otimizar o controle de ponto da sua empresa,
                com tecnologia avançada e design intuitivo.
              </motion.p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {softwareCategory.products.map((product, index) => (
                <ProdutoCard key={product.id} product={product} index={index} />
              ))}
            </div>
          </div>
        </section>
      )}

      <Separator className="max-w-5xl mx-auto" />

      {/* Segmentos */}
      <section className="py-24 bg-gradient-to-t from-green-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-4 text-green-700"
            >
              Ideal para diversos segmentos
            </motion.h2>
            <motion.p
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              viewport={{ once: true }}
              custom={0.2}
              className="text-lg text-gray-600 max-w-3xl mx-auto"
            >
              Nosso sistema se adapta perfeitamente às necessidades específicas de cada setor,
              garantindo controle e praticidade para empresas de todos os portes.
            </motion.p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {segmentos.map((segmento, index) => (
              <SegmentoCard key={index} segmento={segmento} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Vantagens */}
      <section className="py-24 bg-green-700 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Vantagens exclusivas
            </motion.h2>
            <motion.p
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              viewport={{ once: true }}
              custom={0.2}
              className="text-lg text-white/90 max-w-3xl mx-auto"
            >
              Nosso sistema oferece recursos exclusivos que vão transformar a forma como você gerencia o ponto de sua equipe.
            </motion.p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Sincronização com folha de pagamento",
              "Alertas de irregularidades automáticos",
              "Painel de gestão intuitivo",
              "Integração com sistemas de acesso",
              "Aplicativo mobile para registro",
              "Relatórios personalizados",
              "Controle de banco de horas automático",
              "Dashboards interativos em tempo real",
              "Gestão de múltiplas unidades"
            ].map((vantagem, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                variants={fadeInUp}
                viewport={{ once: true }}
                custom={index * 0.05}
                className="flex items-start gap-3"
              >
                <div className="mt-1 flex-shrink-0">
                  <Check className="h-5 w-5 text-green-300" />
                </div>
                <p className="text-lg">{vantagem}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-4 text-green-700"
            >
              Dúvidas Frequentes
            </motion.h2>
            <motion.p
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              viewport={{ once: true }}
              custom={0.2}
              className="text-lg text-gray-600 max-w-3xl mx-auto"
            >
              Encontre respostas para as principais dúvidas sobre nosso sistema de ponto
            </motion.p>
          </div>
          
          <div className="max-w-4xl mx-auto bg-green-50 rounded-2xl p-8">
            {faqItems.map((faq, index) => (
              <FAQItem 
                key={index} 
                faq={faq} 
                index={index} 
                isOpen={openFAQ === index}
                onToggle={() => toggleFAQ(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section id="demo" className="py-24 px-6 bg-gradient-to-br from-green-600 to-green-800 text-white text-center">
        <div className="container mx-auto">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            Solicite uma demonstração personalizada
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true }}
            custom={0.2}
            className="text-xl max-w-2xl mx-auto mb-10 text-white/90"
          >
            Descubra na prática como nosso sistema pode revolucionar o controle de ponto da sua empresa.
          </motion.p>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true }}
            custom={0.4}
            className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto"
          >
          </motion.div>
        </div>
      </section>
    </main>
  )
}
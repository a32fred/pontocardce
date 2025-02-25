import Image from "next/image";

const testimonials = [
  {
    name: "Ellen Evelyn",
    role: "",
    text: "Uma empresa com ótimos profissionais, suporte técnico maravilhoso e vendedores super atenciosos. Estão de parabéns!!",
    rating: 5,
    image: "https://lh3.googleusercontent.com/a-/ALV-UjXJxXCgiQXIHSaXLLtTlKkLvMUUYdqINBiHBYKgG8u9uiF8dvL-vQ=w60-h60-p-rp-mo-br100"
  },
  {
    name: "Rhudá Saraiva",
    role: "",
    text: "Pelo serviço diferenciado de manutenção preventiva. Todo mês eles vêm sem a necessidade de eu pedir para fazer uma limpeza e lubrificação dos meu equipamentos. Gostei muito desse modelo de suporte.",
    rating: 5,
    image: "https://lh3.googleusercontent.com/a-/ALV-UjW-Bzin7yUD8rwQzOGGkCASl_enCXFplFpRHwVOZ8YN3zKZ3csz3w=w60-h60-p-rp-mo-br100"
  },
  {
    name: "Rdouglas rafael",
    role: "",
    text: "Atendimento nota 10, tive todo o suporte do começo ao fim, por mais empresas assim !",
    rating: 5,
    image: "https://lh3.googleusercontent.com/a-/ALV-UjXu1o3F4bq5x3tSESM4FcqRxdtDZn5X-SYy0RcDymWM3G3o1UnW0A=w60-h60-p-rp-mo-br100"
  },
  {
    name: "Frederico Carlos fred",
    role: "",
    text: "ótimo atendimento técnico",
    rating: 5,
    image: "https://lh3.googleusercontent.com/a-/ALV-UjXNTU-86T92_7BqYZf3XEJ1SvcaAG6S08R64C0W7BOX76HQOjo=w60-h60-p-rp-mo-br100"
  },
  {
    name: "Mark Monteiro",
    role: "",
    text: "Experiência de atendimento com o setor de vendas foi muito boa. A empresa está fazendo uma reformulação de preços e se tornando bem mais competitiva no mercado, o que à torna ainda mais atraente aos olhos do cliente.",
    rating: 5,
    image: "https://lh3.googleusercontent.com/a-/ALV-UjX2D1xcXgVzryG4Yn9HyENwXW1T2R08RpZlbiSjc6xJLd8hQwC9SA=w60-h60-p-rp-mo-ba5-br100"
  },
  {
    name: "Carol Moura",
    role: "",
    text: "Ótima recepção e atendimento, fora os preços acessíveis, super recomendo🙌🏼😊",
    rating: 5,
    image: "https://lh3.googleusercontent.com/a-/ALV-UjVzHox1u3KdadpsIs4Qgq84A2VD-ipPZI6GslsMxr22zn1EIajHew=w60-h60-p-rp-mo-br100"
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 relative inline-block">
            <span className="relative z-10">
              O que dizem nossos clientes
            </span>
            <span className="absolute bottom-0 left-0 w-full h-2 bg-blue-200 transform translate-y-2 z-0"></span>
          </h2>
          <p className="text-lg text-gray-600 mt-4">Confira experiências reais de quem já utiliza nossas soluções</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="flex items-center mb-6">
                <Image 
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={80}
                  height={16}
                  quality={100}
                  className="w-16 h-16 rounded-full object-cover border-4 border-blue-100"
                />
                <div className="ml-4">
                  <h4 className="text-xl font-semibold text-gray-800">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>

              <p className="text-gray-600 mb-6 italic relative pl-8">
                <span className="absolute left-0 top-0 text-4xl text-blue-100 font-serif">“</span>
                {testimonial.text}
              </p>

              <div className="flex items-center">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="https://www.google.com/search?client=ubuntu-sn&channel=fs&q=pontocard#lrd=0x7c74852a6a76aa3:0x62633b52236ef7e3,1,,,,&topic=mid:/g/11bc71gsw6" className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors duration-300 font-semibold shadow-md hover:shadow-lg">
            Ver mais depoimentos
          </a>
        </div>
      </div>
    </section>
  );
}
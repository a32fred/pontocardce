import Link from 'next/link';

export default function CallToAction() {
  return (
    <section className="py-20 bg-gradient-to-r from-green-100 to-green-200">
      <div className="max-w-4xl mx-auto text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Leve sua gestão de ponto para o futuro
        </h2>
        <p className="text-gray-700 mb-8">
          Agende agora uma demonstração personalizada do nosso leitor facial biométrico.
        </p>
        <Link href="/contato">
          <button className="bg-green-700 hover:bg-green-800 text-white font-semibold px-8 py-4 rounded-xl shadow-md transition">
            Solicitar Demonstração
          </button>
        </Link>
      </div>
    </section>
  );
}

// components/Footer.tsx
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 py-10">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Sobre a Pontocard */}
                <div>
                    <h3 className="text-xl font-bold text-white mb-4">Pontocard</h3>
                    <p className="text-sm">
                        A Pontocard é referência em soluções inovadoras para o controle de ponto,
                        oferecendo sistemas biométricos e integração com a nuvem para garantir eficiência e conformidade
                        nas operações de RH, atendendo às exigências da legislação vigente.
                    </p>
                </div>

                {/* Links Úteis */}
                <div>
                    <h4 className="text-lg font-semibold text-white mb-4">Links Úteis</h4>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <Link href="/sobre-nos">Sobre Nós</Link>
                        </li>
                        <li>
                            <Link href="/">Produtos</Link>
                        </li>
                        <li>
                            <Link href="/suporte">Suporte</Link>
                        </li>
                        <li>
                            <Link href="/contato">Contato</Link>
                        </li>
                    </ul>
                </div>

                {/* Contato e Redes Sociais */}
                <div>
                    <h4 className="text-lg font-semibold text-white mb-4">Contato</h4>
                    <ul className="space-y-2 text-sm">
                        <li>Email: administracao@pontocardce.com.br</li>
                        <li>Telefone: (85) 3226-2933</li>
                        <li>Endereço: R. São Paulo, 32-3º Andar, Sala 309 - Centro, Fortaleza - CE</li>
                    </ul>
                    <div className="flex space-x-4 mt-4">
                        <a
                            href="https://facebook.com/pontocardce"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-gray-400"
                        >
                            <FaFacebookF size={24} />
                        </a>
                        <a
                            href="https://instagram.com/pontocardce"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-gray-400"
                        >
                            <FaInstagram size={24} />
                        </a>
                        <a
                            href="https://wa.me/8532262933"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-gray-400"
                        >
                            <FaWhatsapp size={24} />
                        </a>
                    </div>
                </div>
            </div>

            {/* Rodapé com Copyright */}
            <div className="border-t border-gray-800 mt-8 pt-4">
                <div className="max-w-7xl mx-auto px-4 text-center text-sm">
                    &copy; {new Date().getFullYear()} Pontocard. Todos os direitos reservados.
                </div>
            </div>
        </footer>
    );
}

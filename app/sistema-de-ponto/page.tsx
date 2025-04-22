import { Metadata } from "next";
import SistemaDePontoPage from "./_components/sistema-page";

export const metadata: Metadata = {
  title: "Sistema de Ponto | Pontocard",
  description:
    "Conheça o nosso sistema de ponto completo, seguro e intuitivo para sua empresa. Tenha controle total sobre a jornada dos seus colaboradores.",
};

export default function Page() {
  return <SistemaDePontoPage />;
}

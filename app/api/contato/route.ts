import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactRequest {
    nome: string;
    email: string;
    telefone: string;
    assunto: string;
    mensagem: string;
}

export async function POST(req: Request): Promise<Response> {
    try {
        const { nome, email, telefone, assunto, mensagem }: ContactRequest = await req.json();

        await resend.emails.send({
            from: 'SITE <desenvolvimento@pontocardce.com.br>',
            to: process.env.EMAIL_TO as string,
            subject: `Novo contato: ${assunto}`,
            html: `
                <h2>Nova mensagem recebida</h2>
                <p><strong>Nome:</strong> ${nome}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Telefone:</strong> ${telefone}</p>
                <p><strong>Assunto:</strong> ${assunto}</p>
                <p><strong>Mensagem:</strong><br/>${mensagem}</p>
            `
        });

        return new Response(JSON.stringify({ success: true }), { status: 200 });
    } catch (error: any) {
        console.error("Erro ao enviar email:", error);
        return new Response(JSON.stringify({ success: false, error: error.message }), {
            status: 500
        });
    }
}

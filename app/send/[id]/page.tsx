
import {CheckCircleIcon} from "@heroicons/react/24/outline";
import type {NextRequest} from "next/server";
import {EmailTemplate} from "@/app/components/email";
import {Resend} from "resend";
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "Bad Bats Q&A",
    description: "На этой странице вы можете задать вопрос нашей команде.",
};

export default function Page({ params }: { params: { id: string } }) {
    // @ts-ignore
    email(decodeURIComponent(params.id))
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-5 text-center">
            <CheckCircleIcon className={'m-6 h-20 text-green-600'}/>
            <h1 className={'font-bold text-3xl p-5'}>Ваш вопрос отправлен!</h1>
        </main>
    )
}

async function email(question: string) {
    const resend = new Resend(process.env.RESEND);
    try {
        // @ts-ignore
        const data = await resend.emails.send({
            from: 'Bad Bats Q&A <bb22462@resend.dev>',
            to: ['i@l0rmin.ru'],
            subject: 'Новый Вопрос!',
            react: EmailTemplate({ question: question }),
        });

        return Response.json(data);
    } catch (error) {
        return Response.json({ error });
    }
}
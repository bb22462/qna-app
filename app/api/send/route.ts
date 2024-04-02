'use server'
import {EmailTemplate} from "@/app/components/email";
import { Resend } from 'resend';
import { type NextRequest } from 'next/server'

const resend = new Resend(process.env.RESEND);

export async function GET(request: NextRequest, question: string) {
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

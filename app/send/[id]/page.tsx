import {GET} from "@/app/api/send/route";
import {CheckCircleIcon} from "@heroicons/react/24/outline";

export default function Page({ params }: { params: { id: string } }) {
    // @ts-ignore
    GET(undefined, decodeURI(params.id))
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-5">
            <CheckCircleIcon className={'m-6 h-20 text-green-600'}/>
            <h1 className={'font-bold text-3xl p-5'}>Ваш вопрос отправлен!</h1>
        </main>
    )
}
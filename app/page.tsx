'use client'
import Image from "next/image";
import {useState} from "react";
import {PaperAirplaneIcon} from "@heroicons/react/24/outline";

export default function Home() {

    const [input, setInput] = useState('');

    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-5 text-center">
          <img src={'circle.png'} height={'200px'} width={'200px'}/>
          <h1 className={'font-bold text-3xl p-5'}>Bad Bats Q&A</h1>
          <p className={'m-4'}>Тут вы можете задать вопрос нашей команде. Ответы на вопросы будут публиковаться в нашем <a className={'text-blue-500 underline'} href="https://t.me/bad_bats_ftc">Telegram-Канале</a></p>
          <input placeholder={"Ваш вопрос"} value={input}
                 onChange={e => setInput(e.target.value)}
                 className={'placeholder-neutral-200 text-white transition-all m-5 outline-none p-2 bg-indigo-400 hover:bg-indigo-500 rounded-md min-w-[300px]'}
                 type="text"/>
          <a
                 className={'transition-all m-5 outline-none p-2 bg-indigo-400 hover:bg-indigo-500 rounded-md text-white'}
                 href={`/send/${input.replace(/\//g, "Slash")}`}
          >Отправить <PaperAirplaneIcon className={'inline h-6 ml-1'}/></a>

      </main>
  );
}

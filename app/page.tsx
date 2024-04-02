'use client'
import Image from "next/image";
import {useState} from "react";
import {PaperAirplaneIcon} from "@heroicons/react/24/outline";

export default function Home() {

    const [input, setInput] = useState('');

    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-5">
          <img src={'mouse.png'} height={'200px'} width={'200px'}/>
          <h1 className={'font-bold text-3xl p-5'}>Bad Bats Q&A</h1>
          <input placeholder={"Ваш вопрос"} value={input}
                 onChange={e => setInput(e.target.value)}
                 className={'placeholder-neutral-200 text-white transition-all m-5 outline-none p-2 bg-indigo-400 hover:bg-indigo-500 rounded-md'}
                 type="text"/>
          <a
                 className={'transition-all m-5 outline-none p-2 bg-indigo-400 hover:bg-indigo-500 rounded-md text-white'}
                 href={`/send/${input}`}
          >Отправить <PaperAirplaneIcon className={'inline h-6 ml-1'}/></a>

      </main>
  );
}

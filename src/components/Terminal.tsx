import React, { ReactNode, useEffect, useState } from 'react';
import { FULL_NAME } from '../utils/pages/constants';
import { useAuth } from './Auth';

export default function Terminal() {
    const { intro, switchScreen } = useAuth();

    useEffect(() => {
        console.log('Intro', intro);
    }, [intro]);

    const [commands, setCommands] = useState<ReactNode[]>(
        intro
            ? [
                  <div key="intro">
                      <h1 className="text-6xl lowercase">
                          {FULL_NAME.replace(' ', '')}.com
                      </h1>
                      <h2>
                          Game Dev, Programming, Art, Writing, Assorted Bogglery
                      </h2>
                      <h2>Press any key to continue</h2>
                  </div>,
              ]
            : []
    );
    const [text, setText] = useState<string>('');

    const processCommand = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const command = text.trim();
        if (!command) return;

        const commandParts = command.split(' ');
        const commandName = commandParts[0].toLowerCase();
        const commandArgs = commandParts.slice(1);

        let result: string | ReactNode = '';
        switch (commandName) {
            case 'clear':
                setCommands([]);
                break;
            case 'echo':
                result = commandArgs.join(' ');
                break;
            case 'neofetch':
                result = 'hi';
                break;
            case 'exit':
            case 'close':
            case 'switch':
                const num = Number(commandArgs[0]);
                if (Number.isInteger(num)) {
                    switchScreen(num);
                    result = `Switched to screen ${commandArgs[0]}`;
                } else {
                    switchScreen(0);
                    result = 'Switched to screen 0';
                }
                break;
            default:
                result = (
                    <p className="text-red-600 text-3xl m-0">
                        '{commandName}' not found
                    </p>
                );
                break;
        }

        if (result) {
            if (typeof result === 'string')
                setCommands([
                    ...commands,
                    <p key={result} className="text-3xl m-0">
                        {result}
                    </p>,
                ]);
            else setCommands([...commands, result]);
        }
        setText('');
    };

    const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (intro) {
            switchScreen(0);
            setTimeout(() => {
                localStorage.screen = 0;
                localStorage.finishedIntro = true;
            }, 1000);
        } else setText(e.target.value);
    };

    return (
        <div className="bg-black flex-col text-green-400 text-md p-4 flex h-[100vh] justify-end overflow-hidden">
            <div className="flex w-full flex-col">
                {commands.map((command, index) => (
                    <div key={index} className="p-2 text-3xl m-0">
                        {command}
                    </div>
                ))}
            </div>
            <div className="flex flex-row items-center w-full h-fit text-bold text-4xl mt-4">
                <p className="m-0 text-6xl mr-4">$</p>
                <form
                    onSubmit={processCommand}
                    className="w-full flex items-center h-fit"
                >
                    <label
                        className="invisible block h-0 w-0"
                        htmlFor="commandInput"
                    >
                        Enter shell command
                    </label>
                    <input
                        id="commandInput"
                        autoFocus
                        type="text"
                        value={text}
                        onChange={inputChange}
                        className="focus:outline-none bg-transparent flex m-0 w-full h-fit border-b-2 border-solid border-green-400 text-green-400 p-4 text-4xl"
                    />
                </form>
            </div>
        </div>
    );
}

import React, { ReactNode, useEffect, useRef, useState } from 'react';
import { FULL_NAME } from '../utils/constants';
import { useAuth } from './Auth';

export default function Terminal() {
    const { intro, setScreen } = useAuth();

    const [commands, setCommands] = useState<ReactNode[]>(
        intro
            ? [
                  <div>
                      <h1>{FULL_NAME}'s site</h1>
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
            case 'switch':
                const num = Number(commandArgs[0]);
                if (Number.isInteger(num)) {
                    setScreen(num);
                    result = `Switched to screen ${commandArgs[0]}`;
                } else {
                    setScreen(0);
                    result = 'Switched to screen 0';
                }
                break;
            default:
                result = (
                    <p style={{ color: 'red' }}>
                        Unknown command: 'commandName'
                    </p>
                );
                break;
        }

        if (result) {
            if (typeof result === 'string')
                setCommands([...commands, <p>{result}</p>]);
            else setCommands([...commands, result]);
        }
        setText('');
    };

    const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (intro) {
            setScreen(0);
            setText(e.target.value);
        }
    };

    return (
        <div className="bg-black flex-col p-8 text-green-400">
            <div className="flex w-full h-full flex-col justify-end overflow-y-scroll">
                {commands.map((command, index) => (
                    <div key={index} className="p-2">
                        {command}
                    </div>
                ))}
            </div>
            <div className="flex flex-row text-bold text-3xl">
                <p>$</p>
                <form onSubmit={processCommand} className="w-full">
                    <label
                        className="invisible block h-0"
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
                        className="border-none bg-black focus:outline-none ml-2 flex w-full"
                    />
                </form>
            </div>
        </div>
    );
}

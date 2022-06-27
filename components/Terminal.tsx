import React, { useEffect, useRef, useState } from 'react';
import { useAuth } from './Auth';

export default function Terminal() {
    const { setScreen } = useAuth();

    const [commands, setCommands] = useState<string[]>([]);
    const [text, setText] = useState<string>('');

    const processCommand = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const command = text.trim();
        if (!command) return;

        const commandParts = command.split(' ');
        const commandName = commandParts[0].toLowerCase();
        const commandArgs = commandParts.slice(1);

        let result = '';
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
                result = `Switched to screen ${commandArgs[0]}`;
                setScreen(Number(commandArgs[0] || 1));
                break;
            default:
                result = `Unknown command: '${commandName}'`;
                break;
        }

        if (result) setCommands([...commands, result]);
        setText('');
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
                <form onSubmit={processCommand} className="max-w-[100%]">
                    <input
                        autoFocus
                        type="text"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        className="border-none bg-black focus:outline-none ml-2"
                    />
                </form>
            </div>
        </div>
    );
}

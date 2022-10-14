import React, {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useState,
} from 'react';
import { SITE_NAME } from '../utils/pages/constants';
import { useAuth } from './Auth';
import ArtTrackIcon from '@mui/icons-material/ArtTrack';
import Person2Icon from '@mui/icons-material/Person';
import { useRouter } from 'next/router';

const TerminalContext = createContext({} as TerminalContextProps);

interface TerminalContextProps {
    processCommand: (input: string, fromClick: boolean) => void;
}

const useTerminal = () => {
    const context = useContext(TerminalContext);
    if (context === undefined) {
        throw new Error('useTerminal must be used within a TerminalProvider');
    }
    return context;
};

const textLine = (text: string) => (
    <p key={text} className="text-3xl m-0">
        {text}
    </p>
);

const errorLine = (text: string) => (
    <p className="text-red-600 text-3xl m-0">{text}</p>
);

const CLICKABLE_STYLES =
    'text-blue-500 hover:cursor-pointer transition-all hover:text-blue-300 w-fit';

const clickableLine = (text: string, onClick: () => void) => (
    <p className={CLICKABLE_STYLES} onClick={onClick}>
        {text}
    </p>
);

interface HelpLineProps {
    cmd: string;
    text: string;
}

function HelpLine({ cmd, text }: HelpLineProps) {
    const { processCommand } = useTerminal();

    return (
        <>
            <span
                className={`${CLICKABLE_STYLES} ml-14`}
                onClick={() => processCommand(cmd, true)}
            >
                {cmd}
            </span>{' '}
            {text}
            <br />
        </>
    );
}

function HelpBlock() {
    return (
        <p className="my-0">
            The {SITE_NAME} Terminal
            <span className="!text-sm">TM</span>
            <br />
            <HelpLine cmd="switch" text="to the gui" />
            <HelpLine cmd="login" text="to your account" />
            <HelpLine cmd="logout" text="" />
            <HelpLine cmd="clear" text="the terminal" />
        </p>
    );
}

export default function Terminal() {
    const { intro, switchScreen, loggedIn, logOut, updateToken } = useAuth();
    const router = useRouter();

    const [commands, setCommands] = useState<ReactNode[]>(
        intro
            ? [
                  <div key="intro">
                      <h1 className="text-7xl lowercase">{SITE_NAME}</h1>
                      <h2 className="leading-[4rem]">
                          Game Dev, Programming, Art, Writing, Assorted Bogglery
                      </h2>
                      <h2>Press any key to continue</h2>
                  </div>,
              ]
            : []
    );
    const [text, setText] = useState<string>('');
    const [currentCommand, setCurrentCommand] = useState<string>('');

    //Auth stuff
    const [username, setUsername] = useState<string>('');
    const [inputType, setInputType] = useState<'password' | 'text'>('text');
    const [waitingForLogin, setWaitingForLogin] = useState<boolean>(false);
    useEffect(() => {
        if (waitingForLogin) {
            if (!loggedIn) {
                const timeout = setTimeout(() => {
                    setCommands((prev) => [
                        ...prev,
                        errorLine('Login failed.'),
                    ]);
                    setWaitingForLogin(false);
                }, 2000);
                return () => clearTimeout(timeout);
            } else {
                setCommands((prev) => [
                    ...prev,
                    clickableLine('Logged in!', () => {
                        router.push('/chadmin');
                        switchScreen(0);
                    }),
                ]);
                setWaitingForLogin(false);
            }
        }
    }, [waitingForLogin, loggedIn]);

    const processCommand = (textCommand: string, fromClick: boolean) => {
        const command = textCommand.trim();
        if (!command) return;

        const commandParts = command.split(' ');
        const commandName = commandParts[0].toLowerCase();
        const commandArgs = commandParts.slice(1);

        let result: string | ReactNode = '';
        let _currentCommand = '';
        if (!fromClick) {
            _currentCommand = currentCommand;
        } else {
            setCurrentCommand('');
        }
        switch (_currentCommand) {
            case 'username':
                setCommands((prev) => {
                    const newCommands = [...prev, 'Password:'];
                    newCommands[newCommands.length - 2] = textLine(
                        `Username: ${command}`
                    );
                    return newCommands;
                });
                setUsername(command);
                setInputType('password');
                setCurrentCommand('password');
                break;
            case 'password':
                setCommands((prev) => {
                    const newCommands = [...prev];
                    newCommands[newCommands.length - 1] = textLine(
                        `Password: ${'●'.repeat(text.length)}`
                    );
                    return newCommands;
                });
                setInputType('text');
                setCurrentCommand('');

                const newToken = `${username}:${command}`;
                updateToken(newToken);
                setWaitingForLogin(true);
                break;
            default:
                setCurrentCommand('');
                switch (commandName) {
                    case 'signin':
                    case 'login':
                        if (loggedIn) {
                            result = "You're already logged in!";
                        } else {
                            result = 'Username: ';
                            setCurrentCommand('username');
                        }
                        break;
                    case 'signout':
                    case 'logout':
                        if (loggedIn) {
                            logOut();
                            result = 'Logged out';
                        } else {
                            result = "You're not logged in!";
                        }
                        break;
                    case 'clear':
                        setCommands([]);
                        break;
                    case 'echo':
                        result = commandArgs.join(' ');
                        break;
                    case 'neofetch':
                        result = 'hi';
                        break;
                    case 'help':
                        result = <HelpBlock />;
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
                        result = errorLine(`'${commandName}' not found`);
                        break;
                }
                break;
        }

        if (result) {
            if (typeof result === 'string')
                setCommands([...commands, textLine(result)]);
            else setCommands([...commands, result]);
        }
        setText('');
    };

    const processInput = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        processCommand(text, false);
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
        <TerminalContext.Provider value={{ processCommand }}>
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
                        onSubmit={processInput}
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
                            type={inputType}
                            value={text}
                            onChange={inputChange}
                            className="focus:outline-none bg-transparent flex m-0 w-full h-fit border-[3px] border-solid border-green-400 text-green-400 p-4 text-4xl rounded-lg"
                        />
                    </form>
                </div>
                <div
                    className="m-4 absolute top-0 right-0 child:!text-5xl hover:cursor-pointer"
                    onClick={() => switchScreen(0)}
                >
                    <ArtTrackIcon />
                </div>
                {loggedIn && (
                    <div
                        className="m-4 absolute top-0 left-0 child:!text-5xl hover:cursor-pointer"
                        onClick={logOut}
                    >
                        <Person2Icon />
                    </div>
                )}
            </div>
        </TerminalContext.Provider>
    );
}

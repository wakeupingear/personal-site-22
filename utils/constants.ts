import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();

export const FULL_NAME: string = publicRuntimeConfig.myName;

export const INITIALS = FULL_NAME.split(' ')
    .map((name) => name[0])
    .join('');

export const IS_SERVER = typeof window === 'undefined';

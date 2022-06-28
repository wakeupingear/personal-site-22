import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();

export const FULL_NAME = publicRuntimeConfig.myName;

export const IS_SERVER = typeof window === 'undefined';

export const FULL_NAME: string = process.env.NEXT_PUBLIC_NAME || '';

export const INITIALS = FULL_NAME.split(' ')
    .map((name) => name[0])
    .join('');

export const URL = `https://${FULL_NAME.replaceAll(' ', '').toLowerCase()}.com`;

export const SITE_NAME = `${FULL_NAME.replace(' ', '')}.com`;

export const IS_SERVER = typeof window === 'undefined';

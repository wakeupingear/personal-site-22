import React from 'react';
import Wrapper from '../src/Wrapper';
import { HomepageProps } from '../utils/homeServerProps';
export { getServerSideProps } from '../utils/homeServerProps';

export default function index(props: HomepageProps) {
    return <Wrapper {...props} />;
}

import React from 'react';
import Wrapper from '../../src/Wrapper';
import { HomepageProps } from '../../utils/homeServerProps';
export { getServerSideProps } from '../../utils/homeServerProps';

export default function Skronkle(props: HomepageProps) {
    return (
        <Wrapper {...props}>
            <h1>Hi</h1>
        </Wrapper>
    );
}

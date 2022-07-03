import React from 'react';
import Wrapper from '../../src/Wrapper';
import { HomepageProps } from '../../utils/homeServerProps';
export { getServerSideProps } from '../../utils/homeServerProps';

export default function Skronkle(props: HomepageProps) {
    return (
        <Wrapper {...props}>
            <div className="flex w-full h-full justify-center items-center">
                <h1>fasdfasdf</h1>
            </div>
        </Wrapper>
    );
}

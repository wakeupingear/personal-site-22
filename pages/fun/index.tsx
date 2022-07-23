import { Page } from '@components/pages/Pages';
import HomeBG from '@components/shared/backgrounds/HomeBG';
import StackGrid from 'react-stack-grid';

export default function index() {
    return (
        <Page>
            <HomeBG disableParallax />
            <StackGrid columnWidth={150}></StackGrid>
        </Page>
    );
}

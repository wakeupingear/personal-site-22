import { About } from '../../pages-lib/about/About';
import { HomePage } from '../../src/Pages';

export { getServerSideProps } from '../../utils/homeServerProps';

export default function index() {
    return (
        <HomePage>
            <About />
        </HomePage>
    );
}

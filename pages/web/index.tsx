import Web from '../../pages-lib/web/Web';
import { HomePage } from '../../src/Pages';

export { getServerSideProps } from '../../utils/homeServerProps';

export default function index() {
    return (
        <HomePage>
            <Web />
        </HomePage>
    );
}

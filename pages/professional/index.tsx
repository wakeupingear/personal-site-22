import Professional from '../../pages-lib/professional/Professional';
import { HomePage } from '../../src/Pages';

export { getServerSideProps } from '../../utils/homeServerProps';

export default function index() {
    return (
        <HomePage>
            <Professional />
        </HomePage>
    );
}

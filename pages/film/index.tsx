import Film from '../../pages-lib/film/Film';
import { HomePage } from '../../src/Pages';

export { getServerSideProps } from '../../utils/homeServerProps';

export default function index() {
    return (
        <HomePage>
            <Film />
        </HomePage>
    );
}

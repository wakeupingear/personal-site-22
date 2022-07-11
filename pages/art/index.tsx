import Art from '../../pages-lib/art/Art';
import { HomePage } from '../../src/Pages';

export { getServerSideProps } from '../../utils/homeServerProps';

export default function index() {
    return (
        <HomePage>
            <Art />
        </HomePage>
    );
}

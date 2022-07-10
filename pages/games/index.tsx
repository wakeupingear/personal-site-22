import Games from '../../pages-lib/games/Games';
import { HomePage } from '../../src/Pages';

export { getServerSideProps } from '../../utils/homeServerProps';

export default function index() {
    return (
        <HomePage>
            <Games />
        </HomePage>
    );
}

import { HomePage } from './Pages';

export { getServerSideProps } from '../utils/homeServerProps';

export default function index() {
    return <HomePage />;
}

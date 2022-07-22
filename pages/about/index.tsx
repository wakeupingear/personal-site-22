import { About } from '@pages-lib/about/About';
import { HomePage } from '@components/pages/Pages';

export default function index() {
    return (
        <HomePage>
            <About />
        </HomePage>
    );
}

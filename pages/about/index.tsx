import { About } from '@pages-lib/about/About';
import { HomePage } from '@components/Pages';

export default function index() {
    return (
        <HomePage>
            <About />
        </HomePage>
    );
}

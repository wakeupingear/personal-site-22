import styles from './home.module.css';
import Link from 'next/link';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Sticky from 'react-stickynode';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

interface Props {
    sideOpen: boolean;
    setSideOpen: (sideOpen: boolean) => void;
}

export default function SideToggle({ sideOpen, setSideOpen }: Props) {
    return (
        <div className={styles.buttonHolder}>
            <Sticky enabled top={180}>
                <div className={styles.buttons}>
                    <ArrowBackIosNewIcon
                        onClick={() => setSideOpen(!sideOpen)}
                        className={`${styles.sideToggle} ${
                            sideOpen ? styles.sideOpen : ''
                        }`}
                    />
                    <Link href="/" scroll={false}>
                        <CloseIcon />
                    </Link>
                </div>
            </Sticky>
        </div>
    );
}

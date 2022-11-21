import { useRouter } from 'next/router';
import styles from '../styles/Toolbar.module.css'

const Toolbar = () => {
    const router = useRouter();

    return (
        <div className={styles.main}>
            <div onClick={() => router.push('/')}>Home</div>
            <div onClick={() => router.push('/feed/1')}>Feed</div>
            <div onClick={() => router.push('/eom')}>EOM</div>
            <div onClick={() => window.location.href = 'https://web.facebook.com/profile.php?id=100080474996106'}>Facebook</div>
        </div>
    )

}

export default Toolbar
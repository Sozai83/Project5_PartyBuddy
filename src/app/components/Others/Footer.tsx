import Image from 'next/image'
import Link from 'next/link'
import styles from './Footer.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faSquareGithub } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
    return (
        <section className={styles.footer}>
            <section className={styles.links}>
                <Link
                    href="https://shiori-portfolio.vercel.app/"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <Image
                        src="/chikku_logo.png"
                        width={180}
                        height={160}
                        alt="Chikku webdesign Logo"
                    />
                </Link>
                <Link
                    href="https://www.linkedin.com/in/shiori-chiku/"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <FontAwesomeIcon icon={faLinkedin} />
                </Link>
                <Link
                    href="https://github.com/Sozai83"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <FontAwesomeIcon icon={faSquareGithub} />
                </Link>
                <Link
                    href="https://shiori-portfolio.vercel.app/contact"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <FontAwesomeIcon icon={faEnvelope} />
                </Link>
            </section>
            <p>&copy; Chikku webdesign</p>
        </section >
    )
}



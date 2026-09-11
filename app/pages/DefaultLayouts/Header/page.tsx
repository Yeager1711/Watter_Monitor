'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import classNames from 'classnames/bind';
import styles from './header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

const navItems = [
    { name: 'Trang chủ', path: '/' },
    { name: 'Về chúng tôi', path: '/aboutUs' },
    { name: 'Dịch vụ', path: '/service' },
    { name: 'Bài viết', path: '/blogs' },
    { name: 'Liên Hệ', path: '/contract' },
];

function Header() {
    const pathname = usePathname();
    const [isNavBoxOpen, setIsNavBoxOpen] = useState(false);

    const toggleNavBox = () => {
        setIsNavBoxOpen(!isNavBoxOpen);
    };

    return (
        <aside
            className={cx('sidebar', {
                'display-none': pathname.includes('/template') || pathname.startsWith('/admin'),
            })}
        >
            <div className={styles.margin}>
                <div className={cx('logo', { 'logo-hidden': isNavBoxOpen })}>
                    Do <strong>Ca</strong>
                </div>
                <div className={cx('nav-container')}>
                    <div className={cx('user-container')}>
                        <div className={cx('chevron_expend', { 'chevron_expend-open': isNavBoxOpen })}>
                            <div className={cx('chevron', { 'chevron-open': isNavBoxOpen })} onClick={toggleNavBox}>
                                <FontAwesomeIcon icon={faChevronLeft} />
                            </div>
                            <ul className={cx('nav', { 'nav-open': isNavBoxOpen })}>
                                {navItems.map((item) => (
                                    <li
                                        key={item.name}
                                        className={cx({
                                            active: pathname === item.path,
                                        })}
                                    >
                                        <Link href={item.path}>{item.name}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className={cx('user_1')}>
                            <FontAwesomeIcon icon={faUser} />
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    );
}

export default Header;

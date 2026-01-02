import React from 'react';
import { useState } from 'react';
import styles from './TopBanner.module.css'; 

const TopBanner = ({ message }) => {
    const [isVisible, setIsVisible] = useState(true);

    const handleClose = () => {
        setIsVisible(false);
    }

    //only return when visible
    if (!isVisible) {
        return null;
    }

    return (
        <div className={styles.topBannerContainer}>
            <div className={styles.bannerContent}>
                <p className={styles.text}>{message}</p>
                <span className={styles.closeButton} onClick={handleClose}>
                    [&times;]
                </span>
            </div>
        </div>
    );
}

export default TopBanner;
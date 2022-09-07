import React from "react";
import styles from "./LoadingSpinner.module.css";
const LoadingSpinner = (props) => {
    return (
        <div className={styles.spinner}>
            <img
                className={styles.spinnerImg}
                src="/images/logo/favicon.png"
                alt="default loading spinner"
            />
        </div>
    );
};

export default LoadingSpinner;
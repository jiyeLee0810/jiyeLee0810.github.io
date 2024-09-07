import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css";

export const About = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hello, I'm Jiye</h1>
                <p className={styles.description}>I'm a Computer Engineering student at the University of Waterloo. I love exploring innovative ways to solve real world problems. I'm currently seeking a Winter 2025 internship and would love to connect! </p>
                <a href="#resume" className={styles.resumeBtn}>Resume</a>
            </div>
            <img src={getImageUrl("page/pageImage.png")} alt="Image of me" className={styles.pageImg}/>
            <div></div>
        </section>
    )
}
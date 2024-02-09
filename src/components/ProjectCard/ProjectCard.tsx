import { forwardRef } from "react";
import { motion } from "framer-motion";
import type { IProject } from "../../types/data";
import styles from './ProjectCard.module.scss';

export const ProjectCard: React.FC<IProject> = forwardRef((props, ref: any) => {
    const { title, description, img, link } = props;

    return (
        <a ref={ref} href={link} target="_blank" rel="noreferrer" className={styles.item}>
            <div className={styles.container}>
                <div className={styles.image__wrapper}>
                    <img src={img} />
                </div>
                <div className={styles.text__wrapper}>
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
            </div>
        </a>
    )
})

export const MProjectCard = motion(ProjectCard);
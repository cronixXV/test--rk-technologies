import styles from "./CatImage.module.css";

import { CatImageProps } from "../../types/types";

export const CatImage = ({ imageUrl }: CatImageProps) => {
  return (
    <div className={styles.container}>
      {imageUrl ? (
        <img src={imageUrl} alt="Cat" className={styles.image} />
      ) : (
        <div className={styles.placeholder}>No cat yet</div>
      )}
    </div>
  );
};

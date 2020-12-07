import React from "react";
import styles from "./Loading.module.css";
import Container from "../../components/Container";
import GradientWallpaper from "../../components/GradientWallpaper";

function Loading() {
  return (
    <Container style={{ backgroundImage: "url('/images/background.png')" }}>
      <GradientWallpaper>
        <div className={styles.LoadingContent}>
          <div className={styles.LoadingContent_Image}>
            <img
              src="/images/loading.gif"
              alt="loading"
              className={styles.LoadingImage}
            />
          </div>
          <div className={styles.LoadingContent_Text}>
            <h1 className={styles.LoadingText}>Loading...</h1>
          </div>
        </div>
      </GradientWallpaper>
    </Container>
  );
}

export default Loading;

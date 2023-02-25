import React from "react";
import Image from "next/image";

import styles from "styles/home/feature/featureblog.module.scss";

const FeatureBlog = () => (
  <>
    <div className={styles.box}>
      <p className={styles.title}>
        The Most And Least Visited Countries In The World
      </p>
      <div className={styles.info}>
        <span className="fs-12 text-muted">2 Hours ago</span>
        <div>
          <Image
            src="/assets/images/dashboard/Profile_1.jpg"
            className={styles.image}
            alt="Avatar"
            width={150}
            height={150}
          />
          <span className="fs-12 text-muted">Henry Itondo</span>
        </div>
      </div>
    </div>
  </>
);

export default FeatureBlog;

import React from "react";
import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import styles from "/styles/Navbar.module.scss";

const SocialMedia = () => (
  <ul className="social-media">
    <li>
      <FontAwesomeIcon
        className={styles.socialMediaIcon}
        icon={faFacebook}
        href="/"
      />
    </li>
    <li>
      <FontAwesomeIcon className={styles.socialMediaIcon} icon={faTwitter} />
    </li>
    <li>
      <FontAwesomeIcon className={styles.socialMediaIcon} icon={faLinkedin} />
    </li>
    <li>
      <FontAwesomeIcon className={styles.socialMediaIcon} icon={faInstagram} />
    </li>
    <li>
      <FontAwesomeIcon className={styles.socialMediaIcon} icon={faYoutube} />
    </li>
  </ul>
);

export default SocialMedia;

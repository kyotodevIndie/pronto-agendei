import React from "react";

import Link from "next/link";

import styles from "./Button.module.css";

export default function Button({ color, href, backgroundColor, children }) {
  return (
    <div className={styles.buttonContainer}>
      <Link href={href}>
        <a style={{ color: `${color}`, backgroundColor: `${backgroundColor}` }}>
          {children}
        </a>
      </Link>
    </div>
  );
}

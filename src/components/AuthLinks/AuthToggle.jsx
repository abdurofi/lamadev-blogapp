"use client";
import Link from "next/link";
import { useState } from "react";
import styles from "./authLinks.module.css";
// import { useSession } from "next-auth/react"

const AuthLinks = () => {
  const [open, setOpen] = useState(false);

  // const {status} = useSession()

  // temporary status
  const status = "unauthenticated";
  return (
    <>
      {status === "unauthenticated" ? (
        <Link className={styles.link} href="/login">
          Login
        </Link>
      ) : (
        <>
          <Link className={styles.link} href="/write">
            Write
          </Link>
          <span className={styles.link}>Logout</span>
        </>
      )}
      <div className={styles.burger} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {open && (
        <div className={styles.responsiveMenu}>
          <Link className={styles.link} href="/">
            Homepage
          </Link>
          <Link className={styles.link} href="/">
            About
          </Link>
          <Link className={styles.link} href="/">
            Contact
          </Link>
          {status === "unauthenticated" ? (
            <Link className={styles.link} href="/login">
              Login
            </Link>
          ) : (
            <>
              <Link className={styles.link} href="/write">
                Write
              </Link>
              <span className={styles.link}>Logout</span>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default AuthLinks;

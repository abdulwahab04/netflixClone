import React from "react";
import styles from "@/styles/Components/Footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <ul className={styles.icons}>
          <Link
            className={styles.facebookicon}
            href="https://www.facebook.com/netflixcanada/?brand_redir=475822799216240"
          >
            <img src="/images/facebookicon.png" alt="logo" />
          </Link>
          <Link href="https://www.instagram.com/netflix/?hl=en">
            <img src="/images/instagramicon.png" alt="logo" />
          </Link>
          <Link href="https://twitter.com/netflix?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">
            <img src="/images/twittericon.png" alt="logo" />
          </Link>
          <Link href="https://www.youtube.com/channel/UCWOA1ZGywLbqmigxE4Qlvuw">
            <img src="/images/youtubeicon.png" alt="logo" />
          </Link>
        </ul>
        <Link href="#"> Audio Description </Link>
        <Link href="#"> Investor Relations </Link>
        <Link href="#"> Privacy </Link>
        <Link href="#"> Contact Us </Link>
      </div>
      <div>
        <Link href="#"> Help Center </Link>
        <Link href="#"> Jobs</Link>
        <Link href="#"> Legal Notices </Link>
        <Link href="#"> Ad Choices </Link>
      </div>
      <div>
        <Link href="#"> Gift Cards </Link>
        <Link href="#"> Netfllix Shop </Link>
        <Link href="#"> Cookie Preferences </Link>
      </div>
      <div>
        <Link href="#"> Media Center </Link>
        <Link href="#"> Terms of Use </Link>
        <Link href="#"> Corporate Information </Link>
      </div>
    </footer>
  );
}

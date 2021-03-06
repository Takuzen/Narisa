import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Narisa</title>
        <meta
          name="description"
          content="吉祥寺でちいさな喫茶店を営んだり、畑に行ったり、料理をしたりの、日々の記録。喫茶おおねこ店主です。"
        />
        <link rel="icon" href="/logo.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.grid}>
          <Image
            className="topImage"
            src="/top.jpg"
            alt="top-img"
            width={750}
            height={500}
          ></Image>
          <section className={styles.menu}>
            <div className={styles.btn1Container}>
              <Link href="https://oonekodays.hatenadiary.com/" passHref>
                <Image
                  src="/1.png"
                  alt="tegaki1"
                  width={210}
                  height={70}
                ></Image>
              </Link>
            </div>

            <div className={styles.btn2Container}>
              <Link href="https://instagram.com/narisa9696?r=nametag" passHref>
                <Image
                  src="/2.png"
                  alt="tegaki2"
                  width={210}
                  height={70}
                ></Image>
              </Link>
            </div>

            <div className={styles.btn3Container}>
              <Link
                href="https://www.instagram.com/kissa_ooneko/?hl=en"
                passHref
              >
                <Image
                  src="/3.png"
                  alt="tegaki3"
                  width={210}
                  height={70}
                ></Image>
              </Link>
            </div>
          </section>
        </div>
      </main>
      {/*
      <footer className={styles.footer}>Narisa®︎</footer>
       */}
    </div>
  );
}

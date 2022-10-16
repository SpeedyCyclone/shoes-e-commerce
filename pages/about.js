import React from "react";
import styles from "../styles/About.module.css";
import Image from "next/image";
import { useSession } from "next-auth/react";
import Navbar from "../components/Navbar";

function About() {
  const { data: session } = useSession();

  return (
    <>
      <Navbar session={session} />
      <h1 className="page-heading">About Lorem Ipsum</h1>

      <div className={styles.container}>
        <section className={styles.main}>
          <p className={styles.p}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            quis, fuga dicta, optio doloribus facere veniam officia sunt maxime
            cum eos nisi! Ipsam molestias maiores saepe quis placeat. Tempora,
            mollitia explicabo maxime ut quas itaque nisi fuga quae officiis
            accusamus ab consectetur dicta placeat, totam velit assumenda in ex
            tenetur! Unde atque sed quisquam quas autem deserunt dicta harum
            inventore, vero, velit aliquam consequuntur ut ratione. Quis dolor
            et totam voluptate repellendus enim esse vel suscipit delectus
            laboriosam dolorum, sapiente odio tempore voluptates, praesentium
            expedita qui nostrum dicta eaque. Voluptatem ad cum porro fugiat ex
            odio, fuga impedit officiis quia recusandae exercitationem omnis nam
            autem explicabo eligendi debitis doloribus maiores illum error!
            Perspiciatis, nihil. Error, sit repellendus dicta dignissimos
            molestias libero aspernatur! Inventore nihil debitis explicabo fuga
            voluptates.
          </p>
          <br />
          {/* <Image
            src={"/images/favicon.png"}
            alt=""
            width="500"
            height="500"
            className={styles.logo}
          /> */}
        </section>
        <aside className={styles.sidebar}>
          <p className={styles.red}>ANNOUNCEMENT!</p>
          <div className={styles.sidetext}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti
            consequatur dolore eos doloribus, quas tempore. Vitae architecto
            distinctio assumenda deserunt ut nisi minus eveniet, dolore modi
            tenetur explicabo, laboriosam repudiandae inventore illum.
          </div>
        </aside>
      </div>
      <div className={styles.stats}>
        <div className={styles.component}>
          <Image src={"/images/usp.png"} width={80} height={80} />

          <h6 className={styles.text}>Wide Range of Products</h6>
        </div>
        <div className={styles.component}>
          <Image src={"/images/usp2.png"} width={80} height={80} />

          <h6 className={styles.text}>Multiple Stores</h6>
        </div>
        <div className={styles.component}>
          <Image src={"/images/usp3.png"} width={80} height={80} />

          <h6 className={styles.text}>Happy Customers</h6>
        </div>
        <div className={styles.component}>
          <Image src={"/images/usp4.png"} width={80} height={80} />

          <h6 className={styles.text}>Satisfaction Guaranteed</h6>
        </div>
      </div>
    </>
  );
}

export default About;

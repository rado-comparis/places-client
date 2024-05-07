import { useEffect, useState } from "react";
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import Container from "../components/container";


export default function Home() {

  const [allplace, setData] = useState([]);
// todo move to api folder
  useEffect(() => {
    fetch("/places")
      .then((res) => res.json())
      .then((data) => { 
        setData(data.data);
       });
  }, []);

  return (
    <Container>
      <Head>
        <title>place test app</title>
      </Head>

          {allplace.length ? (
          allplace.map((place) => (
            <article key={place.id}>
              <div className={styles.div}>
                <div>
                  <h2>
                  <Link
                    as={`/place/${place.id}`}
                    href="/place/[id]]"
                  >
                    {place.name}
                  </Link>
                  </h2>
                </div>
                <div>
                  <h3 id={place.address} className={styles.h3}>{place.address}</h3>
                </div>  
              </div>            
            </article>
          ))
          ) : (
            <p>No blog</p>
          )}
    </Container>
  );
}

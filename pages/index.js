import { useEffect, useState } from "react";
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import Container from "../components/container";


export default function Home() {

  const [allplace, setData] = useState([]);
// todo move to api folder
  useEffect(() => {
    fetch("http://localhost:3001/v1/places")
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
                  <h2>{place.name}</h2>
                </div>
                <div>
                  <h3 id={place.address} className={styles.h3}>{place.address}</h3>
                </div>  
              </div>            
              <div className={styles.div}>
                <p>Opening hours: </p>
                {place.opening_hours.days.tuesday[0].start}
                  {/* {place.opening_hours.days.tuesday.map((item) => (<div><p>{item[0].start}</p></div>))} */}
              </div>
            </article>
          ))
          ) : (
            <p>No blog</p>
          )}
    </Container>
  );
}

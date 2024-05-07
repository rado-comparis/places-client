import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Container from "../../components/container.js";
import OpeningHour from "../opening-hour/opening-hour.js";

export default function Post() {
  const router = useRouter();
  const { id } = router.query;
  const [currentPlace, setData] = useState([]);

  useEffect(() => {
    if (id) {
      // todo move to api folder
      fetch(`/place/${id}`)
        .then((res) => res.json())
        .then((data) => { 
          setData(data.data);
        });
      }
  }, [id]);


    return(
    <Container>
      {router.isFallback ? (
        <div>Loading…</div>
      ) : (
        <div>
          <article>
            <header>
              <h1>{currentPlace.name}</h1>
              <div>
                {currentPlace.address}
              </div>
              {currentPlace.opening_hours ? (
                <div>
                  <OpeningHour hours={currentPlace.opening_hours} />
              </div>
              ) : null}
            </header>
          </article>
        </div>
      )}
    </Container>);
  }
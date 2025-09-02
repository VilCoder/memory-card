import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function Card({ url, title }) {
  return (
    <figure className="card">
      <img className="card__image" src={url} alt={title} loading="lazy" />
      <figcaption className="card__text">{title}</figcaption>
    </figure>
  );
}

function ListOfCards({ cards, onClick }) {
  const cardsContainer = useRef();

  useGSAP(
    () => {
      gsap.to(".list__item", {
        opacity: 1,
        stagger: 0.2,
      });
    },
    { scope: cardsContainer }
  );

  return (
    <ul ref={cardsContainer} className="main__list">
      {cards?.map((card) => (
        <li
          className="list__item"
          key={card.id}
          onClick={() => onClick(card.id)}
        >
          <Card url={card.image} title={card.name} />
        </li>
      ))}
    </ul>
  );
}

export function Cards({ cards, onClick }) {
  const hasResults = cards.length > 0;
  return hasResults ? (
    <ListOfCards cards={cards} onClick={onClick} />
  ) : (
    <p>No Results</p>
  );
}

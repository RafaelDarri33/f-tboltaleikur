"use client";

import Link from "next/link";
import styles from "./rules.module.css";

const Rules = () => {
  return (
    <div className={styles.rules}>
      <h1>Reglur</h1>
      <ul>
        <li>Regla 1: Notaðu örvatakkana til að hreyfa þig upp og niður.</li>
        <li>Regla 2: Maður fær 1 stig fyrir að skora mark.</li>
        <li>Regla 3: Hver leikur er upp í 10</li>
        <li>
          Regla 4: Leikurinn byrjar eftir 5 sek eftir að þú hefur farið inn í
          leik og eftir 5 sek er skjárinn læstur á meðan þú spilar ef þú vilt
          hætta þá smelliru á "Viltu hætta?" takkann til þess að fara aftur á
          byrjunarreit.
        </li>
        <li>Það er því miður bara hægt að spila í tölvu.</li>
        <li>Eitt í LOKIN nærð þú að sigra AI ég nú held ekki.</li>
      </ul>
      <Link href="/" className={styles.backLink}>
        Til baka
      </Link>
    </div>
  );
};

export default Rules;

import React, { useState, useRef } from "react";

import styles from "./Testimonials.module.css";

export default function Testimonials() {
  const items = useRef(null);
  const dots = useRef(null);

  const [isVisible1, setIsVisible1] = useState(true);
  const [isVisible2, setIsVisible2] = useState(true);
  const [dotActiveStyle, setDotActiveStyle] = useState(0);

  function handlePrev() {
    items.current.scrollLeft -= 200;
    setDotActiveStyle(dotActiveStyle >= 1 ? dotActiveStyle - 1 : 0);
  }
  function handleNext() {
    items.current.scrollLeft += 200;
    setDotActiveStyle(dotActiveStyle <= 2 ? dotActiveStyle + 1 : 3);
  }

  function handleMouseEnter1() {
    setIsVisible1(false);
  }
  function handleMouseLeave1() {
    setIsVisible1(true);
  }

  function handleMouseEnter2() {
    setIsVisible2(false);
  }
  function handleMouseLeave2() {
    setIsVisible2(true);
  }
  return (
    <>
      <div className={styles.testimonialsContainer}>
        <h1>Dá uma olhada no que estes clientes têm a dizer</h1>

        <div className={styles.items_wrapper}>
          <div className={styles.icons}>
            <div
              onPointerEnter={handleMouseEnter1}
              onPointerLeave={handleMouseLeave1}
              onClick={handlePrev}
            >
              <img
                src={isVisible1 ? "icons/prev.svg" : "icons/prevHover.svg"}
                style={isVisible1 ? {} : { transform: "rotate(180deg)" }}
                alt="prev icon"
              />
            </div>
            <div
              onPointerEnter={handleMouseEnter2}
              onPointerLeave={handleMouseLeave2}
              onClick={handleNext}
            >
              <img
                src={isVisible2 ? "icons/prev.svg" : "icons/prevHover.svg"}
                style={isVisible2 ? {} : { transform: "rotate(180deg)" }}
                alt="Next icon"
              />
            </div>
          </div>

          <div className={styles.items} ref={items}>
            <div className={styles.item}>
              <div className={styles.content}>
                <img src="user_01.svg" />
                <span>Camila Borda diz:</span>
                <p>
                  “Com o ProntoAgendei encontrei a Dr. Roberta que é uma das
                  melhoras profissionais que já me atendeu. Uso e indico"
                </p>
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.content}>
                <img src="user_02.svg" />
                <span>Fernando Cardoso diz:</span>
                <p>
                  “Fiz uma rápida pesquisa no Google e logo ele indicou a
                  plataforma. Dessa forma conseguir resolver meu problema em
                  alguns minutos”
                </p>
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.content}>
                <img src="user_03.svg" />
                <span>Soraya Diniz diz:</span>
                <p>
                  ”Mesmo não sendo muito boa com internet, consegui encontrar o
                  meu fisioterapeuta de forma simples. Recomendo!”
                </p>
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.content}>
                <img src="user_01.svg" />
                <span>Camila Borda diz:</span>
                <p>
                  “Com o ProntoAgendei encontrei a Dr. Roberta que é uma das
                  melhoras profissionais que já me atendeu. Uso e indico"
                </p>
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.content}>
                <img src="user_02.svg" />
                <span>Fernando Cardoso diz:</span>
                <p>
                  “Fiz uma rápida pesquisa no Google e logo ele indicou a
                  plataforma. Dessa forma conseguir resolver meu problema em
                  alguns minutos”
                </p>
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.content}>
                <img src="user_03.svg" />
                <span>Soraya Diniz diz:</span>
                <p>
                  ”Mesmo não sendo muito boa com internet, consegui encontrar o
                  meu fisioterapeuta de forma simples. Recomendo!”
                </p>
              </div>
            </div>
          </div>
        </div>

        {console.log(dotActiveStyle)}
        <div className={styles.dots}>
          {dotActiveStyle === 0 ? (
            <>
              <div className={styles.dotActive} />
              <div className={styles.dot} />
              <div className={styles.dot} />
              <div className={styles.dot} />
            </>
          ) : (
            <></>
          )}
          {dotActiveStyle === 1 ? (
            <>
              <div className={styles.dot} />
              <div className={styles.dotActive} />
              <div className={styles.dot} />
              <div className={styles.dot} />
            </>
          ) : (
            <></>
          )}
          {dotActiveStyle === 2 ? (
            <>
              <div className={styles.dot} />
              <div className={styles.dot} />
              <div className={styles.dotActive} />
              <div className={styles.dot} />
            </>
          ) : (
            <></>
          )}
          {dotActiveStyle === 3 ? (
            <>
              <div className={styles.dot} />
              <div className={styles.dot} />
              <div className={styles.dot} />
              <div className={styles.dotActive} />
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
}

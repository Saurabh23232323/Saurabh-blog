import Image from "next/image";

import classes from "./hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/Saurabh.jpg"
          alt="Saurabh"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Saurabh</h1>
      <p>
        I blog about web development - especially frontend frameworks like
        React.
      </p>
    </section>
  );
}

export default Hero;

import Image from "next/image";

import classes from "./hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image src="/images/site/xiang.jpg" width={300} height={300} />
      </div>
      <h1>Hi, I am Xiang</h1>
      <p>this is the description</p>
    </section>
  );
}
export default Hero;

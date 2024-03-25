"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
{/*

By day, I'm a college student conquering the world of Computer Science (B.E. CSE) with a fire for code. By night, I transform into Mystic, a web developer crafting experiences with React and Next.js. But my adventures don't stop there! I dabble in building mobile apps with Flutter and create immersive worlds with the Unity game engine.

Leadership runs through my veins. I lead ARCHers, a passionate development group dedicated to technical growth, hackathon glory, and crafting incredible projects. Speaking of hackathons, I'm no stranger to the battlefield. With over 10 conquests under my belt, I've consistently placed in the top 10 (except that first one, everyone has a learning curve!). But that's not all - my winning streak currently sits at a mighty 5 in a row!

When I'm not building the next big thing, you'll find me conquering virtual worlds (gotta refuel that creative spark!), engrossed in a captivating movie, or hanging out with my furry friend.  Learning is an endless journey for me, and I'm currently exploring the depths of history and philosophy while also strumming my way to guitar mastery (one day!).
When I'm not building the next big thing, you'll find me unwinding with some video games, jamming out to rap music, or getting lost in the rabbit hole of YouTube. My free time is all about fun and exploration, whether it's discovering new tech or just relaxing and enjoying some entertainment.
Let's build something amazing together!
*/}

      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
      By day, I'm a college student conquering the world of { ' '}
        <span className="font-medium">Computer Science (B.E. CSE) </span>, with a fire for code. By night, I transform into Mystic, a web developer crafting experiences with React and Next.js. {" "}
        <span className="font-medium">But my adventures don't stop there! I dabble in building mobile apps with Flutter and create immersive worlds with the Unity game engine</span>.{" "}
        <span className="italic">Leadership runs through my veins. I lead ARCHers, a passionate development group dedicated to technical growth, hackathon glory, and crafting incredible projects. </span> Speaking of hackathons, I'm no stranger to the battlefield. With over <span className="underline"> 10 conquests under my belt</span> , I've consistently placed in the top 10 (except that first one, everyone has a learning curve!). 
        <span className="font-medium">
        But that's not all - my winning streak currently sits at a mighty 5 in a row!{" "}
        </span>
        
        <span className="font-medium"></span> 
   
      </p>

      <p>
        <span className="italic">When I'm not building the next big thing, you'll find me unwinding with some video games, jamming out to rap music, or getting lost in the rabbit hole of YouTube.,</span>My free time is all about fun and exploration
        <span className="font-medium">whether it's discovering new tech or just relaxing and enjoying some entertainment.
Let's build something amazing together!</span>. I'm always looking for new opportunities to learn and grow as a developer. I'm excited to see where my journey will take me next!
        <span className="font-medium"></span>. Let's build something amazing togethe
      </p>
    </motion.section>
  );
}

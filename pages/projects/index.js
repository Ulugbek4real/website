import React from "react";
import Layout from "../../components/layout/Layout";
import wordle from "../../public/wordle.png";
import visualizer from "../../public/visualizer.png";
import website from "../../public/website.png";
import Project from "../../components/projects/Project";

const index = () => {
  return (
    <div>
      <Layout>
        <main className="mt-12 max-w-3xl w-full px-4 flex flex-col gap-16 my-0 mx-auto tracking-wide">
          <Project
            source="https://github.com/Ulugbek4real/searchAlgorithms-visualizer"
            desc="I made a search algorithm visualizer that demonstrates the operation of popular algorithms in a visual and interactive way. Built using Next.js, the project can be super effective in simplifying complex ideas."
            path="/projects/visualizer"
            img={visualizer}
            name="Path Finding Visualizer"
          />
          <Project
            source="https://github.com/Ulugbek4real/website/blob/main/pages/projects/wordle"
            desc="Using Next.js, I made more addictive version of Wordle that allows you to play anytime. It keeps track of your progress, and is highly interactive and user-friendly."
            path="/projects/wordle"
            img={wordle}
            name="Wordle anytime"
          />
          <Project
            source="https://github.com/Ulugbek4real/website/"
            desc="Utilizing NEXT.js for the front-end and Notion's API for data management, the website received high praise for its smooth functionality and visually appealing design, with users noting the clever use of Notion as a back-end and the similarities in aesthetic to Medium.com."
            path="/posts/a3bb7d99-94b8-4e21-a2f2-d01162694849"
            img={website}
            name="My Website"
          />
        </main>
      </Layout>
    </div>
  );
};

export default index;

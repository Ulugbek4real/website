import Layout from "../../components/layout/Layout";
import Link from "../../components/links/Link";
import { FaGithub, FaLinkedin, FaTelegram, FaInstagram, FaTwitterSquare } from "react-icons/fa";
import { GiPunch } from "react-icons/gi";
import Image from "next/image";
import UzAnalitikaLogo from "../../public/Uzanalitika_logo.svg";

import Head from "next/head";

const Links = () => {
  return (
    <Layout>
      <Head>
        <title>Ulugbek's Links</title>
        <meta property="og:site_name" content="Ulugbek's website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="I am Ulugbek Nurmatov, a 23-year-old Software Engineer from Uzbekistan, currently living in Seoul, South Korea."
        />
        <meta
          name="og:image"
          content="https://ulugbek4real.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FmyProf.66dc75d2.jpg&w=2048&q=75"
        />
        <link rel="icon" href="/logoPng.png" />
        <meta name="theme-color" content="#000000" />
      </Head>

      <main className="mt-12 max-w-3xl w-full px-4 flex flex-col gap-4 my-0 mx-auto">
        {/* <Link
          name="GITHUB"
          url="https://github.com/Ulugbek4real"
          text="My open-source projects"
          icon=<FaGithub className=" dark:text-neutral-100 text-2xl platform-icon" />
        /> */}
        <Link
          name="UzAnalitika"
          url="https://uzanalitika.uz"
          text="Uzum uchun mukammal analitika"
          icon={
            <Image
              className=" dark:text-neutral-100 text-2xl platform-icon"
              src={UzAnalitikaLogo}
              alt="UzAnalitika logo"
              width={32}
              height={32}
            />
          }
        />
        <Link
          name="LINKEDIN"
          url="https://www.linkedin.com/in/ulugbek4real/"
          text="My professional profile"
          icon={<FaLinkedin className=" dark:text-neutral-100 text-2xl platform-icon" />}
        />
        <Link
          name="INSTAGRAM"
          url="https://www.instagram.com/ulugbek4real/"
          text="@ulugbek4real"
          icon={<FaInstagram className=" dark:text-neutral-100 text-2xl platform-icon" />}
        />
        <Link
          name="JIU-JITSU"
          url="https://www.instagram.com/bjj_ground/"
          text="Jiu-jitsu Ground"
          icon={<GiPunch className=" dark:text-neutral-100 text-2xl platform-icon" />}
        />
        {/* <Link
          name="Threads"
          url="https://www.threads.net/@ulugbek4real"
          text="@ulugbek4real"
          icon={<FaInstagram className=" dark:text-neutral-100 text-2xl platform-icon" />}
        /> */}
        <Link
          name="TWITTER"
          url="https://twitter.com/ulugbek4real"
          text="@ulugbek4real"
          icon={<FaTwitterSquare className=" dark:text-neutral-100 text-2xl platform-icon" />}
        />
        <Link
          name="TELEGRAM"
          url="https://t.me/ulugbek4real"
          text="@ulugbek4real"
          icon={<FaTelegram className=" dark:text-neutral-100 text-2xl platform-icon" />}
        />
      </main>
    </Layout>
  );
};

export default Links;

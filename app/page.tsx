"use client"

import Image from "next/image";
import smashing from "public/images/home/smashing.jpg";
import tevProfile from "public/images/profile/tev_profile.png";
import reactathon from "public/images/home/reactathon.jpg";
import ship from "public/images/home/ship.jpg";
import filming from "public/images/home/filming.jpg";
import meetups from "public/images/home/meetups.jpg";
import summit from "public/images/home/summit.jpg";
import avatar from "app/avatar.jpg";
import Uoft from "public/images/logos/uoft.svg";
import Meta from "public/images/projects/meta.svg"
import React from "react";
import { Suspense } from "react";

function Badge(props) {
  return (
    <a
      {...props}
      target="_blank"
      className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded p-1 text-sm inline-flex items-center leading-4 text-neutral-900 dark:text-neutral-100 no-underline"
    />
  );
}

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Page() {
  const [tab, setTab] = React.useState(1);
  const handleTabClick = (selectedTab) => {
    setTab(selectedTab);
  };

  React.useEffect(() => {
    console.log(tab)
  }, [tab])
  return (
    <section>
      <h1 className="font-bold text-2xl mb-8 tracking-tighter">
        Welcome, my name is Tevan 👋
      </h1>
      <p className="prose prose-neutral dark:prose-invert">
        {`I'm a NYC-based Software Engineer who focuses on backend development, artificial intelligence, and cloud systems. I currently
        work as a Software Engineer at `}
        <span className="not-prose">
          <Badge href="https://oracle.com">
            <svg
              width="13"
              height="11"
              viewBox="0 0 33 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="inline-flex mr-1"
            >
              <path
                fill="none"
                stroke="#C74634"
                stroke-width="4"
                d="m10,2a8,8 0 1,0 0,16h12a8,8 0 1,0 0-16z"
              />
            </svg>
            Oracle
          </Badge>
        </span>
        {`, where I work on Applications and Infrastructure for Oracle Health and AI, using `}
        <Badge>JavaScript</Badge>
        {` , `}
        <Badge>Ruby on Rails</Badge>
        {` , and `}
        <Badge>Python</Badge>.
      </p>

      <div className="gap-4 my-8">
        <h3 className="font-bold text-2xl mb-4 tracking-tighter">
          My Background
        </h3>
        <p className="prose prose-neutral dark:prose-invert">
          {`I graduated from the `}{" "}
          <span className="not-prose">
            <Badge href="https://www.utoronto.ca/">
              <Uoft />
              University of Toronto
            </Badge>
          </span>
          {` with an Honors Bachelors of Science (High Distinction), 
          Specializing in Computer Science with a Focus in Artificial Intelligence.`}
        </p>
      </div>

      {/* <div className="columns-2 sm:columns-3 gap-4 my-8">
        <div className="relative h-40 mb-4">
          <Image
            alt="Me speaking on stage at React Summit about the future of Next.js"
            src={summit}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative h-80 mb-4 sm:mb-0">
          <Image
            alt="Me, Lydia, and Delba filming the Next.js Conf keynote"
            src={filming}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover object-[-16px] sm:object-center"
          />
        </div>
        <div className="relative h-40 sm:h-80 sm:mb-4">
          <Image
            alt="Me standing on stage at Reactathon delivering the keynote"
            src={reactathon}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover object-top sm:object-center"
          />
        </div>
        <div className="relative h-40 mb-4 sm:mb-0">
          <Image
            alt="Me standing on stage at SmashingConf giving a talk about my optimism for the web"
            src={smashing}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative h-40 mb-4">
          <Image
            alt="Me and Guillermo Rauch on stage for Vercel Ship, answering questions from the Next.js community"
            src={ship}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative h-80">
          <Image
            alt="My badge on top of a pile of badges from a Vercel meetup we held"
            src={meetups}
            fill
            sizes="(min-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
      </div> */}
      <p className="prose prose-neutral dark:prose-invert">
        {`In my free time I like finding new restaurants, bouldering, working on my Spotify playlists, and playing my electric and acoustic Guitars 
          (Fender Telecaster and Seagull S6 respectively).`}
      </p>
      <h3 className="font-bold text-2xl mb-4 tracking-tighter">
        Fun Projects
      </h3>
      <ul
        className="mb-5 flex list-none flex-row flex-wrap border-b-0 pl-0"
        role="tablist"
        data-te-nav-ref>
        <div className="my-8 flex flex-row space-x-2 w-full h-14 overflow-x-auto">
          <button onClick={() => handleTabClick(1)} className={`border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4 ${tab == 1 ? "bg-slate-200":""}`}>
            <div className="flex items-center font-bold">
              <Meta height={50} width={20}/>
              <span className="ml-2">LLM Firm</span>
            </div>
          </button>
          {/* <button onClick={() => handleTabClick(2)} className={`border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4 ${tab == 2 ? "bg-slate-200":""}`}>
            <svg
              width="100"
              height="19"
              viewBox="0 0 100 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-[#1F1F1F] dark:text-neutral-100"
            >
              <g clipPath="url(#clip0_52_607)">
                <path
                  d="M26.0576 11.2253C26.1607 12.1671 27.0377 13.7816 29.5826 13.7816C31.8006 13.7816 32.8669 12.4025 32.8669 11.0571C32.8669 9.84622 32.0242 8.85397 30.3564 8.51758L29.1526 8.26534C28.6884 8.18125 28.379 7.92899 28.379 7.52535C28.379 7.05443 28.8604 6.70129 29.4623 6.70129C30.4251 6.70129 30.7862 7.32353 30.855 7.81127L32.7636 7.39082C32.6605 6.49946 31.8523 5.00269 29.4451 5.00269C27.6223 5.00269 26.2812 6.23039 26.2812 7.71034C26.2812 8.87077 27.0204 9.82942 28.654 10.1826L29.7717 10.4349C30.4251 10.5694 30.6831 10.8721 30.6831 11.2421C30.6831 11.6794 30.322 12.0662 29.5654 12.0662C28.5681 12.0662 28.0693 11.4607 28.0179 10.8048L26.0576 11.2253Z"
                  fill="currentColor"
                />
                <path
                  d="M40.1756 13.5293H42.3594C42.325 13.2434 42.2734 12.6716 42.2734 12.0325V5.25488H39.9863V10.0648C39.9863 11.0234 39.4018 11.6961 38.3873 11.6961C37.3212 11.6961 36.8397 10.9561 36.8397 10.0312V5.25488H34.5527V10.4853C34.5527 12.2848 35.7219 13.7479 37.7682 13.7479C38.6622 13.7479 39.6428 13.4116 40.107 12.6379C40.107 12.9743 40.1412 13.3611 40.1756 13.5293Z"
                  fill="currentColor"
                />
                <path
                  d="M47.0006 16.7247V12.7221C47.4132 13.2771 48.2731 13.7312 49.4424 13.7312C51.8325 13.7312 53.4314 11.8812 53.4314 9.37531C53.4314 6.91992 52.0044 5.06995 49.5283 5.06995C48.256 5.06995 47.3103 5.62491 46.9319 6.26402V5.25494H44.7139V16.7247H47.0006ZM51.1789 9.39214C51.1789 10.8721 50.2505 11.7298 49.0812 11.7298C47.9121 11.7298 46.9664 10.8553 46.9664 9.39214C46.9664 7.92899 47.9121 7.07127 49.0812 7.07127C50.2505 7.07127 51.1789 7.92899 51.1789 9.39214Z"
                  fill="currentColor"
                />
                <path
                  d="M54.7266 11.2757C54.7266 12.5707 55.8269 13.7648 57.6326 13.7648C58.8875 13.7648 59.6958 13.193 60.1255 12.5371C60.1255 12.8566 60.16 13.3107 60.2116 13.5293H62.3094C62.2577 13.2434 62.2064 12.6548 62.2064 12.2176V8.14761C62.2064 6.48263 61.209 5.00269 58.5267 5.00269C56.2569 5.00269 55.0359 6.43217 54.8985 7.72717L56.9274 8.14761C56.9963 7.42445 57.5465 6.80219 58.5436 6.80219C59.5068 6.80219 59.971 7.2899 59.971 7.87853C59.971 8.16444 59.8164 8.3999 59.3348 8.46716L57.2543 8.76988C55.8443 8.9717 54.7266 9.79576 54.7266 11.2757ZM58.1138 12.0998C57.3746 12.0998 57.0133 11.6289 57.0133 11.1412C57.0133 10.5021 57.4775 10.1826 58.0624 10.0985L59.971 9.81259V10.1826C59.971 11.6458 59.0768 12.0998 58.1138 12.0998Z"
                  fill="currentColor"
                />
                <path
                  d="M66.73 13.5293V12.5202C67.1768 13.2266 68.0709 13.7312 69.2403 13.7312C71.6479 13.7312 73.2298 11.8643 73.2298 9.35848C73.2298 6.90306 71.8024 5.03628 69.3263 5.03628C68.0709 5.03628 67.1425 5.57445 66.7642 6.16305V1.35315H64.5117V13.5293H66.73ZM70.9425 9.37528C70.9425 10.8889 70.0141 11.7298 68.8448 11.7298C67.6928 11.7298 66.73 10.8721 66.73 9.37528C66.73 7.86167 67.6928 7.0376 68.8448 7.0376C70.0141 7.0376 70.9425 7.86167 70.9425 9.37528Z"
                  fill="currentColor"
                />
                <path
                  d="M74.5254 11.2757C74.5254 12.5707 75.6257 13.7648 77.4312 13.7648C78.6863 13.7648 79.4948 13.193 79.9244 12.5371C79.9244 12.8566 79.959 13.3107 80.0104 13.5293H82.1082C82.0569 13.2434 82.0053 12.6548 82.0053 12.2176V8.14761C82.0053 6.48263 81.0078 5.00269 78.3254 5.00269C76.0557 5.00269 74.8349 6.43217 74.6973 7.72717L76.7261 8.14761C76.7951 7.42445 77.3454 6.80219 78.3424 6.80219C79.3056 6.80219 79.7698 7.2899 79.7698 7.87853C79.7698 8.16444 79.6151 8.3999 79.1335 8.46716L77.0531 8.76988C75.6431 8.9717 74.5254 9.79576 74.5254 11.2757ZM77.9128 12.0998C77.1734 12.0998 76.8121 11.6289 76.8121 11.1412C76.8121 10.5021 77.2763 10.1826 77.8612 10.0985L79.7698 9.81259V10.1826C79.7698 11.6458 78.8756 12.0998 77.9128 12.0998Z"
                  fill="currentColor"
                />
                <path
                  d="M83.5879 11.2253C83.6908 12.1671 84.5679 13.7816 87.1127 13.7816C89.3309 13.7816 90.3968 12.4025 90.3968 11.0571C90.3968 9.84622 89.5545 8.85397 87.8865 8.51758L86.6827 8.26534C86.2185 8.18125 85.9092 7.92899 85.9092 7.52535C85.9092 7.05443 86.3905 6.70129 86.9924 6.70129C87.9555 6.70129 88.3165 7.32353 88.3855 7.81127L90.2939 7.39082C90.1906 6.49946 89.3826 5.00269 86.9753 5.00269C85.1524 5.00269 83.8115 6.23039 83.8115 7.71034C83.8115 8.87077 84.5505 9.82942 86.1843 10.1826L87.302 10.4349C87.9555 10.5694 88.2134 10.8721 88.2134 11.2421C88.2134 11.6794 87.8523 12.0662 87.0956 12.0662C86.0982 12.0662 85.5998 11.4607 85.5481 10.8048L83.5879 11.2253Z"
                  fill="currentColor"
                />
                <path
                  d="M93.8705 8.45033C93.9222 7.69354 94.5757 6.81898 95.7621 6.81898C97.0688 6.81898 97.6192 7.62627 97.6537 8.45033H93.8705ZM97.8773 10.603C97.602 11.343 97.0174 11.8644 95.9513 11.8644C94.8163 11.8644 93.8705 11.0739 93.8192 9.98079H99.8717C99.8717 9.94711 99.906 9.61077 99.906 9.29122C99.906 6.634 98.3414 5.00269 95.7277 5.00269C93.5612 5.00269 91.5664 6.71808 91.5664 9.35851C91.5664 12.1503 93.6125 13.7816 95.9341 13.7816C98.0146 13.7816 99.3559 12.5875 99.7859 11.158L97.8773 10.603Z"
                  fill="currentColor"
                />
                <path
                  d="M10.9654 18.5433C10.4732 19.1488 9.47531 18.8171 9.46345 18.0439L9.29004 6.73621H17.0731C18.4828 6.73621 19.2691 8.32684 18.3925 9.4054L10.9654 18.5433Z"
                  fill="url(#paint0_linear_52_607)"
                />
                <path
                  d="M10.9654 18.5433C10.4732 19.1488 9.47531 18.8171 9.46345 18.0439L9.29004 6.73621H17.0731C18.4828 6.73621 19.2691 8.32684 18.3925 9.4054L10.9654 18.5433Z"
                  fill="url(#paint1_linear_52_607)"
                  fillOpacity="0.2"
                />
                <path
                  d="M7.79949 0.34824C8.29166 -0.257305 9.28959 0.0744903 9.30145 0.847616L9.37744 12.1553H1.69177C0.281999 12.1553 -0.504254 10.5647 0.372382 9.48614L7.79949 0.34824Z"
                  fill="#3ECF8E"
                />
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear_52_607"
                  x1="9.29004"
                  y1="9.24342"
                  x2="16.1582"
                  y2="12.192"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#249361" />
                  <stop offset="1" stopColor="#3ECF8E" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_52_607"
                  x1="6.22326"
                  y1="5.14143"
                  x2="9.26444"
                  y2="11.0016"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop />
                  <stop offset="1" stopOpacity="0" />
                </linearGradient>
                <clipPath id="clip0_52_607">
                  <rect width="100" height="19" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button>
          <button onClick={() => handleTabClick(3)} className={`border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4 ${tab == 3 ? "bg-slate-200":""}`}>
            <svg
              width="96"
              height="19"
              viewBox="0 0 96 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.6 3.91875C13.4769 3.8 13.3538 3.74063 13.1692 3.8H11.3846C11.1385 3.8 10.8923 3.91875 10.7692 4.09688L6.95385 8.84688L4.86154 4.09688C4.73846 3.85938 4.49231 3.74063 4.24615 3.8H2.52308C2.21538 3.8 1.90769 3.97812 1.90769 4.275L0 14.725C0 14.8438 0 15.0219 0.0615385 15.1406C0.184615 15.2594 0.307692 15.3188 0.492308 15.2594H2.27692C2.58462 15.2594 2.89231 15.0219 2.89231 14.725L4 8.55L5.78462 12.5281C5.84615 12.7063 6.03077 12.825 6.21538 12.7656C6.4 12.7656 6.58462 12.6469 6.70769 12.5281L9.90769 8.55L8.8 14.725C8.73846 14.8438 8.8 15.0219 8.86154 15.1406C8.98462 15.2594 9.10769 15.3188 9.29231 15.2594H11.0769C11.3846 15.2594 11.6923 15.0219 11.6923 14.725L13.6 4.275C13.6615 4.15625 13.6615 4.0375 13.6 3.91875ZM21.7846 4.21562C21.7231 3.91875 21.4769 3.68125 21.1692 3.74063H18.8308C18.6462 3.74063 18.5231 3.74062 18.4 3.85938C18.2769 3.97813 18.2154 4.09687 18.1538 4.21562L12.5538 14.6062C12.4308 14.725 12.4308 14.9031 12.4923 15.0813C12.5538 15.2 12.7385 15.3188 12.8615 15.2594H14.8923C15.2 15.2594 15.5077 15.0813 15.5692 14.7844L16.4923 13.0625H20.2462L20.4923 14.725C20.4923 15.0219 20.7385 15.2594 21.0462 15.2C21.0462 15.2 21.0462 15.2 21.1077 15.2H23.0769C23.2615 15.2 23.3846 15.1406 23.5077 15.0219C23.6308 14.9031 23.6308 14.725 23.6308 14.5469L21.7846 4.21562ZM17.5385 10.6281L19.5692 6.70937L20.1231 10.6281H17.5385ZM30.5846 9.14375L35.5692 4.45312C35.6923 4.33437 35.7538 4.15625 35.7538 3.97812C35.6923 3.8 35.5692 3.68125 35.3846 3.74063H33.1692C32.8615 3.8 32.5538 3.91875 32.3692 4.15625L28.6769 7.6L29.2923 4.275C29.3538 4.15625 29.2923 3.97813 29.2308 3.85938C29.1077 3.74062 28.9846 3.68125 28.8 3.74063H26.8923C26.5846 3.74063 26.2769 3.91875 26.2769 4.21562L24.3692 14.6656C24.3077 14.7844 24.3692 14.9625 24.4308 15.0813C24.5538 15.2 24.6769 15.2594 24.8615 15.2H26.7692C27.0769 15.2 27.3846 15.0219 27.3846 14.725L28.1846 10.45L30.7692 14.7844C30.8923 15.0813 31.1385 15.2594 31.5077 15.2594H33.4769C33.6615 15.2594 33.8462 15.2 33.9077 15.0219C33.9692 14.8438 33.9692 14.6656 33.8462 14.5469L30.5846 9.14375ZM43.2615 8.37187C43.1385 8.25313 43.0154 8.25313 42.8923 8.25313H38.7692L39.1385 6.23438H43.5077C43.8154 6.23438 44.1231 6.05625 44.1231 5.7L44.3692 4.33437C44.4308 4.21563 44.3692 4.0375 44.3077 3.91875C44.1846 3.8 44.0615 3.74063 43.8769 3.8H37.1077C36.8 3.8 36.5538 3.97812 36.4923 4.275L34.5846 14.725C34.5231 14.8438 34.5846 15.0219 34.6462 15.1406C34.7692 15.2594 34.8923 15.3188 35.0769 15.2594H41.9077C42.2154 15.2594 42.5231 15.0219 42.5231 14.725L42.7692 13.3594C42.8308 13.2406 42.7692 13.0625 42.7077 12.9437C42.5846 12.825 42.4615 12.7656 42.2769 12.825H37.9077L38.3385 10.6281H42.4615C42.7692 10.6281 43.0769 10.3906 43.0769 10.0938L43.3231 8.7875C43.3846 8.60938 43.3231 8.49063 43.2615 8.37187ZM53.1692 4.21562C52.1231 3.74062 50.9538 3.50312 49.7846 3.5625C48.4923 3.50312 47.2615 3.85938 46.2154 4.5125C45.2923 5.16563 44.8 6.29375 44.8615 7.42188C44.8 8.13437 45.1077 8.84688 45.6615 9.38125C46.2769 9.91563 47.0154 10.3312 47.8154 10.5687C48.3077 10.7469 48.7385 10.925 49.1692 11.1625C49.4154 11.2812 49.6 11.5188 49.6 11.8156C49.6 12.2312 49.3538 12.5875 48.9231 12.7063C48.4308 12.8844 47.8769 13.0031 47.3231 13.0031C46.4615 13.0031 45.6615 12.825 44.9231 12.5281C44.6154 12.4094 44.3077 12.5281 44.1846 12.825C44.1846 12.825 44.1846 12.825 44.1846 12.8844L43.5077 14.1312C43.3846 14.3094 43.4462 14.6062 43.6308 14.7844L43.6923 14.8438C44.1846 15.0813 44.7385 15.2594 45.2923 15.3781C46.0308 15.4969 46.7692 15.5563 47.5077 15.5563C48.8 15.6156 50.0923 15.2594 51.2 14.5469C52.1846 13.8344 52.7385 12.7656 52.6769 11.5781C52.6769 11.1625 52.6154 10.8063 52.4308 10.45C52.2462 10.0938 52 9.79688 51.6923 9.55937C51.3846 9.32188 51.0769 9.14375 50.7692 8.96562C50.4615 8.7875 50.0923 8.60938 49.6 8.43125C49.1077 8.25313 48.6769 8.01562 48.2462 7.77813C48 7.65938 47.8769 7.42188 47.8769 7.18438C47.8769 6.47188 48.4923 6.11562 49.7846 6.11562C50.5231 6.11562 51.2615 6.23438 51.9385 6.47187C52.2462 6.59062 52.5538 6.47188 52.6769 6.23438V6.175L53.3538 4.9875C53.4769 4.75 53.4154 4.5125 53.2308 4.33437C53.1692 4.21563 53.1692 4.21562 53.1692 4.21562ZM70.0308 3.74063H68.0615C67.7538 3.74063 67.4462 3.91875 67.3846 4.21562L65.2923 9.025L64.2462 11.6375L64.0615 9.025L63.6923 4.21562C63.6923 3.91875 63.4462 3.68125 63.1385 3.74063H63.0769H61.4154C61.1077 3.74063 60.8 3.91875 60.6769 4.21562L58.4615 9.025L57.3538 11.6375L57.2308 9.08438L56.9231 4.275C56.9231 3.97812 56.6769 3.74063 56.3692 3.8H56.3077H54.4C54.2769 3.8 54.1539 3.85938 54.0308 3.91875C53.9077 4.0375 53.8462 4.275 53.9077 4.45312L54.9538 14.8438C54.9538 15.1406 55.2 15.3781 55.5077 15.3187H55.5692H57.6615C57.9692 15.3187 58.2769 15.1406 58.4 14.8438L60.5538 10.2719L61.4769 8.075L61.6615 10.2125L62.1538 14.7844C62.1538 15.0813 62.4 15.3187 62.7077 15.3187H62.7692H64.8615C65.1692 15.3187 65.4769 15.1406 65.6 14.8438L70.4615 4.45312C70.5231 4.33437 70.5846 4.15625 70.4615 3.97812C70.3385 3.8 70.2154 3.74063 70.0308 3.74063ZM85.9077 3.74063H79.2615C78.9538 3.74063 78.6462 3.91875 78.6462 4.21562L76.7385 14.6656C76.6769 14.7844 76.7385 14.9625 76.8 15.0813C76.9231 15.2 77.0462 15.2594 77.2308 15.2H79.0769C79.3846 15.2 79.6923 14.9625 79.6923 14.6656L80.3692 10.8063H84.4923C84.8 10.8063 85.1077 10.6281 85.1077 10.2719L85.3538 8.90625C85.4154 8.7875 85.3539 8.60938 85.2923 8.49063C85.1692 8.37187 85.0462 8.3125 84.8615 8.37187H80.8L81.2308 6.11562H85.5385C85.8462 6.11562 86.1538 5.9375 86.1538 5.64062L86.4 4.275C86.4615 4.15625 86.4 3.97813 86.3385 3.85938C86.2154 3.8 86.0308 3.74063 85.9077 3.74063ZM95.9385 3.91875C95.8154 3.8 95.6923 3.74063 95.5077 3.8H87.6923C87.3846 3.8 87.1385 3.97813 87.0769 4.33437L86.7692 5.75938C86.7077 5.87812 86.7692 6.05625 86.8308 6.175C86.9538 6.29375 87.0769 6.35313 87.2615 6.29375H89.6L88.0615 14.6656C88 14.7844 88.0615 14.9625 88.1231 15.0813C88.2462 15.2 88.3692 15.2594 88.5538 15.2H90.4615C90.7692 15.2 91.0769 14.9625 91.0769 14.6656L92.6154 6.29375H95.0154C95.3231 6.29375 95.6308 6.05625 95.6308 5.75938L95.8769 4.275C96 4.15625 96 4.0375 95.9385 3.91875ZM71.8154 6.35313H73.0462L71.9385 10.3313C71.8769 10.5094 72 10.6281 72.1231 10.6875H72.1846H72.7385C72.9231 10.6875 73.0462 10.6281 73.1077 10.45L76.8615 4.39375C76.9846 4.21563 76.9231 3.91875 76.6769 3.8C76.6154 3.74063 76.5538 3.74063 76.4308 3.74063H75.0769L77.2308 0.653125C77.3539 0.475 77.2923 0.178125 77.1077 0.059375C77.1692 0 77.0462 0 76.9846 0H73.5385C73.2923 0 73.0462 0.178125 72.9846 0.415625L71.4462 5.75938C71.3846 5.99687 71.5077 6.23438 71.7538 6.29375C71.7538 6.35313 71.8154 6.35313 71.8154 6.35313ZM73.3538 12.4094H71.3846C71.1385 12.4094 70.8923 12.5875 70.8308 12.825L70.3385 14.725C70.2769 14.9625 70.4 15.2 70.6462 15.2594C70.7077 15.2594 70.7077 15.2594 70.7692 15.2594H72.7385C72.9846 15.2594 73.2308 15.0813 73.2923 14.8438L73.7846 12.9437C73.8462 12.7062 73.7231 12.4688 73.4769 12.4094C73.4154 12.4094 73.4154 12.4094 73.3538 12.4094Z"
                fill="#F02EA6"
              />
            </svg>
          </button>
          <button onClick={() => handleTabClick(4)} className={`border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4 ${tab == 4 ? "bg-slate-200":""}`}>
            <svg
              width="70"
              height="17"
              viewBox="0 0 77 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-neutral-900 dark:text-neutral-100"
            >
              <g clipPath="url(#clip0_52_626)">
                <path
                  d="M0.97168 17.8125V1.1875H8.3163C9.34297 1.1875 10.2749 1.425 11.112 1.9C11.9491 2.35917 12.6046 2.98458 13.0785 3.77625C13.5681 4.56792 13.8129 5.47042 13.8129 6.48375C13.8129 7.48125 13.5681 8.39167 13.0785 9.215C12.6046 10.0225 11.9491 10.6637 11.112 11.1387C10.2749 11.6137 9.34297 11.8512 8.3163 11.8512H4.40707V17.8125H0.97168ZM10.3775 17.8125L6.1603 10.3075L9.80891 9.71375L14.5 17.8362L10.3775 17.8125ZM4.40707 8.95375H8.15045C8.57691 8.95375 8.94809 8.85875 9.26399 8.66875C9.59568 8.46292 9.8484 8.18583 10.0221 7.8375C10.1959 7.47334 10.2828 7.06959 10.2828 6.62625C10.2828 6.15125 10.1801 5.73959 9.97476 5.39125C9.76943 5.04292 9.46932 4.77375 9.07445 4.58375C8.67958 4.37792 8.22153 4.275 7.7003 4.275H4.40707V8.95375Z"
                  fill="currentColor"
                />
                <path
                  d="M21.3865 18.05C20.0281 18.05 18.8355 17.7729 17.8088 17.2187C16.798 16.6645 16.0083 15.9045 15.4396 14.9387C14.8868 13.9729 14.6104 12.8645 14.6104 11.6137C14.6104 10.6321 14.7684 9.7375 15.0842 8.93C15.4001 8.1225 15.8424 7.42584 16.411 6.84C16.9796 6.23834 17.6509 5.77917 18.4249 5.4625C19.2146 5.13 20.0675 4.96375 20.9837 4.96375C21.8366 4.96375 22.6263 5.12209 23.3529 5.43875C24.0795 5.75542 24.7034 6.19875 25.2246 6.76875C25.7616 7.32292 26.1723 7.98792 26.4566 8.76375C26.7409 9.52375 26.8672 10.3471 26.8357 11.2337L26.812 12.2787H16.7428L16.1977 10.2125H24.04L23.6609 10.64V10.1175C23.6293 9.69 23.4871 9.31 23.2344 8.9775C22.9975 8.62917 22.6895 8.36 22.3105 8.17C21.9314 7.96417 21.5048 7.86125 21.031 7.86125C20.3361 7.86125 19.7438 7.99584 19.254 8.265C18.7802 8.53417 18.417 8.93 18.1642 9.4525C17.9115 9.975 17.7851 10.6083 17.7851 11.3525C17.7851 12.1125 17.9431 12.7695 18.2591 13.3237C18.5908 13.8779 19.0488 14.3133 19.6332 14.63C20.2334 14.9308 20.9362 15.0812 21.7417 15.0812C22.2946 15.0812 22.8001 14.9942 23.2582 14.82C23.7161 14.6458 24.2057 14.345 24.7271 13.9175L26.3382 16.1737C25.8801 16.5854 25.3746 16.9337 24.8219 17.2187C24.269 17.4879 23.7004 17.6937 23.1159 17.8362C22.5315 17.9787 21.9551 18.05 21.3865 18.05Z"
                  fill="currentColor"
                />
                <path
                  d="M32.354 18.05C31.1851 18.05 30.1426 17.86 29.2266 17.48C28.3263 17.0842 27.5997 16.5458 27.0469 15.865L29.1555 14.06C29.6293 14.5825 30.1663 14.9625 30.7666 15.2C31.3668 15.4217 31.9669 15.5325 32.5672 15.5325C32.8041 15.5325 33.0173 15.5088 33.2069 15.4613C33.4122 15.398 33.586 15.3188 33.7281 15.2238C33.8703 15.113 33.973 14.9863 34.0361 14.8438C34.1151 14.6855 34.1546 14.5192 34.1546 14.345C34.1546 13.9967 34.0124 13.7275 33.7281 13.5375C33.5702 13.4425 33.3253 13.3396 32.9936 13.2288C32.662 13.1021 32.2355 12.9675 31.7143 12.825C30.9087 12.6192 30.2216 12.3817 29.653 12.1125C29.1002 11.8275 28.658 11.5109 28.3263 11.1625C28.042 10.83 27.8208 10.4738 27.6629 10.0938C27.5207 9.69797 27.4496 9.26255 27.4496 8.78755C27.4496 8.21755 27.576 7.70297 27.8287 7.2438C28.0814 6.7688 28.429 6.36505 28.8712 6.03255C29.3293 5.70005 29.8505 5.44672 30.4349 5.27255C31.0192 5.08255 31.6352 4.98755 32.2829 4.98755C32.9305 4.98755 33.5623 5.06672 34.1783 5.22505C34.7943 5.38339 35.3629 5.61297 35.8841 5.9138C36.4211 6.1988 36.8871 6.53922 37.282 6.93505L35.4813 8.93005C35.197 8.66088 34.8733 8.41547 34.51 8.1938C34.1625 7.97214 33.7992 7.79797 33.4201 7.6713C33.041 7.54464 32.7014 7.4813 32.4013 7.4813C32.1328 7.4813 31.888 7.50505 31.6669 7.55255C31.4616 7.60005 31.2878 7.67922 31.1456 7.79005C31.0035 7.88505 30.893 8.0038 30.814 8.1463C30.7508 8.2888 30.7192 8.44713 30.7192 8.6213C30.7192 8.79547 30.7586 8.96172 30.8376 9.12005C30.9324 9.27839 31.0588 9.41297 31.2167 9.5238C31.3905 9.6188 31.6432 9.72964 31.9749 9.8563C32.3223 9.98297 32.7884 10.1255 33.3727 10.2838C34.1309 10.4896 34.7706 10.7192 35.2918 10.9725C35.8288 11.2259 36.2552 11.5188 36.5712 11.8513C36.8397 12.1363 37.0371 12.4608 37.1635 12.825C37.2899 13.1892 37.353 13.593 37.353 14.0363C37.353 14.8121 37.1319 15.5008 36.6896 16.1025C36.2632 16.7042 35.6709 17.1792 34.9127 17.5275C34.1546 17.8758 33.3016 18.05 32.354 18.05Z"
                  fill="currentColor"
                />
                <path
                  d="M44.5143 18.05C43.1559 18.05 41.9634 17.7729 40.9367 17.2187C39.9259 16.6645 39.1361 15.9045 38.5675 14.9387C38.0147 13.9729 37.7383 12.8645 37.7383 11.6137C37.7383 10.6321 37.8962 9.7375 38.2121 8.93C38.5281 8.1225 38.9703 7.42584 39.5389 6.84C40.1075 6.23834 40.7788 5.77917 41.5527 5.4625C42.3425 5.13 43.1955 4.96375 44.1115 4.96375C44.9644 4.96375 45.7542 5.12209 46.4807 5.43875C47.2073 5.75542 47.8312 6.19875 48.3524 6.76875C48.8894 7.32292 49.3001 7.98792 49.5844 8.76375C49.8687 9.52375 49.9951 10.3471 49.9635 11.2337L49.9398 12.2787H39.8706L39.3257 10.2125H47.1678L46.7887 10.64V10.1175C46.7571 9.69 46.615 9.31 46.3623 8.9775C46.1254 8.62917 45.8174 8.36 45.4383 8.17C45.0592 7.96417 44.6327 7.86125 44.1589 7.86125C43.4639 7.86125 42.8716 7.99584 42.382 8.265C41.9081 8.53417 41.5448 8.93 41.2921 9.4525C41.0394 9.975 40.9131 10.6083 40.9131 11.3525C40.9131 12.1125 41.071 12.7695 41.3869 13.3237C41.7186 13.8779 42.1767 14.3133 42.7611 14.63C43.3613 14.9308 44.0641 15.0812 44.8697 15.0812C45.4225 15.0812 45.9279 14.9942 46.386 14.82C46.8441 14.6458 47.3337 14.345 47.8549 13.9175L49.466 16.1737C49.0079 16.5854 48.5025 16.9337 47.9497 17.2187C47.3968 17.4879 46.8282 17.6937 46.2438 17.8362C45.6594 17.9787 45.0829 18.05 44.5143 18.05Z"
                  fill="currentColor"
                />
                <path
                  d="M51.2646 17.8125V5.2488H54.4868L54.5816 7.8138L53.9182 8.0988C54.092 7.5288 54.4 7.01422 54.8422 6.55505C55.3003 6.08005 55.8452 5.70005 56.477 5.41505C57.1088 5.13005 57.7722 4.98755 58.4671 4.98755C59.4148 4.98755 60.2046 5.17755 60.8363 5.55755C61.484 5.93755 61.9658 6.51547 62.2816 7.2913C62.6133 8.0513 62.7791 8.99339 62.7791 10.1175V17.8125H59.4148V10.3788C59.4148 9.8088 59.3359 9.3338 59.1779 8.9538C59.02 8.5738 58.7751 8.29672 58.4434 8.12255C58.1276 7.94838 57.7326 7.86922 57.2588 7.88505C56.8797 7.88505 56.5243 7.94839 56.1926 8.07505C55.8768 8.18588 55.6003 8.35214 55.3634 8.5738C55.1424 8.79547 54.9606 9.0488 54.8185 9.3338C54.6922 9.6188 54.629 9.92755 54.629 10.26V17.8125H52.9705C52.6073 17.8125 52.2834 17.8125 51.9991 17.8125C51.7148 17.8125 51.4701 17.8125 51.2646 17.8125Z"
                  fill="currentColor"
                />
                <path
                  d="M69.7228 18.05C68.6172 18.05 67.6301 17.773 66.7613 17.2188C65.9083 16.6488 65.2292 15.8808 64.7237 14.915C64.2341 13.9333 63.9893 12.8013 63.9893 11.5188C63.9893 10.268 64.2341 9.15172 64.7237 8.17005C65.2292 7.17255 65.9083 6.39672 66.7613 5.84255C67.6301 5.27255 68.6172 4.98755 69.7228 4.98755C70.3073 4.98755 70.868 5.08255 71.405 5.27255C71.9578 5.44672 72.4474 5.69214 72.8739 6.0088C73.3162 6.32547 73.6716 6.68172 73.94 7.07755C74.2086 7.45755 74.3587 7.85339 74.3902 8.26505L73.5373 8.4313V0.237549H76.9253V17.8125H73.7268L73.5846 14.915L74.248 14.9863C74.2165 15.3821 74.0744 15.7621 73.8216 16.1263C73.5689 16.4905 73.2293 16.823 72.8028 17.1238C72.3922 17.4088 71.9184 17.6383 71.3813 17.8125C70.86 17.9708 70.3073 18.05 69.7228 18.05ZM70.4809 15.2475C71.1128 15.2475 71.6656 15.0892 72.1394 14.7725C72.6133 14.4558 72.9845 14.0205 73.2529 13.4663C73.5215 12.9121 73.6557 12.263 73.6557 11.5188C73.6557 10.7905 73.5215 10.1492 73.2529 9.59505C72.9845 9.04089 72.6133 8.60547 72.1394 8.2888C71.6656 7.97214 71.1128 7.8138 70.4809 7.8138C69.8492 7.8138 69.2963 7.97214 68.8225 8.2888C68.3645 8.60547 68.0012 9.04089 67.7326 9.59505C67.48 10.1492 67.3536 10.7905 67.3536 11.5188C67.3536 12.263 67.48 12.9121 67.7326 13.4663C68.0012 14.0205 68.3645 14.4558 68.8225 14.7725C69.2963 15.0892 69.8492 15.2475 70.4809 15.2475Z"
                  fill="currentColor"
                />
              </g>
              <defs>
                <clipPath id="clip0_52_626">
                  <rect width="77" height="19" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button> */}
        </div>
      </ul>
      <div className="mb-6">
        {tab == 1 && (
          <div className="max-w-lg mx-auto rounded-lg overflow-hidden shadow-lg">
          {/* <img
            className="w-full h-auto"
            src="your-project-image.jpg"
            alt="Project Image"
          /> */}
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Automatius AI</div>
            <p className="text-gray-700 text-base">
              I've been working on a AI Engineering Firm that focuses on LLM-related development.
              By leveraging Meta's recent open source Llama2 model, I've been working on bridging
              the gap between AI research and systems in the industry.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
              Llama2
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
              Next.js
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
              Databricks
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
              Terraform
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
              AWS
            </span>
            {/* Add more technology tags as needed */}
          </div>
          <div className="px-6 py-4">
            <a
              href="https://automatius.ai"
              className="text-blue-500 hover:text-blue-700 text-sm"
            >
              View Website
            </a>
          </div>
        </div>
        
        )}
        {tab == 2 && (
          <p className="prose prose-neutral dark:prose-invert">
            {`Tab 2`}
          </p>
        )}
        {tab == 3 && (
          <p className="prose prose-neutral dark:prose-invert">
            {`Tab 3`}
          </p>
        )}
        {tab == 4 && (
          <p className="prose prose-neutral dark:prose-invert">
            {`Tab 4`}
          </p>
        )}
      </div>
      {/* <div className="prose prose-neutral dark:prose-invert">
        <p>
          I've also worked with or advised companies like Convex, Fauna,
          Plasmic, and more about developer marketing, DevRel, and building
          open-source communities.
        </p>
      </div> */}
      <ul className="flex flex-col md:flex-row mt-8 space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm text-neutral-600 dark:text-neutral-300">
        <li>
          <a
            className="flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/tevanb/"
          >
            <ArrowIcon />
            <p className="h-7 ml-2">follow my linkedin</p>
          </a>
        </li>
      </ul>
    </section>
  );
}

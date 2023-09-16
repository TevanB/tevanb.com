"use client";

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
import Meta from "public/images/projects/meta.svg";
import System from "public/images/projects/system.svg";
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
    console.log(tab);
  }, [tab]);
  return (
    <section>
      <div className="gap-4 my-8">
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
      </div>
      <div className="gap-4 my-8">
        <h3 className="font-bold text-2xl mb-4 tracking-tighter">
          My Background
        </h3>
        <p className="prose prose-neutral dark:prose-invert">
          {`I graduated from the `}{" "}
          <span className="not-prose">
            <Badge href="https://www.utoronto.ca/">
              <Uoft height={20} width={20} />
              <span>University of Toronto</span>
            </Badge>
          </span>
          {` with an Honors Bachelors of Science (High Distinction), 
          Specializing in Computer Science with a Focus in Artificial Intelligence.`}
        </p>
      </div>
      <div className="gap-4 my-8">
        <p className="prose prose-neutral dark:prose-invert mb-4">
          {`In my free time I like finding new restaurants, bouldering, working on my Spotify playlists, and playing my electric and acoustic Guitars 
          (Fender Telecaster and Seagull S6 respectively).`}
        </p>
      </div>
      <h3 className="font-bold text-2xl tracking-tighter">Fun Projects</h3>
      <ul
        className="mb-5 flex list-none flex-row flex-wrap border-b-0 pl-0"
        role="tablist"
        data-te-nav-ref
      >
        <div className="my-8 flex flex-row space-x-2 w-full h-14 overflow-x-auto">
          <button
            onClick={() => handleTabClick(1)}
            className={`border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4 ${
              tab == 1 ? "bg-slate-200" : ""
            }`}
          >
            <div className="flex items-center font-bold">
              <Meta height={50} width={20} />
              <span className="ml-2">LLM Firm</span>
            </div>
          </button>
          <button
            onClick={() => handleTabClick(2)}
            className={`border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4 ${
              tab == 1 ? "bg-slate-200" : ""
            }`}
          >
            <div className="flex items-center font-bold">
              <System height={50} width={20} />
              <span className="ml-2">E-Commerce Automation</span>
            </div>
          </button>
        </div>
          
      </ul>
      <div className="mb-6">
        {tab == 1 && (
          <div className="max-w-lg mx-auto rounded-lg overflow-hidden shadow-lg">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Automatius AI</div>
              <p className="text-gray-700 text-base">
                I've been working on a AI Engineering Firm that focuses on
                LLM-related development. By leveraging Meta's recent open source
                Llama2 model, I've been working on bridging the gap between AI
                research and systems in the industry.
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
          <div className="max-w-lg mx-auto rounded-lg overflow-hidden shadow-lg">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">
                E-Commerce Automation
              </div>
              <p className="text-gray-700 text-base">
                This project fully automates the E-Commerce process from Order
                Placement, Assignment, Completion for a service business. 
                Many realtime features were implemented using Pusher, and there were multiple user-restricted views in the application.
                I was able to practice Software Architecture Design while learning a new, unique tech stack.
                
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                Laravel
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                Vue.js
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                MySQL
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                Heroku
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                Node/Express
              </span>
              {/* Add more technology tags as needed */}
            </div>
          </div>
        )}
        {tab == 3 && (
          <p className="prose prose-neutral dark:prose-invert">{`Tab 3`}</p>
        )}
        {tab == 4 && (
          <p className="prose prose-neutral dark:prose-invert">{`Tab 4`}</p>
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

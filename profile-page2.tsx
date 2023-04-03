import Link from "next/link";
import Head from "next/head";
import { clsx } from "clsx";
import Header2 from "../components/Header2";
import ProjectPreview from "../components/ProjectPreview";
import Filter from "../components/Filter";

const Profile = () => {
  return (
    <>
      <Head>
        <title>StudioHub</title>
        <meta name="description" content="profile page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header2 />
      <main
        className={clsx(
          "flex min-h-screen flex-col ",
          "bg-gradient-to-b from-[#eeedf0] to-[#a872c7]"
        )}
      >
        {/* <div className="text-gray-900 pt-12 pr-0 pb-14 pl-0 bg-[#eeedf0]"> */}
        <div
          className="mt-0 mr-auto mb-0 ml-auto w-full max-w-7xl space-y-5 pt-4 pr-5 pb-6 pl-5 sm:space-y-8 sm:py-8 md:space-y-16
        md:py-12"
        >
          <div className="flex flex-col items-center sm:px-5 md:flex-row">
            <div className="mb-6 flex h-full w-full flex-col items-start justify-center pt-6 pr-0 pb-6 pl-0 md:mb-0 md:w-1/2">
              <div
                className="flex h-full transform flex-col items-start justify-center space-y-3 md:space-y-5 md:pr-10
              lg:pr-16"
              >
                <a className="text-4xl font-bold leading-none lg:text-5xl xl:text-6xl">
                  Sophia Dew
                </a>
                <div className="pt-2 pr-0 pb-0 pl-0">
                  <p className="mb-3 text-xl">
                    Web3 engineer, product designer, and entrepreneur from
                    Stanford University.
                  </p>
                  <p className="inline text-sm font-medium">GitHub:</p>
                  <a
                    className="mt-0 mr-1 mb-0 ml-1 inline text-sm font-medium underline hover:text-purple-500"
                    href="https://www.github.com/sophiahdew"
                  >
                    sophiahdew
                  </a>
                  {/* <p className="inline text-sm font-medium mt-0 mr-1 mb-0 ml-1">· Stanford University ·</p> */}
                  <p className="text-white-200 mt-0 mr-1 mb-0 ml-1 inline text-sm font-medium">
                    · Last update: March 7, 2023
                  </p>

                  <div className="w-full text-center">
                    <div className="flex pt-8 pb-0 lg:pt-4">
                      <div className="flex space-x-2">
                        {/* <a 
                          className="p-1 -m-1 text-purple-400 hover:text-purple-500 focus:outline-none focus-visible:ring-2 ring-primary" 
                          href="https://www.github.com/sophiahdew" 
                          rel="noopener" 
                          aria-label="Ariel Cerda on Github" 
                          target="_blank"
                        >
                          <svg className="w-6 h-6 overflow-visible fill-current" aria-hidden="true" viewBox="0 0 140 140">
                              <path
                                  d="M70 1.633a70 70 0 00-21.7 136.559h1.692a5.833 5.833 0 006.183-6.184v-1.225-6.358a2.917 2.917 0 00-1.167-1.925 2.917 2.917 0 00-2.45-.583C36.925 125.3 33.6 115.5 33.367 114.858a27.067 27.067 0 00-10.034-12.775 6.767 6.767 0 00-.875-.641 3.675 3.675 0 012.217-.409 8.575 8.575 0 016.708 5.134 17.5 17.5 0 0023.334 6.766 2.917 2.917 0 001.691-2.1 11.667 11.667 0 013.267-7.175 2.917 2.917 0 00-1.575-5.075c-13.825-1.575-27.942-6.416-27.942-30.275a23.333 23.333 0 016.125-16.216A2.917 2.917 0 0036.808 49a20.533 20.533 0 01.059-14 32.317 32.317 0 0114.7 6.708 2.858 2.858 0 002.45.409A61.892 61.892 0 0170 39.958a61.075 61.075 0 0116.042 2.159 2.858 2.858 0 002.391-.409 32.608 32.608 0 0114.7-6.708 20.825 20.825 0 010 13.883 2.917 2.917 0 00.525 3.092 23.333 23.333 0 016.125 16.042c0 23.858-14.175 28.641-28.058 30.216a2.917 2.917 0 00-1.575 5.134 12.833 12.833 0 013.558 10.15v18.55a6.183 6.183 0 002.1 4.841 7 7 0 006.184 1.109A70 70 0 0070 1.633z"
                              ></path>
                          </svg>
                        </a>

                        <a
                          className="p-1 -m-1 text-purple-400 hover:text-purple-500 focus:outline-none focus-visible:ring-2 ring-primary"
                          href="https://www.twitter.com/sophiadew2"
                          rel="noopener"
                          aria-label="Ariel Cerda on Twitter"
                          target="_blank"
                        >
                          <svg className="w-6 h-6 overflow-visible fill-current" aria-hidden="true" viewBox="0 0 24 24">
                              <path
                                  d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                              ></path>
                          </svg>
                        </a>

                        <a
                            className="p-1 -m-1 text-purple-400 hover:text-purple-500 focus:outline-none focus-visible:ring-2 ring-primary"
                            href="https://www.linkedin.com/in/sophiadew/"
                            rel="noopener"
                            aria-label="Ariel Cerda on Linkedin"
                            target="_blank"
                        >
                            <svg className="w-6 h-6 overflow-visible fill-current" alt="" aria-hidden="true" viewBox="0 0 140 140">
                                <path
                                    d="M23.4 44.59h-4.75a12.76 12.76 0 00-9.73 2.19 9.44 9.44 0 00-2.35 7.12V131a9.08 9.08 0 002.3 7 9.24 9.24 0 006.82 2c2.22 0 4.15-.21 8.24-.06a12 12 0 009.25-2 9.1 9.1 0 002.29-7V53.9a9.44 9.44 0 00-2.34-7.12 12.68 12.68 0 00-9.73-2.19zM21 0A16.19 16.19 0 005.09 15.6 16.52 16.52 0 0021 31.86 16.12 16.12 0 0037 15.6 16.18 16.18 0 0021 0zM99.74 43.63a31.09 31.09 0 00-20.93 6.3A7.25 7.25 0 0077 46.34a6.08 6.08 0 00-4.52-1.78 119.08 119.08 0 00-15 .3c-4.16.84-6.18 3.79-6.18 9V131a9.14 9.14 0 002.28 7 12.06 12.06 0 009.26 2c4.47-.17 5.74.06 8.22.06a9.26 9.26 0 006.83-2 9.12 9.12 0 002.3-7V89.88A12.48 12.48 0 0192.93 76 12.44 12.44 0 01106 89.88V131a9.1 9.1 0 002.29 7 12 12 0 009.24 2c1.83-.07 4-.07 5.8 0a12.09 12.09 0 009.26-2 9.14 9.14 0 002.28-7V78.32a33.07 33.07 0 00-35.13-34.69z"
                                ></path>
                            </svg>
                        </a> */}

                        <a
                          className="inline-block flex items-center rounded-full bg-purple-400 pt-1.5 pr-3 pb-1.5 pl-2 leading-none text-gray-50 hover:bg-purple-500"
                          href="https://www.linkedin.com/in/sophiadew/"
                          rel="noopener"
                          aria-label="Ariel Cerda on Linkedin"
                          target="_blank"
                        >
                          <p className="inline">
                            <svg
                              className="mr-1 h-3.5 w-3.5"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0
                              00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755
                              1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1
                              0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                              />
                            </svg>
                          </p>
                          <p className="inline text-xs font-medium">
                            Share Page
                          </p>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-full flex-row-reverse md:w-1/2">
              <div className="mr-20 block">
                <img
                  src="https://avatars.githubusercontent.com/u/59624772?v=4"
                  className="btn- h-64 w-64 rounded-full object-cover"
                />
              </div>
            </div>
          </div>

          <Filter />

          <div className="grid grid-cols-12 gap-x-8 gap-y-16 sm:px-5">
            <ProjectPreview
              props={{
                name: "Blockchain Splitwise",
                link: "https://github.com/sophiahdew/Blockchain-Splitwise",
                description:
                  "Used Solidity and ethers.js to implement a complex decentralized application on Ethereum to track debit and credit.",
              }}
            />
            <ProjectPreview
              props={{
                name: "Polygon Hackathon",
                link: "https://github.com/sophiahdew/polygon-hackathon",
                description: "Safeguarding DAO user data through Allowlisting",
              }}
            />
            <ProjectPreview
              props={{
                name: "Team Formation Hub",
                link: "https://github.com/sophiahdew/team-formation-hub",
                description:
                  "Manages a student group portal with API, DB connection, and permission control for group creation, viewing, and updating.",
              }}
            />
            {/* <ProjectPreview />
      <ProjectPreview />
      <ProjectPreview />
      <ProjectPreview /> */}
            {/* <div className="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4">
        <img
            src="https://images.unsplash.com/photo-1557682250-33bd709cbe85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1129&q=80" className="object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56 btn-"/>
        <p className="bg-purple-400 flex items-center leading-none text-xs font-medium text-gray-50 pt-1.5 pr-3 pb-1.5 pl-3
            rounded-full inline-block">View Project</p>
        <a className="text-lg font-bold sm:text-xl md:text-2xl">Blockchain Splitwise</a>
        <p className="text-sm text-black">Used Solidity and ethers.js to implement a complex decentralized application on Ethereum to track debit and credit.</p>
        <div className="pt-2 pr-0 pb-0 pl-0">
          <a className="inline text-xs font-medium mt-0 mr-1 mb-0 ml-0 underline">John Smith</a>
          <p className="inline text-xs font-medium mt-0 mr-1 mb-0 ml-1">· 23rd, March 2021 ·</p>
          <p className="inline text-xs font-medium text-purple-300 mt-0 mr-1 mb-0 ml-1">Solidity · Ethers.js</p>
        </div>
      </div>
      <div className="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4">
        <img
            src="https://images.unsplash.com/photo-1635776063043-ab23b4c226f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80" className="object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56 btn-"/>
        <p className="bg-purple-400 flex items-center leading-none text-xs font-medium text-gray-50 pt-1.5 pr-3 pb-1.5 pl-3
            rounded-full  inline-block">View Project</p>
        <a className="text-lg font-bold sm:text-xl md:text-2xl">Studio Hub</a>
        <p className="text-sm text-black">Seamlessly integrates all of your GitHub repositories and projects to AI generate a streamlined portfolio.</p>
        <div className="pt-2 pr-0 pb-0 pl-0">
          <a className="inline text-xs font-medium mt-0 mr-1 mb-0 ml-0 underline">John Smith</a>
          <p className="inline text-xs font-medium mt-0 mr-1 mb-0 ml-1">· 2nd, February 2021 ·</p>
          <p className="inline text-xs font-medium text-purple-300 mt-0 mr-1 mb-0 ml-1">Next.js · React · OpenAI</p>
        </div>
      </div>
      <div className="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4">
        <img
            src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" className="object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56 btn-"/>
        <p className="bg-purple-400 flex items-center leading-none text-xs font-medium text-gray-50 pt-1.5 pr-3 pb-1.5 pl-3
            rounded-full inline-block">View Project</p>
        <a className="text-lg font-bold sm:text-xl md:text-2xl">Heap Allocator</a>
        <p className="text-sm text-black">Designed and implemented an allocator obtains a large contiguous segment from the OS and parcels out this segment to service dynamic allocation requests.</p>
        <div className="pt-2 pr-0 pb-0 pl-0">
          <a className="inline text-xs font-medium mt-0 mr-1 mb-0 ml-0 underline">John Smith</a>
          <p className="inline text-xs font-medium mt-0 mr-1 mb-0 ml-1">· 13th, January 2021 ·</p>
          <p className="inline text-xs font-medium text-purple-300 mt-0 mr-1 mb-0 ml-1">C · Assembly</p>
        </div>
      </div> */}
          </div>
        </div>
        {/* </div> */}
      </main>
    </>
  );
};

export default Profile;

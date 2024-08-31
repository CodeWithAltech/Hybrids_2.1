"use client"
import React from 'react'
import Annoucement from './annouce'
import Image from 'next/image';

const Header = () => {
  return (
    <div>
      <div className='fixed w-full'>
        <header className="bg-white backdrop-blur-sm shadow bg-gradient-to-b from-black via-slate-900 to-slate-800">
          <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="md:flex flex-row md:items-center md:gap-12">
                <a className="block text-teal-600 dark:text-teal-600" href="#">
                  {/* <span className="">Home</span> */}
                  <Image
                    src="/assets/disc-02.svg"
                    alt="Robot"
                    width={50}
                    height={50}
                  />
                </a>
                <span className='hidden lg:flex'>Original Hybrids</span>
              </div>

              <div className="hidden md:block">
                <nav aria-label="Global">
                  <ul className="flex items-center gap-6 text-sm">
                    <li>
                      <a
                        className="text-blue-500 transition hover:text-blue-500/75 dark:text-white dark:hover:text-white/75"
                        href="#"
                      >
                        YouTube Downloader
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blue-500 transition hover:text-blue-500/75 dark:text-white dark:hover:text-white/75"
                        href="#"
                      >
                        ShortUrl
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blue-500 transition hover:text-blue-500/75 dark:text-white dark:hover:text-white/75"
                        href="#"
                      >
                        Nexus DevOps
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>

              <div className="flex items-center gap-4">
                <div className="sm:flex sm:gap-4">
                  <a
                    className="rounded-md bg-blue-600 px-5 py-2.5 text-sm font-medium text-white shadow dark:hover:bg-blue-500"
                    href="#"
                  >
                    Get Started
                  </a>

                  <div className="hidden sm:flex">
                    <a
                      className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-blue-600 dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
                      href="#"
                    >
                      Join Our WhatsApp Group
                    </a>
                  </div>
                </div>

                <div className="block md:hidden">
                  <button
                    className="rounded bg-gray-100 p-2 text-blue-600 transition hover:text-gray-600/75 dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
                    onClick={() => {
                      // Toggle sidebar visibility
                      const sidebar = document.getElementById("sidebar");
                      sidebar.classList.toggle("hidden");
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Sidebar */}
          <div
            className="fixed top-0 left-0 h-screen w-64 bg-white dark:bg-gray-900 transition duration-300 ease-in-out hidden"
            id="sidebar"
          >
            <div className="flex h-16 items-center justify-between p-4">
              <Image
                src="/assets/disc-02.svg"
                alt="Robot"
                width={50}
                height={50}
              />
              <h5 className="text-lg font-bold text-blue-400">Hybrids_2.1</h5>
              <button
                className="rounded bg-gray-100 p-2 text-blue-600 transition hover:text-gray-600/75 dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
                onClick={() => {
                  // Toggle sidebar visibility
                  const sidebar = document.getElementById("sidebar");
                  sidebar.classList.toggle("hidden");
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <ul className="flex flex-col gap-4 p-4">
              <li>
                <a
                  className="text-blue-500 transition hover:text-blue-500/75 dark:text-white dark:hover:text-white/75"
                  href="#"
                >
                  YouTube Downloader
                </a>
              </li>
              <li>
                <a
                  className="text-blue-500 transition hover:text-blue-500/75 dark:text-white dark:hover:text-white/75"
                  href="#"
                >
                  ShortUrl
                </a>
              </li>
              <li>
                <a
                  className="text-blue-500 transition hover:text-blue-500/75 dark:text-white dark:hover:text-white/75"
                  href="#"
                >
                  Nexus DevOps
                </a>
              </li>
            </ul>
          </div>
        </header>

        <Annoucement />
      </div>
    </div>
  )
}

export default Header

import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className=" inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <h1>Selamat Datang ...</h1>
          <ul className="space-y-2 my-16">
            <hr className="h-px my-1 bg-gray-200 border-0 dark:bg-gray-700"></hr>
            <li>
              <NavLink
                to={"/dashboard"}
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <svg
                  viewBox="0 0 1024 1024"
                  fill="currentColor"
                  height="1em"
                  width="1em"
                >
                  <path d="M924.8 385.6a446.7 446.7 0 00-96-142.4 446.7 446.7 0 00-142.4-96C631.1 123.8 572.5 112 512 112s-119.1 11.8-174.4 35.2a446.7 446.7 0 00-142.4 96 446.7 446.7 0 00-96 142.4C75.8 440.9 64 499.5 64 560c0 132.7 58.3 257.7 159.9 343.1l1.7 1.4c5.8 4.8 13.1 7.5 20.6 7.5h531.7c7.5 0 14.8-2.7 20.6-7.5l1.7-1.4C901.7 817.7 960 692.7 960 560c0-60.5-11.9-119.1-35.2-174.4zM482 232c0-4.4 3.6-8 8-8h44c4.4 0 8 3.6 8 8v80c0 4.4-3.6 8-8 8h-44c-4.4 0-8-3.6-8-8v-80zM270 582c0 4.4-3.6 8-8 8h-80c-4.4 0-8-3.6-8-8v-44c0-4.4 3.6-8 8-8h80c4.4 0 8 3.6 8 8v44zm90.7-204.5l-31.1 31.1a8.03 8.03 0 01-11.3 0L261.7 352a8.03 8.03 0 010-11.3l31.1-31.1c3.1-3.1 8.2-3.1 11.3 0l56.6 56.6c3.1 3.1 3.1 8.2 0 11.3zm291.1 83.6l-84.5 84.5c5 18.7.2 39.4-14.5 54.1a55.95 55.95 0 01-79.2 0 55.95 55.95 0 010-79.2 55.87 55.87 0 0154.1-14.5l84.5-84.5c3.1-3.1 8.2-3.1 11.3 0l28.3 28.3c3.1 3.1 3.1 8.1 0 11.3zm43-52.4l-31.1-31.1a8.03 8.03 0 010-11.3l56.6-56.6c3.1-3.1 8.2-3.1 11.3 0l31.1 31.1c3.1 3.1 3.1 8.2 0 11.3l-56.6 56.6a8.03 8.03 0 01-11.3 0zM846 582c0 4.4-3.6 8-8 8h-80c-4.4 0-8-3.6-8-8v-44c0-4.4 3.6-8 8-8h80c4.4 0 8 3.6 8 8v44z" />
                </svg>
                <span className="ml-3">Dashboard</span>
              </NavLink>
              <hr className="h-px my-1 bg-gray-200 border-0 dark:bg-gray-700"></hr>
            </li>
            <li>
              <NavLink
                to={"/produk"}
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <svg
                  viewBox="0 0 512 512"
                  fill="currentColor"
                  height="1em"
                  width="1em"
                >
                  <path d="M483.13 245.38C461.92 149.49 430 98.31 382.65 84.33A107.13 107.13 0 00352 80c-13.71 0-25.65 3.34-38.28 6.88C298.5 91.15 281.21 96 256 96s-42.51-4.84-57.76-9.11C185.6 83.34 173.67 80 160 80a115.74 115.74 0 00-31.73 4.32c-47.1 13.92-79 65.08-100.52 161C4.61 348.54 16 413.71 59.69 428.83a56.62 56.62 0 0018.64 3.22c29.93 0 53.93-24.93 70.33-45.34 18.53-23.1 40.22-34.82 107.34-34.82 59.95 0 84.76 8.13 106.19 34.82 13.47 16.78 26.2 28.52 38.9 35.91 16.89 9.82 33.77 12 50.16 6.37 25.82-8.81 40.62-32.1 44-69.24 2.57-28.48-1.39-65.89-12.12-114.37zM208 240h-32v32a16 16 0 01-32 0v-32h-32a16 16 0 010-32h32v-32a16 16 0 0132 0v32h32a16 16 0 010 32zm84 4a20 20 0 1120-20 20 20 0 01-20 20zm44 44a20 20 0 1120-19.95A20 20 0 01336 288zm0-88a20 20 0 1120-20 20 20 0 01-20 20zm44 44a20 20 0 1120-20 20 20 0 01-20 20z" />
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">
                  Produk Game
                </span>
              </NavLink>
              <hr className="h-px my-1 bg-gray-200 border-0 dark:bg-gray-700"></hr>
            </li>
            <li>
              <NavLink
                to={"/akun"}
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <svg
                  viewBox="0 0 640 512"
                  fill="currentColor"
                  height="1em"
                  width="1em"
                >
                  <path d="M192 64C86 64 0 150 0 256s86 192 192 192h256c106 0 192-86 192-192S554 64 448 64H192zm304 184c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm-24 56c0 22.1-17.9 40-40 40s-40-17.9-40-40 17.9-40 40-40 40 17.9 40 40zM168 200c0-13.3 10.7-24 24-24s24 10.7 24 24v32h32c13.3 0 24 10.7 24 24s-10.7 24-24 24h-32v32c0 13.3-10.7 24-24 24s-24-10.7-24-24v-32h-32c-13.3 0-24-10.7-24-24s10.7-24 24-24h32v-32z" />
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">Akun Game</span>
              </NavLink>
              <hr className="h-px my-1 bg-gray-200 border-0 dark:bg-gray-700"></hr>
            </li>
            <li>
              <NavLink
                to={"/users"}
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  height="1em"
                  width="1em"
                >
                  <path d="M20 2H8a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2zm-6 2.5a2.5 2.5 0 110 5 2.5 2.5 0 010-5zM19 15H9v-.25C9 12.901 11.254 11 14 11s5 1.901 5 3.75V15z" />
                  <path d="M4 8H2v12c0 1.103.897 2 2 2h12v-2H4V8z" />
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">Users</span>
              </NavLink>
              <hr className="h-px my-1 bg-gray-200 border-0 dark:bg-gray-700"></hr>
            </li>
            <li>
              <NavLink
                href="#"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <svg
                  viewBox="0 0 900 1000"
                  fill="currentColor"
                  height="1em"
                  width="1em"
                >
                  <path d="M340 612v68l-200-80v-68l200 80m0-208v68l-200-80v-68l200 80M878 58c14.667 8 22 22 22 42v640c0 22.667-10.667 38-32 46L470 946c-5.333 1.333-8.667 2-10 2-1.333 0-3 .333-5 1s-3.667 1-5 1c-1.333 0-3-.333-5-1s-3.667-1-5-1l-10-2L32 786c-21.333-8-32-23.333-32-46V100c0-20 7.333-34 22-42 14.667-10.667 30-12.667 46-6l382 154L832 52c16-6.667 31.333-4.667 46 6M400 846V286L80 158v560l320 128m420-128V158L500 286v560l320-128m-60-186v68l-200 80v-68l200-80m0-208v68l-200 80v-68l200-80" />
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">Tutorial</span>
              </NavLink>
              <hr className="h-px my-1 bg-gray-200 border-0 dark:bg-gray-700"></hr>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;

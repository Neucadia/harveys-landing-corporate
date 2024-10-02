import React from "react";

const Nav = () => {
  return (
    <ul className="nested hidden xl:flex gap-2 items-start">
      <li className="text-center">
        <a
          className="inline-block py-2 px-3 hover:bg-gray-100 group transition duration-200 rounded-full"
          href="/"
          tabindex="1"
        >
          <div className="flex items-center gap-2">
            <span className="text-white group-hover:text-black text-sm font-medium tracking-tight">
              Home
            </span>
          </div>
        </a>
      </li>
      <li className="text-center">
        <a
          className="inline-block py-2 px-3 hover:bg-gray-100 group transition duration-200 rounded-full"
          href="/#"
          tabindex="2"
        >
          <div className="flex items-center gap-2">
            <span className="text-white group-hover:text-black text-sm font-medium tracking-tight">
              Store
            </span>
            <div className="text-white group-hover:text-black transition duration-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
              >
                <path
                  d="M12.848 6L8.18132 10.6667L3.51465 6"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </div>
          </div>
        </a>
        <ul className="hidden flex items-center gap-2">
          <li className="text-center">
            <a
              className="inline-block py-2 px-3 hover:bg-gray-100 group transition duration-200 rounded-full"
              href="/#"
              tabindex="3"
            >
              <div className="flex items-center gap-2">
                <span className="text-white group-hover:text-black text-sm font-medium tracking-tight">
                  Men
                </span>
              </div>
            </a>
          </li>
          <li className="text-center">
            <a
              className="inline-block py-2 px-3 hover:bg-gray-100 group transition duration-200 rounded-full"
              href="/#"
              tabindex="4"
            >
              <div className="flex items-center gap-2">
                <span className="text-white group-hover:text-black text-sm font-medium tracking-tight">
                  Women
                </span>
              </div>
            </a>
          </li>
          <li className="text-center">
            <a
              className="inline-block py-2 px-3 hover:bg-gray-100 group transition duration-200 rounded-full"
              href="/#"
              tabindex="5"
            >
              <div className="flex items-center gap-2">
                <span className="text-white group-hover:text-black text-sm font-medium tracking-tight">
                  Kids
                </span>
              </div>
            </a>
          </li>
          <li className="text-center">
            <a
              className="inline-block py-2 px-3 hover:bg-gray-100 group transition duration-200 rounded-full"
              href="/#"
              tabindex="6"
            >
              <div className="flex items-center gap-2">
                <span className="text-white group-hover:text-black text-sm font-medium tracking-tight">
                  Footwear
                </span>
              </div>
            </a>
          </li>
          <li className="text-center">
            <a
              className="inline-block py-2 px-3 hover:bg-gray-100 group transition duration-200 rounded-full"
              href="/#"
              tabindex="7"
            >
              <div className="flex items-center gap-2">
                <span className="text-white group-hover:text-black text-sm font-medium tracking-tight">
                  Pet
                </span>
              </div>
            </a>
          </li>
          <li className="text-center">
            <a
              className="inline-block py-2 px-3 hover:bg-gray-100 group transition duration-200 rounded-full"
              href="/#"
              tabindex="8"
            >
              <div className="flex items-center gap-2">
                <span className="text-white group-hover:text-black text-sm font-medium tracking-tight">
                  Brands
                </span>
              </div>
            </a>
          </li>
          <li className="text-center">
            <a
              className="inline-block py-2 px-3 hover:bg-gray-100 group transition duration-200 rounded-full"
              href="/#"
              tabindex="9"
            >
              <div className="flex items-center gap-2">
                <span className="text-white group-hover:text-black text-sm font-medium tracking-tight">
                  Events
                </span>
              </div>
            </a>
          </li>
        </ul>
      </li>
      <li className="text-center">
        <a
          className="inline-block py-2 px-3 hover:bg-gray-100 group transition duration-200 rounded-full"
          href="/#"
          tabindex="2"
        >
          <div className="flex items-center gap-2">
            <span className="text-white group-hover:text-black text-sm font-medium tracking-tight">
              Seed
            </span>
            <div className="text-white group-hover:text-black transition duration-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
              >
                <path
                  d="M12.848 6L8.18132 10.6667L3.51465 6"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </div>
          </div>
        </a>
        <ul className="hidden flex items-center gap-2">
          <li className="text-center">
            <a
              className="inline-block py-2 px-3 hover:bg-gray-100 group transition duration-200 rounded-full"
              href="/#"
              tabindex="3"
            >
              <div className="flex items-center gap-2">
                <span className="text-white group-hover:text-black text-sm font-medium tracking-tight">
                  Corn
                </span>
              </div>
            </a>
          </li>
          <li className="text-center">
            <a
              className="inline-block py-2 px-3 hover:bg-gray-100 group transition duration-200 rounded-full"
              href="/#"
              tabindex="4"
            >
              <div className="flex items-center gap-2">
                <span className="text-white group-hover:text-black text-sm font-medium tracking-tight">
                  Soybeans
                </span>
              </div>
            </a>
          </li>
          <li className="text-center">
            <a
              className="inline-block py-2 px-3 hover:bg-gray-100 group transition duration-200 rounded-full"
              href="/#"
              tabindex="5"
            >
              <div className="flex items-center gap-2">
                <span className="text-white group-hover:text-black text-sm font-medium tracking-tight">
                  Wheat
                </span>
              </div>
            </a>
          </li>
          <li className="text-center">
            <a
              className="inline-block py-2 px-3 hover:bg-gray-100 group transition duration-200 rounded-full"
              href="/#"
              tabindex="6"
            >
              <div className="flex items-center gap-2">
                <span className="text-white group-hover:text-black text-sm font-medium tracking-tight">
                  Cover Crop
                </span>
              </div>
            </a>
          </li>
          <li className="text-center">
            <a
              className="inline-block py-2 px-3 hover:bg-gray-100 group transition duration-200 rounded-full"
              href="/#"
              tabindex="7"
            >
              <div className="flex items-center gap-2">
                <span className="text-white group-hover:text-black text-sm font-medium tracking-tight">
                  Pasture Mix
                </span>
              </div>
            </a>
          </li>
          <li className="text-center">
            <a
              className="inline-block py-2 px-3 hover:bg-gray-100 group transition duration-200 rounded-full"
              href="/#"
              tabindex="8"
            >
              <div className="flex items-center gap-2">
                <span className="text-white group-hover:text-black text-sm font-medium tracking-tight">
                  Food Plot
                </span>
              </div>
            </a>
          </li>
        </ul>
      </li>
      <li className="text-center">
        <a
          className="inline-block py-2 px-3 hover:bg-gray-100 group transition duration-200 rounded-full"
          href="/#"
        >
          <div className="flex items-center gap-2">
            <span className="text-white group-hover:text-black text-sm font-medium tracking-tight">
              Feed
            </span>
            <div className="text-white group-hover:text-black transition duration-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
              >
                <path
                  d="M12.848 6L8.18132 10.6667L3.51465 6"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </div>
          </div>
        </a>
        <ul className="hidden flex items-center gap-2">
          <li className="text-center">
            <a
              className="inline-block py-2 px-3 hover:bg-gray-100 group transition duration-200 rounded-full"
              href="/#"
              tabindex="3"
            >
              <div className="flex items-center gap-2">
                <span className="text-white group-hover:text-black text-sm font-medium tracking-tight">
                  Equine
                </span>
              </div>
            </a>
          </li>
          <li className="text-center">
            <a
              className="inline-block py-2 px-3 hover:bg-gray-100 group transition duration-200 rounded-full"
              href="/#"
              tabindex="4"
            >
              <div className="flex items-center gap-2">
                <span className="text-white group-hover:text-black text-sm font-medium tracking-tight">
                  Swine
                </span>
              </div>
            </a>
          </li>
          <li className="text-center">
            <a
              className="inline-block py-2 px-3 hover:bg-gray-100 group transition duration-200 rounded-full"
              href="/#"
              tabindex="5"
            >
              <div className="flex items-center gap-2">
                <span className="text-white group-hover:text-black text-sm font-medium tracking-tight">
                  Calf
                </span>
              </div>
            </a>
          </li>
          <li className="text-center">
            <a
              className="inline-block py-2 px-3 hover:bg-gray-100 group transition duration-200 rounded-full"
              href="/#"
              tabindex="6"
            >
              <div className="flex items-center gap-2">
                <span className="text-white group-hover:text-black text-sm font-medium tracking-tight">
                  Sheep
                </span>
              </div>
            </a>
          </li>
          <li className="text-center">
            <a
              className="inline-block py-2 px-3 hover:bg-gray-100 group transition duration-200 rounded-full"
              href="/#"
              tabindex="7"
            >
              <div className="flex items-center gap-2">
                <span className="text-white group-hover:text-black text-sm font-medium tracking-tight">
                  Goat
                </span>
              </div>
            </a>
          </li>
          <li className="text-center">
            <a
              className="inline-block py-2 px-3 hover:bg-gray-100 group transition duration-200 rounded-full"
              href="/#"
              tabindex="8"
            >
              <div className="flex items-center gap-2">
                <span className="text-white group-hover:text-black text-sm font-medium tracking-tight">
                  Poultry
                </span>
              </div>
            </a>
          </li>
          <li className="text-center">
            <a
              className="inline-block py-2 px-3 hover:bg-gray-100 group transition duration-200 rounded-full"
              href="/#"
              tabindex="9"
            >
              <div className="flex items-center gap-2">
                <span className="text-white group-hover:text-black text-sm font-medium tracking-tight">
                  Beef
                </span>
              </div>
            </a>
          </li>
          <li className="text-center">
            <a
              className="inline-block py-2 px-3 hover:bg-gray-100 group transition duration-200 rounded-full"
              href="/#"
              tabindex="10"
            >
              <div className="flex items-center gap-2">
                <span className="text-white group-hover:text-black text-sm font-medium tracking-tight">
                  Dairy
                </span>
              </div>
            </a>
          </li>
          <li className="text-center">
            <a
              className="inline-block py-2 px-3 hover:bg-gray-100 group transition duration-200 rounded-full"
              href="/#"
              tabindex="11"
            >
              <div className="flex items-center gap-2">
                <span className="text-white group-hover:text-black text-sm font-medium tracking-tight">
                  Pet
                </span>
              </div>
            </a>
          </li>
          <li className="text-center">
            <a
              className="inline-block py-2 px-3 hover:bg-gray-100 group transition duration-200 rounded-full"
              href="/#"
              tabindex="12"
            >
              <div className="flex items-center gap-2">
                <span className="text-white group-hover:text-black text-sm font-medium tracking-tight">
                  Rabbit
                </span>
              </div>
            </a>
          </li>
          <li className="text-center">
            <a
              className="inline-block py-2 px-3 hover:bg-gray-100 group transition duration-200 rounded-full"
              href="/#"
              tabindex="13"
            >
              <div className="flex items-center gap-2">
                <span className="text-white group-hover:text-black text-sm font-medium tracking-tight">
                  Lactation
                </span>
              </div>
            </a>
          </li>
          <li className="text-center">
            <a
              className="inline-block py-2 px-3 hover:bg-gray-100 group transition duration-200 rounded-full"
              href="/#"
              tabindex="14"
            >
              <div className="flex items-center gap-2">
                <span className="text-white group-hover:text-black text-sm font-medium tracking-tight">
                  Full truckloads
                </span>
              </div>
            </a>
          </li>
        </ul>
      </li>
      <li className="text-center">
        <a
          className="inline-block py-2 px-3 hover:bg-gray-100 group transition duration-200 rounded-full"
          href="/#"
        >
          <div className="flex items-center gap-2">
            <span className="text-white group-hover:text-black text-sm font-medium tracking-tight">
              Commodities
            </span>
            <div className="text-white group-hover:text-black transition duration-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
              >
                <path
                  d="M12.848 6L8.18132 10.6667L3.51465 6"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </div>
          </div>
        </a>
        <ul className="hidden flex items-center gap-2">
          <li className="text-center">
            <a
              className="inline-block py-2 px-3 hover:bg-gray-100 group transition duration-200 rounded-full"
              href="/#"
              tabindex="8"
            >
              <div className="flex items-center gap-2">
                <span className="text-white group-hover:text-black text-sm font-medium tracking-tight">
                  About
                </span>
              </div>
            </a>
          </li>
          <li className="text-center">
            <a
              className="inline-block py-2 px-3 hover:bg-gray-100 group transition duration-200 rounded-full"
              href="/#"
              tabindex="9"
            >
              <div className="flex items-center gap-2">
                <span className="text-white group-hover:text-black text-sm font-medium tracking-tight">
                  Products
                </span>
              </div>
            </a>
          </li>
          <li className="text-center">
            <a
              className="inline-block py-2 px-3 hover:bg-gray-100 group transition duration-200 rounded-full"
              href="/#"
              tabindex="10"
            >
              <div className="flex items-center gap-2">
                <span className="text-white group-hover:text-black text-sm font-medium tracking-tight">
                  Team
                </span>
              </div>
            </a>
          </li>
        </ul>
      </li>
      <li className="text-center">
        <a
          className="inline-block py-2 px-3 hover:bg-gray-100 group transition duration-200 rounded-full"
          href="/#"
        >
          <div className="flex items-center gap-2">
            <span className="text-white group-hover:text-black text-sm font-medium tracking-tight">
              Garden Center
            </span>
            <div className="text-white group-hover:text-black transition duration-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
              >
                <path
                  d="M12.848 6L8.18132 10.6667L3.51465 6"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </div>
          </div>
        </a>
        <ul className="hidden flex items-center gap-2">
          <li className="text-center">
            <a
              className="inline-block py-2 px-3 hover:bg-gray-100 group transition duration-200 rounded-full"
              href="/#"
              tabindex="5"
            >
              <div className="flex items-center gap-2">
                <span className="text-white group-hover:text-black text-sm font-medium tracking-tight">
                  Hours (currently closed for the season)
                </span>
              </div>
            </a>
          </li>
          <li className="text-center">
            <a
              className="inline-block py-2 px-3 hover:bg-gray-100 group transition duration-200 rounded-full"
              href="/#"
              tabindex="6"
            >
              <div className="flex items-center gap-2">
                <span className="text-white group-hover:text-black text-sm font-medium tracking-tight">
                  Fertilizer
                </span>
              </div>
            </a>
          </li>
          <li className="text-center">
            <a
              className="inline-block py-2 px-3 hover:bg-gray-100 group transition duration-200 rounded-full"
              href="/#"
              tabindex="7"
            >
              <div className="flex items-center gap-2">
                <span className="text-white group-hover:text-black text-sm font-medium tracking-tight">
                  Soil
                </span>
              </div>
            </a>
          </li>
        </ul>
      </li>
    </ul>
  );
};

export default Nav;

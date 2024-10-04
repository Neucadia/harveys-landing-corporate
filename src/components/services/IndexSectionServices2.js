import React from "react";

const logos = [
  {
    name: "tiller",
  },
  {
    name: "script",
  },
];

export default function IndexSectionServices2() {
  const [activeLogo, setActiveLogo] = React.useState(logos[0]);

  return (
    <React.Fragment>
      <>
        <section className="px-8 md:px-24 py-32">
          {" "}
          <p className="tracking-tight text-gray-700 mb-32">Our brands</p>
          <p class="text-gray-900 tracking-tight mb-8 max-w-lg">
            Five flexible divisions to cover every acre of the ag landscape
          </p>
          {/* eslint-disable-next-line */}
          <a className="group">
            {" "}
            <div className="flex justify-between items-center py-8 relative border-t border-b border-black border-opacity-10">
              {" "}
              <div className="flex gap-7">
                {" "}
                <p className="font-medium tracking-tight text-gray-400 group-hover:text-black transition duration-200">
                  01.
                </p>{" "}
                {/* eslint-disable-next-line */}
                <a
                  onClick={() =>
                    setActiveLogo(
                      logos[
                        logos.findIndex((logo) => logo.name !== activeLogo.name)
                      ]
                    )
                  }
                >
                  <img
                    src={`/consulty-assets/logos/harveys-${activeLogo.name}-commodities.png`}
                    alt="Harvey's Commodities"
                    className="opacity-70 group-hover:opacity-100 transition duration-200"
                  />
                </a>
              </div>{" "}
              <span className="text-orange-300 group-hover:text-orange-400 transition duration-200">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={48}
                  height={48}
                  viewBox="0 0 48 48"
                  fill="none"
                >
                  {" "}
                  <path
                    d="M28 10L42 24M42 24L28 38M42 24L6 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />{" "}
                </svg>{" "}
              </span>{" "}
              <div className="absolute right-20 -top-24">
                {" "}
                <img
                  className="hidden rounded-2xl object-cover"
                  style={{ height: 220 }}
                  src="consulty-assets/services/picture14.png"
                  alt="Harvey's Commodities"
                />{" "}
              </div>{" "}
            </div>
          </a>{" "}
          {/* eslint-disable-next-line */}
          <a className="group">
            {" "}
            <div className="flex justify-between items-center py-8 relative border-t border-b border-black border-opacity-10">
              <div className="flex gap-7">
                {" "}
                <p className="font-medium tracking-tight text-gray-400 group-hover:text-black transition duration-200">
                  02.
                </p>{" "}
                {/* eslint-disable-next-line */}
                <a
                  onClick={() =>
                    setActiveLogo(
                      logos[
                        logos.findIndex((logo) => logo.name !== activeLogo.name)
                      ]
                    )
                  }
                >
                  <img
                    src={`/consulty-assets/logos/harveys-${activeLogo.name}-feed.png`}
                    alt="Harvey's Feed"
                    className="opacity-70 group-hover:opacity-100 transition duration-200"
                  />
                </a>
              </div>{" "}
              <span className="text-orange-300 group-hover:text-orange-400 transition duration-200">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={48}
                  height={48}
                  viewBox="0 0 48 48"
                  fill="none"
                >
                  {" "}
                  <path
                    d="M28 10L42 24M42 24L28 38M42 24L6 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />{" "}
                </svg>{" "}
              </span>{" "}
              <div className="absolute right-20 -top-24">
                {" "}
                <img
                  className="hidden rounded-2xl object-cover"
                  style={{ height: 220 }}
                  src="consulty-assets/services/picture13.png"
                  alt="Harvey's Feed"
                />{" "}
              </div>
            </div>
          </a>{" "}
          {/* eslint-disable-next-line */}
          <a className="group">
            <div className="flex justify-between items-center py-8 relative border-t border-b border-black border-opacity-10">
              <div className="flex gap-7">
                <p className="font-medium tracking-tight text-gray-400 group-hover:text-black transition duration-200">
                  03.
                </p>
                {/* eslint-disable-next-line */}
                <a
                  onClick={() =>
                    setActiveLogo(
                      logos[
                        logos.findIndex((logo) => logo.name !== activeLogo.name)
                      ]
                    )
                  }
                >
                  <img
                    src={`/consulty-assets/logos/harveys-${activeLogo.name}-seed.png`}
                    alt="Harvey's Seed"
                    className="opacity-70 group-hover:opacity-100 transition duration-200"
                  />
                </a>
              </div>
              <span className="text-orange-300 group-hover:text-orange-400 transition duration-200">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={48}
                  height={48}
                  viewBox="0 0 48 48"
                  fill="none"
                >
                  {" "}
                  <path
                    d="M28 10L42 24M42 24L28 38M42 24L6 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />{" "}
                </svg>{" "}
              </span>{" "}
              <div className="absolute right-20 -top-24">
                {" "}
                <img
                  className="hidden rounded-2xl object-cover"
                  style={{ height: 220 }}
                  src="consulty-assets/services/picture15.png"
                  alt="Harvey's Seed"
                />{" "}
              </div>
            </div>
          </a>{" "}
          {/* eslint-disable-next-line */}
          <a className="group">
            <div className="flex justify-between items-center py-8 relative border-t border-b border-black border-opacity-10">
              <div className="flex gap-7">
                <p className="font-medium tracking-tight text-gray-400 group-hover:text-black transition duration-200">
                  04.
                </p>
                {/* eslint-disable-next-line */}
                <a
                  onClick={() =>
                    setActiveLogo(
                      logos[
                        logos.findIndex((logo) => logo.name !== activeLogo.name)
                      ]
                    )
                  }
                >
                  <img
                    src={`/consulty-assets/logos/harveys-${activeLogo.name}-store.png`}
                    alt="Harvey's Store"
                    className="opacity-70 group-hover:opacity-100 transition duration-200"
                  />
                </a>
              </div>{" "}
              <span className="text-orange-300 group-hover:text-orange-400 transition duration-200">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={48}
                  height={48}
                  viewBox="0 0 48 48"
                  fill="none"
                >
                  {" "}
                  <path
                    d="M28 10L42 24M42 24L28 38M42 24L6 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />{" "}
                </svg>{" "}
              </span>{" "}
              <div className="absolute right-20 -top-24">
                {" "}
                <img
                  className="hidden rounded-2xl object-cover"
                  style={{ height: 220 }}
                  src="consulty-assets/services/picture12.jpg"
                  alt="Harvey's Store"
                />{" "}
              </div>
            </div>
          </a>{" "}
          {/* eslint-disable-next-line */}
          <a className="group">
            <div className="flex justify-between items-center py-8 relative border-t border-b border-black border-opacity-10">
              <div className="flex gap-7">
                <p className="font-medium tracking-tight text-gray-400 group-hover:text-black transition duration-200">
                  05.
                </p>
                {/* eslint-disable-next-line */}
                <a
                  onClick={() =>
                    setActiveLogo(
                      logos[
                        logos.findIndex((logo) => logo.name !== activeLogo.name)
                      ]
                    )
                  }
                >
                  <img
                    src={`/consulty-assets/logos/harveys-${activeLogo.name}-gc.png`}
                    alt="Harvey's Garden Center"
                    className="opacity-70 group-hover:opacity-100 transition duration-200"
                  />
                </a>
              </div>{" "}
              <span className="text-orange-300 group-hover:text-orange-400 transition duration-200">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={48}
                  height={48}
                  viewBox="0 0 48 48"
                  fill="none"
                >
                  {" "}
                  <path
                    d="M28 10L42 24M42 24L28 38M42 24L6 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />{" "}
                </svg>{" "}
              </span>{" "}
              <div className="absolute right-20 -top-24">
                {" "}
                <img
                  className="hidden rounded-2xl object-cover"
                  style={{ height: 220 }}
                  src="consulty-assets/services/picture16.png"
                  alt="Harvey's Garden Center"
                />{" "}
              </div>
            </div>
          </a>
        </section>
      </>
    </React.Fragment>
  );
}

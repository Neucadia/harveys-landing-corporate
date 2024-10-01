import React from "react";
import { ReactNestedMenu } from "react-nested-menu";
const menu = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Store",
    url: "/#",
    children: [
      {
        id: 3,
        title: "Men",
        url: "/#",
      },
      {
        id: 4,
        title: "Women",
        url: "/#",
      },
      {
        id: 5,
        title: "Kids",
        url: "/#",
      },
      {
        id: 6,
        title: "Footwear",
        url: "/#",
      },
      {
        id: 7,
        title: "Pet",
        url: "/#",
      },
      {
        id: 8,
        title: "Brands",
        url: "/#",
      },
      {
        id: 9,
        title: "Events",
        url: "/#",
      },
    ],
  },
  {
    id: 2,
    title: "Seed",
    url: "/#",
    children: [
      {
        id: 3,
        title: "Corn",
        url: "/#",
      },
      {
        id: 4,
        title: "Soybeans",
        url: "/#",
      },
      {
        id: 5,
        title: "Wheat",
        url: "/#",
      },
      {
        id: 6,
        title: "Cover Crop",
        url: "/#",
      },
      {
        id: 7,
        title: "Pasture Mix",
        url: "/#",
      },
      {
        id: 8,
        title: "Food Plot",
        url: "/#",
      },
    ],
  },
  {
    title: "Feed",
    url: "/#",
    children: [
      {
        id: 3,
        title: "Equine",
        url: "/#",
      },
      {
        id: 4,
        title: "Swine",
        url: "/#",
      },
      {
        id: 5,
        title: "Calf",
        url: "/#",
      },
      {
        id: 6,
        title: "Sheep",
        url: "/#",
      },
      {
        id: 7,
        title: "Goat",
        url: "/#",
      },
      {
        id: 8,
        title: "Poultry",
        url: "/#",
      },
      {
        id: 9,
        title: "Beef",
        url: "/#",
      },
      {
        id: 10,
        title: "Dairy",
        url: "/#",
      },
      {
        id: 11,
        title: "Pet",
        url: "/#",
      },
      {
        id: 12,
        title: "Rabbit",
        url: "/#",
      },
      {
        id: 13,
        title: "Lactation",
        url: "/#",
      },
      {
        id: 14,
        title: "Full truckloads",
        url: "/#",
      },
    ],
  },
  {
    title: "Commodities",
    url: "/#",
    children: [
      {
        id: 8,
        title: "About",
        url: "/#",
      },
      {
        id: 9,
        title: "Products",
        url: "/#",
      },
      {
        id: 10,
        title: "Team",
        url: "/#",
      },
    ],
  },
  {
    title: "Garden Center",
    url: "/#",
    children: [
      {
        id: 5,
        title: "Hours (currently closed for the season)",
        url: "/#",
      },
      {
        id: 6,
        title: "Fertilizer",
        url: "/#",
      },
      {
        id: 7,
        title: "Soil",
        url: "/#",
      },
    ],
  },
];

const logos = [
  {
    url: " consulty-assets/logos/harveys-tiller-white.svg",
  },
  {
    url: " consulty-assets/logos/harveys-script-white.svg",
  },
];
const logosDark = [
  {
    url: " consulty-assets/logos/harveys-tiller-green.svg",
  },
  {
    url: " consulty-assets/logos/harveys-script-green.svg",
  },
];

export default function IndexSectionHeaders1() {
  React.useEffect(() => {
    var promise = ref.current.play();
    if (promise !== undefined) {
      promise
        .then((_) => {
          // Autoplay started!
        })
        .catch((error) => {
          // Autoplay was prevented.
          // Show a "Play" button so that user can start playback.
          console.log(error);
        });
    }
  }, []);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [navOpen, setNavOpen] = React.useState(false);
  const ref = React.useRef(null);
  const [logoURL, setLogoURL] = React.useState(logos[0].url);
  const [logoURLDark, setLogoURLDark] = React.useState(logosDark[0].url);
  const handleClick = () => {
    const nextIsPlaying = !isPlaying;
    setIsPlaying(nextIsPlaying);
    if (nextIsPlaying) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  };

  const linkTransformer = (menuItem) => {
    return (
      <a
        className="inline-block py-2 px-3 hover:bg-gray-100 group transition duration-200 rounded-full"
        href={menuItem.url}
        tabIndex={menuItem.id}
      >
        <div className="flex items-center gap-2">
          <span className="text-white group-hover:text-black text-sm font-medium tracking-tight">
            {menuItem.title}
          </span>
          {menuItem.children && (
            <div className="text-white group-hover:text-black transition duration-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={17}
                height={16}
                viewBox="0 0 17 16"
                fill="none"
              >
                <path
                  d="M12.848 6L8.18132 10.6667L3.51465 6"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          )}
        </div>
      </a>
    );
  };

  const drawerLinkTransformer = (menuItem) => {
    return (
      <a
        className="inline-block py-2 px-3 hover:bg-gray-50 transition duration-200 rounded-full"
        href={menuItem.url}
        tabIndex={menuItem.id}
      >
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium tracking-tight">
            {menuItem.title}
          </span>
          {menuItem.children && (
            <div className="text-white group-hover:text-black transition duration-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={17}
                height={16}
                viewBox="0 0 17 16"
                fill="none"
              >
                <path
                  d="M12.848 6L8.18132 10.6667L3.51465 6"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          )}
        </div>
      </a>
    );
  };

  return (
    <React.Fragment>
      <>
        <section className="p-5 overflow-hidden">
          <div className="rounded-2xl px-4 md:px-14 pb-16 relative overflow-hidden">
            <div className="absolute inset-0">
              <video
                muted
                autoPlay
                loop
                playsInline
                poster="https://static.shuffle.dev/uploads/files/cc/cce6580999c8067e23bb4a662dea535a74b463e5/Screen-Shot-2024-09-12-at-12-19-20-PM.jpg"
                id="bgvid"
                ref={ref}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              >
                <source src="bg.webm" type="video/webm" />
                <source src="bg.mp4" type="video/mp4" />
              </video>
              <nav className="relative p-4 z-50">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3">
                    <a
                      href="#"
                      className="inline-block"
                      onClick={() =>
                        setLogoURL(
                          logos[logos.findIndex((logo) => logo.url !== logoURL)]
                            .url
                        )
                      }
                    >
                      <img className="h-7" src={logoURL} alt />
                    </a>
                  </div>
                  <ReactNestedMenu
                    navParentClassname="hidden flex items-center gap-2"
                    navTopLevelParentClassname="nested hidden lg:flex items-start gap-2"
                    navChildClassname=""
                    linkTransformer={linkTransformer}
                    menuData={menu}
                  />
                  <a
                    href="#"
                    className="rounded-full border border-gray-200 bg-white px-5 py-3 h-14 hover:bg-gray-50 focus:ring-4 focus:ring-gray-200 hidden xl:inline-flex items-center justify-center gap-2 transition duration-200"
                  >
                    <span className="text-sm font-semibold tracking-tight">
                      Call now
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      className
                    >
                      <path d="M6.54 5c.06.89.21 1.76.45 2.59l-1.2 1.2c-.41-1.2-.67-2.47-.76-3.79h1.51m9.86 12.02c.85.24 1.72.39 2.6.45v1.49c-1.32-.09-2.59-.35-3.8-.75l1.2-1.19M7.5 3H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.49c0-.55-.45-1-1-1-1.24 0-2.45-.2-3.57-.57a.84.84 0 0 0-.31-.05c-.26 0-.51.1-.71.29l-2.2 2.2a15.149 15.149 0 0 1-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02A11.36 11.36 0 0 1 8.5 4c0-.55-.45-1-1-1z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="xl:hidden"
                    onClick={() => setNavOpen((prevState) => !prevState)}
                  >
                    <svg
                      className="navbar-burger text-white"
                      width={51}
                      height={51}
                      viewBox="0 0 56 56"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        width={56}
                        height={56}
                        rx={28}
                        fill="currentColor"
                      />
                      <path
                        d="M37 32H19M37 24H19"
                        stroke="black"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </nav>
              <div
                className={`top-0 left-0 bottom-0 w-5/6 max-w-xs z-50 ${
                  navOpen ? `fixed` : `hidden`
                }`}
              >
                <div className="fixed inset-0 bg-black opacity-20" />
                <nav className="relative p-8 w-full h-full bg-white overflow-y-auto">
                  <div className="flex items-center justify-between">
                    <a
                      href="#"
                      className="inline-block"
                      onClick={() =>
                        setLogoURLDark(
                          logosDark[
                            logosDark.findIndex(
                              (logo) => logo.url !== logoURLDark
                            )
                          ].url
                        )
                      }
                    >
                      <img className="h-7" src={logoURLDark} alt />
                    </a>
                    <a
                      href="#"
                      onClick={() => setNavOpen((prevState) => !prevState)}
                    >
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6 18L18 6M6 6L18 18"
                          stroke="#111827"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  </div>
                  <ReactNestedMenu
                    navParentClassname="hidden flex flex-col gap-1 py-1"
                    navTopLevelParentClassname="nested flex flex-col gap-12 py-12"
                    navChildClassname=""
                    linkTransformer={drawerLinkTransformer}
                    menuData={menu}
                  />
                  <div className="flex flex-col gap-4">
                    <a
                      href="#"
                      className="rounded-full bg-black px-5 py-3 h-14 hover:bg-orange-600 focus:bg-orange-500 focus:ring-4 focus:ring-orange-200 inline-flex items-center justify-center gap-2 transition duration-200"
                    >
                      <span className="text-white text-sm font-semibold tracking-tight">
                        Get A Free Consultation
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M14 6.66666H7.33333C4.38781 6.66666 2 9.05447 2 12V13.3333M14 6.66666L10 10.6667M14 6.66666L10 2.66666"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  </div>
                </nav>
              </div>
            </div>
            <div className="relative z-40 pt-80">
              <h1 className="font-heading tracking-tight text-5xl md:text-7xl text-white font-medium max-w-xs md:max-w-xl mb-6">
                Welcome to Harvey's
              </h1>
              <p className="tracking-tight text-white text-lg mb-8 max-w-md">
                Harvey's has grown from a single feed mill into a
                multi-disciplinary group of direct-to-consumer and B2B ventures
              </p>
              <a
                href="#"
                className="rounded-full border border-gray-200 bg-white px-6 py-4 h-16 hover:bg-gray-50 focus:ring-4 focus:ring-gray-200 inline-flex items-center justify-center gap-2 transition duration-200"
              >
                <span className="font-bold tracking-tight">
                  Talk to us today
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  className
                >
                  <path d="M6.54 5c.06.89.21 1.76.45 2.59l-1.2 1.2c-.41-1.2-.67-2.47-.76-3.79h1.51m9.86 12.02c.85.24 1.72.39 2.6.45v1.49c-1.32-.09-2.59-.35-3.8-.75l1.2-1.19M7.5 3H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.49c0-.55-.45-1-1-1-1.24 0-2.45-.2-3.57-.57a.84.84 0 0 0-.31-.05c-.26 0-.51.1-.71.29l-2.2 2.2a15.149 15.149 0 0 1-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02A11.36 11.36 0 0 1 8.5 4c0-.55-.45-1-1-1z" />
                </svg>
              </a>
            </div>
            <div className="hidden md:block absolute bottom-8 right-8">
              <img
                style={{ height: 200 }}
                src="consulty-assets/leading.png"
                alt
              />
            </div>
          </div>
        </section>
      </>
    </React.Fragment>
  );
}

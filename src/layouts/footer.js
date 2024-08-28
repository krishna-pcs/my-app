import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";
import navigation from "../../json/navigation.json";

const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    // Update the year when the component mounts
    setYear(new Date().getFullYear());
  }, []);

  return (
    <div>
      <footer className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 bg-gray-800">
          <div class="flex flex-col">
            <div class="flex mt-24 mb-6 flex-row justify-between">
              <div className="flex flex-1 items-center justify-between sm:items-stretch ">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    alt="Your Company"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    className="h-8 w-auto"
                  />
                </div>
                <div className="flex space-x-9">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      aria-current={item.current ? "page" : undefined}
                      className={"text-white hover:text-sky-700"}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>

                <div class="flex flex-row space-x-5 items-center justify-between">
                  <a href="https://www.linkedin.com/login">
                    <Icon
                      icon="mdi:linkedin"
                      width={25}
                      height={25}
                      className="text-white hover:text-sky-700"
                    />
                  </a>
                  <a href="https://www.facebook.com/login/">
                    <Icon
                      icon="uil:facebook"
                      width={20}
                      height={20}
                      className="text-white hover:text-sky-700"
                    />
                  </a>
                  <a href="https://x.com/i/flow/login">
                    <Icon
                      icon="fa6-brands:square-x-twitter"
                      width={20}
                      height={20}
                      className="text-white hover:text-sky-700"
                    />
                  </a>
                </div>
              </div>
            </div>
            <hr class="border-gray-600" />
            <p class="w-full text-center my-6 text-slate-400">
              Copyright © {year} Tailwind
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

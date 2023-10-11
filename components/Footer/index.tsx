import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";
import { faMedium } from "@fortawesome/free-brands-svg-icons/faMedium";

export default function Footer() {
  const platforms = new Array('twitter', 'linkedIn', 'gitHub', 'mail', 'medium')
  const socials = {
    twitter: 'https://twitter.com/20thirdPro',
    linkedIn: 'https://www.linkedin.com/in/23rdpro',
    gitHub: 'https://github.com/23rdPro',
    mail: 'mailto:mailolumide@gmail.com',
    medium: 'https://medium.com/@olumidebakare',
  }
  return (
    <footer className="relative bg-gray-300 pt-8 pb-6">
      <div
        className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
        style={{ height: "80px" }}
      >
        <svg
          className="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon
            className="text-gray-300 fill-current"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>
      <div className="container mx-auto px-4">
        <div className="flex flex-row">
          <div className="flex lg:w-2/4 w-full px-4">
            <h4 className="text-3xl font-semibold">
                Let&apos;s keep in touch!
            </h4>
            <div className="mt-6">
              { platforms.map((pfm, i) => (
                <a href={pfm === 'twitter' && socials.twitter ||
                  pfm === 'linkedIn' && socials.linkedIn ||
                  pfm === 'gitHub' && socials.gitHub ||
                  pfm === 'mail' && socials.mail ||
                  pfm === 'medium' && socials.medium ||
                  ''
                  }
                  key={i} 
                  target="_blank"
                >
                  <button
                    className="bg-white text-black-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                    type="button" 
                  >
                    {pfm === 'twitter' && <FontAwesomeIcon icon={faTwitter} className="flex"/> ||
                    pfm === 'linkedIn' && <FontAwesomeIcon icon={faLinkedin} className="flex"/> ||
                    pfm === 'gitHub' && <FontAwesomeIcon icon={faGithub} className="flex"/> ||
                    pfm === 'mail' && <FontAwesomeIcon icon={faEnvelope} className="flex"/> ||
                    pfm === 'medium' && <FontAwesomeIcon icon={faMedium} className="flex"/> }
                  </button>
                </a>
              )) }
            </div>
            <div className="-lg:-w-2/4 w-full px-4">kkl</div>
          </div>
        </div>
      </div>
      {/* <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl font-semibold">
              Let&apos;s keep in touch!
            </h4>
            <div className="mt-6">
              <a href={`https://twitter.com/20thirdPro`} target="_blank">
                <button
                  className="bg-white text-blue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                  type="button" 
                >
                  <FontAwesomeIcon icon={faTwitter} className="flex"/>
                </button>
              </a>
              <a href="https://www.linkedin.com/in/23rdpro/" target="_blank">
                <button
                  className="bg-white text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                  type="button"
                >
                  <FontAwesomeIcon icon={faLinkedin} className="flex"/>
                </button>
              </a>
              <a href="https://github.com/23rdPro" target="_blank">
                <button
                  className="bg-white text-gray-900 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                  type="button"
                >
                  <FontAwesomeIcon icon={faGithub} className="flex"/>
                </button>
              </a>
              <a href="mailto:mailolumide@gmail.com" target="_blank">
                <button
                  className="bg-white text-gray-900 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                  type="button"
                >
                  <FontAwesomeIcon icon={faEnvelope} className="flex"/>
                </button>
              </a>
              <a href="https://medium.com/@olumidebakare" target="_blank">
                <button
                  className="bg-white text-gray-900 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                  type="button"
                >
                  <FontAwesomeIcon icon={faMedium} className="flex"/>
                </button>
              </a>
            </div>
          </div>
          <div className="w-full  px-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full  px-4 ml-auto">
                <span className="block uppercase text-gray-600 text-sm font-semibold mb-2">
                </span>
                <textarea 
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Write Message"
                  rows={2}
                  cols={50}
                />
              </div>
              <div className="w-full  px-4">
                <span className="block uppercase text-gray-600 text-sm font-semibold mb-2">
                </span>
                <button 
                  className='bg-blue-400 text-white text-xs font-bold capitalize px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3'
                  type="button"
                  style={{ transition: 'all .15s ease' }}
                >
                  Send Message ≥≥
                </button>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-400" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-gray-600 font-semibold py-1">
              {new Date().getFullYear()}{" "}
              <Link
                href="/"
                className="text-gray-600 hover:text-gray-900"
              >
                olumidebakare.com
              </Link>
            </div>
          </div>
        </div>
      </div> */}
    </footer>
  );
}

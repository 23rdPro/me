import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";
import { faMedium } from "@fortawesome/free-brands-svg-icons/faMedium";
import Link from "next/link";
import useMediaQuery from "@/hooks/useMediaQuery";
import { ConsoleLogger } from "@/logger/consoleLogger";

export default function Footer() {
  const contactForm = useRef(null);
  const [message, setMessage] = useState('');
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
  const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID
  const success = new ConsoleLogger({ level: 'log' })
  const loggerError = new ConsoleLogger({ level: 'error' })
  const handleSubmit = (e: any) => {
    e.preventDefault()
    emailjs.sendForm(serviceId!, templateId!, contactForm.current!, publicKey)
      .then((result) => {
        success.log('Email sent §∞>', [result.text, result.status])
      }, (error) => {
        console.log(error.text);
        loggerError.log('e®®o®:', [error.text])
      });
  }
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    e.preventDefault()
    setMessage(e.target.value)
  }
  const socials = [
    { href: 'https://twitter.com/20thirdPro', icon: faTwitter },
    { href: 'https://www.linkedin.com/in/23rdpro', icon: faLinkedin },
    { href: 'https://github.com/23rdPro', icon: faGithub },
    { href: 'mailto:mailolumide@gmail.com', icon: faEnvelope },
    { href: 'https://medium.com/@olumidebakare', icon: faMedium }
  ]
  const isDesktopOrLaptop = useMediaQuery({
    mediaQuery: '(min-width: 1224px)'
  })
  return (
    <footer className="relative bg-gray-300 pt-8 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-row items-stretch md:flex-wrap">
          <div className="basis-1/2 w-full px-4">
            <h4 id='contact' className="text-3xl font-semibold">
                Let&apos;s keep in touch!
            </h4>
            <div className="mt-2">
              {socials.map((social, i) => (
                <a key={i} href={social.href} target="_blank">
                  <button
                    className="bg-white text-black-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                    type="button"
                  >
                    <FontAwesomeIcon icon={social.icon} className="flex"/>
                  </button>
                </a>
              ))}
            </div>
          </div>
          {isDesktopOrLaptop && (
            <div className="basis-1/2 w-full px-4 text-right">
              <form ref={contactForm} onSubmit={handleSubmit}>
                <textarea 
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Write Message"
                  rows={2}
                  cols={50}
                  onChange={handleChange}
                  value={message}
                  name="message"
                />
                <div className="mt-2">
                  <button 
                    className='hidden rounded-full bg-white-400 text-white text-xs font-bold capitalize px-4 py-2 shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3'
                    type="submit"
                    style={{ transition: 'all .15s ease' }}
                  >
                    {/* todo: animate on success */}
                  </button>
                  <button 
                    className='bg-blue-400 text-white text-xs font-bold capitalize px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3'
                    type="submit"
                    style={{ transition: 'all .15s ease' }}
                  >
                    Send Message ≥≥
                  </button>
                </div>
              </form>
            </div>
          )}
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
      </div>
    </footer>
  );
}

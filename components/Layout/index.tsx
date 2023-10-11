import React, { useEffect, useRef } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Image from "next/image";
import cover from '@/public/cover.jpeg'
import { useInView } from "react-intersection-observer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { Merriweather } from 'next/font/google';
import dynamic from "next/dynamic";
import resume from '@/public/document.pdf'
import Link from "next/link";
import Head from "../Head";

const quoteFont = Merriweather({
  weight: '700',
  subsets: ['latin', 'latin-ext'],
  style: 'italic',
  display: 'fallback',
})

export default function Layout() {
  const PDFViewer = dynamic(() => import('@/components/PDFViewer'), { ssr: false })
  const { ref, inView } = useInView({ threshold: [0, 1], delay: 1000 })
  const services = [
    {
      name: 'frontend <web>',
      description: `I develop and implement ui/ux components optimized for both Destop and Mobile platforms.`,
      tools: ['react', 'jquery', 'javascript', 'typescript', 'nodejs', 'nextjs', 'cypress', 'git', 'github', 'tailwind'],
      bg: cover,
    },
    {
      name: 'backend <web>',
      description: `I develop and maintain web services and specialize in APIs and can assure code quality.`,
      tools: ['python', 'django', 'flask', 'nodejs', 'git', 'github', 'graphql', 'drf', 'fastapi'],
      bg: cover
    },
    {
      name: 'data analysis',
      description: `I gather insights from actionable data and document results, trends, and recommendations.`,
      tools: ['pandas', 'excel/googlesheets', 'matplotlib', 'numpy', 'jupyterlab', 'sql', 'python'],
      bg: cover,
    },
    {
      name: 'dashboard',
      description: `I utilize contemporary presentation tools to capture an overview of user data`,
      tools: ['googlesheets', 'tableau', 'matplotlib', 'seaborn', 'reactchartjs'],
      bg: cover,
    }
  ]
  const portfolios = [
    {
      name: 'data analysis',
      description: 'Investigating effectiveness of emergency-response processes',
      tools: [],
      bg: cover,
    },
    {
      name: 'dashboard',
      description: 'Examine key perormance indicators',
      tools: [],
      bg: cover,
    },
    {
      name: 'react application',
      description: 'School management application: ScreenLine Learn',
      tools: [],
      bg: cover,
    },
    {
      name: 'web development',
      description: 'Rental System: Agribooth',
      company: 'SQT Web Solutions',
      tools: [],
      bg: cover,
    }
  ]
  const contactMe = {
    name: 'olumide',
    description: `As a Full-Stack Engineer, I can combine frontend (typescript incl.) with
                  backend (python, Django inclu.) stacks to create applicatons following objectives
                  .`,
    services: [
      
    ]
  }
  return (
    <>
      <Head />
      <Navbar transparent={inView} />
      <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center"
            style={{ minHeight: "75vh" }}>
          <div 
            className='absolute top-0 w-full h-full bg-center bg-cover'
            style={{ backgroundImage: `url(${cover.src})`, }}
            ref={ref}
          >
            {/* <div className='w-full h-full'></div> */}
            {/* <span id="blackOverlay" className="w-full h-full relative opacity-75 bg-black"></span> */}
          </div>
          <div className="container relative mx-auto">
              <div className="items-center flex flex-wrap">
                <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                  <div className="pr-12">
                    <h1 className="text-white font-semibold text-5xl">
                      Olumide Bakare
                    </h1>
                    <p className="mt-1 ml-2 text-lg text-white capitalize font-sans font-bold">
                      Full Stack Product Designer & Analyst.
                    </p>
                  </div>
                </div>
              </div>
          </div>
        </div>
        <section className="pt-20 pb-48">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center text-center mb-20">
              <div className="w-full lg:w-6/12 px-4">
                <p className="text-lg leading-relaxed m-1 text-gray-600">
                  <FontAwesomeIcon icon={faQuoteLeft} aria-hidden size='1x' color='#888' />
                  <span className={quoteFont.className}> ...Estimating corporate needs and delivering quality software in any agile setup. </span>
                  <FontAwesomeIcon icon={faQuoteRight} aria-hidden size='1x' color='#888'/>
                </p>
              </div>
              {/* <object data='https://docdro.id/8sdyvCp' width={1100} height={500}  /> */}
            </div>
            <div className='pl-10 pb-6'>
              <h3 className="text-black font-semibold text-3xl capitalize">
                Services.
              </h3>
            </div>
            <div className="flex flex-wrap">
              {services.map((service) => (
                <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4" key={service.name}>
                <div className="px-6">
                  <div className="max-w-sm rounded overflow-hidden shadow-xl hover:shadow-md">
                    <Image alt="..." className='w-full' src={service.bg?.src!} width={1500} height={1500} />
                    <div className="px-6 py-4">
                      <div className="font-bold text-xl mb-2 capitalize">{service.name}</div>
                      <p className="text-gray-700 text-base">
                        {service.description}
                      </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                      {service.tools?.map((tool) => (
                        <span key={tool} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        #{tool}
                      </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              ))}
            </div>
            <div className="pt-20 pb-5">
            <div className='pl-10 pb-6'>
              <h3 className="text-black font-semibold text-3xl capitalize">
                Resume.
              </h3>
            </div>
            <div className="flex flex-wrap justify-center text-center mb-24">
              <div className="w-full px-4 align-middle">  {/* lg:w-6/12 */}
                <p className="text-lg leading-relaxed m-1 text-gray-600 bg-gray-100"  style={{ height: '100vh', overflowY: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                  {/* <PDFViewer /> */}
                  <object data='https://docdro.id/8sdyvCp' className="w-full h-full"  />
                </p>
              </div>
            </div>
            </div>
            <div className='pl-10 pb-6'>
              <h3 className="text-black font-semibold text-3xl capitalize">
                Portfolio.
              </h3>
            </div>
            <div className="flex flex-wrap">
              {portfolios.map((portfolio) => (
                <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4" key={portfolio.name}>
                <div className="px-6">
                  <div className="max-w-sm rounded overflow-hidden shadow-xl hover:shadow-md">
                    <Image alt="..." className='w-full' src={portfolio.bg?.src!} width={1500} height={1500} />
                    <div className="px-6 py-4">
                      <div className="font-bold text-xl mb-2 capitalize">{portfolio.name}</div>
                      <p className="text-gray-700 text-base">
                        {portfolio?.company && <Link href='https://www.sqtwebsolutions.com/index' className='hover:text-gray-400'>SQT Web Solutions:</Link>} {portfolio.description}
                      </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                      {portfolio.tools?.map((tool) => (
                        <span key={tool} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        #{tool}
                      </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              ))}
            </div>
          </div>
        </section>
        {/* <section className="relative block py-24 lg:pt-0 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300">
                  <div className="flex-auto p-5 lg:p-10">
                    <h4 className="text-2xl font-semibold">
                      Want to work with us?
                    </h4>
                    <p className="leading-relaxed mt-1 mb-4 text-gray-600">
                      Complete this form and we will get back to you in 24 hours.
                    </p>
                    <div className="relative w-full mb-3 mt-8">
                      <label
                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        htmlFor="full-name"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="Full Name"
                        style={{ transition: "all .15s ease" }}
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="Email"
                        style={{ transition: "all .15s ease" }}
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        htmlFor="message"
                      >
                        Message
                      </label>
                      <textarea
                        rows={4}
                        cols={80}
                        className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="Type a message..."
                      />
                    </div>
                    <div className="text-center mt-6">
                      <button
                        className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                        style={{ transition: "all .15s ease" }}
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
      </main>
      <Footer />
    </>
  );
}

import React from 'react'
import Layout from '@/components/Layout'
import cover from '@/public/cover.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons/faQuoteLeft'
import { Merriweather } from 'next/font/google'
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons/faQuoteRight'
import { services, portfolios } from '@/constants/services'
import Image from 'next/image'
import Link from 'next/link'

const quoteFont = Merriweather({
  weight: '700',
  subsets: ['latin', 'latin-ext'],
  style: 'italic',
  display: 'fallback',
})

export default function Home() {
  return (
    <Layout>
      <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center"
            style={{ minHeight: "75vh" }}>
          <div 
            className='absolute top-0 w-full h-full bg-center bg-cover'
            style={{ backgroundImage: `url(${cover.src})`, }}
          >
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
            </div>
            <div className='pl-10 pb-6'>
              <h3 id='services' className="text-black font-semibold text-3xl capitalize">
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
              <h3 id='resume'className="text-black font-semibold text-3xl capitalize">
                Resume.
              </h3>
            </div>
            <div className="flex flex-wrap justify-center text-center mb-24">
              <div className="w-full px-4 align-middle">  {/* lg:w-6/12 */}
                <p className="text-lg leading-relaxed m-1 text-gray-600 bg-gray-100"  style={{ height: '100vh', overflowY: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                  <object data='https://docdro.id/8sdyvCp' className="w-full h-full"  />
                </p>
              </div>
            </div>
            </div>
            <div className='pl-10 pb-6'>
              <h3 id='portfolio' className="text-black font-semibold text-3xl capitalize">
                Portfolio.
              </h3>
            </div>
            <div className="flex flex-wrap">
              {portfolios.map((portfolio) => (
                <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4" key={portfolio.name}>
                <div className="px-6">
                  <div className="max-w-sm rounded overflow-hidden shadow-xl hover:shadow-md">
                    <a href={portfolio?.href || '/' }>
                      <Image alt="..." className='w-full' src={portfolio.bg?.src!} width={1500} height={1500} />
                    </a>
                    <div className="px-6 py-4">
                      <div className="mb-3 font-bold capitalize text-xl text-gray-400 hover:text-black">
                        {portfolio.name}
                      </div>
                      <p className="text-gray-900 text-base">
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
      </main>
    </Layout>
  )
}

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { faServer } from "@fortawesome/free-solid-svg-icons/faServer";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons/faBriefcase";
import { faVolumeControlPhone } from "@fortawesome/free-solid-svg-icons/faVolumeControlPhone";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import { faFolderOpen } from "@fortawesome/free-solid-svg-icons/faFolderOpen";

export default function Navbar(props: any) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const menus = new Array('services', 'resume', 'portfolio', 'contact')
  const icons = new Array(faServer, faFolderOpen, faBriefcase, faVolumeControlPhone)
  let zip = (first: Array<any>, second: Array<any>) => first.map((menu: string, i: number) => [menu, second[i]])
  const items = zip(menus, icons)
  return (
    <nav
      className={
        (props.transparent
          ? 'top-0 fixed z-50 w-full '
          : 'sticky top-0 shadow-xl bg-white ') +
          'flex flex-wrap items-center justify-between px-2 py-3'
      }
    >
      <div className="container px-2 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <Link 
            className={(props.transparent ? 'text-white ' : 'text-gray-800 ')+
              'text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap capitalize hover:text-gray-600'
            }
            href={`/`}
          >
            olumide bakare
          </Link>
          <button
            className='cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-double focus:outline outline-teal-700'
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <FontAwesomeIcon 
              className={(props.transparent ? 'text-white' : 'text-gray-800')}
              icon={faBars}
            />
          </button>
        </div>
        <div
          className={
            "lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none" +
            (navbarOpen ? " block rounded shadow-lg" : " hidden")
          }
          id="example-navbar-warning"
        >
          <ul className="flex flex-col lg:flex-row list-none ml-auto">
            {items.map((item) => (
              <li className="flex items-center" key={item[0]}>
                <Link 
                  className={(props.transparent
                    ? 'lg:text-white lg:hover:text-gray-300 text-gray-800'
                    : 'text-gray-800 hover:text-gray-600') + 
                    ' px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold'
                  }
                  href={`/`}
                >
                  <FontAwesomeIcon 
                    key={item[0]}
                    icon={item[1]}
                    className={
                      (props.transparent
                        ? 'lg:text-gray-300 text-gray-500 '
                        : 'text-gray-500 ') +
                        'text-lg leading-lg mr-2'
                    }
                    inverse={props.transparent}
                  />
                  {item[0]}
                </Link>
            </li>
            ))}
          </ul>
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            <li className="flex items-center">
              <button
                className={
                  (props.transparent
                    ? 'bg-white text-gray-800 active:bg-gray-100 '
                    : 'bg-blue-400 text-white ') +  
                  'text-xs font-bold capitalize px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3'
                }
                type="button"
                style={{ transition: "all .15s ease" }}
              >
                 Download Résumé
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

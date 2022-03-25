import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { AuthContext } from '../../context/authContext'
import { useContext } from 'react'

import NotificationDropdown from '../Dropdowns/NotificationDropdown'
import UserDropdown from '../Dropdowns/UserDropdown.js'

const ExitIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="black"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
    />
  </svg>
)

export default function Sidebar() {
  const router = useRouter()
  const { state, logout } = useContext(AuthContext)

  console.log(state)
  const [collapseShow, setCollapseShow] = React.useState('hidden')

  return (
    <>
      <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
          {/* Toggler */}
          <button
            className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
            type="button"
            onClick={() => setCollapseShow('bg-white m-2 py-3 px-6')}
          >
            <i className="fas fa-bars"></i>
          </button>
          {/* Brand */}
          <Link href="/">
            <a
              href="#pablo"
              className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0 "
            >
              {state.user?.username ? state.user.username : 'Word Games'}
            </a>
          </Link>
          {/* User */}
          <ul className="md:hidden items-center flex flex-wrap list-none">
            <li className="inline-block relative">
              <NotificationDropdown />
            </li>
            <li className="inline-block relative">
              <UserDropdown />
            </li>
          </ul>
          {/* Collapse */}
          <div
            className={
              'md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded ' +
              collapseShow
            }
          >
            {/* Collapse header */}
            <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200">
              <div className="flex flex-wrap">
                <div className="w-6/12">
                  <Link href="/">
                    <a
                      href="#pablo"
                      className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                    >
                      Notus NextJS
                    </a>
                  </Link>
                </div>
                <div className="w-6/12 flex justify-end">
                  <button
                    type="button"
                    className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                    onClick={() => setCollapseShow('hidden')}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
            </div>
            {/* Form */}
            <form className="mt-6 mb-4 md:hidden">
              <div className="mb-3 pt-0">
                <input
                  type="text"
                  placeholder="Search"
                  className="border-0 px-3 py-2 h-12 border border-solid  border-blueGray-500 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal"
                />
              </div>
            </form>

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
            {/* Heading */}
            <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
              Admin Layout Pages
            </h6>
            {/* Navigation */}

            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
              <li className="items-center">
                <Link href="/admin/games">
                  <a
                    href="#pablo"
                    className={
                      'text-xs uppercase py-3 font-bold block ' +
                      (router.pathname.indexOf('/admin/games') !== -1
                        ? 'text-lightBlue-500 hover:text-lightBlue-600'
                        : 'text-blueGray-700 hover:text-blueGray-500')
                    }
                  >
                    <i
                      className={
                        'fas fa-tv mr-2 text-sm ' +
                        (router.pathname.indexOf('/admin/games') !== -1
                          ? 'opacity-75'
                          : 'text-blueGray-300')
                      }
                    ></i>{' '}
                    My Games
                  </a>
                </Link>
              </li>

              <li className="items-center">
                <Link href="/admin/settings">
                  <a
                    href="#pablo"
                    className={
                      'text-xs uppercase py-3 font-bold block ' +
                      (router.pathname.indexOf('/admin/settings') !== -1
                        ? 'text-lightBlue-500 hover:text-lightBlue-600'
                        : 'text-blueGray-700 hover:text-blueGray-500')
                    }
                  >
                    <i
                      className={
                        'fas fa-tools mr-2 text-sm ' +
                        (router.pathname.indexOf('/admin/settings') !== -1
                          ? 'opacity-75'
                          : 'text-blueGray-300')
                      }
                    ></i>{' '}
                    Settings
                  </a>
                </Link>
              </li>

              <li className="items-center">
                <Link href="/admin/tables">
                  <a
                    href="#pablo"
                    className={
                      'text-xs uppercase py-3 font-bold block ' +
                      (router.pathname.indexOf('/admin/tables') !== -1
                        ? 'text-lightBlue-500 hover:text-lightBlue-600'
                        : 'text-blueGray-700 hover:text-blueGray-500')
                    }
                  >
                    <i
                      className={
                        'fas fa-table mr-2 text-sm ' +
                        (router.pathname.indexOf('/admin/tables') !== -1
                          ? 'opacity-75'
                          : 'text-blueGray-300')
                      }
                    ></i>{' '}
                    Tables
                  </a>
                </Link>
              </li>

              <li className="items-center">
                <Link href="/admin/maps">
                  <a
                    href="#pablo"
                    className={
                      'text-xs uppercase py-3 font-bold block ' +
                      (router.pathname.indexOf('/admin/maps') !== -1
                        ? 'text-lightBlue-500 hover:text-lightBlue-600'
                        : 'text-blueGray-700 hover:text-blueGray-500')
                    }
                  >
                    <i
                      className={
                        'fas fa-map-marked mr-2 text-sm ' +
                        (router.pathname.indexOf('/admin/maps') !== -1
                          ? 'opacity-75'
                          : 'text-blueGray-300')
                      }
                    ></i>{' '}
                    Maps
                  </a>
                </Link>
              </li>
            </ul>

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />

            {/* Heading */}
            <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
              No Layout Pages
            </h6>
            {/* Navigation */}

            <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
              <li className="items-center">
                <Link href="/landing">
                  <a
                    href="#pablo"
                    className="text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block"
                  >
                    <i className="fas fa-newspaper text-blueGray-400 mr-2 text-sm"></i>{' '}
                    Landing Page
                  </a>
                </Link>
              </li>

              <li className="items-center">
                <Link href="/profile">
                  <a
                    href="#pablo"
                    className="text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block"
                  >
                    <i className="fas fa-user-circle text-blueGray-400 mr-2 text-sm"></i>{' '}
                    Profile Page
                  </a>
                </Link>
              </li>
            </ul>

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
            {/* Heading */}
            <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
              Auth Layout Pages
            </h6>
            {/* Navigation */}

            <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
              {state.user?.username ? (
                <li onClick={logout} className="items-center">
                  <span className="text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold flex items-center pr-10">
                    <ExitIcon />
                    Logout
                  </span>
                </li>
              ) : (
                <li className="items-center">
                  <Link href="/auth/login">
                    <a
                      href="#pablo"
                      className="text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block"
                    >
                      <i className="fas fa-fingerprint text-blueGray-400 mr-2 text-sm"></i>{' '}
                      Login
                    </a>
                  </Link>
                </li>
              )}
            </ul>

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
          </div>
        </div>
      </nav>
    </>
  )
}

// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { styles } from '../styles'
import { navLinks } from '../constants'
import { logo, menu, close } from '../assets'

const Navbar = () => {
  const [Active, setActive] = useState('')
  const [Toggle, setToggle] = useState(false)

  return (
    <div
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-black opacity-95`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          className="flex items-center gap-2"
          to="/"
          onClick={() => {
            setActive('')
            window.scrollTo(0, 0)
          }}
        >
          <img
            src={logo}
            alt="logo"
            className="w-11 h-9 object-contain rounded-full"
          />
          <p className="text-white text-[18px] font-bold cursor-pointer">
            Deepanshu
          </p>
        </Link>
        <ul className="hidden list-none sm:flex flex-row gap-10">
          {navLinks.map((link) => {
            return (
              <li
                key={link.id}
                className={`${
                  Active === link.title ? 'text-white' : 'text-secondary'
                } hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => setActive(() => link.title)}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            )
          })}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={!Toggle ? menu : close}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => {
              setToggle(() => !Toggle)
            }}
          />
          <div
            className={`${
              Toggle ? 'flex' : 'hidden'
            } black-gradient p-6 min-w-[140px] absolute mx-4 my-2 right-0 top-20 z-10 rounded-xl`}
          >
            <ul className="flex list-none flex-col gap-4 justify-end items-start">
              {navLinks.map((link) => {
                return (
                  <li
                    key={link.id}
                    className={`${
                      Active === link.title ? 'text-white' : 'text-secondary'
                    } hover:text-white text-[16px] font-poppins font-medium cursor-pointer`}
                    onClick={() => {
                      setToggle(() => !Toggle)
                      setActive(() => link.title)
                    }}
                  >
                    <a href={`#${link.id}`}>{link.title}</a>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar

import { useState } from 'react'
import Button from './components/Button'
import Recipe_Card from './components/Recipe_Card'
import stew from '/src/assets/stew.jpg'
import noodles from '/src/assets/noodles.jpg'
import curry from '/src/assets/curry.jpg'

function App() {
  const [menu, setMenu] = useState(
    'md:block md:space-y-4 bg-white hidden w-1/2'
  )

  const menuHandler = () => {
    if (
      menu == 'md:block md:space-y-4 bg-white hidden w-1/2 pb-4 rounded-b-2xl '
    ) {
      setMenu('md:block md:space-y-4 bg-white w-1/2 pb-4 rounded-b-2xl ')
    } else {
      setMenu('md:block md:space-y-4 bg-white hidden w-1/2 pb-4 rounded-b-2xl ')
    }
  }

  return (
    <>
      <div className="md:flex  text-gray-700 font-roboto h-full">
        <div className=" md:font-roboto-bold:h-screen:text-gray-400  md:basis-1/4 flex justify-between basis-1/2 h-10 sticky top-0 z-10 bg-white md:block">
          <nav className="md:flex-column ">
            <div className="flex items-center h-full">
              <h1 className=" ml-2 font-roboto-bold uppercase text-m max-w-xs text-gray-700 md:text-2xl">
                <a href="/">Weekend chef</a>
              </h1>
              <div
                className="px-4 cursor-pointer md:hidden"
                id="burger"
                onClick={menuHandler}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </div>
            </div>
            <ul className={menu}>
              <li className="font-bold md:text-xl text-gray-600 hover:bg-slate-300 ml-2">
                <a href="#">
                  <span>Home</span>
                </a>
              </li>
              <li className="hover:bg-slate-300 ml-2 md:text-lg">
                <a href="#">
                  <span>About</span>
                </a>
              </li>
              <li className="hover:bg-slate-300 ml-2 md:text-lg">
                <a href="#">
                  <span>Contact</span>
                </a>
              </li>
            </ul>
          </nav>
          <div className="flex  basis-1/3 items-center justify-center gap-4 last:mr-2 md:hidden ">
            <Button name="Log in" />
            <Button name="Sign in" />
          </div>
        </div>

        <main className="  bg-slate-100 basis-3/4 text-center  h-full text-gray-700 relative ">
          <header className="">
            <h2 className=" text-lg text-gray-800  font-bold m-y-13 md:text-6xl">
              Recipes
            </h2>
            <h3 className="text-m font-semibold  text-gray-600 ">
              For the adventurous Eater
            </h3>
          </header>

          <div className=" hidden md:flex absolute top-5 right-5 justify-between w-48 ">
            <Button name="Log in" />
            <Button name="Sign in" />
          </div>

          <div className=" flex flex-col  justify-center items-center ">
            <h4 className="font-semibold text-gray-600 ">Latest Recipes</h4>

            <div className="mt-8   flex flex-col  items-center  gap-8  mb-8 md:grid grid-cols-3 w-3/4">
              <Recipe_Card
                img={stew}
                title={'5 Bean Chili Stew'}
                owner={'Recipe by Mario'}
                time={30}
              />
              <Recipe_Card
                img={noodles}
                title={'Noodles'}
                owner={'Recipe by Jenny'}
                time={20}
              />
              <Recipe_Card
                img={curry}
                title={'Curry'}
                owner={'Recipe by Fabio'}
                time={40}
              />

              <Recipe_Card
                img={stew}
                title={'5 Bean Chili Stew'}
                owner={'Recipe by Mario'}
                time={30}
              />
              <Recipe_Card
                img={noodles}
                title={'Noodles'}
                owner={'Recipe by Jenny'}
                time={20}
              />
              <Recipe_Card
                img={curry}
                title={'Curry'}
                owner={'Recipe by Fabio'}
                time={40}
              />

              <Recipe_Card
                img={stew}
                title={'5 Bean Chili Stew'}
                owner={'Recipe by Mario'}
                time={30}
              />
              <Recipe_Card
                img={noodles}
                title={'Noodles'}
                owner={'Recipe by Jenny'}
                time={20}
              />
              <Recipe_Card
                img={curry}
                title={'Curry'}
                owner={'Recipe by Fabio'}
                time={40}
              />
            </div>
          </div>

          <div>
            <h4 className="font-bold ">Most Popular</h4>
            <div className="mt-2 mb-2 ">
              {' '}
              <span className="bg-green-300 rounded-xl p-1 hover:bg-green-400 cursor-pointer ">
                Load more
              </span>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default App

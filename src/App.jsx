import stew from '/src/assets/stew.jpg'

function App() {
  return (
    <>
      <div className="flex space-x-8">
        <div className="bg-gray-400 font-roboto-bold">
          <nav className="flex-column space-y-4 p-6 ">
            <div>
              <h1 className="font-bold uppercase text-4xl max-w-xs">
                <a href="/">Fun foods to try This weekend!</a>
              </h1>
            </div>
            <ul className="space-y-4">
              <li className="text-blue-700 font-bold text-3xl">
                <a href="#">
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>About</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>Contact</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <main className=" grid grid-cols-6 ">
          <div className="col-start-5">
            <a href="#">Log in</a>
            <a href="#">Sign up</a>
          </div>

          <header className="col-start-1 col-span-3 row-start-2">
            <h2 className="text-gray-700 text-6xl font-semibold">Recipes</h2>
            <h3 className="text-2xl font-semibold">For Ninjas</h3>
          </header>

          <div className="row-start-3 col-start-1">
            <h4 className="font-bold ">Latest Recipes</h4>

            <div>
              <div>
                <img src={stew} alt="stew" />
                <div>
                  <span>5 Bean Chili Stew</span>
                  <span>Recipe by Mario</span>
                </div>
              </div>
            </div>

            <h4 className="font-bold">Most Popular</h4>

            <div></div>
          </div>

          <div>
            <div className="">Load more</div>
          </div>
        </main>
      </div>
    </>
  )
}

export default App

export default function Home() {
  return (
    
<main>
      {/* <!-- component --> */}
<nav className="bg-white shadow fixed w-full">
  <div className="container mx-auto px-6 py-3 md:flex md:justify-between md:items-center">
    <div className="flex justify-between items-center">
      <div>
        <a className="text-gray-800 text-xl font-bold md:text-2xl hover:text-gray-700" href="#"> COVERLUXE</a>
      </div>

      {/* <!-- Mobile menu button --> */}
      <div className="flex md:hidden">
        <button type="button" className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600" aria-label="toggle menu">
          <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
            <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
          </svg>
        </button>
      </div>
    </div>
    
    {/* <!-- Mobile Menu open: "block", Menu closed: "hidden" --> */}
    <div className="md:flex items-center first-letter:">
      <div className="flex flex-col md:flex-row md:mx-6 sty">
        <a className="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0" href="#">Home</a>
        <a className="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0" href="#">Shop</a>
        <a className="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0" href="#">Contact</a>
        <a className="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0" href="#">About</a>
      </div>

      <div className="flex justify-center md:block">
        <a className="relative text-gray-700 hover:text-gray-600" href="#">
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>

          <span className="absolute top-0 left-0 rounded-full bg-indigo-500 text-white p-1 text-xs"></span>
        </a>
      </div>
    </div>
  </div>
</nav>  

      <section className="bg-repeat bg-cover bg-[url('/image/jumbotron.png')]">
        <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-700 lg:text-6xl"><span className="bg-white">COVER LUXE</span></h1>
           <p className="mb-8 text-lg font-bold text-gray-700 lg:text-3xl sm:px-16 lg:px-48"><span className="bg-white">Protect Your Style, Showcase Your Device: Find Your Perfect Phone Case Here!</span></p>
        </div>
      </section>

      <div className="font-bold text-center text-4xl mt-10 mb-5">
       <h1> BEST SELLING PRODUCT </h1> 
      </div>

      <div className="flex flex-row gap-10 mt-7 mb-10 p-10">
        <div className="p-3 bg-white shadow-xl rounded-lg">
          <div className="overflow-hidden">
            <img src="/image/caseproduct.png" className="hover:scale-110 transition duration-500"/>
          </div>
          <div className="w-full text-center ">
            <span className="font-semibold text-xl hover:underline"><a href="#">Iphone 12 Case</a></span>
          </div>
        </div>
        <div className="p-3 bg-white shadow-xl rounded-lg">
          <div className="overflow-hidden">
            <img src="/image/caseproduct.png" className="hover:scale-110 transition duration-500"/>
          </div>
          <div className="w-full text-center ">
            <span className="font-semibold text-xl hover:underline"><a href="#">Iphone 12 Case</a></span>
          </div>
        </div>
        <div className="p-3 bg-white shadow-xl rounded-lg">
          <div className="overflow-hidden">
            <img src="/image/caseproduct.png" className="hover:scale-110 transition duration-500"/>
          </div>
          <div className="w-full text-center ">
            <span className="font-semibold text-xl hover:underline"><a href="#">Iphone 12 Case</a></span>
          </div>
        </div>
        <div className="p-3 bg-white shadow-xl rounded-lg">
          <div className="overflow-hidden">
            <img src="/image/caseproduct.png" className="hover:scale-110 transition duration-500"/>
          </div>
          <div className="w-full text-center ">
            <span className="font-semibold text-xl hover:underline"><a href="#">Iphone 12 Case</a></span>
          </div>
        </div>
      </div>

      <div className="font-bold text-center text-4xl mt-10 mb-5">
       <h1> IPAD CASE </h1> 
      </div>

      <div className="flex flex-row gap-10 mt-7 mb-10 p-10">
        <div className="p-3 bg-white shadow-xl rounded-lg">
          <div className="overflow-hidden">
            <img src="/image/ipadcase.png" className="hover:scale-110 transition duration-500"/>
          </div>
          <div className="w-full text-center ">
            <span className="font-semibold text-xl hover:underline"><a href="#">Ipad Case</a></span>
          </div>
        </div>
        <div className="p-3 bg-white shadow-xl rounded-lg">
          <div className="overflow-hidden">
            <img src="/image/ipadcase.png" className="hover:scale-110 transition duration-500"/>
          </div>
          <div className="w-full text-center ">
            <span className="font-semibold text-xl hover:underline"><a href="#">Ipad Case</a></span>
          </div>
        </div>
        <div className="p-3 bg-white shadow-xl rounded-lg">
          <div className="overflow-hidden">
            <img src="/image/ipadcase.png" className="hover:scale-110 transition duration-500"/>
          </div>
          <div className="w-full text-center ">
            <span className="font-semibold text-xl hover:underline"><a href="#">Ipad Case</a></span>
          </div>
        </div>
      </div>
    </main>
  )
}

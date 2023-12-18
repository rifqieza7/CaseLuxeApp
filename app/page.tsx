export default function Home() {
  return (
    
    <main>
      <section className="bg-center bg-no-repeat bg-cover bg-[url('/image/jumbotron.png')]">
        <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">Case Luxe</h1>
           <p className="mb-8 text-lg font-bold text-gray-700 lg:text-xl sm:px-16 lg:px-48">Protect Your Style, Showcase Your Device: Find Your Perfect Phone Case Here!</p>
        </div>
      </section>

      <div className="font-bold text-center text-4xl mt-10 mb-5">
       <h1> Best Selling Product</h1> 
      </div>

      <div className="flex flex-row gap-10 mt-7 mb-10 p-10">
        <div>
          <img className="" src="/image/caseproduct.png"/>
          <div className="w-full text-center">
            <span className="">Iphone Case 1</span>
          </div>
        </div>
        <div className="">
          <img className="" src="/image/caseproduct.png"/>
            Iphone Case 2
        </div>
        <div className="">
          <img className="" src="/image/caseproduct.png"/>
            Iphone Case 3
        </div>
        <div className="">
          <img className="" src="/image/caseproduct.png"/>
            Iphone Case 4
        </div>
      </div>

    </main>
  )
}

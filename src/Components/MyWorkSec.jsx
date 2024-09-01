

function MyWorkSec() {
  const skills1 = ["HTML", "CSS", "JAVASCRIPT", "BOOTSTRAP", "GSAP"];
  const skills2 = ["HTML", "CSS", "JAVASCRIPT", "VUE.JS", "TAILWIND CSS"];
  const skills3 = ["HTML", "CSS", "JAVASCRIPT", ]
  return (
<section className="grid grid-cols-2">
    <div className="ml-[100px] mt-[20px] card relative">
      <img className="w-[100%] h-[100%]" src="/images/Project1.png" alt="" />
      <div className="card__content">
        <p className="text-black card__title">SolarSpot(Under Development)</p>
        <p className="font-semibold text-black card__description">
        SolarSpot aims to revolutionize energy consumption by harnessing the power of the sun. Their mission is to empower businesses and households to transition to sustainable energy sources, reducing their carbon footprint while enjoying significant savings on energy bills.
        </p>
        <div className="absolute flex gap-5 font-semibold bottom-6">{skills1.map((item => <p className="text-black " key={item}>{item}</p>))}</div>
        <a href="https://solarspot.vercel.app/" className="absolute px-4 py-2 font-semibold text-white bg-black rounded right-4 bottom-4">Visit</a>
      </div>
    </div>
    <div className=" mt-[20px] card">
      <img className="w-[100%] h-[100%]" src="/images/Project2.png" alt="" />
      <div className="card__content">
        <p className="text-black card__title">Little Angel School</p>
        <p className="font-semibold text-black card__description">
        Little Angel School prioritizes education, discipline, and holistic growth for its students. 
        </p>
        <div className="absolute flex gap-5 font-semibold bottom-6">{skills2.map((item => <p className="text-black" key={item}>{item}</p>))}</div>
        <a href="https://littleangelschoolkkt.vercel.app/" className="absolute px-4 py-2 font-semibold text-white bg-black rounded right-4 bottom-4">Visit</a>
      </div>
    </div>
    <div className="ml-[100px] mt-[20px] card">
      <img className="w-[100%] h-[100%]" src="/images/Project3.png" alt="" />
      <div className="card__content">
        <p className="text-black card__title">E-Commerce</p>
        <p className="font-semibold text-black card__description">
        Build a E-commerce web site for customers where people only can interact with this website.
        </p>
        <div className="absolute flex gap-5 font-semibold bottom-6">{skills3.map((item => <p className="text-black" key={item}>{item}</p>))}</div>
        <a href="https://sameerali890.github.io/E-commerce/" className="absolute px-4 py-2 font-semibold text-white bg-black rounded right-4 bottom-4">Visit</a>

      </div>
    </div>
</section>

  )
}

export default MyWorkSec
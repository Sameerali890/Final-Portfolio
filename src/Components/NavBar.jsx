import { Link } from "react-router-dom"
import logo from "../assets/MyLogo.png"
function NavBar() {
  return (
    <div className="container flex gap-2 px-[100px] py-[30px] justify-between items-center">
        <div className="flex gap-2">
        <img className="size-12" src={logo} alt="" />
            <div className="flex flex-col ">
                <h1 className="text-2xl">SAMEER ALI</h1>
                <h1 className="text-[10px] sub-heading">FRONT-END WEB DEVELOPER</h1>
            </div>
        </div>
        <div className="flex gap-8 text-lg">
            <Link to={"/"} className="font-bold" href="">Home</Link>
            <Link to={"/AboutPage"}>About Me</Link>
            <Link to={"/WorkPage"}>My Work</Link>
            <Link to={"/LetsTalkPage"}>Let's Talk</Link>
        </div>
    </div>
  )
}

export default NavBar
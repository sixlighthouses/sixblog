

const Navbar = () => {
  return (
   <nav className="flex justify-end py-4">
       <div className="flex">
         <a
            href="/blog"
            className="rounded hover:bg-gray-100 text-black py-2 px-4"
        >blog</a>
        <a
            href="/resume"
            className="rounded hover:bg-gray-100 text-black py-2 px-4"
        >resume</a>
       </div>
   </nav>
  )
}

export default Navbar;
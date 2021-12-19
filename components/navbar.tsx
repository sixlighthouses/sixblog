

const Navbar = () => {
  return (
   <nav className="flex justify-end py-4">
       <div className="flex">
        <a
            href="/api/logout"
            className="rounded hover:bg-blue-300 text-black py-2 px-4"
        >Logout</a>
       </div>
   </nav>
  )
}

export default Navbar;
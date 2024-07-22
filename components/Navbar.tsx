const Navbar = () => {
    return (
      <div className="absolute top-3 sm:top-2 left-1/2 transform -translate-x-1/2 w-96 flex justify-center bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-full px-6 py-3 shadow-lg">
        <ul className="flex space-x-6 text-white">
          <li><a href="/" className="hover:text-gray-300 cursor-pointer transition-colors">Home</a></li>
          <li><a href="https://braavos.app/" className="hover:text-gray-300 cursor-pointer transition-colors">Braavos</a></li>
          <li><a href="https://starknet.io" className="hover:text-gray-300 cursor-pointer transition-colors">About</a></li>
          <li><a href="#" className="hover:text-gray-300 cursor-pointer transition-colors">Contact</a></li>
        </ul>
      </div>
    );
  };
  export default Navbar;
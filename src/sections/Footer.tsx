export const Footer = () => {
  return <footer className="footer-1 bg-black border-t-2 border-slate-600 text-neutral-300 pt-8 sm:pt-12 lg:pt-20 pb-5">
    <div className="container mx-auto px-4">
      <div className="sm:flex sm:flex-wrap sm:-mx-4 md:py-4">
        <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6">
          <h5 className="text-xl font-bold mb-6">Services</h5>
          <ul className="list-none footer-links">
            <li className="mb-2">
              <a href="#" className="border-b border-solid border-transparent hover:border-purple-600 hover:text-purple-600">Google Ads</a>
            </li>
            <li className="mb-2">
              <a href="#" className="border-b border-solid border-transparent hover:border-purple-600 hover:text-purple-600">Search Engine Optimization</a>
            </li>
            <li className="mb-2">
              <a href="#" className="border-b border-solid border-transparent hover:border-purple-600 hover:text-purple-600">Web Design and Dev</a>
            </li>
            <li className="mb-2">
              <a href="#" className="border-b border-solid border-transparent hover:border-purple-600 hover:text-purple-600">Local Seo</a>
            </li>
            <li className="mb-2">
              <a href="#" className="border-b border-solid border-transparent hover:border-purple-600 hover:text-purple-600">Content Management</a>
            </li>
            <li className="mb-2">
              <a href="#" className="border-b border-solid border-transparent hover:border-purple-600 hover:text-purple-600">Youtube Ads</a>
            </li>
          </ul>
        </div>
        <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 sm:mt-0">
          <h5 className="text-xl font-bold mb-6"><br /></h5>
          <ul className="list-none footer-links">
            <li className="mb-2">
              <a href="#" className="border-b border-solid border-transparent hover:border-purple-600 hover:text-purple-600">Graphic Design and Branding</a>
            </li>
            <li className="mb-2">
              <a href="#" className="border-b border-solid border-transparent hover:border-purple-600 hover:text-purple-600">Product Photography</a>
            </li>
            <li className="mb-2">
              <a href="#" className="border-b border-solid border-transparent hover:border-purple-600 hover:text-purple-600">Social Media Management &</a>
            </li>
            <li className="mb-2">
              <a href="#" className="border-b border-solid border-transparent hover:border-purple-600 hover:text-purple-600">Marketing</a>
            </li>
          </ul>
        </div>
        <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
          <h5 className="text-xl font-bold mb-6">Service Areas</h5>
          <ul className="list-none footer-links">
            <li className="mb-2">
              <a href="#" className="border-b border-solid border-transparent hover:border-purple-600 hover:text-purple-600">India</a>
            </li>
            <li className="mb-2">
              <a href="#" className="border-b border-solid border-transparent hover:border-purple-600 hover:text-purple-600">USA</a>
            </li>
            <li className="mb-2">
              <a href="#" className="border-b border-solid border-transparent hover:border-purple-600 hover:text-purple-600">Canada</a>
            </li>
            <li className="mb-2">
              <a href="#" className="border-b border-solid border-transparent hover:border-purple-600 hover:text-purple-600">UAE</a>
            </li>
            <li className="mb-2">
              <a href="#" className="border-b border-solid border-transparent hover:border-purple-600 hover:text-purple-600">Saudi Arabia</a>
            </li>
          </ul>
        </div>
        <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
          <h5 className="text-xl font-bold mb-6">Help</h5>
          <ul className="list-none footer-links">
            <li className="mb-2">
              <a href="#" className="border-b border-solid border-transparent hover:border-purple-600 hover:text-purple-600">Support</a>
            </li>
            
            <li className="mb-2">
              <a href="#" className="border-b border-solid border-transparent hover:border-purple-600 hover:text-purple-600">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="px-4 mt-4 sm:w-1/3 xl:w-1/6 sm:mx-auto xl:mt-0 xl:ml-auto">
          <h5 className="text-xl font-bold mb-6 sm:text-center xl:text-left">Stay connected</h5>
          <div className="flex sm:justify-center xl:justify-start">
            <a href="" className="flex items-center justify-center w-8 h-8 border-2 border-gray-400 rounded-full text-gray-400 hover:text-white hover:bg-blue-600 hover:border-blue-600">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="" className="flex items-center justify-center w-8 h-8 border-2 border-gray-400 rounded-full ml-2 text-gray-400 hover:text-white hover:bg-blue-400 hover:border-blue-400">
            <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a href="" className="flex items-center justify-center w-8 h-8 border-2 border-gray-400 rounded-full ml-2 text-gray-400 hover:text-white hover:bg-red-600 hover:border-red-600">
            <i className="fa-brands fa-instagram"></i>
            </a>
          </div>

        </div>
      </div>

      <div className="sm:flex sm:flex-wrap sm:-mx-4 mt-6 pt-6 sm:mt-12 sm:pt-12 border-t">
        <div className="px-4 sm:w-1/2 md:w-1/4 mt-4 md:mt-0">
          <h6 className="font-bold mb-2">Address</h6>
          <address className="not-italic mb-4 text-sm">
            Besides Ruby<br />
            Enterprises, Suncity, <br />
            P&T Colony, Hyderabad-500091
          </address>
        </div>
        <div className="px-4 sm:w-1/2 md:w-1/4 mt-4 md:mt-0">
          <h6 className="font-bold mb-2">Phone Number</h6>
          <p className="mb-4 text-sm tracking-wider">+91 9100032301</p>
        </div>
        <div className="px-4 md:w-1/4 md:ml-auto mt-6 sm:mt-4 md:mt-0">
        <button className="bg-gradient-to-t from-[#4a208a] to-[#13012e] border border-[#8a45f2] text-white font-normal  text-sm py-2 px-4 rounded-lg shadow-custom">
            <span className="tracking-wider">Let's Talk <i className="fa fa-arrow-right text-sm ml-1" aria-hidden="true"></i></span>
          </button>
        </div>
      </div>
      <div className="text-center">Copyright © 2024 BixelTek IT And Digital Marketing Agency</div>
    </div>
  </footer>;
};

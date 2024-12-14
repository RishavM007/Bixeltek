type ContactFormProps = {
    isVisible: boolean;
};

export const ContactForm: React.FC<ContactFormProps> = ({ isVisible }: ContactFormProps) => {
    return (
        <section
            className={`fixed inset-0 flex justify-center items-center z-[65] bg-black bg-opacity-50 ${isVisible ? 'visible' : 'hidden'
                }`}
        >
            <div
                className="w-full max-w-md md:max-w-2xl lg:max-w-5xl mx-auto bg-white rounded-xl p-4 md:p-6 lg:p-8 font-[sans-serif] my-6 md:my-12 max-h-[90%] overflow-auto"
            >
                <div className= "flex flex-col md:flex-row justify-center items-center gap-6 md:gap-0 shadow-md rounded-lg">
                    
                    <div className="bg-[#011c2b]  text-white rounded-lg p-4 md:p-6 lg:p-8 h-full">
                        <h2 className="text-xl">Contact Information</h2>
                        <p className="text-sm text-gray-300 mt-4">
                            Have some big idea or brand to develop and need help?
                        </p>

                        <ul className="mt-6 space-y-4">
                            <li className="flex items-center">
                            <i className="fa-regular fa-envelope text-white texte-xs"></i>
                                <a href="#" className="ml-4 text-sm text-gray-400">
                                    Hello@Bixeltek.com
                                </a>
                            </li>
                            <li className="flex items-center">
                              <i className="fa-solid fa-phone text-white text-xs"></i>
                                <a href="#" className="ml-4 text-sm text-gray-400">
                                    +91 9100032301
                                </a>
                            </li>
                            <li className="flex items-center">
                            <i className="fa-regular fa-map text-white text-xs"></i>
                                <a href="#" className="ml-4 text-sm text-gray-400">
                                    Suncity, Hyderabad - 500091
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Right Section */}
                    <div className="w-full bg-gray-100 rounded-lg p-4 md:p-6 lg:p-8">
                        <h3 className="text-xl text-gray-800 mb-4">Send Us a Message</h3>
                        <form className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-600">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="Enter your name"
                                    className="w-full px-4 py-2 mt-2 border rounded-lg focus:ring focus:ring-indigo-100 focus:outline-none"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                                    Your Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Enter your email"
                                    className="w-full px-4 py-2 mt-2 border rounded-lg focus:ring focus:ring-indigo-100 focus:outline-none"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-600">
                                    Your Message
                                </label>
                                <textarea
                                    id="message"
                                    placeholder="Type your message"
                                    rows={4}
                                    className="w-full px-4 py-2 mt-2 border rounded-lg focus:ring focus:ring-indigo-100 focus:outline-none"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="px-6 py-2 text-white bg-indigo-500 rounded-lg hover:bg-indigo-600 focus:outline-none"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

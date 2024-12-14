type ContactFormProps = {
    isVisible: boolean;
};

export const ContactForm: React.FC<ContactFormProps> = ({ isVisible }: ContactFormProps) => {
    return (
        <section
            className={`fixed inset-0 flex justify-center items-center z-[65] bg-black bg-opacity-30 ${isVisible ? 'visible' : 'hidden'
                }`}
        >
            <div className="w-full max-w-5xl mx-auto bg-white rounded-xl p-4 font-[sans-serif] my-6 md:my-12">
                <div className="grid lg:grid-cols-3 items-start gap-6 shadow-md rounded-lg">
                    {/* Left Section */}
                    <div className="bg-[#011c2b] text-white rounded-lg p-6 lg:p-8 h-full">
                        <h2 className="text-xl">Contact Information</h2>
                        <p className="text-sm text-gray-300 mt-4">
                            Have some big idea or brand to develop and need help?
                        </p>

                        <ul className="mt-10 space-y-6">
                            <li className="flex items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16px"
                                    height="16px"
                                    fill="#fff"
                                    viewBox="0 0 479.058 479.058"
                                >
                                    <path
                                        d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                                    />
                                </svg>
                                <a href="#" className="ml-4 text-sm text-gray-400">
                                    Hello@Bixeltek.com
                                </a>
                            </li>
                            <li className="flex items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16px"
                                    height="16px"
                                    fill="#fff"
                                    viewBox="0 0 482.6 482.6"
                                >
                                    <path
                                        d="M98.339 320.8c47.6 56.9 104.9 101.7 170.3 133.4 24.9 11.8 58.2 25.8 95.3 28.2..."
                                    />
                                </svg>
                                <a href="#" className="ml-4 text-sm text-gray-400">
                                    +91 9100032301
                                </a>
                            </li>
                            <li className="flex items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16px"
                                    height="16px"
                                    fill="#fff"
                                    viewBox="0 0 368.16 368.16"
                                >
                                    <path d="M184.08 0c-74.992 0-136 61.008-136 136..." />
                                </svg>
                                <a href="#" className="ml-4 text-sm text-gray-400">
                                    Suncity, Hyderabad - 500091
                                </a>
                            </li>
                        </ul>

                        <ul className="flex space-x-4 mt-10">
                            <li className="bg-gray-700 hover:bg-gray-800 h-10 w-10 rounded-full flex items-center justify-center">
                                <a href="#">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="18px"
                                        height="18px"
                                        fill="#fff"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="..." />
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Right Section */}
                    <div className="col-span-2 bg-gray-100 rounded-lg p-6 lg:p-8">
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

import Phone from '@/assets/MyProfile-left.png'
import Image from 'next/image'
export const Bento = () => {
    return (
        <div className="bg-black  py-10 sm:py-20">
            <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
                <div className="flex flex-col justify-start items-start">
                    <p className="text-sm text-purple-500 text-start ">Our Services</p>
                    <p className="mt-4 max-w-lg text-balance text-start text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                        What we offer?
                    </p>
                </div>
                <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
                    <div className="relative lg:row-span-2">
                        <div className="absolute inset-px rounded-lg bg-black border border-neutral-200 lg:rounded-l-[2rem]"></div>
                        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
                            <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                                <p className="mt-2 text-lg font-medium tracking-tight text-white max-lg:text-center">
                                    Social Media Marketing
                                </p>
                                <p className="mt-2 max-w-lg text-sm/6 text-gray-200 max-lg:text-center">
                                    Our team of experts understands the importance of Social Media Marketing. We can help you build your brand using various social media platforms.
                                </p>
                            </div>
                            <div className="relative min-h-[30rem] w-full grow overflow-y-hidden [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm">
                                <Image
                                    className="absolute size-auto object-cover object-top top-0 left-0 h-[150%]"
                                    src={Phone}
                                    alt=""
                                />
                            </div>
                        </div>

                        <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-l-[2rem]"></div>
                    </div>
                    <div className="relative max-lg:row-start-1">
                        <div className="absolute inset-px rounded-lg bg-black border border-neutral-200 max-lg:rounded-t-[2rem]"></div>
                        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
                            <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                                <p className="mt-2 text-lg font-medium tracking-tight text-white max-lg:text-center">SEO Optimzation</p>
                                <p className="mt-2 max-w-lg text-sm/6 text-gray-200 max-lg:text-center">
                                    Boost your visibility with keyword optimization and on-page strategies for better search rankings.
                                </p>
                            </div>
                            <div className="flex flex-1 items-center justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2">
                                <img
                                    className="w-full max-lg:max-w-xs"
                                    src="https://tailwindui.com/plus/img/component-images/bento-03-performance.png"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem]"></div>
                    </div>
                    <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
                        <div className="absolute inset-px rounded-lg bg-black border border-neutral-200 "></div>
                        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
                            <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                                <p className="mt-2 text-lg font-medium tracking-tight text-white max-lg:text-center">Pay-Per-Click Advertising (PPC)</p>
                                <p className="mt-2 max-w-lg text-sm/6 text-gray-200 max-lg:text-center">
                                    With researched digital marketing, we will ensure that new customers and clients are able to find your business.


                                </p>
                            </div>
                            <div className="flex flex-1 items-center [container-type:inline-size] max-lg:py-6 lg:pb-2">
                                <img
                                    className="h-[min(152px,40cqw)] object-cover"
                                    src="https://tailwindui.com/plus/img/component-images/bento-03-security.png"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5"></div>
                    </div>
                    <div className="relative lg:row-span-2">
                        <div className="absolute inset-px rounded-lg bg-black border border-neutral-200  max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
                        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
                            <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                                <p className="mt-2 text-lg font-medium tracking-tight text-white max-lg:text-center">
                                    Web Development
                                </p>
                                <p className="mt-2 max-w-lg text-sm/6 text-gray-200 max-lg:text-center">
                                    Our web design team has ample years of experience in the core areas of design to build a website that you need.
                                </p>
                            </div>
                            <div className="relative min-h-[30rem] w-full grow">
                                <div className="absolute bottom-0 left-10 right-0 top-10 overflow-hidden rounded-tl-xl bg-gray-900 shadow-2xl">
                                    <div className="flex bg-gray-800/40 ring-1 ring-white/5">
                                        <div className="-mb-px flex text-sm/6 font-medium text-gray-400">
                                            <div className="border-b border-r border-b-white/20 border-r-white/10 bg-white/5 px-4 py-2 text-white">
                                                NotificationSetting.jsx
                                            </div>
                                            <div className="border-r border-gray-600/10 px-4 py-2">App.jsx</div>
                                        </div>
                                    </div>
                                    <div className="px-6 pb-14 pt-6">{/* Your code example */}</div>
                                </div>
                            </div>
                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
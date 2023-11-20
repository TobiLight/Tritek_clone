import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { useEffect, useState } from "react";
import IconArrowDownSLine from "~/components/Icons/ArrowDwon";
import IconClose from "~/components/Icons/Close";
import Hamburger from "~/components/Icons/Hamburger";
import IconMail from "~/components/Icons/Message";
import IconPattern from "~/components/Icons/Pattern";
import IconPlus from "~/components/Icons/Plus";
import IconSearch from "~/components/Icons/Search";
import IconFeedTrophy from "~/components/Icons/Trophy";

export const meta: MetaFunction = () => {
	return [
		{ title: "Consulting" },
		{ name: "description", content: "Welcome to Remix!" },
	];
};

export const loader: LoaderFunction = () => {
	return {
		showAboutHover: false
	}
}

export default function Index() {
	const [showAbout, setShowAbout] = useState<{ el?: boolean, icon?: boolean }>({ el: false, icon: false })
	const [showAboutHover, setShowAboutHover] = useState<boolean>(false)
	const aboutHoverServer = useLoaderData<{ showAboutHoverServer: boolean, showAboutHover: boolean }>()
	const [showBulletin, setShowBulletin] = useState<{ el?: boolean, icon?: boolean }>({ el: false, icon: false })
	const [showBulletinHover, setShowBulletinHover] = useState<boolean>(false)
	const [showCourses, setShowCourses] = useState<{ el?: boolean, icon?: boolean }>({ el: false, icon: false })
	const [showCoursesHover, setShowCoursesHover] = useState<boolean>(false)
	const [showMenu, ToggleMenu] = useState(false)

	useEffect(() => {
		console.log(showAbout)
	}, [showAbout])
	return (
		<main style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
			<header>
				<div className="top-header p-4 text-white flex flex-col justify-center items-center gap-y-2 bg-[#061f90] lg:flex-row lg:justify-between lg:px-10">
					<Link to="#" className="underline text-sm">Live Support</Link>
					<IconMail className="w-5 h-5" />
				</div>

				{/* mobile, tablets */}
				<div className="bg-white grid lg:hidden relative">
					<div className="p-3 flex flex-row justify-between items-center">
						<div className="w-40 h-10 bg-gray-300"></div>
						<div onClick={() => ToggleMenu(!showMenu)} className="cursor-pointer menu flex flex-row items-center">
							{!showMenu ? <Hamburger className="w-8 h-6" /> : <IconClose className="w-8 h-6" />}
							<p>{!showMenu ? 'Menu' : 'Close'}</p>
						</div>
					</div>
					{showMenu && <div className="flex flex-col bg-gray-100py-2 max-h-[275px] h-auto overflow-y-scroll absolute top-[63px] bg-white w-full z-[10]">
						<nav>
							<ul className="flex flex-col mb-4">
								<Link to="#" className="hover:text-yellow-300">
									<li className="border-b p-4 pl-8">Home</li>
								</Link>
								<Link to="#" className="hover:text-yellow-300">
									<li className="border-b p-4 pl-8">Consulting</li>
								</Link>
								<div className="about cursor-pointer">
									<li className="border-b">
										<div onClick={() => setShowAbout({ el: !showAbout.el, icon: false })}>
											<Link to="#" className="w-full flex justify-between p-4 pl-8 items-center">
												<span id="about" className={`${showAboutHover ? 'inherit' : ''}`}>About</span>
												{
													(showAbout.el || showAbout.icon) ? <b className="text-2xl font-normal">-</b> : <b className="text-2xl font-normal">+</b>
												}
											</Link>

										</div>
										{(showAbout.el || showAbout.icon) && <nav className="bg-gray-50"
											onMouseEnter={() => {
												setShowAboutHover(true)
											}}
											onMouseLeave={() => {
												setShowAboutHover(false)
											}}>
											<ul>
												<Link to="#" className="hover:text-yellow-300">
													<li className="border-b border-gray-100 p-4 pl-8">About Us</li>
												</Link>

												<Link to="#" className="hover:text-yellow-300">
													<li className="border-b border-gray-100 p-4 pl-8">Meet The CEO</li>
												</Link>
											</ul>
										</nav>}
									</li>
								</div>
								<div className="bulletin">
									<li className="border-b">
										<div onClick={() => setShowBulletin({ el: !showBulletin.el, icon: false })}>
											<Link to="#" className="w-full flex justify-between p-4 pl-8 items-center">
												<span id="bulletin" className={`${showBulletinHover ? 'inherit' : ''}`}>Bulletin</span>
												{
													(showBulletin.el || showBulletin.icon) ? <b className="text-2xl font-normal">-</b> : <b className="text-2xl font-normal"
														onClick={() => setShowBulletin({ icon: !showBulletin.icon, el: false })}
													>+</b>
												}
											</Link>
										</div>
										{(showBulletin.el || showBulletin.icon) && <nav className="bg-gray-50" onMouseEnter={() => setShowBulletinHover(true)}
											onMouseLeave={() => setShowBulletinHover(false)}>
											<ul>
												<Link to="#" className="hover:text-yellow-300">
													<li className="border-b border-gray-100 p-4 pl-8">Sub menu link</li>
												</Link>

												<Link to="#" className="hover:text-yellow-300">
													<li className="border-b border-gray-100 p-4 pl-8">Sub menu link</li>
												</Link>
											</ul>
										</nav>}
									</li>
								</div>
								<Link to="#" className="hover:text-yellow-300">
									<li className="border-b p-4 pl-8">Success Stories</li>
								</Link>

								<div className="courses">
									<li className="border-b">
										<div onClick={() => setShowCourses({ el: !showCourses.el, icon: false })}>
											<Link to="#" className="w-full flex justify-between p-4 pl-8 items-center">
												<span id="bulletin" className={`${showCoursesHover ? 'inherit' : ''}`}>Courses</span>
												{
													(showCourses.el || showCourses.icon) ? <b className="text-2xl font-normal">-</b> : <b className="text-2xl font-normal"
														onClick={() => setShowCourses({ icon: !showCourses.icon, el: false })}
													>+</b>
												}
											</Link>
										</div>
										{(showCourses.el || showCourses.icon) && <nav className="bg-gray-50" onMouseEnter={() => setShowCoursesHover(true)}
											onMouseLeave={() => setShowCoursesHover(false)}>
											<ul>
												<Link to="#" className="hover:text-yellow-300">
													<li className="border-b border-gray-100 p-4 pl-8">Sub menu link</li>
												</Link>

												<Link to="#" className="hover:text-yellow-300">
													<li className="border-b border-gray-100 p-4 pl-8">Sub menu link</li>
												</Link>
											</ul>
										</nav>}
									</li>
								</div>

								<Link to="#" className="hover:text-yellow-300">
									<li className="border-b p-4 pl-8">Events</li>
								</Link>

								<Link to="#" className="hover:text-yellow-300">
									<li className="border-b p-4 pl-8">Recruitment</li>
								</Link>

								<Link to="#" className="hover:text-yellow-300">
									<li className="border-b p-4 pl-8">Contact Us</li>
								</Link>

								<Link to="#" className="hover:text-yellow-300">
									<li className="border-b p-4 pl-8">FAQ</li>
								</Link>

							</ul>
						</nav>
						<div className="search-box w-full px-8 mb-4">
							<form action="" className="w-auto relative">
								<label htmlFor="search" className="w-full ">
									<input type="text" name="search" placeholder="Search" className="w-full px-4 py-2 rounded border" />
									<IconSearch className="w-6 h-5 absolute top-4 right-4 text-gray-500" />
								</label>
							</form>
						</div>
					</div>}
				</div>

				{/* desktop */}
				<div className="hidden lg:block">
					<div className="header w-full p-3">
						<div className="w-40 h-10 bg-gray-300"></div>
					</div>
					<nav className="pl-10 pr-2 h-16 border-y grid">
						<ul className="flex flex-row items-center justify-between">
							<Link to="#">
								<li>Home</li>
							</Link>

							<Link to="#">
								<li>Consulting</li>
							</Link>

							<Link to="#" className="relative about h-full grid items-center">
								<div className="flex items-center gap-x-2">
									<li>About</li>
									<IconArrowDownSLine className="w-6 h-5" />
								</div>
								<div className="sub-menu absolute top-[3.9rem] z-[2] max-h-[450px] bg-white border-l-2 border-yellow-300 max-w-[400px] w-auto shadow-md">
									<nav className="w-[max-content]">
										<ul className="w-auto">
											<li className="px-4 py-3 border-b">About Us</li>
											<li className="px-4 py-3">Meet The CEO</li>
										</ul>
									</nav>
								</div>
							</Link>

							<Link to="#">
								<li>Success Stories</li>
							</Link>

							<Link to="#" className="relative courses h-full grid items-center">
								<div className="flex items-center gap-x-2">
									<li>Courses</li>
									<IconArrowDownSLine className="w-6 h-5" />
								</div>
								<div className="sub-menu absolute top-[3.9rem] z-[2] max-h-[450px] bg-white border-l-2 border-yellow-300 max-w-[400px] w-auto shadow-md">
									<nav className="w-[max-content]">
										<ul className="w-auto">
											<li className="px-4 py-3 border-b">Sub menu</li>
											<li className="px-4 py-3">Sub menu</li>
										</ul>
									</nav>
								</div>
							</Link>

							<Link to="#">
								<li>Events</li>
							</Link>

							<Link to="#">
								<li>Recruitment</li>
							</Link>

							<Link to="#">
								<li>Contact Us</li>
							</Link>

							<Link to="#">
								<li>FAQ</li>
							</Link>
						</ul>
					</nav>
					<form action="" className="w-full mx-auto">
						<label htmlFor="search" className="w-full">
							<input type="text" placeholder="Search" className="w-full border-b rounded px-12 py-3 focus:outline-none text-xl font-bold" />
						</label>
					</form>
				</div>
			</header>

			<section className="marquee bg-gray-200 h-[70px] flex flex-row items-center px-4 gap-x-2 justify-betweens">
				<div className="flex flex-row items-center gap-x-1">
					<IconFeedTrophy className="w-8 h-8" />
					<p className="w-52 leading-4">African Legacy Award, 2022</p>
				</div>
				<div className="flex flex-row items-center gap-x-1">
					<IconFeedTrophy className="w-8 h-8" />
					<p className="w-52 leading-4">African Legacy Award, 2022</p>
				</div>
				<div className="flex flex-row items-center gap-x-1">
					<IconFeedTrophy className="w-8 h-8" />
					<p className="w-52 leading-4">African Legacy Award, 2022</p>
				</div>
				<div className="flex flex-row items-center gap-x-1">
					<IconFeedTrophy className="w-8 h-8" />
					<p className="w-52 leading-4">African Legacy Award, 2022</p>
				</div>
				<div className="flex flex-row items-center gap-x-1">
					<IconFeedTrophy className="w-8 h-8" />
					<p className="w-52 leading-4">African Legacy Award, 2022</p>
				</div>
				<div className="flex flex-row items-center gap-x-1">
					<IconFeedTrophy className="w-8 h-8" />
					<p className="w-52 leading-4">African Legacy Award, 2022</p>
				</div>
				<div className="flex flex-row items-center gap-x-1">
					<IconFeedTrophy className="w-8 h-8" />
					<p className="w-52 leading-4">African Legacy Award, 2022</p>
				</div>
				<div className="flex flex-row items-center gap-x-1">
					<IconFeedTrophy className="w-8 h-8" />
					<p className="w-52 leading-4">African Legacy Award, 2022</p>
				</div>
				<div className="flex flex-row items-center gap-x-1">
					<IconFeedTrophy className="w-8 h-8" />
					<p className="w-52 leading-4">African Legacy Award, 2022</p>
				</div>
			</section>

			<section className="hero h-[300px] lg:h-[450px] bg-gray-300 relative">
				<IconPattern className="absolute bottom-0 transform rotate-[180deg]" fill="white" />
			</section>

			<section className="grid gap-y-6 lg:flex lg:flex-row lg:gap-x-2 px-3 mb-2 mt-6">
				<div className="grid gap-y-6">
					<div className="text-[#263786] px-3">
						<h1 className="text-5xl font-bold mb-4">Delivering The Promise</h1>
						<p>We help non techies transition into tech.</p>
					</div>

					<div className="lg:flex lg:flex-row">
						<div className="flex flex-col lg:flex-row gap-y-4 lg:gap-x-4 pl-6 h-[fit-content]">
							<Link to="#" className="bg-[#263786] text-white p-2 w-[fit-content] rounded">Consultancy</Link>
							<Link to="#" className="border-2 rounded border-[#263786] w-[fit-content] p-2">Brochure</Link>
						</div>
					</div>
				</div>
				<div className="bg-gray-300 rounded w-full lg:w-6/12 mx-auto p-6 h-[350px]"></div>
			</section>

			<section className="achievments px-8 grid grid-cols-2 lg:flex justify-between mt-8 pb-8 flex-wrap">
				<div className="grid text-center">
					<h1 className="font-bold text-[4rem] leading-[80px] text-[#bfbfbf]">
						1.5K+
					</h1>
					<p className="tracking-[7px] text-xs font-bold text-[#263786]">CANDIDATES</p>
				</div>
				<div className="grid text-center">
					<h1 className="font-bold text-[4rem] leading-[80px] text-[#bfbfbf]">
						400+
					</h1>
					<p className="tracking-[7px] text-xs font-bold text-[#263786]">SUCCESS STORIES</p>
				</div>
				<div className="grid text-center">
					<h1 className="font-bold text-[4rem] leading-[80px] text-[#bfbfbf]">
						100+
					</h1>
					<p className="tracking-[7px] text-xs font-bold text-[#263786]">COMPLETED PROJECTS</p>
				</div>
				<div className="grid text-center">
					<h1 className="font-bold text-[4rem] leading-[80px] text-[#bfbfbf]">
						4+
					</h1>
					<p className="tracking-[7px] text-xs font-bold text-[#263786]">AWARDS</p>
				</div>
			</section>

			<section className="px-2 pt-24 pb-14 bg-[#061F90] relative">
				<h1 className="text-center text-[#F5BD02] text-5xl font-bold mb-12">Our Courses</h1>
				<div className="grid md:grid-cols-2 lg:grid-cols-3 px-4 gap-8 mb-28">
					<div className="border border-white drop-shadow-xl">
						<Link to="#" className="h-[200px] relative course-1">
							<img src="https://usercontent.one/wp/tritekconsulting.co.uk/wp-content/uploads/2019/03/pexels-kindel-media-7688336-640x480.jpg" className="w-full" />
							<span className="w-full bg-gray-800 z-[4] h-full opacity-[.7]"></span>
						</Link>
						<div className="bg-white py-6 px-8 text-[#263786] grid">
							<Link to="#" className="font-semibold text-xl hover:text-[#F5BD02] w-[fit-content]">Business Analyst</Link>
							<Link to="#" className="text-[#F5BD02] w-[fit-content]">Read More</Link>
						</div>
					</div>

					<div className="border border-white drop-shadow-xl">
						<Link to="#" className="h-[200px] relative course-1">
							<img src="https://usercontent.one/wp/tritekconsulting.co.uk/wp-content/uploads/2019/03/pexels-kindel-media-7688336-640x480.jpg" className="w-full" />
							<span className="w-full bg-gray-800 z-[4] h-full opacity-[.7]"></span>
						</Link>
						<div className="bg-white py-6 px-8 text-[#263786] grid">
							<Link to="#" className="font-semibold text-xl hover:text-[#F5BD02] w-[fit-content]">Business Analyst</Link>
							<Link to="#" className="text-[#F5BD02] w-[fit-content]">Read More</Link>
						</div>
					</div>

					<div className="border border-white drop-shadow-xl">
						<Link to="#" className="h-[200px] relative course-1">
							<img src="https://usercontent.one/wp/tritekconsulting.co.uk/wp-content/uploads/2019/03/pexels-kindel-media-7688336-640x480.jpg" className="w-full" />
							<span className="w-full bg-gray-800 z-[4] h-full opacity-[.7]"></span>
						</Link>
						<div className="bg-white py-6 px-8 text-[#263786] grid">
							<Link to="#" className="font-semibold text-xl hover:text-[#F5BD02] w-[fit-content]">Business Analyst</Link>
							<Link to="#" className="text-[#F5BD02] w-[fit-content]">Read More</Link>
						</div>
					</div>

					<div className="border border-white drop-shadow-xl">
						<Link to="#" className="h-[200px] relative course-1">
							<img src="https://usercontent.one/wp/tritekconsulting.co.uk/wp-content/uploads/2019/03/pexels-kindel-media-7688336-640x480.jpg" className="w-full" />
							<span className="w-full bg-gray-800 z-[4] h-full opacity-[.7]"></span>
						</Link>
						<div className="bg-white py-6 px-8 text-[#263786] grid">
							<Link to="#" className="font-semibold text-xl hover:text-[#F5BD02] w-[fit-content]">Business Analyst</Link>
							<Link to="#" className="text-[#F5BD02] w-[fit-content]">Read More</Link>
						</div>
					</div>

					<div className="border border-white drop-shadow-xl">
						<Link to="#" className="h-[200px] relative course-1">
							<img src="https://usercontent.one/wp/tritekconsulting.co.uk/wp-content/uploads/2019/03/pexels-kindel-media-7688336-640x480.jpg" className="w-full" />
							<span className="w-full bg-gray-800 z-[4] h-full opacity-[.7]"></span>
						</Link>
						<div className="bg-white py-6 px-8 text-[#263786] grid">
							<Link to="#" className="font-semibold text-xl hover:text-[#F5BD02] w-[fit-content]">Business Analyst</Link>
							<Link to="#" className="text-[#F5BD02] w-[fit-content]">Read More</Link>
						</div>
					</div>

					<div className="border border-white drop-shadow-xl">
						<Link to="#" className="h-[200px] relative course-1">
							<img src="https://usercontent.one/wp/tritekconsulting.co.uk/wp-content/uploads/2019/03/pexels-kindel-media-7688336-640x480.jpg" className="w-full" />
							<span className="w-full bg-gray-800 z-[4] h-full opacity-[.7]"></span>
						</Link>
						<div className="bg-white py-6 px-8 text-[#263786] grid">
							<Link to="#" className="font-semibold text-xl hover:text-[#F5BD02] w-[fit-content]">Business Analyst</Link>
							<Link to="#" className="text-[#F5BD02] w-[fit-content]">Read More</Link>
						</div>
					</div>
				</div>
				<IconPattern className="absolute bottom-0 transform rotate-[180deg]" fill="#1130bf" />
			</section>

			<section className="px-2 pt-24 pb-14 bg-[#1130bf] relative">
				<h1 className="text-center text-white text-5xl font-bold mb-12">Candidate Testimonials</h1>

				<div className="mb-28">
					<div className="client-testimonials grid lg:flex lg:flex-row items-center gap-6 px-3">
						<div className="bg-white rounded p-3 md:w-8/12 md:mx-auto w-full min-h-[100px] h-auto md:min-h-44 lg:min-h-64">
							<div className="grid py-6">
								<p className="leading-[20px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
								<p className="text-sm italic font-bold text-right"> - sdfgh</p>
							</div>
						</div>
						<div className="bg-white rounded p-3 md:w-8/12 md:mx-auto w-full min-h-[150px] h-auto md:min-h-44 lg:min-h-64">
							<div className="grid py-6">
								<p className="leading-[20px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
								<p className="text-sm italic font-bold text-right"> - sdfgh</p>
							</div>
						</div>
						<div className="bg-white rounded p-3 md:w-8/12 md:mx-auto w-full min-h-[100px] h-auto md:min-h-44 lg:min-h-64">
							<div className="grid py-6">
								<p className="leading-[20px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
								<p className="text-sm italic font-bold text-right"> - sdfgh</p>
							</div>
						</div>
					</div>
					<div className="mt-8 text-white font-semibold text-center flex items-center gap-x-2 justify-center">
						<button className="rounded border border-yellow-300 px-3 py-1">prev</button>
						<button className="rounded border border-yellow-300 px-3 py-1">next</button>
					</div>
				</div>
				<IconPattern className="absolute bottom-0 transform rotate-[180deg]" fill="white" />
			</section>

			<section className="px-2 pt-24 pb-14 ">
				<h1 className="text-center text-5xl font-bold mb-12 w-10/12 mx-auto">Companies Where Our Candidates have secured roles
				</h1>

			</section>
			<footer className="bg-yellow-300 px-12 py-4 w-full grid md:flex md:flex-row md:justify-between gap-10">
				<div className="grid pt-10">
					<h3 className="font-bold text-2xl text-cente">GET IN TOUCH</h3>
					<div className="text-sm">
						<p>Lorem Ipsum Dolor Sit Amet</p>
						<p>Lorem Ipsum Dolor</p>
						<p>Lorem Ipsum</p>
						<p>Lorem Ipsum Dolor Sit</p>
					</div>
				</div>

				<div className="grid md:pt-10">
					<h3 className="font-bold text-2xl text-cente">Explore Links</h3>
					<div className="text-sm">
						<p>Lorem Ipsum Dolor Sit Amet</p>
						<p>Lorem Ipsum Dolor</p>
						<p>Lorem Ipsum</p>
						<p>Lorem Ipsum Dolor Sit</p>
					</div>
				</div>

				<div className="subscribe md:pt-10">
					<form action="" className="w-full grid gap-3">
						<label htmlFor="subscribe" className="font-semibold text-lg">
							Subscribe To Newsletter
							<input type="text" placeholder="Enter your e-mail" className="focus:outline-none bg-gray-200 px-4 py-2 w-full rounded" />
						</label>
						<button className="w-full bg-[#061F90] text-white  py-2">Submit</button>
					</form>
				</div>
			</footer>
		</main>
	);
}

import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { useEffect, useState } from "react";
import IconArrowDownSLine from "~/components/Icons/ArrowDwon";
import IconClose from "~/components/Icons/Close";
import Hamburger from "~/components/Icons/Hamburger";
import IconMail from "~/components/Icons/Message";
import IconPattern from "~/components/Icons/Pattern";
import BgPattern from "public/bgpattern.png"
import Slider1 from "public/images/best-project-management-platforms-featured-image-scaled.jpg"
import Slider2 from "public/images/Project-Manager.jpg"
import Slider3 from "public/images/unique-features-of-project-management-software.png"
import Slider4 from "public/images/what-is-project-management-process.png"
import IconBxsLeftArrow from "~/components/Icons/LeftArrow";
import IconBxsRightArrow from "~/components/Icons/RightArrow";
import ImageBg from "public/images/97d4f462a21a628219cf8239680507de.png"
import IconChess from "~/components/Icons/ChessIcon";
import IconHandshakeSimple from "~/components/Icons/Handshake";
import IconTarget from "~/components/Icons/Target";
import IconWifi from "~/components/Icons/Wifi";
import IconSendPlaneFill from "~/components/Icons/Send";

export const meta: MetaFunction = () => {
	return [
		{ title: "Consulting" },
		{ name: "description", content: "Tritek" },
	];
};


export default function Index() {
	const [showAbout, setShowAbout] = useState<{ el?: boolean, icon?: boolean }>({ el: false, icon: false })
	const [showAboutHover, setShowAboutHover] = useState<boolean>(false)
	const [showMenu, ToggleMenu] = useState(false)
	const slideImages = [Slider1, Slider2, Slider3, Slider4]
	const [slideIndex, setSlideIndex] = useState<number>(1)
	const [isLoaded, setLoaded] = useState<boolean>(false)

	useEffect(() => {
		// Show the first slide when the component mounts
		// console.log("slide index before", slideIndex);
		setLoaded(true)
		if (slideIndex === 0) {
			setSlideIndex(slideImages.length)
		} else
			if (slideIndex > slideImages.length)
				setSlideIndex(1)
			else
				slideShow(slideIndex);
		// console.log("slide index after", slideIndex);
	}, [slideIndex]);

	const changeSlide = (n: number) => {
		setSlideIndex((prevIndex) => prevIndex + n)
	}

	const slideShow = (n: number) => {
		let i;
		const slides = document.getElementsByClassName('slides') as HTMLCollectionOf<HTMLElement>
		if (slides.length === 0)
			return

		if (n > slides.length) {
			setSlideIndex(1)
		}

		if (n < 1) {
			setSlideIndex(slides.length)
		}

		for (i = 0; i < slides.length; i++) {
			slides[i].style.display = 'none'
		}
		const currentSlide = slides[slideIndex - 1];

		if (currentSlide) {
			currentSlide.style.display = 'block';
		} else {
			return
		}

	}

	useEffect(() => {
		const intervalId = setInterval(() => {
			changeSlide(1)
		}, 1500);
		return () => clearInterval(intervalId)
	}, [slideIndex])

	return (
		<div className="xl:w-3/4 xxl:w-3/5 mx-auto min-h-screen">
			<main style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }} className="mx-auto">
				<header className="bg-white">
					<div className="top-header px-2 py-1 text-white flex flex-col justify-center items-center gap-y-2 bg-[#061f90] lg:flex-row lg:justify-between lg:px-10">
						<Link to="#" className="underline text-sm">Live Support</Link>
						<IconMail className="w-5 h-5" />
					</div>

					{/* mobile, tablets */}
					<div className="bg-white grid lg:hidden relative">
						<div className="p-3 flex flex-row justify-between items-center">
							<div className="header w-full p-3">
								<div className="w-40 h-10">
									<h1 className="text-2xl font-bold">Tritek Consult</h1>
								</div>
							</div>
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

									<div className="about cursor-pointer">
										<li className="border-b">
											<div>
												<Link to="#about-us" className="w-full flex justify-between p-4 pl-8 items-center">
													<span id="about" className={`${showAboutHover ? 'inherit' : ''}`}>About</span>
													{/* {
													(showAbout.el || showAbout.icon) ? <b className="text-2xl font-normal">-</b> : <b className="text-2xl font-normal">+</b>
												} */}
												</Link>

											</div>
											{/* {(showAbout.el || showAbout.icon) && <nav className="bg-gray-50"
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
										</nav>} */}
										</li>
									</div>

									<Link to="#" className="hover:text-yellow-300">
										<li className="border-b p-4 pl-8">Contact Us</li>
									</Link>
								</ul>
							</nav>
						</div>}
					</div>

					{/* desktop */}
					<div className="hidden lg:block">
						<div className="header w-full p-3">
							<div className="w-40 h-10">
								<h1 className="text-2xl font-bold">Tritek Consult</h1>
							</div>
						</div>
						<nav className="pl-10 pr-4 h-16 border-y grid">
							<ul className="w-3/4 ml-auto transform translate-x-0 flex flex-row items-center justify-end gap-4">
								<Link to="#">
									<li>Home</li>
								</Link>
								<Link to="#about-us" className="relative about h-full grid items-center">
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
								<Link to="#contact-us">
									<li>Contact Us</li>
								</Link>
							</ul>
						</nav>
					</div>
				</header>

				<section className="hero h-auto md:h-[450px] lg:h-[600px] max-h-[600px] xl:h-[500px] xxl:h-[600px] bg-gray-300 relative">
					<div className={`slide-container w-full relative m-auto h-[inherit]`}>
						{slideImages.map((img, idx) => {
							return (
								<div
									key={idx}
									className={`slides h-[inhrit] ${slideIndex === idx + 1 ? 'slide-in' : 'slide-out'}`}
								>
									<img src={img} alt="" className="h-[inherit] lg:h-[600px] xl:h-[500px] xxl:h-[auto]" />
								</div>
							);
						})}
						<button onClick={() => changeSlide(-1)} className="prev">
							<IconBxsLeftArrow className="w-6 h-6 bg-white rounded-full p-1" />
						</button>
						<button onClick={() => changeSlide(1)} className="next">
							<IconBxsRightArrow className="w-6 h-6 bg-white rounded-full p-1" />
						</button>
					</div>
				</section>

				<section className="grid lg:grid-cols-2 gap-y-6 lg:flex lg:flex-row lg:gap-x-2 bg-white">
					<div className="grid gap-y-6 pl-4">
						<div className="text-[#263786] px-3 pt-4">
							<h1 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-4">Project Management Success</h1>
							<div className="grid text-sm leading-6 tracking-wide md:leading-normal md:tracking-normal md:text-base gap-y-4">
								<p>As the driving force behind this initiative, our IT Project Management team brings a wealth of experience and a passion for leveraging technology to empower individuals and corporate entities alike.</p>
								<p>At Tritek, we understand the evolving landscape of digital challenges, and our mission is to provide cutting-edge solutions that go beyond expectations. As architects of digital transformation, we specialize in crafting bespoke IT solutions tailored to the unique needs of our diverse clientele.</p>
							</div>
						</div>

						<div className="lg:flex lg:flex-row mb-5">
							<div className="flex flex-col lg:flex-row gap-y-4 lg:gap-x-4 pl-3 h-[fit-content]">
								<Link to="#" className="bg-[#263786] text-white p-2 w-[fit-content] rounded-full">Get Started</Link>
							</div>
						</div>
					</div>
					<div className="bg-gray-300 w-full lg:w-[-webkit-fill-available] mx-auto p-6 h-[300px] md:h-[550px] lg:h-[350px] bg-cover" style={{ backgroundImage: `url(${ImageBg})` }}></div>
				</section>

				<section id="about-us" style={{ backgroundImage: `url(${BgPattern})`, backgroundPosition: 'center center', backgroundSize: 'contain' }} className="px-2 pt-24 pb-14 bg-[#061F90] relative bg-cover">
					<h1 className="text-center text-[#F5BD02] text-5xl font-bold mb-12">About Us</h1>
					<div className="grid md:grid-cols-2 items-center px-4 gap-8 mb-28 tilt-container">
						<div className="border border-white drop-shadow-xl bg-white py-6 px-8 text-[#263786] grid gap-y-4 h-[-webkit-fill-available] tilt-on-hover-right">
							<div className="flex flex-col items-center gap-2 justify-center">
								<IconChess className="w-8 h-8" />
								<h1 className="text-2xl font-bold text-center">Our Approach</h1>
							</div>
							<div className="leading-normal">
								<p>With a commitment to excellence, we pride ourselves on our strategic approach to project management. From project inception to completion, we meticulously plan and execute every stage, ensuring optimal results within specified timelines and budget constraints. Our forward-thinking mindset ensures that the solutions we deliver are not only current but also adaptive to future technological trends.</p>
							</div>
						</div>

						<div className="border border-white drop-shadow-xl bg-white py-6 px-8 text-[#263786] grid gap-y-4 h-[-webkit-fill-available] tilt-on-hover-left">
							<div className="flex flex-col items-center gap-2 justify-center">
								<IconHandshakeSimple className="w-8 h-8" />
								<h1 className="text-2xl font-bold text-center">Collaborative Excellence</h1>
							</div>
							<div className="leading-normal">
								<p>We believe in the power of collaboration. Our inclusive work environment fosters a culture where each team member's strengths are acknowledged and harnessed to achieve collective success. Open communication channels, regular feedback sessions, and a transparent work culture form the foundation of our high-performing teams.</p>
							</div>
						</div>

						<div className="border border-white drop-shadow-xl bg-white py-6 px-8 text-[#263786] grid gap-y-4 h-[-webkit-fill-available] tilt-on-hover-right">
							<div className="flex flex-col items-center gap-2 justify-center">
								<IconTarget className="w-8 h-8" />
								<h1 className="text-2xl font-bold text-center">Client-Centric Solutions</h1>
							</div>
							<div className="leading-normal">
								<p>Recognizing the diverse needs of our clients, we adopt a client-centric mindset. Whether serving individual users or corporate entities, we take the time to comprehend their unique requirements. Our goal is to tailor solutions that align with their objectives, providing not just a service but a strategic partnership for success.</p>
							</div>
						</div>
						<div className="border border-white drop-shadow-xl bg-white py-6 px-8 text-[#263786] grid gap-y-4 h-[-webkit-fill-available] tilt-on-hover-left">
							<div className="flex flex-col items-center gap-2 justify-center">
								<IconWifi className="w-8 h-8" />
								<h1 className="text-2xl font-bold text-center">Our Digital Presence</h1>
							</div>
							<div className="leading-normal">
								<p>The consultancy website we present to you is more than a digital interface; it's a gateway to our expertise and a testament to our commitment to excellence. From an intuitive user experience to compelling content, every aspect of our website is meticulously designed to create a positive and lasting impression.</p>
							</div>
						</div>
					</div>
					<IconPattern className="absolute bottom-0 transform rotate-[180deg]" fill="#1130bf" />
				</section>

				<section id="contact-us" className="bg-white px-4 pt-12 pb-14">
					<div className="grid gap-4">
						<div className="form">
							<h1 className="text-center text-5xl font-bold mb-12">Get in Touch</h1>
							<form action="" className="grid md:px-8 lg:w-3/4 mx-auto gap-2">
								<div className="grid gap-4">
									<label htmlFor="">
										Name
										<input type="text" placeholder="John Doe" className="w-full border rounded-md px-4 py-2 focus:outline-none" />
									</label>
									<label htmlFor="">
										Subject
										<input type="text" placeholder="Project Execution" className="w-full border rounded-md px-4 py-2 focus:outline-none" />
									</label>
									<label htmlFor="">
										Message
										<textarea name="" id="" cols={30} rows={4} className="w-full border rounded-md px-4 py-2 focus:outline-none"></textarea>
									</label>
								</div>
								<button className="text-white bg-blue-500 py-2 px-4 flex justify-center rounded-full items-center gap-1">
									<IconSendPlaneFill className="w-6 h-6" />
									Send</button>
							</form>
						</div>
					</div>

				</section>
				<footer className="bg-yellow-300 px-12 py-4 w-full grid md:flex md:flex-row md:justify-between gap-10">
					<div className="flex flex-col gap-2 pt-10">
						<h3 className="font-bold text-2xl leading-normal">GET IN TOUCH</h3>
						<div className="text-sm">
							<p>4th Floor 18 St. Cross Street, <br />London, England, EC1N 8UN</p>
						</div>
					</div>

					<div className="subscribe md:pt-10">
						<form action="" className="w-full grid gap-3">
							<label htmlFor="subscribe" className="font-semibold text-lg">
								Subscribe To Newsletter
								<input type="text" placeholder="Enter your e-mail" className="focus:outline-none bg-gray-200 px-4 py-2 w-full rounded" />
							</label>
							<button className="w-full bg-[#061F90] text-white rounded-full py-2">Submit</button>
						</form>
					</div>
				</footer>
			</main>
		</div>


	);
}

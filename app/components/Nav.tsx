import { Link } from "@remix-run/react"

// export const NavigationBar = (): JSX.Element => {
// 	return (
// 		<>
// 			<nav>
// 				<ul className="flex flex-col mb-4">
// 					<Link to="#" className="hover:text-yellow-300">
// 						<li className="border-b p-4 pl-8">Home</li>
// 					</Link>
// 					<Link to="#" className="hover:text-yellow-300">
// 						<li className="border-b p-4 pl-8">Consulting</li>
// 					</Link>
// 					<div className="about cursor-pointer">
// 						<li className="border-b">
// 							<div onClick={() => setShowAbout({ el: !showAbout.el, icon: false })}>
// 								<Link to="#" className="w-full flex justify-between p-4 pl-8 items-center">
// 									<span id="about" className={`${showAboutHover ? 'inherit' : ''}`}>About</span>
// 									{
// 										(showAbout.el || showAbout.icon) ? <b className="text-2xl font-normal">-</b> : <b className="text-2xl font-normal">+</b>
// 									}
// 								</Link>

// 							</div>
// 							{(showAbout.el || showAbout.icon) && <nav className="bg-gray-50"
// 								onMouseEnter={() => {
// 									setShowAboutHover(true)
// 								}}
// 								onMouseLeave={() => {
// 									setShowAboutHover(false)
// 								}}>
// 								<ul>
// 									<Link to="#" className="hover:text-yellow-300">
// 										<li className="border-b border-gray-100 p-4 pl-8">About Us</li>
// 									</Link>

// 									<Link to="#" className="hover:text-yellow-300">
// 										<li className="border-b border-gray-100 p-4 pl-8">Meet The CEO</li>
// 									</Link>
// 								</ul>
// 							</nav>}
// 						</li>
// 					</div>
// 					<div className="bulletin">
// 						<li className="border-b">
// 							<div onClick={() => setShowBulletin({ el: !showBulletin.el, icon: false })}>
// 								<Link to="#" className="w-full flex justify-between p-4 pl-8 items-center">
// 									<span id="bulletin" className={`${showBulletinHover ? 'inherit' : ''}`}>Bulletin</span>
// 									{
// 										(showBulletin.el || showBulletin.icon) ? <b className="text-2xl font-normal">-</b> : <b className="text-2xl font-normal"
// 											onClick={() => setShowBulletin({ icon: !showBulletin.icon, el: false })}
// 										>+</b>
// 									}
// 								</Link>
// 							</div>
// 							{(showBulletin.el || showBulletin.icon) && <nav className="bg-gray-50" onMouseEnter={() => setShowBulletinHover(true)}
// 								onMouseLeave={() => setShowBulletinHover(false)}>
// 								<ul>
// 									<Link to="#" className="hover:text-yellow-300">
// 										<li className="border-b border-gray-100 p-4 pl-8">Sub menu link</li>
// 									</Link>

// 									<Link to="#" className="hover:text-yellow-300">
// 										<li className="border-b border-gray-100 p-4 pl-8">Sub menu link</li>
// 									</Link>
// 								</ul>
// 							</nav>}
// 						</li>
// 					</div>
// 					<Link to="#" className="hover:text-yellow-300">
// 						<li className="border-b p-4 pl-8">Success Stories</li>
// 					</Link>

// 					<div className="courses">
// 						<li className="border-b">
// 							<div onClick={() => setShowCourses({ el: !showCourses.el, icon: false })}>
// 								<Link to="#" className="w-full flex justify-between p-4 pl-8 items-center">
// 									<span id="bulletin" className={`${showCoursesHover ? 'inherit' : ''}`}>Courses</span>
// 									{
// 										(showCourses.el || showCourses.icon) ? <b className="text-2xl font-normal">-</b> : <b className="text-2xl font-normal"
// 											onClick={() => setShowCourses({ icon: !showCourses.icon, el: false })}
// 										>+</b>
// 									}
// 								</Link>
// 							</div>
// 							{(showCourses.el || showCourses.icon) && <nav className="bg-gray-50" onMouseEnter={() => setShowCoursesHover(true)}
// 								onMouseLeave={() => setShowCoursesHover(false)}>
// 								<ul>
// 									<Link to="#" className="hover:text-yellow-300">
// 										<li className="border-b border-gray-100 p-4 pl-8">Sub menu link</li>
// 									</Link>

// 									<Link to="#" className="hover:text-yellow-300">
// 										<li className="border-b border-gray-100 p-4 pl-8">Sub menu link</li>
// 									</Link>
// 								</ul>
// 							</nav>}
// 						</li>
// 					</div>

// 					<Link to="#" className="hover:text-yellow-300">
// 						<li className="border-b p-4 pl-8">Events</li>
// 					</Link>

// 					<Link to="#" className="hover:text-yellow-300">
// 						<li className="border-b p-4 pl-8">Recruitment</li>
// 					</Link>

// 					<Link to="#" className="hover:text-yellow-300">
// 						<li className="border-b p-4 pl-8">Contact Us</li>
// 					</Link>

// 					<Link to="#" className="hover:text-yellow-300">
// 						<li className="border-b p-4 pl-8">FAQ</li>
// 					</Link>

// 				</ul>
// 			</nav>
// 		</>
// 	)
// }
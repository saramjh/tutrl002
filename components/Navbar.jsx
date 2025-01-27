import Link from "next/link"

export default function Navbar() {
	return (
		<div className="bg-base-100 mx-5 flex justify-between p-3 rounded-br-xl rounded-bl-xl min-w-fit">
			<div className="">
				<Link className="btn btn-ghost text-xl" href={"/"}>
					Home
				</Link>
			</div>
			<div className="flex-none">
				<div className="dropdown dropdown-end">
					<div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
						<div className="w-10 h-10 rounded-full">
							<img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
						</div>
					</div>
					<ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
						<li>
							<a className="justify-between">
								Profile
								<span className="badge">New</span>
							</a>
						</li>
						<li>
							<a>Settings</a>
						</li>
						<li>
							<a>Logout</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

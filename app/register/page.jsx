const Register = () => {
	const rectangle = "w-20 h-20 "
	return (
		<>
			<div className="m-10 p-3 rounded-3xl bg-gray-100 flex flex-row justify-evenly shadow-sm">
				<div className="bg-slate-300 w-10 h-10"></div>
				<div className="bg-slate-400 w-10 h-12"></div>
				<div className="bg-slate-500 w-10 h-14"></div>
				<div className="bg-slate-600 w-10 h-16"></div>
				<div className="bg-slate-700 w-10 h-20"></div>
			</div>
			<div className="bg-yellow-300 mx-auto p-5 rounded-xl shadow-xl grid grid-cols-3 gap-4 h-[500px] content-around w-fit ">
				<div className={rectangle + "bg-slate-300"}>1</div>
				<div className={rectangle + "bg-slate-400"}>2</div>
				<div className={rectangle + "bg-slate-500"}>3</div>
				<div className={rectangle + "bg-orange-300"}>4</div>
				<div className={rectangle + "bg-orange-400"}>5</div>
				<div className={rectangle + "bg-orange-500"}>6</div>
			</div>
		</>
	)
}

export default Register

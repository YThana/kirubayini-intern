
import React from 'react';
import img from '../assets/contactSectionImg.jpg';

function contact() {
	return (
		<>
			<div className="w-screen px-[113px] pt-[64px] pb-[112px]">
				<div className="flex gap-[109px] bg-[#0e6b901a] h-[529px] items-center">
					<div className="flex flex-col gap-[44px] ml-[64px] max-w-[593px]">
						<h1 className="text-[#082F44] text-5xl leading-[63px]">
							<span className="font-bold">Maximize</span> your financial growth with
							tailored solutions
						</h1>
						<div className="flex gap-[10px]">
							<div className="rounded-full items-center flex px-4 h-[42px] bg-[#165d7d1f] text-[#082F44] capitalize">
								wealth
							</div>
							<div className="rounded-full items-center flex px-4 h-[42px] bg-[#165d7d1f] text-[#082F44] capitalize">
								advisory
							</div>
							<div className="rounded-full items-center flex px-4 h-[42px] bg-[#165d7d1f] text-[#082F44] capitalize">
								venture
							</div>
						</div>
						<div className="flex">
							<button className="font-semibold capitalize text-base px-5 h-[51px] bg-[#165D7D] text-white">
								reach us today
							</button>
						</div>
					</div>
					<div className="flex justify-end flex-1 h-full">
						<img src={img} alt="contact" className="object-cover"></img>
					</div>
				</div>
			</div>
		</>
	);
}

export default contact;

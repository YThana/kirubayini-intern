import React from 'react';
import wealthConnectImg from '../assets/wealthConnect.png';

function wealthConnect() {
	return (
		<div className="flex gap-[14px] w-screen h-[650px] bg-[#165d7d1a] pl-[112px]">
			<div className="max-w-[505px] mt-[109px] flex flex-col gap-12">
				<h1 className="flex items-center font-bold text-[32px]">
					WealthConnect NEW
					<span className="ml-2 flex items-center rounded-full px-2 h-[26px] text-[#F6F6F6] bg-black text-sm">
						new
					</span>
				</h1>
				<p className="text-xl">
					<span className="font-bold">WealthConnect</span> is a sophisticated wealth
					management platform tailored for investors seeking exclusive alternative
					investment opportunities typically out of reach. With a commitment to
					diversification, it offers access to a curated selection of non-traditional
					assets.{' '}
				</p>
				<p className="text-xl">
					Through advanced analytics and expert guidance,
					<span className="font-bold">WealthConnect</span> empowers investors to navigate
					these complex investment landscapes effectively.
				</p>
				<div className="flex">
					<button className="font-semibold capitalize text-base px-5 h-[51px] bg-[#165D7D] text-white">
						get early access
					</button>
				</div>
			</div>
			<div className="flex items-center mr-[64px]">
				<img
					src={wealthConnectImg}
					alt="wealt connect"
					className="max-w-[817px] max-h-[455px] shrink-0"></img>
			</div>
		</div>
	);
}

export default wealthConnect;

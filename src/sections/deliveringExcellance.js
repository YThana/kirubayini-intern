import React from 'react';
import startQuote from '../assets/startQuote.svg';
import endQuote from '../assets/endQuote.svg';

function deliveringExcellance() {
	return (
		<div className="flex w-screen pl-[112px] py-8">
			<div className="flex flex-col gap-[44px] max-w-[523px]">
				<h1 className="flex font-medium text-[32px]">
					<span>
						<img src={startQuote} alt="start quotation" />
					</span>
					Delivering Excellence
					<span>
						<img src={endQuote} alt="end quotatorion" />
					</span>
				</h1>
				<p className="text-xl text-[#454545] font-medium w-full">
					At <span className="font-bold text-black">BlueBay Financial</span>, we offer a
					comprehensive range of financial advisory, brokerage & investment solutions to
					our clients.
				</p>
				<p className="text-xl text-[#454545] font-medium max-w-[491px]">
					We work with some of the leading regional business groups, asset managers and
					banks, providing bespoke investment banking and wealth management solutions.
				</p>
			</div>
			<div className="flex items-center justify-center flex-1 pl-6">
				<div className="items-center flex w-full">
					<div className="flex bg-[#E7E7E7] h-[4px] w-[232px]"></div>
					<div className="capitalize text-[#082F44] text-sm font-semibold h-[42px] px-4 flex items-center bg-[#165d7d1f] rounded-full">
						financial advisory
					</div>
					<div className="flex bg-[#E7E7E7] h-[4px] w-9"></div>
					<div className="capitalize text-[#082F44] text-sm font-semibold h-[42px] px-4 flex items-center bg-[#165d7d1f] rounded-full">
						brokerage
					</div>
					<div className="flex bg-[#E7E7E7] h-[4px] w-9"></div>
					<div className="capitalize text-[#082F44] text-sm font-semibold h-[42px] px-4 flex items-center bg-[#165d7d1f] rounded-full">
						investment
					</div>
					<div className="bg-[#E7E7E7] h-[4px] flex flex-1 w-full pr-[2px]"></div>
				</div>
			</div>
		</div>
	);
}
export default deliveringExcellance;

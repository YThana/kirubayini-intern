import React from 'react';
import logo from '../assets/logo.svg';
import fb from '../assets/facebook.svg';
import linkedin from '../assets/linkedin.svg';

function footer() {
	return (
		<div className="w-screen bg-[#165d7d14] px-[112px] py-[44px]">
			<div className="flex justify-between">
				<div className="flex flex-col gap-5 max-w-[328px]">
					<img src={logo} alt="logo"></img>
					<p className="font-semibold text-2xl">+971 4 295 7589</p>
					<div className="flex flex-col gap-6">
						<p className="font-bold text-base ">BlueBay Financial Services LLC</p>
						<p className="font-medium text-sm">
							117, Oud Metha Offices Building UmmHurair, Dubai – UAE
						</p>
					</div>
					<p className="text-sm font-medium text-[#888888] mt-3">
						BlueBay Financial Services LLC All Rights Reserved.
					</p>
				</div>
				<div className="relative flex items-center">
					<div className="absolute flex gap-3 right-0 bottom-[5px]">
						<img src={fb} alt="facebook" />
						<img src={linkedin} alt="linkedin" />
					</div>
					<div className="flex  items-start gap-[124px]">
						<div className="flex flex-col">
							<h3 className="font-semibold text-base">What We Do</h3>
							<div className="flex flex-col gap-7 mt-8">
								<p className="font-medium text-base">Investment Banking</p>
								<p className="font-medium text-base">Wealth Solutions</p>
								<p className="font-medium text-base">ventures</p>
							</div>
						</div>
						<div className="flex flex-col">
							<h3 className="font-semibold text-base">Company</h3>
							<div className="flex flex-col gap-7 mt-8">
								<p className="font-medium text-base">Contact us</p>
							</div>
						</div>
						<div className="flex flex-col">
							<h3 className="font-semibold text-base">Legal</h3>
							<div className="flex flex-col gap-7 mt-8">
								<p className="font-medium text-base">Terms & conditions</p>
								<p className="font-medium text-base">Privacy policy</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default footer;

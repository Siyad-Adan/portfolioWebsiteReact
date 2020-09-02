import React from 'react';
import Nav from './Nav';
import { Helmet } from 'react-helmet';
import easyPay from '../images/items/easyPay.png';
import twitterBots from '../images/items/twitterBots.jpeg';
import covid from '../images/items/covid.png';
import menty from '../images/items/menty.png';

import { SRLWrapper } from 'simple-react-lightbox';

function Work() {
	const options = {
		settings: {
			autoplaySpeed: 20000,
			transitionSpeed: 900
		},
		caption: {
			captionColor: '#ffbc00',
			captionFontFamily: 'Dosis, sans-serif',
			captionFontSize: '20px'
		}
	};

	const currents = {
		about: false,
		home: false,
		work: true
	};

	return (
		<div>
			<Helmet>
				<title>My Work</title>
			</Helmet>
			<Nav currents={currents} />
			<SRLWrapper options={options}>
				<section id="work-a" className="text-center py-3">
					<div className="container">
						<h2 className="section-title">My Work</h2>
						<div className="bottom-line" />
						<p className="lead">Check out some of my projects!</p>
						<div className="items">
							<div className="item">
								<div className="item-image">
									<a href={menty} data-attribute="SRL">
										<img
											className="firstOne"
											src={menty}
											alt="menty! A website to share positive posts to those who need it !"
										/>
									</a>
								</div>
								<a href="https://github.com/Siyad-Adan/mentyApp" className="btn-dark" target="_blank">
									Check Me Out!
								</a>
							</div>
							<div className="item">
								<div className="item-image">
									<a href={covid} data-attribute="SRL">
										<img
											className="secondOne"
											src={covid}
											alt="COVID-19 tracking API utilizing React"
										/>
									</a>
								</div>
								<a
									href="https://github.com/Siyad-Adan/covidTrackerApp"
									className="btn-dark"
									target="_blank"
								>
									Check Me Out!
								</a>
							</div>
							<div className="item">
								<div className="item-image">
									<a href={twitterBots} data-attribute="SRL">
										<img
											src={twitterBots}
											alt="Machine Learning project to detect Twitter Bots utilizing data gathered from the Twitter API and 3 different machine learning algorithms"
										/>
									</a>
								</div>
								<a
									href="https://github.com/Siyad-Adan/Twitter-Bot-User-Detection-using-Machine-Learning-Models"
									className="btn-dark"
									target="_blank"
								>
									Check Me Out!
								</a>
							</div>
							<div className="item">
								<div className="item-image">
									<a href={easyPay} data-attribute="SRL">
										<img
											className="lastOne"
											src={easyPay}
											alt="easyPay! A payroll project utilizing C#, ASP.NET Core 3.0, Entity Framework and deployed on Azure"
										/>
									</a>
								</div>
								<a href="https://github.com/Siyad-Adan/easyPay" className="btn-dark" target="_blank">
									Check Me Out!
								</a>
							</div>
						</div>
					</div>
				</section>
			</SRLWrapper>
		</div>
	);
}

export default Work;

import * as React from 'react';
import Header from '../../components/Header';
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

export default function Schedule() {
	const [isVisible28, setIsVisible28] = useState(false);
	const [isVisible1, setIsVisible1] = useState(false);
	const [isVisible2, setIsVisible2] = useState(false);
	const [isVisible3, setIsVisible3] = useState(false);
	const [isVisible04, setIsVisible04] = useState(false);
	const [isVisible05, setIsVisible05] = useState(false);
	const [isVisible06, setIsVisible06] = useState(false);
	const [isVisible07, setIsVisible07] = useState(false);
	const isSmallDevice = useMediaQuery({ query: '(max-width:768px' })
	const containerStyle = {
		width: isSmallDevice ? '95%' : '60%',
		border: '2px solid white',
		borderRadius: '12px',
		margin: '5px auto',
		position: 'relative',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		cursor: 'pointer',
		flexDirection: 'column',
	};
	const h5Style = { color: 'inherit',fontSize:isSmallDevice? '15px':''  }
	return (
		<div className="page-wrapper">
			<Header active={21} />
			<section
				style={{
					background:
						'url(https://bigthink.com/wp-content/uploads/2021/07/134458-134459.png?lb=1536,864)',
					backgroundSize: 'cover',
					backgroundRepeat: 'no-repeat',
					boxShadow: '100px 100px 100px 100px rgba(255,255,255,0.2) inset',
				}}
			>
				<div
					style={{
						width: '100vw',
						height: '100vh',
						overflow: 'scroll',
						// display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						flexDirection: 'column',
						padding: '0 auto',
						position: 'relative',
						paddingBottom: '2%',
						paddingTop: '200px',
					}}
				>
					<h2 style={{ textAlign: 'center', color: 'white' }}>
						Event Schedule
					</h2>
					<p style={{ textAlign: 'center', color: 'white' }}>
						Please note that all event will be conducted on virtual mode.
					</p>
					<br />
					<br />
					{/* 28 FEB */}
					<div
						style={containerStyle}
						onClick={() => {
							setIsVisible28(!isVisible28);
						}}
					>
						<h2 style={{ color: 'white', margin: '10px auto' }}>28 FEB 2022</h2>
						{isVisible28 && (
							<div
								style={{
									color: 'white',
									transitionDelay: '1s',
									textAlign: isSmallDevice? 'center': 'left',
								}}
							>
								<br />
								<br />
								<h3 style={{ color: 'inherit', textAlign: 'center' }}>
									Events
								</h3>

								<h5 style={h5Style}>
									ASCENSUS QUIZ ROUND: 08:00 PM TO 11:30 PM
								</h5>
							</div>
						)}
					</div>
					{/* 1 MARCH */}
					<div
						style={containerStyle}
						onClick={() => {
							setIsVisible1(!isVisible1);
						}}
					>
						<h2 style={{ color: 'white', margin: '10px auto' }}>
							01 MARCH 2022
						</h2>
						{isVisible1 && (
							<div
								style={{
									color: 'white',
									transitionDelay: '1s',
									textAlign: 'left',
								}}
							>
								<br />
								<br />
								<h3 style={{ color: 'inherit', textAlign: 'center' }}>
									Events
								</h3>

								<h5 style={h5Style}>
									ASCENSUS CASE ROUND: 12:00 AM TO 12:59 PM
								</h5>
							</div>
						)}
					</div>
					{/* 2 MARHC */}
					<div
						style={containerStyle}
						onClick={() => {
							setIsVisible2(!isVisible2);
						}}
					>
						<h2 style={{ color: 'white', margin: '10px auto' }}>
							02 MARCH 2022
						</h2>
						{isVisible2 && (
							<div
								style={{
									color: 'white',
									transitionDelay: '1s',
									textAlign: 'left',
								}}
							>
								<br />
								<br />
								<h3 style={{ color: 'inherit', textAlign: 'center' }}>
									Events
								</h3>

								<h5 style={h5Style}>
									DESIGNO PRELIMS BEGINS: 12:00 AM
								</h5>
							</div>
						)}
					</div>
					{/* 3 MARHC */}
					<div
						style={containerStyle}
						onClick={() => {
							setIsVisible3(!isVisible3);
						}}
					>
						<h2 style={{ color: 'white', margin: '10px auto' }}>
							03 MARCH 2022
						</h2>
						{isVisible3 && (
							<div
								style={{
									color: 'white',
									transitionDelay: '1s',
									textAlign: 'left',
								}}
							>
								<br />
								<br />
								<h3 style={{ color: 'inherit', textAlign: 'center' }}>
									Events
								</h3>

								<h5 style={h5Style}>
									GUARDAINS KICKSTARTS: 02:00 PM
								</h5>
							</div>
						)}
					</div>
					{/* 4 MARHC */}
					<div
						style={containerStyle}
						onClick={() => {
							setIsVisible04(!isVisible04);
						}}
					>
						<h2 style={{ color: 'white', margin: '10px auto' }}>
							04 MARCH 2022
						</h2>
						{isVisible04 && (
							<div
								style={{
									color: 'white',
									transitionDelay: '1s',
									textAlign: 'left',
								}}
							>
								<br />
								<br />
								<h3 style={{ color: 'inherit', textAlign: 'center' }}>
									Events
								</h3>
								<h5 style={h5Style}>
									DESIGNO PRELIMS ENDS: 12:00 AM
								</h5>
								<h5 style={h5Style}>
									DEVHACK OPENING CEREMONY: 04:00 PM
								</h5>
								<h5 style={h5Style}>
									DEVHACK ORIENTATION SESSION: 06:00 PM TO 7:30 PM
								</h5>
								<h5 style={h5Style}>
									VENIVIDIVICI KICKSOFF: 08:00 PM
								</h5>
								<h5 style={h5Style}>
									DEVHACK IDEATION PHASE: 08:00 PM
								</h5>
							</div>
						)}
					</div>
					{/* 05 MARCH */}
					<div
						style={containerStyle}
						onClick={() => {
							setIsVisible05(!isVisible05);
						}}
					>
						<h2 style={{ color: 'white', margin: '10px auto' }}>
							05 MARCH 2022
						</h2>
						{isVisible05 && (
							<div
								style={{
									color: 'white',
									transitionDelay: '1s',
									textAlign: 'left',
								}}
							>
								<br />
								<br />
								<h3 style={{ color: 'inherit', textAlign: 'center' }}>
									Events
								</h3>

								<h5 style={h5Style}>GUARDAINS ENDS: 12:00 AM</h5>
								<h5 style={h5Style}>
									ASCENSUS PRESENTATION ROUND KICKSOFF: 06:00 AM
								</h5>
								<h5 style={h5Style}>
									VENIVIDIVICI ENDS: 08:00 AM
								</h5>
								<h5 style={h5Style}>
									DEVHACK SPEAKER SESSION: 11:00 AM
								</h5>
								<h5 style={h5Style}>
									DEVHACK IDEATION JUDGING BEGINS: 11:30 AM
								</h5>
								<h5 style={h5Style}>
									QUIZ PRELIMS: 12:00 PM TO 02:00 PM
								</h5>
								<h5 style={h5Style}>
									DEVHACK INNOVATION PHASE KICKSOFF: 02:00 PM
								</h5>
								<h5 style={h5Style}>
									DESIGNO FINALS: 02:00 PM TO 08:00 PM
								</h5>
								<h5 style={h5Style}>
									DEVHACK POWER HACKING PHASE KICKSOFF: 10:00 PM
								</h5>
							</div>
						)}
					</div>
					{/* 06 MARHC */}
					<div
						style={containerStyle}
						onClick={() => {
							setIsVisible06(!isVisible06);
						}}
					>
						<h2 style={{ color: 'white', margin: '10px auto' }}>
							06 MARCH 2022
						</h2>
						{isVisible06 && (
							<div
								style={{
									color: 'white',
									transitionDelay: '1s',
									textAlign: 'left',
								}}
							>
								<br />
								<br />
								<h3 style={{ color: 'inherit', textAlign: 'center' }}>
									Events
								</h3>

								<h5 style={h5Style}>
									DEVHACK SUBMISSION OF PROTOTYPE: 08:00 PM
								</h5>
								<h5 style={h5Style}>
									QUIZ FINALS: 10:00 AM TO 12:30 PM
								</h5>
								<h5 style={h5Style}>
									DEVHACK DECLARATION OF TOP 7 TEAMS: 10:30 AM
								</h5>
								<h5 style={h5Style}>
									ALGOSTRIKE FINAL SCOREBOARD: 11:30 AM
								</h5>
								<h5 style={h5Style}>
									DEVHACK SUBMISSION OF PRESENTATION: 12:15 PM
								</h5>
								<h5 style={h5Style}>
									DEVHACK PRESENTATION OF TOP 7 TEAMS: 12:30 PM
								</h5>
								<h5 style={h5Style}>
									DEVHACK SPEAKER SESSION: 02:30 PM
								</h5>
								<h5 style={h5Style}>
									DEVHACK PRIZE DISTRIBUTION: 03:30 PM
								</h5>
								<h5 style={h5Style}>
									DEVHACK CLOSING CEREMONY: 05:30 PM
								</h5>
							</div>
						)}
					</div>
					{/* 07  */}
					<div
						style={containerStyle}
						onClick={() => {
							setIsVisible07(!isVisible07);
						}}
					>
						<h2 style={{ color: 'white', margin: '10px auto' }}>
							07 MARCH 2022
						</h2>
						{isVisible07 && (
							<div
								style={{
									color: 'white',
									transitionDelay: '1s',
									textAlign: 'left',
								}}
							>
								<br />
								<br />
								<h3 style={{ color: 'inherit', textAlign: 'center' }}>
									Events
								</h3>

								<h5 style={h5Style}>
									ASCENSUS PRESENTATION ROUND ENDS: 12:00 AM
								</h5>
							</div>
						)}
					</div>
				</div>
			</section>
			{/* <Footer /> */}
		</div>
	);
}

import { useEffect, useState } from "react";

function Esindused() {
	var a = ["Tallinn", "Tartu", "Narva", "Pärnu"];
	var kontaktInfo = {
		"Tallinn": {
				aadress: 'Tallinna mnt 1'
				,telefon:'55 55 551'
				,omastavaKaandeSuffiks : 'a'
		}
		, 
		"Tartu": {
				aadress: 'Tartu mnt 2'
				,telefon:'55 55 552'
		}
		, 
		"Narva": {
				aadress: 'Narva mnt 3'
				,telefon:'55 55 553'
		}
		, 
		"Pärnu": {
				aadress: 'Pärnu mnt 4'
				,telefon:'55 55 554'
		}
	}



	function helper_css_selected(v) {
			return (v==linn?'selected':'');

	}

	const [linn, setLinn] = useState(a[0]);

	useEffect(() => {
		console.log("Võtame andmebaasist....");
	}, []);

	return (
		<>
			<h1>Esindused</h1>
			<div className="mv-20">hetkel aktiivne linn: {linn}</div>


			{/* <button onClick={() => setLinn(a[0])} className={linn==a[0]?"selected":""}>{a[0]}</button>
			<button onClick={() => setLinn(a[1])} className={helper_css_selected(a[1])}>{a[1]}</button>
			<button onClick={() => setLinn(a[2])} className={helper_css_selected(a[2])}>{a[2]}</button>
			<button onClick={() => setLinn(a[3])} className={helper_css_selected(a[3])}>{a[3]}</button> */}



			{
				// miks ta klõpsu peale kaks korda kuvab linnade loetelu konsoolil?
				a.map(el=>
					<button key={el} onClick={() => setLinn(el)} className={helper_css_selected(el)}>{el}</button>
				)
			}
	

			{/* rtarded JSX templatel ei saa kasutada HTML kommentaare..  tuleb veateade "Identifier expected" 
			<!--  sisu kuvamine -->
			*/}
			
			<div className="mv-40">

				{linn == a[0] && <div>{a[0]}{kontaktInfo[a[0]].omastavaKaandeSuffiks} esindus
					<div>{kontaktInfo[a[0]].aadress}</div>
					<div>{kontaktInfo[a[0]].telefon}</div>
					
					
					</div>}


				{linn == a[1] && <div>{a[1]}{kontaktInfo[a[1]].omastavaKaandeSuffiks} esindus
					<div>{kontaktInfo[a[1]].aadress}</div>
					<div>{kontaktInfo[a[1]].telefon}</div>
					
					
					</div>}
					
					
				
				{linn == a[2] && <div>{a[2]} esindus</div>}
				{linn == a[3] && <div>{a[3]} esindus</div>}

			</div>

		</>
	)
}

export default Esindused
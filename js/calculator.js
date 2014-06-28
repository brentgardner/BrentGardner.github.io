function handleSubmit(){
	//MALE: 66 + (13.7 x weight in kg) + (5 x height in cm) - (6.8 x age)
	//FEMALE: 655 + (9.6 x weight in kg) + (1.7 x height in cm) - (4.7 x age)
	var bmr;
	var weight = document.getElementById("weight").value;
	var feet = document.getElementById("feet").value;
	var inches = Number(feet * 12) + Number(document.getElementById("inches").value);
	var kg = convertToKg(weight);
	var cm = convertToCM(inches);
	var age = document.getElementById("age").value;
	var plusMetric = getCheckedRadioId("activity");
	
	if (getCheckedRadioId('sex') === 'male') {
		bmr = ((13.7 * kg) + (5 * cm) - (6.76 * age) + 66) * plusMetric;
		alert("BMR: " + Math.round(bmr));
	}
	else{
		bmr = ((9.6 * kg) + (1.7 * cm) - (4.7 * age) + 655) * plusMetric;
		alert("BMR: " + Math.round(bmr));
	}
	
}

function getCheckedRadioId(name) {
    var elements = document.getElementsByName(name);

    for (var i=0, len=elements.length; i<len; ++i)
        if (elements[i].checked) return elements[i].value;
}

function convertToKg(weight){
	return weight * 0.453592;
}

function convertToCM(inches){
	return inches * 2.54;
}


function showResults(){
	
}

var el = document.getElementById("BMRForm");
el.addEventListener('submit', handleSubmit, false);
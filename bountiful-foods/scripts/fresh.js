// THIS FILE IS STILL IN DEVELOPMENT
const fruiturl = "https://brotherblazzard.github.io/canvas-content/fruit.json";

// let orderCount = Number(localStorage.getItem('drinkCount')) || 0;

async function getfruitData () {
    const response = await fetch(fruiturl);
    const data = await response.json();
	const fruitSelector = document.querySelectorAll('.fruitDropDown');
	fruitSelector.forEach(item =>{
		data.forEach(fruit => {
			let dropdown = document.createElement('option');
			dropdown.value = fruit.id;
			dropdown.textContent = fruit.name;
			item.appendChild(dropdown);
		});
	});
    // console.table(fruitNameList);
	// console.table(data);
	// console.log(fruitNameList);
    // displayProphets(data.prophets);
}

const formSubmit = document.getElementById('juiceForm');
formSubmit.addEventListener('submit', (event) => {
	event.preventDefault();
	const firstName = document.getElementById('fname').value;
	const email = document.getElementById('email').value;
	const phoneNumber = document.getElementById('phone').value;
	const fruit1 = document.getElementById('fruit1').value;
	const fruit2 = document.getElementById('fruit2').value;
	const fruit3 = document.getElementById('fruit3').value;
	const instructions = document.getElementById('specialInstructions').value;
	// const response = fetch(fruiturl);
    // const data = response.json();
	
	// console.table(`fruit1: ${fruit1}`);
	// console.table(`fruit2: ${fruit2}`);
	// console.table(`fruit3: ${fruit3}`);
	
	// const recipeInfo = document.getElementById('recipeInfo');
	// const nutritionInfo = document.getElementById('nutritionInfo')
	
	// let recipeTitleElement = document.createElement('h2');
	// let nameElement = document.createElement('p');
	// let emailElement = document.createElement('p');
	// let phoneElement = document.createElement('p');
	// let fruit1Element = document.createElement('p');
	// let fruit2Element = document.createElement('p');
	// let fruit3Element = document.createElement('p');
	// let instructionsElement = document.createElement('p');

	// let = nutritionTitleElement = document.createElement('h2');
	// let = carbsElement = document.createElement('p');
	// let = proteinElement = document.createElement('p');
	// let = fatElement = document.createElement('p');
	// let = sugarElement = document.createElement('p');
	// let = calories1Element = document.createElement('p');

	// recipeTitleElement.innerHTML = `Your Recipe`
	// nameElement.innerHTML = `Name: ${firstName}`;
	// emailElement.innerHTML = `Email: ${email}`;
	// phoneElement.innerHTML = `Phone: ${phoneNumber}`;
	// fruit1Element.innerHTML = `Fruit 1: ${fruit1}`;
	// fruit2Element.innerHTML = `Fruit 2: ${fruit2}`;
	// fruit3Element.innerHTML = `Fruit 3: ${fruit3}`;
	// instructionsElement.innerHTML = `Special Instructions: <br>${instructions}`;

	// nutritionTitleElement.innerHTML = `Nutrition`;
	// carbsElement.innerHTML = `Carbohydrates: ${totalCarbs}`;
	// proteinElement.innerHTML = `Protein: ${totalProtein}`;
	// fatElement.innerHTML = `Fat: ${totalFat}`;
	// sugarElement.innerHTML = `Sugar: ${totalSugar}`; 
	// calories1Element.innerHTML = `Calories: ${totalCalories}`;

	// // Append the section(card) with the created elements
	// recipeInfo.appendChild(recipeTitleElement);
	// recipeInfo.appendChild(nameElement);
	// recipeInfo.appendChild(emailElement);
	// recipeInfo.appendChild(phoneElement);
	// recipeInfo.appendChild(fruit1Element);
	// recipeInfo.appendChild(fruit2Element);
	// recipeInfo.appendChild(fruit3Element);
	// recipeInfo.appendChild(instructionsElement);

	// nutritionInfo.appendChild(nutritionTitleElement);
	// nutritionInfo.appendChild(carbsElement);
	// nutritionInfo.appendChild(proteinElement);
	// nutritionInfo.appendChild(fatElement);
	// nutritionInfo.appendChild(sugarElement);
	// nutritionInfo.appendChild(calories1Element);

	// orderCount++
    // localStorage.setItem('drinkCount', orderCount);

	// document.getElementById('drinkAmountNumber').innerHTML = drinkCount;
});

getfruitData();
const progress = 0
const currentCombo = []
const correctCombo = [1,2,3]



/*swapping around the array only the unique values*/
generateCombo = combo => {
  for (let i = combo.length - 1; i > 0; i--) {
	let j = Math.floor(Math.random() * (i + 1))
    let temp = combo[i]
    combo[i] = combo[j]
	combo[j] = temp
  }
  return combo;
}


checkComboButton = ()=>{
	
}

console.log(generateCombo(correctCombo));

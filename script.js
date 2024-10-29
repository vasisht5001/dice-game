function rollDice(){
   const numOfDice = document.getElementById("numOfDice").value
   const dicenum = document.getElementById("dicenum")
   const diceimg = document.getElementById("diceimg")
   const values =[]
   const images = []

   for (let i=0; i<numOfDice; i++){
      const value= Math.floor(Math.random() *6) +1
      values.push(value)
      images.push(`<img src="dice_images/${value}.png" alt = "Dice ${value}">`)
       
   }
   dicenum.textContent = `dice: ${values.join(`, `)}`
   diceimg.innerHTML = images.join(``)
}
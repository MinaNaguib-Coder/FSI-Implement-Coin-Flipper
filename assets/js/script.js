// Track any global variables we need
<<<<<<< HEAD
// All rolls array traks a count for each position. 
// allRolls = [ones, twos, threes, fours, fives, sixes]
let allRolls = [0, 0, 0, 0, 0, 0]

// Define a function that updates the scoreboard so that both buttons can reuse it
let updateScoreboard = function () {
    // Calculate total number of rolls
    let total = allRolls[0] + allRolls[1] + allRolls[2] + allRolls[3] + allRolls[4] + allRolls[5]

    // Create a variable to track percentages
    let allPercents = [0, 0, 0, 0, 0, 0]

    // Before trying to divide, make sure total is not zero
    if (total > 0) {
        // Calculate percentages and update scoreboard for each roll
        for (let i = 0; i < allRolls.length; i++) {
            // Get the percentage for this roll
            allPercents[i] = Math.round((allRolls[i] / total) * 100)
        }
    }

    // Update the values in the scoreboard table for each value
    for (let i = 0; i < allRolls.length; i++) {
        document.getElementById(`td${i + 1}`).textContent = allRolls[i]
        document.getElementById(`td${i + 1}-percent`).textContent = allPercents[i] + '%'
    }
}

=======
let headsRolls = 0
let tailsRolls = 0

>>>>>>> 8ba60daa4ad2e39d5b572a85b33843a206515c3f
// Listen for DOMContentLoaded to ensure that all HTML and resources
//  have been loaded before attempting to run code
document.addEventListener('DOMContentLoaded', function () {
    // Add event listeners and handlers for both buttons
<<<<<<< HEAD
    document.getElementById('roll').addEventListener('click', function () {
        // Determine dice roll using Math.random()
        let rolledValue = Math.ceil(Math.random() * 6)

        // Display the result of the roll
        document.getElementById('message').textContent = `You Rolled ${rolledValue}!`

        // Add one to the count of number of rolls for the number
        // Remember arrays are indexed from zero, so it is one less than the rolled value
        allRolls[rolledValue - 1] += 1

        // Show different images for each dice roll
        document.getElementById('dice-image').src = `assets/images/dice/dice${rolledValue}.png`

        // Update the scoreboard
        updateScoreboard()
    })

    document.getElementById('clear').addEventListener('click', function () {
        // Reset the rolls values to zeroes
        allRolls = [0, 0, 0, 0, 0, 0]

=======
    document.getElementById('flip').addEventListener('click', () => {
        // Determine result using Math.random() which returns a value between 0 and 1
        // Therefore, it has a 50% chance to be below 0.5
        let flippedHeads = Math.random() < 0.5

        // Take different actions for heads vs tails flipped
        if (flippedHeads) {
            // Display image and message as heads
            document.getElementById('penny-image').src = 'assets/images/penny-heads.jpg'
            document.getElementById('message').textContent = 'You Flipped Heads!'

            // Add one to the count of number of heads flipped
            headsRolls += 1
        }
        else {
            // Display image and message as tails
            document.getElementById('penny-image').src = 'assets/images/penny-tails.jpg'
            document.getElementById('message').textContent = 'You Flipped Tails!'

            // Add one to the count of number of tails flipped
            tailsRolls += 1
        }

        // Update the scoreboard

        // Calculate total number of rolls
        let total = headsRolls + tailsRolls

        // Create variables to track percent heads and tails
        let percentHeads = 0
        let percentTails = 0

        // Before trying to divide, make sure total is not zero
        if (total > 0) {
            // Calculate percentage of heads and tails
            percentHeads = Math.round((headsRolls / total) * 100)
            percentTails = Math.round((tailsRolls / total) * 100)
        }

        // Update the values in the scoreboard table
        document.getElementById('heads').textContent = headsRolls
        document.getElementById('heads-percent').textContent = percentHeads + '%'
        document.getElementById('tails').textContent = tailsRolls
        document.getElementById('tails-percent').textContent = percentTails + '%'
    })

    document.getElementById('clear').addEventListener('click', function () {
        // Reset the heads and tails values to zero
        headsRolls = 0
        tailsRolls = 0

>>>>>>> 8ba60daa4ad2e39d5b572a85b33843a206515c3f
        // Update the message to the user
        document.getElementById('message').textContent = 'Let\'s Get Rolling!'

        // Update the scoreboard
<<<<<<< HEAD
        updateScoreboard()
=======
        
        // Calculate total number of rolls
        let total = headsRolls + tailsRolls

        // Create variables to track percent heads and tails
        let percentHeads = 0
        let percentTails = 0

        // Before trying to divide, make sure total is not zero
        if (total > 0) {
            // Calculate percentage of heads and tails
            percentHeads = Math.round((headsRolls / total) * 100)
            percentTails = Math.round((tailsRolls / total) * 100)
        }

        // Update the values in the scoreboard table
        document.getElementById('heads').textContent = headsRolls
        document.getElementById('heads-percent').textContent = percentHeads + '%'
        document.getElementById('tails').textContent = tailsRolls
        document.getElementById('tails-percent').textContent = percentTails + '%'
>>>>>>> 8ba60daa4ad2e39d5b572a85b33843a206515c3f
    })
})
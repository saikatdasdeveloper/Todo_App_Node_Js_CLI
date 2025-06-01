import readline from 'readline'
const readlin = readline.createInterface({
    input:process.stdin,   //Helps to Read in CLI
    output:process.stdout //Helps to Write in CLI
})

const todos= [];

const showMenu = () => {
    console.log("\n1: Add a Task")
    console.log("2: View Task")
    console.log("3: Exit")

    readlin.question("Choose an Option: ", handleInput)
}

const handleInput = (opt) => {
    if(opt === '1') {
        readlin.question("Enter Task Name: ", (tsk) => {
            todos.push(tsk)
            console.log("Task Added: ", tsk)
            showMenu()
        })
    }
    else if(opt === '2') {
        console.log("\n Your Todo Lists")
        todos.forEach((element, index) => {
            console.log(`${index+1}. ${element}`)
        })
         showMenu()
    }
    
    else if(opt === '3') {
        console.log("Good Bye")
        readlin.close
    }
    else {
        console.log("Invalid Option")
        showMenu()
    }
    

}

showMenu()


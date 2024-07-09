import inquirer from "inquirer";




while (true){
const randomNumber =Math.floor(Math.random() *10);
const answers=await inquirer.prompt
([
    {
    name:"userGuedsNumber",
    type:"number",
    message:"Are you ready to play ! please guess a number of your choice"
    }

    
]);



if (answers.userGuedsNumber===randomNumber){
    console.log("🎇🎇Congratulation you guessed a right number🎇🎇");}
    
    else 
    {console.log("😞😞  OH You Failed to guess the right number😞😞  best of luck try again😞😞");};
    console.log ("LETS PLAY AGAIN")
}


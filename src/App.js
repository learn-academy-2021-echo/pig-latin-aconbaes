import React, { Component } from 'react'
import './App.css'
import butcherPig from './assets/butcherPig.jpeg'
class App extends Component{
  constructor(props){
    super(props)
    // the state object holds information that can be displayed to the user and updated throughout the program
    this.state = {
      // "phrase" is the text entered by the user - right now there are test words hard coded to make the process of testing your code faster and easier
      // ACTION ITEM: when you are ready for your full user experience, delete the test words so phrase is assigned an empty string
      phrase: "alpha through yummy squeal queen fry",
      // "phraseTranslated" is what the user will see appear on the page as Pig Latin, it starts as the preset message and updates when your user clicks the "submit" button
      phraseTranslated: "This is where your translated sentence will appear."
    }
  }
  // The "myPigLatinCodeHere" function is where you will put your logic to convert the sentence entered by the user to Pig Latin
  myPigLatinCodeHere = () => {
    // the variable "userInput" will contain the text input from the user modified into an array of words
    // no need to change this variable
    let userInput = this.state.phrase.split(" ")
    console.log("userInput:", userInput)
    // now that we have an array of words, we can map over the array and access each word
    let translatedWordsArray = userInput.map(currentWord => {
      // ACTION ITEM: use "currentWord" as a starting point for your code
      console.log("currentWord:", currentWord)
      let vowelsArray = currentWord.split("").filter(vowel => {
        return vowel === "a" || vowel === "e" || vowel === "i" || vowel === "o" || vowel === "u"
      })
      console.log("vowelsArray:", vowelsArray)

      // your code here!
      // create a variable using regular expressions with all of the vowels, that are case insensitive
        let vowels = [/[aeiou]/i]
        let firstMatch = currentWord.match(/[aieou]/i) || 0;
        let vowel = currentWord.indexOf(firstMatch[0]);
        let yChar = currentWord.indexOf('y')
        //search to see if the first letter of the current word is a vowel, if so, return the word + "way"
        if(vowel === 0) {
          return currentWord + "way";
        }
        //search to see if the first index of the word is "q", if so return the word, up to the 2nd vowel (this removes the q + u), and return current 
        else if(currentWord[0] === 'q'){
          return currentWord.substring(vowel + 1) + currentWord.substring(0, vowel) +'ay'
        //search to see if the second letter of the current word is q, if so, return the current word up to the vowel + 1, and append const1 (usually s), q, and the next vowel

        }else if (currentWord[1] === 'q'){
          return currentWord.substring(vowel + 1) + currentWord.substring(0, vowel + 1) + 'ay'

        //search to see if the first letter of the current word is y
        //if so, return the substring up to the first vowel after y, and append to the end of the sliced currentWord the characters up to the yChar
        }else if (yChar === 0){
          return currentWord.substring(yChar + 1) + currentWord.substring(0, yChar) + "ay"
        
        //if the word does not contain values found in vowel, and does contain a y
        //return the substring up to the y character, and append the substring up to
        }else if (currentWord.match(vowels) !== true && currentWord.match('y')){
          return currentWord.substring(yChar) + currentWord.substring(0, yChar) +'ay'

        }else{
          return currentWord.substring(vowel) + currentWord.substring(0, vowel) + "ay";
      
          
        }
      // Remember: console.log is your friend :)
      // ACTION ITEM: change the value of currentWord to the name of whatever variable you made containing your Pig Latin'd word
      return currentWord
    })
    // joining the array back to a string of translated words
    // no need to change this variable
    let translatedWords = translatedWordsArray.join(" ")
    console.log("translatedWords:", translatedWords)
    // the setState method will take your information from "translatedWords" and update the state object that is displayed to the user
    // no need to change this method
    this.setState({phraseTranslated: translatedWords})
  }
  restartGame = () => {
    // this method restarts the game by setting the original state
    // ACTION ITEM: when you are ready for your full user experience, delete the test words in phrase so that is assigned an empty string
    this.setState({
      phrase: "alpha through yummy squeal queen fry",
      phraseTranslated: "This is where your translated sentence will appear."
    })
  }
  // no need to modify this method
  setUpPreventDefault = (e) => {
    // this method prevents React from refreshing the page unnecessarily
    e.preventDefault()
    this.myPigLatinCodeHere()
  }
  // no need to modify this method
  handleInput = (e) => {
    // this method takes the input and saves the value in this.state.phrase so we can use the input in our program
    this.setState({phrase: e.target.value})
  }
  render() {
    return (
      <>
        <h1>Pig Latin Translator</h1>
        <img
          src={butcherPig}
          alt="pig with butcher cut names in pig latin"
          className="butcherPig"
        />
        <div className="inputArea">
          <h4>Enter phrase to be translated:</h4>
          {/* user input field - every DOM event that happens in the input will call the handleChange method and update state */}
          <input
            type="text"
            className="userInput"
            onChange={this.handleInput}
            value={this.state.phrase}
          />
          <br />
          {/* button that called the setUpPreventDefault method which calls the myPigLatinCodeHere method */}
          <button onClick={this.setUpPreventDefault}>Submit</button>
          <button onClick={this.restartGame}>Clear</button>
        </div>
        <p>{this.state.phraseTranslated}</p>
        <footer>Coded by Robert Calpito and Deon Franklin</footer>
      
      </>
    )
  }
}
export default App
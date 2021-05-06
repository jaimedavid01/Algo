// DATA STRUCTURE AND ALGORITHMS:

// -Time Complexity - Measure of how fast is your code.
// -Space Complexity - How much memory does it take to run your code. 

// O(1) - Constant time
// O(log(N)) - Logarithmic time
// O(N) - Linear time
// O(N log (N) 
// O (N^2), O (N^3), O (N^4)
// O(2^N) -XXXXXX
// O(N!) - XXXXXXX

////// PALINDROME:
// O(N) time | O(1) 

function isPalindrome(string) {
	let reversed = '';		  /// declare an empty string
	for (let i = string.length -1; i >= 0; i--){ 	///// Set i to end of string then i- -
		reversed += string[I]; 		//////// add each letter backwards to reversed
	}
	return string === reversed	//// compare string to reversed
}

// Or

//  O(N) time | O(N) space

function isPalindrome(string, i=0) { 		////Set i as an argument for end of reversed
	const j = string.length -1 -i;	//////Set j at the end of the string
	return i >= j ? true : string[i] === string[j] && isPalindrome(string, i + 1);
}	//// if i is equal to j (0) ? Then it’s true, if not: compare both ends of the string then call function again with i incremented .


// CAESAR CIPHER:
// 	O(N) time | O(1)

function caesarCipherEncryptor(string, key) { 
	const newLetters = [];		///// New Letters array
	const newKey = key % 26;		///// Set up new Letter location?
	const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split(''); //// Custom alphabet keys
	for (const letter of string) {		//// for loop looking at each “letter” of the string
		newLetters.push(getNewLetter(letter, newKey, alphabet)); 
				//// helper function to get new letters
	}
	return newLetters.join('');	/// turn new letters to string
}

function getNewLetter(letter, key, alphabet) { 
///// helper method with argument letter in loop, key, alphabet

	const newLetterCode = alphabet.indexOf(letter) + key; //// getting the new letter index
	return alphabet[newLetterCode % 26] 
		////return the new letter with index in alphabet array
}

// RUN LENGTH:

function runLengthEncoding(string) {
	const newString = [];	 ///Delcare new string array
	let currentRun = 1;		//// Start point of run time
	
	for (let i = 1; i < string.length; i++) {	 //// for loop starting at index of 1
		const currentCharacter = string[i];	 //// set point of the begining of array
		const previousCharacter = string[i - 1]; ///// keep track of previous character
		
		if (currentCharacter !== previousCharacter || currentRun === 9){
		/// if currentCharacter is NOT equal to previous character or run time = to 9
			/// When letter changed or at 9

			newString.push(currentRun.toString());	 /// push number to string
			newString.push(previousCharacter);	 //// push letter to string
			currentRun = 0; /// Reset starting run time
		}
		currentRun++; 	///Keep loop going
	}
	newString.push(currentRun.toString());	 //// Push last run time
	newString.push(string[string.length -1])	 //// Push last string
	
	return newString.join('')
}


/// GENERATE CHARACTERS with DOCUMENT

// O(n + m) time | O(c) space
function generateDocument(characters, document) {
	const characterCounts = {}; //Empty hash map to keep track of unique characters
	
	for (const character of characters) {  //// for loop, character = individual data
		if (!(character in characterCounts)) characterCounts[character] = 0;
					/// if character is NOT in characterCounts add character & count to 0
		
		characterCounts[character]++; //add 1 to character count
	}
	for (const character of document) { /// for loop to check each chars in document
		if(!(character in characterCounts) || characterCounts[character] === 0) return false;
			//// if document characters are NOT in characterCount or in characterCount = FAIL
		characterCounts[character]--; /// if character IS in document, minus count to 1
	}
	return true; /// if it passes all of that, return true!
}


///FIRST NONE REPEATING CHARACTER

// O(n) time | O(1) space
function firstNonRepeatingCharacter(string) {
	const characterFrequencies = {}; /// Set hash map for frequency count
	for (const character of string){		/// for loop for string
		if(!(character in characterFrequencies)) characterFrequencies[character] = 0;
				///if the character is !NOT in the character frequencies add char with 0 count;
		characterFrequencies[character]++;
				///////add 1 to new character count
	}
	
	for(let i = 0; i < string.length; i++){ /// for loop for characterFrequencies
		const character = string[i] /// set character to every character of the string
			if(characterFrequencies[character] === 1) return i 
						///if the first characterFrequency[i] is equal to 1. That is the answer
	}
	
		return -1; ///// else return -1    //
}


// Sum Zero

function addToZero(array) {
	for (let i = 0; i < array.length; i++) {
		for (let j = i + 1; j < array.length; j++) {
			if (array[i] + array[j] === 0) {
				return true;
			}
		}
	}
	return false;
}
//O(n^2)

// Unique Characters

function hasUniqueChars(word) {
	for (let i = 0; i < word.length; i++) {
		for (let j = i + 1; j < word.length; j++) {
			if (word[i] + word[j] === 0) {
				return true;
			}
		}
	}
	return false;
}
//O(n^2)

// Pangram Sentence

function isPangram(sentence) {
	sentence = sentence.toLowerCase();

	let letters = new Set();

	for (let char of sentence) {
		if (/[a-z]/.test(char)) {
			letters.add(char);
		}
	}

	return letters.size === 26;
}
// O(n)

// Longest Word

function findLongestWord(words) {
	// Initialize a variable to store the length of the longest word
	let maxLength = 0;

	// Iterate over each word in the list
	for (let word of words) {
		// Update maxLength if the length of the current word is greater
		if (word.length > maxLength) {
			maxLength = word.length;
		}
	}

	// Return the length of the longest word
	return maxLength;
}
//0(n)

/*
Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

For example, 2 is written as II in Roman numeral, just two ones added together. 
12 is written as XII, which is simply X + II. 
The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. 
However, the numeral for four is not IIII. Instead, the number four is written as IV. 
Because the one is before the five we subtract it making four. 
The same principle applies to the number nine, which is written as IX. 
There are six instances where subtraction is used:

    I can be placed before V (5) and X (10) to make 4 and 9. 
    X can be placed before L (50) and C (100) to make 40 and 90. 
    C can be placed before D (500) and M (1000) to make 400 and 900.

Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
*/

var letterMeanings = {
	"I": 1,
    "V": 5,
    "X": 10,
	"L": 50,
	"C": 100,
	"D": 500,
	"M": 1000
}

var subtractions = {
	"IV": 4,
	"IX": 9,
	"XL": 40,
	"XC": 90,
	"CD": 400,
	"CM": 900
}

var s = "MI"

var romanToInt = function() {

	if (s.length === 1) {
		return letterMeanings[s]
	}

	else if (s.length === 2) {
		if (s in subtractions) {
			return subtractions[s]
		}
		else {
			var answer = 0
			
			for (var i = 0; i < s.length; i++) {
	            var valueOfRemainedChar = letterMeanings[s.substring(i, i+1)]
	            answer += Number(valueOfRemainedChar)	
	        }    
	        return answer
		}
	}

	else if (s.length > 2) {
		var answer = 0

		for (const [k, v] of Object.entries(subtractions)) {
			// if any of key is in the string
		    if (s.match(k)) {
			    var subtraction = s.match(k)[0]
			    
			    // plus each substratnion to answer 
			    answer += Number(subtractions[subtraction])

			    // delete it from string
			    s = s.replace(subtraction, "")
			}
	    }

	    // the string now does not have any subtractions
		// so it be processed one by one char
	    for (var i = 0; i < s.length; i++) {
	        var valueOfRemainedChar = letterMeanings[s.substring(i, i+1)]
	        answer += Number(valueOfRemainedChar)	
	    }
	    return answer
	}
}

console.log(romanToInt())

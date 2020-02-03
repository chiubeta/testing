function f1(input) {
	var output = "";

	for (let i = input.length - 1; i >= 0 ; i--){
	  output += input[i]
	}

	return output;
}

console.log(f1("abcdefghi"));


function f2(input) {
	var output = input.split(" ").map(function(str) {
	    var newStr = "";
	    for (var i = str.length - 1; i >= 0; i--) {
	      newStr += str[i];
	    }
	    return newStr;
	});

	return output.join(" ");
}

console.log(f2("Hello, world!"));
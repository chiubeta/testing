function f(input) {
	var output = 0;

	// 每15個數字只會有9個被算進來，所以先以15為單位算到剩下零頭
	output += Math.floor(input/15)*9;

	// 針對零頭跑迴圈計算
	for(var i=1, len=input%15; i<=len; i++){
		if((i%3==0 && i%5!=0) || (i%3!=0 && i%5==0)){
			continue;
		}
		output++;
	}

	return output;
}

console.log(f(15));
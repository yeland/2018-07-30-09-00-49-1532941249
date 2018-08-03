module.exports = function main() {
    let sequence = new Sequence([6, 9, 15, -2, 92, 11]);
    console.log(`o) 最小值 = ${sequence.minimum()}
o) 最大值 = ${sequence.maximum()}
o) 元素数量 = ${sequence.datanum()}
o) 平均值 = ${sequence.average()}
`);
};

class Sequence {
  constructor(input) {
    // Write your code here
	this.arr = input;
  }

  minimum() {
    // Write your code here
	var min = this.arr[0];
	for(var i=0;i<this.arr.length-1;i++){
		if(min<this.arr[i+1])
		    min = min;
		else
			min = this.arr[i+1];
	}
	return min;
  }

  // Write your code here
  maximum() {
    // Write your code here
	var max = this.arr[0];
	for(var i=0;i<this.arr.length-1;i++){
		if(max>this.arr[i+1])
		    max = max;
		else
			max = this.arr[i+1];
	}
	return max;
  }  
  
  datanum() {
	var num = 0;
	num = this.arr.length;
    
	return num;
  }
  
  average(){
	var avg = 0;
    var sum = 0; 
    var s = 0;
    for(var i=0;i<this.arr.length;i++){
        sum = sum + this.arr[i];	
    }
    s = sum / this.arr.length;
    avg = Math.round(s*100)/100;	
	
	return avg;
  }
}

module.exports = function solveEquation(equation) {
	var a,b,c,D,x1,x2,roots = [];
 	var str = equation.replace(/\s/g, '');
	str = str.match(/[\d+-]\d+/g);
	console.log(str);
	a = str[0];
	b = str[1];
	c = str[2];		
	D = Math.pow(b,2) - 4*a*c;
	x1 = Math.round((-1)*b + Math.sqrt(D)) / (2*a);	
	x2 = Math.round((-1)*b - Math.sqrt(D)) / (2*a);
	roots.push(x1);	
	roots.push(x2);	
	roots.sort(function(a,b){
		return a-b;
	});
	return roots;
	
}

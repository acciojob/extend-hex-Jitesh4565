const extendHex = (shortHex) => {
  // write your code here
	const cleanedHex=shortHex.replace(/^#/,'');
	let result='';
	for(let i=0;i<cleanedHex.length;i++)
		{
			result+=cleanedHex[i]+cleanedHex[i];
		}
	return `#${result}`
};

// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
 alert(extendHex(shortHex));

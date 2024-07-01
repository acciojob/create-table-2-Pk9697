function createTable() {
    //Write your code here
	  const rn=prompt("Input number of rows")
	  const cn=prompt("Input number of columns")
		let tableHTML=''
		for(let i=0;i<rn;++i){
			let tableCols=''
			for(let j=0;j<cn;++j){
				tableCols+=`<td> Row-${i} Column-${j} </td> `
			}
			tableHTML+=`
				<tr>
					${tableCols}
				</tr>
			`
		}

	  document.getElementById('myTable').innerHTML=tableHTML
}

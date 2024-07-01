function createTable() {
	const table=document.getElementById('myTable')
    //Write your code here
	  const rn=prompt("Input number of rows")
	  const cn=prompt("Input number of columns")
		let tableHTML=''
		for(let i=0;i<rn;++i){
			const tableRow=document.createElement('tr')
			for(let j=0;j<cn;++j){
				const tableData=document.createElement('td')
				tableData.textContent=`Row-${i} Column-${j}`
				tableRow.append(tableData)
			}
			table.append(tableRow)
		}
	  
}
// function createTable() {
//     //Write your code here
// 	  const rn=prompt("Input number of rows")
// 	  const cn=prompt("Input number of columns")
// 		let tableHTML=''
// 		for(let i=0;i<rn;++i){
// 			let tableCols=''
// 			for(let j=0;j<cn;++j){
// 				tableCols+=`<td> Row-${i} Column-${j} </td> `
// 			}
// 			tableHTML+=`
// 				<tr>
// 					${tableCols}
// 				</tr>
// 			`
// 		}

// 	  document.getElementById('myTable').innerHTML=tableHTML
// }

let newStrn = ''

customers.results.forEach(function(customer){
	newStrn += `
	<div> 
		<img src="${customer.picture.large}"/>
		<br>
	<div class=wrapper>
		<h3>${customer.name.first}  ${customer.name.last} </h3>
		<div class=email> ${customer.email} </div>
		<br>
		
		<div class=address>
			${customer.location.street} 
			<br>
			${customer.location.city},
			${customer.location.state}

			${customer.location.postcode}
			<br>
		${customer.cell}
		<br>
		<br>
		<div class=blur>${customer.id.value}</div>
		</div>
	</div>
	</div>`
})

document.getElementById('main').innerHTML = newStrn
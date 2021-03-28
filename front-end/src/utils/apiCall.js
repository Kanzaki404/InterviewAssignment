export async function RequestAnswer(data) {
	const response = await fetch("http://localhost:5000/api/getSize", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
        body: JSON.stringify(data)
	});
   
    return response;
}

const newCategory = document.getElementById("category");
const categorySubmit = document.getElementById("submit-category");
const newSavingsAmount = document.getElementById("amount");
const htmlOutput = document.getElementById("output");
const stupidTable = document.getElementById("stupidTable");

const getJsonResponse = async (url) => {
    console.log(url);
    const response = await fetch(url);
    //console.log(response);
    try{
        if (response.ok){
            const jsonResponse = await response.json();
            console.log(jsonResponse);
            return jsonResponse;
        }
    } catch(err){
        console.log(err);
    }
}

let loopIndex = 1;

const onStartUp = async() => {
    const envelopeArr = await getJsonResponse('/api/envelopes');
    console.log(envelopeArr);
    envelopeArr.forEach(env => {
        let row = stupidTable.insertRow(loopIndex);
        row.id = env.id;
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        cell1.innerHTML = `${env.name}`;
        cell2.innerHTML = `${env.amount}`;
        loopIndex++;
    })
}

const postEnvelope = async(name, amount) => {
    const url = '/api/envelope';
    const objToPost = {
        name: name,
        amount: parseInt(amount),
    }
    console.log('yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy');
    console.log(objToPost);
    try{
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            mode: 'cors',
            body: JSON.stringify(objToPost),
        })
        console.log(response);
        if (response.ok) {
            const jsonResponse = await response.json();
            console.log(jsonResponse);
            return jsonResponse;
        }
    } catch (err) {
        console.log(error);
    }
}

const appendEnvelope = function(envelope) {
    console.log(envelope.name);
    console.log(envelope);
    let row = stupidTable.insertRow(loopIndex);
    row.id = envelope.id;
    let cell3 = row.insertCell(0);
    let cell4 = row.insertCell(1);
    cell3.innerHTML = `${envelope.name}`;
    cell4.innerHTML = `${envelope.amount}`;
}

categorySubmit.onclick = async() => {
    let name = newCategory.value;
    let amount = parseInt(newSavingsAmount.value);
    console.log(typeof name);
    console.log(typeof amount);
    const response = await postEnvelope(name, amount);
    appendEnvelope(response);
}

onStartUp();


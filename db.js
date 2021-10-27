let envelopes = [{
    id: 0,
    name: 'rent',
    amount: 950,
},
{
    id: 1,
    name: 'utilities',
    amount: 150,
},
{
    id: 2,
    name: 'groceries',
    amount: 400
}];
let lastIdUsed = envelopes.length;
const getEnvelopes = function() {
    //update envelopes
    return envelopes;
}

const addEnvelope = function(name, amount) {
    console.log('yooooooooooooooooooooooooooooooooooooooooooooooooooo');
    const objToPost = {
        name: name,
        amount: parseInt(amount),
        id: lastIdUsed,
    }
    console.log(objToPost);
    lastIdUsed++;
    envelopes.push(objToPost);
    return envelopes[envelopes.length - 1];
}
module.exports = {addEnvelope, getEnvelopes};
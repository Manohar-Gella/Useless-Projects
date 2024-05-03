async function sum() {
    let x = document.getElementById('one').value;
    let y = document.getElementById('two').value;
    // let sol = parseInt(x) + parseFloat(y);
    // document.getElementById('answer').innerHTML = `Ans = ${sol}`;
    const response = await fetch(`http://localhost:3000/?x=${x}&y=${y}`);
    const reslut = await response.text();
    document.getElementById("answer").innerHTML = `Ans: ${reslut}`
}
const express = require('express'); // way to import


// calculateSum function
function calculateSum(n){
    let ans = 0;
    for (let i =1; i<=n; i++){
        ans+=i;
    }
    return ans
}

const app = express();

app.get('/', function(req, res) {
    const n = req.query.n;
    const ans = calculateSum(n)
    res.send('hi there your answer is '+ ans);
})

app.listen(3000);

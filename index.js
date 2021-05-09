/**
 * This file contain only main functions! 
 * if you need to check how's the graph is plotted, consider checking "Index.html"
 * 
 * Actually got inspiration to make this from this video
 * https://www.youtube.com/watch?v=ovJcsL7vyrk
 */
function getLogisticMap(x, r) {
    // This function is something like this in equation
    // https://wikimedia.org/api/rest_v1/media/math/render/svg/ed93f3cd8504352c79c6fc9206e1e9bfac0e3c37
    /**
     * You should read this for more info about equation
     * https://en.wikipedia.org/wiki/Logistic_map
     * 
     * or watch this video
     * https://www.youtube.com/watch?v=ovJcsL7vyrk
     */
    return r * x * (1 - x)
}

let ITERATIONS = 40
let current = 0.6
let arr = []
for (let i = 0; i < ITERATIONS; i++) {
    let map = getLogisticMap(current, 3)
    arr.push(map)
    current = map
}

console.log(arr)
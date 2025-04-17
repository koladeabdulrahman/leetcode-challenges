/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function (costs) {
    // Initialize the total cost to 0
    let totalCost = 0;

    // Sort the costs list in ascending order based on the
    // difference between the costs of sending someone to
    // city A vs city B
    costs.sort((a, b) => (a[0] - a[1]) - (b[0] - b[1]));

    // Get the length of the costs list
    let costLength = costs.length;

    // For each pair of cities, add the cost of sending
    // one person to city A and the other person to city B
    // to the total cost
    for (let i = 0; i < Math.floor(costLength / 2); i++) {
        totalCost += costs[i][0] + costs[costLength - i - 1][1];
    }

    // Return the total cost
    return totalCost;
};
// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (Array.isArray(matrix) && matrix.length !== 0) {
        for (let i = 1; i < matrix.length; i++)
            if (i % 2 !== 0) matrix[i].reverse();
        return matrix.reduce((prev, curr) => [...prev, ...curr]);
    }
    return [];
};

//STEP 1
// let favMovies = ['Easy A', 'Mean Girls', 'Sing 2', 'The Perks of Being a Wallflower', 'Full Metal Jacket']
// console.log(favMovies[2])

//STEP 2
// let movies = new Array(5)
// movies[0] = 'Easy A'
// movies[1] = 'Mean Girls'
// movies[2] = 'Sing 2'
// movies[3] = 'The Perks of Being a Wallflower'
// movies[4] = 'Full Metal Jacket'
// console.log(movies[0])

//STEP 3
// let movies = new Array(5)
// movies[0] = 'Easy A'
// movies[1] = 'Mean Girls'
// movies[2] = 'Heathers'
// movies[3] = 'Sing 2'
// movies[4] = 'The Perks of Being a Wallflower'
// movies[5] = 'Full Metal Jacket'
// console.log(movies.length)

//STEP 4
// let movies = ['Easy A', 'Mean Girls', 'Sing 2', 'The Perks of Being a Wallflower', 'Full Metal Jacket']
// delete movies[0]
// console.log(movies)

//STEP 5
// let movies = ['Easy A', 'Mean Girls', 'Sing 2', 'The Perks of Being a Wallflower', 'Full Metal Jacket', 'Heathers', 'Cabin in the Woods']
// for (let movie in movies) {
//     console.log(movies[movie])
// }

//STEP 6
// let movies = ['Easy A', 'Mean Girls', 'Sing 2', 'The Perks of Being a Wallflower', 'Full Metal Jacket', 'Heathers', 'Cabin in the Woods']
// for (let i of movies) {
//     console.log(i)
// }

//STEP 7
// Copy the code from step 5. Using the for/of loop to iterate through the array, display each movie within the console window in a sorted view.
// let movies = ['Easy A', 'Mean Girls', 'Sing 2', 'The Perks of Being a Wallflower', 'Full Metal Jacket', 'Heathers', 'Cabin in the Woods']
// for (let i of movies) {
//     console.log(i)
// }

//STEP 8
// let movies = ['Easy A', 'Mean Girls', 'Sing 2', 'The Perks of Being a Wallflower', 'Full Metal Jacket', 'Heathers', 'Cabin in the Woods']
// console.log('Movies I like:')
// for (let movie in movies) {
//     console.log(movies[movie])
// }

// let leastFavMovies = ['Hereditary', 'The Last Airbender', 'Death Note']
// console.log('Movies I regret watching:')
// for (let leastFavMovie in leastFavMovies) {
//     console.log(leastFavMovies[leastFavMovie])
// }

// //STEP 9
// let movies = ['Easy A', 'Mean Girls', 'Sing 2', 'The Perks of Being a Wallflower', 'Full Metal Jacket', 'Heathers', 'Cabin in the Woods']
// let moviesNew = movies.concat('Hereditary', 'The Last Airbender', 'Death Note').reverse()
// console.log(moviesNew)

//STEP 10
// let movies = ['Easy A', 'Mean Girls', 'Sing 2', 'The Perks of Being a Wallflower', 'Full Metal Jacket', 'Heathers', 'Cabin in the Woods']
// let moviesNew = movies.concat('Hereditary', 'The Last Airbender', 'Death Note').reverse().pop()
// console.log(moviesNew)

//STEP 11
// let movies = ['Easy A', 'Mean Girls', 'Sing 2', 'The Perks of Being a Wallflower', 'Full Metal Jacket', 'Heathers', 'Cabin in the Woods']
// let moviesNew = movies.concat('Hereditary', 'The Last Airbender', 'Death Note').reverse().shift()
// console.log(moviesNew)

//STEP 12

//STEP 13
// movies = [["Mean Girls", 1], ["Sing 2", 2], ["The Perks of Being a Wallflower", 3], ["Full Metal Jacket", 4], ["Heathers", 5]]
// let movieNames = movies.filter((item) => {
//     return typeof item === 'string'
// })
// console.log(movieNames)

//STEP 14
// let employees = ['Buffy Summers', 'Willow Rosenberg', 'Xander Harris']
// for (let i = 0; i < employees.length; i++) {
//     console.log(employees[i])
// }

//STEP 15

//STEP 16
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const random = Math.floor(Math.random() * numbers.length);
// console.log(numbers[random]);

//STEP 17
// const numbers = [1, 3, 2, 8, 10, 21, 7, 8];
// console.log(Math.max(...numbers));
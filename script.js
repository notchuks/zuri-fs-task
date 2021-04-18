const axios = require('axios')
const fs = require('fs')

const getPost = async() => {
    try {
        const dataJSON = await axios.get('https://jsonplaceholder.typicode.com/posts')
        const result = JSON.stringify(dataJSON.data, null, 2);
        fs.writeFile('posts.json', result, (err) => {
            if (err) throw err;
            console.log('File has been created successfully.')
        })
    } catch (err) {
        console.log(err)
    }
}

getPost()

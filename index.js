const fs = require('fs');

// fs.writeFile("students.txt",'[]',function(err)
// {
//     console.log("file created");
// })


// 1
if(process.argv[2]=="add")
{
    let data=JSON.parse( fs.readFileSync("students.txt",'utf-8'))
    console.log(data)
    data.push(
        {
            "id": (data.length+1),
            "name":process.argv[3],
            "grade":process.argv[4]
        });
    fs.writeFileSync("students.txt",JSON.stringify(data));
    console.log(data)
}

// 2
else if(process.argv[2]=="list")
{
    let data=JSON.parse( fs.readFileSync("students.txt",'utf-8'))
    console.log (data);
}
// 3
else if(process.argv[2]=="edit")
{
    let data=JSON.parse( fs.readFileSync("students.txt",'utf-8'))

    data[parseInt(process.argv[3])]=process.argv[4];
    data[parseInt( process.argv[5])]=process.argv[6];

    // data[parseInt(
    //     {
    //         "name":process.argv[3]=process.argv[4]
    //     }
    // )];
    // data[parseInt(
    //     {
    //         "grade":process.argv[5]=process.argv[6]
    //     }
    // )];

    fs.writeFileSync("students.txt",JSON.stringify(data));
    console.log("data was edited");
}
else if(process.argv[2]=="del")
{
    let data=JSON.parse( fs.readFileSync("students.txt",'utf-8'))

   data.splice(parseInt(process.argv[3]),1);
   
    fs.writeFileSync("students.txt",JSON.stringify(data));
}
else
{
    console.log('err');
}
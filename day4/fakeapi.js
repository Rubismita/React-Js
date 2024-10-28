const data=[];
    //fetch api using async await
    async function showData()
    {
        const respose =await fetch('https://fakestoreapi.com/products');
        const data=await respose.json();
        console.log(data);
        for(let i=0;i<data.length;i++){
            document.getElementById("data").innerHTML+=data[i].id+"-------"+
            data[i].title+"----"+data[i].price+"----"+data[i].description+"----"+
            data[i].category+"----"+data[i].image+"---"+
            data[i].rating.rate+"---"+data[i].rating.count+"<br><br>";
        }
    }
showData();

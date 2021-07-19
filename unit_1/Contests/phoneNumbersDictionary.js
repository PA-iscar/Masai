var directory = {
    data:[
        {
            user: "Ajay",
            phno: 21345
        },
        {
            user: "RamDas",
            phno: 32146
        },
        {
            user: "Rohith",
            phno: 23522
        },
        {
            user: "Nihal",
            phno: 98743
        }
    ],
    query(name){
        var data = this.data;
        for(var i = 0; i < data.length;i++){
            if(name == data[i].user){
                console.log(data[i].phno);
                break;
            }
            else if(i==data.length-1){
                console.log("No user found");
            }
        }
    }
}
directory.query("Nihal");
directory.query("Mani");
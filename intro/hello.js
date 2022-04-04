const eventEmmiter=require("events");

const event=new eventEmmiter();
event.on("messageLogged",(e)=>
    {
        console.log("Listender called",e);

    })
event.emit("messageLogged",{id:1,url:"http://"});
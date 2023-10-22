/*
    Assignment 05
    Nihar Ghevaria (0806797)
*/

$(document).ready(function () {
   

class ContentItem{
            //Properites
            id;
            name;
            description;
            genre;
         


        //Constructor
        constructor(id,description,genre,name){
            this.id=id;
            this.name=name;
            this.description=description;
            this.genre=genre;
        }

        updateContentItem(id,name,description,genre){
            if(this.id == id){
            if((id !=null) && (name != null) && (genre != null)){
                this.description = description;

            }

            }
        }

        toString(){
           $("#content-item-list").append("<div class = 'content-item-wrapper' id='content-item"+this.id + "'><h2>"+this.name+"</h2><p>"
           +this.description+"</p><div>"+this.genre+"</div></div>");

            
            
        }
    }
   const items=[
            new ContentItem (0,"CSGO","Best game that never had anti cheat","5vs5"),
            new ContentItem(1,"Valorant","Game that copied other game developed by riot games","5vs5"),
            new ContentItem(2, "Sea of Thieves", "Player vs player game that based of pirets of the carrabian" , "PVP"),
            new ContentItem(3, "Minecraft", "Survival game that never aged", "Survival"),
            new ContentItem(4, "Rocket Leauge", "Playing football with cars", "Team vs Team"),
        ];

    for(let i in items){
        items[i].toString();
    }
    

        
           //css
           $(".content-item-wrapper").css({
            border: '5px solid #000000',
            width: '400px',
            padding: '20px',
            margin: '10px auto'
        });
        
});
    


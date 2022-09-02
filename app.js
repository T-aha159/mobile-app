let mobiles = {
              Iphone :{
                        v14pro:{
                        ram:4,
                        rom:12,
                        Price:12000
                        },
                        v13pro:{
                                  ram:4,
                        rom:12,
                        Price:12000
    
                        },
                        v13:{
                                  ram:4,
                        rom:12,
                        Price:12000
    
                        },
                        sixsplus:{
                                  ram:4,
                        rom:12,
                        Price:12000
    
                        },
              },
              samsung :{
                        v14pro:{
                                  ram:4,
                                  rom:12,
                                  Price:12000
                                  },
                         v13pro:{
                                  ram:4,
                                  rom:12,
                                  Price:12000
              
                                  },
                        v13:{
                                  ram:4,
                                  rom:12,
                                  Price:12000
              
                                  },
                        sixsplus:{
                                  ram:4,
                                  rom:12,
                                  Price:12000
              
                                  },
              },
              xiomi:{
                        v14pro:{
                                  ram:4,
                                  rom:12,
                                  Price:12000
                                  },
                        v13pro:{
                                  ram:4,
                                  rom:12,
                                  Price:12000
              
                                  },
                        v13:{
                                  ram:4,
                                  rom:12,
                                  Price:12000
              
                                  },
                        sixsplus:{
                                  ram:4,
                                  rom:12,
                                  Price:12000
              
                                  },
              },
              infinix:{
                        v14pro:{
                                  ram:4,
                                  rom:12,
                                  Price:12000
                                  },
                        v13pro:{
                                  ram:4,
                                  rom:12,
                                  Price:12000
              
                                  },
                        v13:{
                                  ram:4,
                                  rom:12,
                                  Price:12000
              
                                  },
                        sixsplus:{
                                  ram:4,
                                  rom:12,
                                  Price:12000
              
                                  },
              }
    }
    
     mobname =document.getElementById("mobilename"); 
    Let mobversion=document.getElementById("mobileversion");

    function option(){
    var mobname = "";
    Let keys = Object.keys (mobiles) 
    for (i = 0; i <keys.length; i++) {
    mobname += `<option>${keys [1]}</option>`;
    }
    document.getElementById("mobilename").innerHTML =mobname;
    
    
    }
    option()

    function myfunction(){
    var mobver ="";
     Let main = object.values (mobiles) 
     for (i = 0; i<main.length; i++) {
    mobver +=`<option>${main[i]} </options>`;
     }
    document.getElementById("mobileversion").innerHTML =mobver;
     console.log(main)
     }

    myfunction()
    
    function search(){
        let res= mobiles[mobname.value][mobversion.value];
        console.log(res);
    }
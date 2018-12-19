var galleryPics= ["images/menu_1.jpg","images/menu_2.jpg","images/menu_3.jpg"];

var offers = [
{
	pic: "images/offer_1.jpg",
	price: 19.50,
	name: "Beef with Sausage",
	description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
	
},
{
	pic: "images/offer_2.jpg",
	price: 9.50,
	name: "Beef with Sausage",
	description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
	
},
{
	pic: "images/offer_2.jpg",
	price: 5.50,
	name: "Beef with Sausage",
	description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
	
},
{
	pic: "images/offer_2.jpg",
	price: 1.50,
	name: "Beef with Sausage",
	description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
	
}
];

var carnes = [
{pic: "images/menu_1.jpg", name:"bistec de res encebollado", price: 240, description: "Descripcion del plato" },
{pic: "images/menu_1.jpg", name:"estofado de res", price: 245, description: "Descripcion del plato" },
{pic: "images/menu_1.jpg", name:"milanesa de res", price: 200, description: "Descripcion del plato" },
{pic: "images/menu_1.jpg", name:"ropa vieja", price: 240, description: "Descripcion del plato" },
{pic: "images/menu_1.jpg", name:"picadillo a la habanera", price: 185, description: "Descripcion del plato" }
];

var frutosDelMar = [


{pic: "images/menu_1.jpg", name:"enchilado de pescado", price:  225, description: "Descripcion del plato" },
{pic: "images/menu_1.jpg", name:"pescado a la marinera", price:  240, description: "Descripcion del plato" }
];
var guarniciones = [


{pic: "images/menu_1.jpg", name:"arroz moro", price:  80, description: "Descripcion del plato" },
{pic: "images/menu_1.jpg", name:"arroz blanco", price:  55 , description: "Descripcion del plato" },
{pic: "images/menu_1.jpg", name:"arroz pilaf", price:  80, description: "Descripcion del plato" },
{pic: "images/menu_1.jpg", name:"papa asada con mantequilla", price:  60, description: "Descripcion del plato" },
{pic: "images/menu_1.jpg", name:"pure de papas", price:  55, description: "Descripcion del plato" },
{pic: "images/menu_1.jpg", name:"papas fritas", price:  90, description: "Descripcion del plato" },
{pic: "images/menu_1.jpg", name:"ensalada del dia", price:  85, description: "Descripcion del plato" }
];
var bebidas = [


{pic: "images/menu_1.jpg", name:"coca cola light 600cc", price:  60, description: "Descripcion del plato" },
{pic: "images/menu_1.jpg", name:"coca cola comun", price:  60, description: "Descripcion del plato" },
{pic: "images/menu_1.jpg", name:"sprite 600cc", price:  60, description: "Descripcion del plato" },
{pic: "images/menu_1.jpg", name:"fanta 600cc", price:  60, description: "Descripcion del plato" },
{pic: "images/menu_1.jpg", name:"schweppes 600cc", price:  60, description: "Descripcion del plato" },
{pic: "images/menu_1.jpg", name:"agua saborizada", price:  60, description: "Descripcion del plato" },
{pic: "images/menu_1.jpg", name:"jugo de naranja", price:  70, description: "Descripcion del plato" }
];
var cervezas = [


{pic: "images/menu_1.jpg", name:"nortenna", price:	85, description: "Descripcion del plato" },
{pic: "images/menu_1.jpg", name:"patricia", price:	95, description: "Descripcion del plato" },
{pic: "images/menu_1.jpg", name:"schneider", price:	100, description: "Descripcion del plato" },
{pic: "images/menu_1.jpg", name:"heineken", price:	115, description: "Descripcion del plato" }
];
var postres = [
{pic: "images/menu_1.jpg", name:"flan casero", price:	60, description: "Descripcion del plato" },
{pic: "images/menu_1.jpg", name:"arroz con leche", price:	60, description: "Descripcion del plato" },
{pic: "images/menu_1.jpg", name:"gelatina", price:	60, description: "Descripcion del plato" }
];
var entradas = [


{pic: "images/menu_1.jpg", name:"croquetas al gusto", price: 120, description: "Descripcion del plato" },
{pic: "images/menu_1.jpg", name:"papa rellena", price: 95, description: "Descripcion del plato" },
{pic: "images/menu_1.jpg", name:"tostones rellenos", price: 170, description: "Descripcion del plato" },
{pic: "images/menu_1.jpg", name:"tostones de platano", price: 120, description: "Descripcion del plato" },
{pic: "images/menu_1.jpg", name:"papas fritas", price: 90, description: "Descripcion del plato" },
{pic: "images/menu_1.jpg", name:"tamales", price: 160, description: "Descripcion del plato" }
];
var aves = [


{pic: "images/menu_1.jpg", name:"suprema de pollo", price:	220, description: "Descripcion del plato" },
{pic: "images/menu_1.jpg", name:"bastones de suprema de pollo", price: 245	, description: "Descripcion del plato" },
{pic: "images/menu_1.jpg", name:"fricasse de pollo", price:	220, description: "Descripcion del plato" },
{pic: "images/menu_1.jpg", name:"ensalada de pollo", price: 145, description: "Descripcion del plato" },
{pic: "images/menu_1.jpg", name:"pollo frito a la criolla", price: 205 , description: "Descripcion del plato" },
{pic: "images/menu_1.jpg", name:"pollo frito a la miel", price: 215, description: "Descripcion del plato" },
{pic: "images/menu_1.jpg", name:"pollo a la gordon blue", price: 230, description: "Descripcion del plato" }
];
var cerdo = [


{pic: "images/menu_1.jpg", name:"fricasse de cerdo", price: 205, description: "Descripcion del plato" },
{pic: "images/menu_1.jpg", name:"lonjas de cerdo asado", price: 245, description: "Descripcion del plato" },
{pic: "images/menu_1.jpg", name:"bistec de cerdo encebollado", price: 225, description: "Descripcion del plato" },
{pic: "images/menu_1.jpg", name:"bistec de cerdo uruguayo", price: 230, description: "Descripcion del plato" },
{pic: "images/menu_1.jpg", name:"escalope de cerdo empanado", price: 185, description: "Descripcion del plato" }
];

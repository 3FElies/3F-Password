

var typeChar = {
	"majuscules"            : {"name" : "lettres majuscules",     "default" : true , "charMap" : "AZERTYUIOPQSDFGHJKLMWXCVBN"},
	"minuscules"            : {"name" : "lettres minuscules",     "default" : true , "charMap" : "azertyuiopqsdfghjklmwxcvbn"},
	"nombres"               : {"name" : "nombres",                "default" : true , "charMap" : "0123456789"},
	"minusculesAccentuees"  : {"name" : "minuscules accentuées",  "default" : false, "charMap" : "àâäãçéèêëìîïñòôöõùûüÿ"},
	"caracteresSpeciaux"    : {"name" : "caractères spéciaux",    "default" : false, "charMap" : "@#µ§\\"},
	"symbolesMathematiques" : {"name" : "symboles mathématiques", "default" : false, "charMap" : "=-+*/%"},
	"unitesMonétaires"      : {"name" : "unités monétaires",      "default" : false, "charMap" : "€$¤£"}
}

var defaultCharMat = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

var noSafePassword = [
"123456", "password", "12345", "12345678", "qwerty", "123456789", "1234", "baseball", "dragon", "football", 
"1234567", "monkey", "letmein", "abc123", "111111", "mustang", "access", "shadow", "master", "michael", 
"superman", "696969", "123123", "batman", "trustno1", "Password1", "Princess1", "P@ssw0rd", "Passw0rd", 
"Michael1", "Blink182", "!QAZ2wsx", "Charlie1", "Anthony1", "1qaz!QAZ", "Brandon1", "Jordan23", "1qaz@WSX", 
"Jessica1", "Jasmine1", "Michelle1", "Diamond1", "Babygirl1", "Iloveyou2", "Matthew1", "Rangers1", "Pa55word", 
"Iverson3", "Sunshine1", "Madison1", "William1", "Elizabeth1", "Password123", "Liverpool1", "Cameron1", 
"Butterfly1", "Beautiful1", "!QAZ1qaz", "Patrick1", "Welcome1", "Iloveyou1", "Bubbles1", "Chelsea1", "ZAQ!2wsx", 
"Blessed1", "Richard1", "Danielle1", "Raiders1", "Jackson1", "Jesus777", "Jennifer1", "Alexander1", "Ronaldo7", 
"Heather1", "Dolphin1", "Destiny1", "Brianna1", "Trustno1", "1qazZAQ!", "Precious1", "Freedom1", "Christian1", 
"Brooklyn1", "!QAZxsw2", "Password2", "Football1", "ABCabc123", "Samantha1", "Charmed1", "Trinity1", "Chocolate1", 
"America1", "Password01", "Natalie1", "Superman1", "Scooter1", "Mustang1", "Brittany1", "Angel123", "Jonathan1", 
"Friends1", "Courtney1", "Aaliyah1", "Rebecca1", "Timothy1", "Scotland1", "Raymond1", "Inuyasha1", "Tiffany1", 
"Pa55w0rd", "Nicholas1", "Melissa1", "Isabella1", "Summer07", "Rainbow1", "Poohbear1", "Peaches1", "Gabriel1", 
"Arsenal1", "Antonio1", "Victoria1", "Stephanie1", "Dolphins1", "ABC123abc", "Spongebob1", "Pa$$w0rd", "Forever1", 
"iydgTvmujl6f", "Zachary1", "Yankees1", "Stephen1", "Shannon1", "John3:16", "Gerrard8", "Fuckyou2", "ZAQ!1qaz", 
"Pebbles1", "Monster1", "Chicken1", "zaq1!QAZ", "Spencer1", "Savannah1", "Jesusis1", "Jeffrey1", "Houston1", 
"Florida1", "Crystal1", "Tristan1", "Thunder1", "Thumper1", "Special1", "Pr1ncess", "Password12", "Justice1", 
"Cowboys1", "Charles1", "Blondie1", "Softball1", "Orlando1", "Greenday1", "Dominic1", "!QAZzaq1", "abc123ABC", 
"Snickers1", "Patches1", "P@$$w0rd", "Natasha1", "Myspace1", "Monique1", "Letmein1", "James123", "Celtic1888", 
"Benjamin1", "Baseball1", "1qazXSW@", "Vanessa1", "Steelers1", "Slipknot1", "Princess13", "Princess12", "Midnight1", 
"Marines1", "M1chelle", "Lampard8", "Jesus123", "Frankie1", "Elizabeth2", "Douglas1", "Devil666", "Christina1", 
"Bradley1", "zaq1@WSX", "Tigger01", "Summer08", "Princess21", "Playboy1", "October1", "Katrina1", "Iloveme1", 
"Chris123", "Chicago1", "Charlotte1", "Broncos1", "BabyGirl1", "Abigail1", "Tinkerbell1", "Rockstar1", "RockYou1", 
"Michelle2", "Georgia1", "Computer1", "Breanna1", "Babygurl1", "Trinity3", "Pumpkin1", "Princess7", "Preston1", 
"Newyork1", "Marissa1", "Liberty1", "Lebron23", "Jamaica1", "Fuckyou1", "Chester1", "Braxton1", "August12", 
"z,iyd86I", "l6fkiy9oN", "Sweetie1", "November1", "Love4ever", "Ireland1", "Iloveme2", "Christine1", "Buttons1", 
"Babyboy1", "Angel101", "Vincent1", "Spartan117", "Soccer12", "Princess2", "Penguin1", "Password5", "Password3", 
"Panthers1", "Nirvana1", "Nicole12", "Nichole1", "Molly123", "Metallica1", "Mercedes1", "Mackenzie1", "Kenneth1", 
"Jackson5", "Genesis1", "Diamonds1", "Buttercup1", "Brandon7", "Whatever1", "TheSims2", "Summer06", "Starwars1", 
"Spiderman1", "Soccer11", "Skittles1", "Princess01", "Phoenix1", "Pass1234", "Panther1", "November11", "Lindsey1", 
"Katherine1", "JohnCena1", "January1", "Gangsta1", "Fuckoff1", "Freddie1", "Forever21", "Death666", "Chopper1", 
"Arianna1", "Allison1", "Yankees2", "TrustNo1", "Tiger123", "Summer05", "September1", "Sebastian1", "Sabrina1", 
"Princess07", "Popcorn1", "Pokemon1", "Omarion1", "Nursing1", "Miranda1", "Melanie1", "Maxwell1", "Lindsay1", 
"Joshua01", "Hollywood1", "Hershey1", "Hello123", "Gordon24", "Gateway1", "Garrett1", "David123", "Daniela1", 
"Butterfly7", "Buddy123", "Brandon2", "Bethany1", "Austin316", "Atlanta1", "Angelina1", "Alexandra1", "Airforce1", 
"Winston1", "Veronica1", "Vanilla1", "Trouble1", "Summer01", "Snowball1", "Rockyou1", "Qwerty123", "Pickles1", 
"Password11", "Password1!", "November15", "Music123", "Monkeys1", "Matthew2", "Marie123", "Madonna1", "Kristen1", 
"Kimberly1", "Justin23", "Justin11", "Jesus4me", "Jeremiah1", "Jennifer2", "Jazmine1", "FuckYou2", "Colorado1", 
"Christmas1", "Bella123", "Bailey12", "August20", "3edc#EDC", "2wsx@WSX", "12qw!@QW", "#EDC4rfv", "Winter06", 
"Welcome123", "Unicorn1", "Tigger12", "Soccer13", "Senior06", "Scrappy1", "Scorpio1", "Santana1", "Rocky123", 
"Ricardo1", "Princess123", "Password9", "Password4", "P@55w0rd", "Monkey12", "Michele1", "Micheal1", "Michael7", 
"Michael01", "Matthew3", "Marshall1", "Loveyou2", "Lakers24", "Kennedy1", "Jesusis#1", "Jehovah1", "Isabelle1", 
"Hawaii50", "Grandma1", "Godislove1", "Giggles1", "Friday13", "Formula1", "England1", "Cutiepie1", "Cricket1", 
"Catherine1", "Brownie1", "Boricua1", "Beckham7", "Awesome1", "Annabelle1", "Anderson1", "Alabama1", "123qweASD", 
"abcABC123", "Twilight1", "Thirteen13", "Taylor13", "Superstar1", "Summer99", "Soccer14", "Robert01", "Prototype1", 
"Princess5", "Princess24", "Pr1nc3ss", "Phantom1", "Patricia1", "Password13", "Passion1", "P4ssword", "Nathan06", 
"Monkey13", "Monkey01", "Liverpool123", "Liverp00l", "Laura123", "Ladybug1", "Kristin1", "Kendall1", "Justin01", 
"Jordan12", "Jordan01", "Jesus143", "Jessica7", "Internet1", "Goddess1", "Friends2", "Falcons7", "Derrick1", "December21", 
"Daisy123", "Colombia1", "Clayton1", "Cheyenne1", "Brittney1", "Blink-182", "August22", "Asshole1", "Ashley12", "Arsenal12", 
"Addison1", "Abcd1234", "@WSX2wsx", "!Qaz2wsx", "zaq1ZAQ!", "ZAQ!xsw2", "Whitney1", "Welcome2", "Vampire1", "Valerie1", 
"Titanic1", "Tigger123", "Teddybear1", "Tbfkiy9oN", "Sweetpea1", "Start123", "Soccer17", "Smokey01", "Shopping1", 
"Serenity1", "Senior07", "Sail2Boat3", "Rusty123", "Russell1", "Redskins1", "Rebelde1", "Princess4", "Princess23", 
"Princess19", "Princess18", "Princess15", "Princess08", "PoohBear1", "Peanut11", "Peanut01", "Password7", "Password21", 
"Passw0rd1", "October22", "October13", "November16", "Montana1", "Michael2", "Michael07", "Makayla1", "Madison01", 
"Lucky123", "Longhorns1", "Kathryn1", "Katelyn1", "Justin21", "Jesus1st", "January29", "ILoveYou2", "Hunter01", 
"Honey123", "Holiday1", "Harry123", "Falcons1", "December1", "Dan1elle", "Dallas22", "College1", "Classof08", 
"Chelsea123", "Chargers1", "Cassandra1", "Carolina1", "Candy123", "Brayden1", "Bigdaddy1", "Bentley1", "Batista1", 
"Barcelona1", "Australia1", "Austin02", "August10", "August08", "Arsenal123", "Anthony11"
];

function passwordGen (nbChar, charMap) {
	var password = "";

	if (!charMap) 	{ charMap = defaultCharMat; }
	if (nbChar < 1) { nbChar = 16; }

	do {
		for( var i=0; i < nbChar; i++ ) {
	        password += charMap.charAt(Math.floor(Math.random() * charMap.length));
	    }
	} while (isInNoSafePassword(password));
   
    return password;
}


function isInNoSafePassword (password) {
	for (var i = 0; i < noSafePassword.length; i++) {
    	if (password == noSafePassword[i]) return true;
    }
    return false;
}


function printUseCharsOptions(containerID) {
	var html = "";

	for (var charsid in typeChar) {
		var checked = "";
		if (typeChar[charsid]["default"]) {
			checked = "checked";
		}

		html += '<label>';
		html += '	<input type="checkbox" id="'+ charsid +'" ' + checked + '>';
		html += '	<a title="' + typeChar[charsid]["charMap"] + '"> ';
		html += " 		Utiliser les " + "" + typeChar[charsid]["name"];
		html += "	</a>";
		html += '</label>';
		html += '<br>';
	}

	if (!containerID) {
		document.write(html);
	} else {
		document.getElementById(containerID).innerHTML = html;
	}
}


function generatePasswordOnPage() {
	var charMap = "";

	for (var charsid in typeChar) {
		if (document.getElementById(charsid).checked) {
			charMap += typeChar[charsid]["charMap"];
		}
	}

	var nbChar = document.getElementById("passwordSize").value;

	document.getElementById("inputPassword1").value = passwordGen(nbChar, charMap);
	document.getElementById("inputPassword2").value = passwordGen(nbChar, charMap);
	document.getElementById("inputPassword3").value = passwordGen(nbChar, charMap);
}
function getAttribute(obj,name,d) {
	if(typeof obj == "object" && obj.hasOwnProperty(name)){
		return obj[name];
	}else{
		return d ? d : "";
	}
}
var a = undefined;
console.log(getAttribute(a,"a",1))
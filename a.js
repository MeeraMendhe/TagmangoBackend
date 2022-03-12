var data= [{"obj1":"2122"},{"obj2":"123"}]
 
data = JSON.stringify(data);
 
var values = [];
 
JSON.parse(data, function (key, value) {

    if (typeof(value) != "object") {
        values.push({[key]:value});
	// values.push(value); //if you need a value array
    }  
});
console.log(values)
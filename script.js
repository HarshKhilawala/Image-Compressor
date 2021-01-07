function showPreview(){
	//read file object and extract image as encoded url
	file = document.querySelector("input[type=file]").files[0];
	preview = document.querySelector("#source_img");
	reader = new FileReader();
	
	reader.addEventListener("load", function () {
		preview.src = reader.result;
	  }, false);

    reader.readAsDataURL(file);
}

function compress(){

    var source_img = document.getElementById("source_img"),
    target_img = document.getElementById("target_img");
 
    // An Integer from 0 to 100
	var quality =  80;
	// output file format (jpg || png || webp)
	output_format = 'jpg'; 
	//This function returns an Image Object 
	target_img.src = jic.compress(source_img,quality,output_format).src;
}
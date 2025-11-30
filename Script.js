const Main = document.getElementById("Main");
const Header = document.getElementById("Header");
const Html = document.querySelector("html");

// let ImageDisplay = null;
function VideoClicked(VideoName){
	Main.className = "VideoDisplay";

	Main.innerHTML = `
	<div class="Center NoBackground">

		<div class='VideoPlayer NoBackground'>
			<div onclick="location.reload();" class="ButtonHeader">
				<img src='Arrow.png' class="Back">
			</div>
			<video autoplay loop class="Video Player" oncontextmenu="return false;"><source src="./Videos/${VideoName}"></video>
		</div>
	</div>
	`;
	Header.innerHTML = "CloutTok";
}

function HardRefresh(){
	location.reload(true);
}
function ImageClicked(ImageName, AltText){
	const ImageDisplay = document.createElement("div");

	ImageDisplay.className = "ImageDisplay";

	ImageDisplay.innerHTML = `<img src="./Images/${ImageName}" alt="${AltText}">`;
	Html.appendChild(ImageDisplay);
	ImageDisplay.addEventListener('click', function() {
        this.remove(); 
    });
}

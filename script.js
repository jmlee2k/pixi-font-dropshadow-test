document.getElementById("env").innerText = "Pixi "+PIXI.VERSION+" - "+navigator.userAgent

const app = new PIXI.Application({width:800,height:600,backgroundColor:0x444444});
document.body.appendChild(app.view);

new FontFaceObserver("Anton")
	.load()
	.then(()=>{
		const text = app.stage.addChild(new PIXI.Text("",{fontSize:120,fill:0xef4323,fontFamily:"Anton",stroke:0xFFFFFF,strokeThickness:30,lineJoin:"round",padding:100, dropShadow:true,dropShadowAngle:1.5708, dropShadowDistance:15,dropShadowColor:0x000000, dropShadowBlur:17}));
		text.position.set(20,20);
		text.text = "65";
	});
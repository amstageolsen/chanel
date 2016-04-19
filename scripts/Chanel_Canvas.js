(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 1200,
	height: 768,
	fps: 24,
	color: "#FFFFFF",
	webfonts: {},
	manifest: []
};



lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib._1 = function() {
	this.spriteSheet = ss["Chanel_Canvas_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._2 = function() {
	this.spriteSheet = ss["Chanel_Canvas_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._3 = function() {
	this.spriteSheet = ss["Chanel_Canvas_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib._4 = function() {
	this.spriteSheet = ss["Chanel_Canvas_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib._5 = function() {
	this.spriteSheet = ss["Chanel_Canvas_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib._6 = function() {
	this.spriteSheet = ss["Chanel_Canvas_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Text_2lines = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhjEZQgdgGgZgLIAGg5QAaAQAcAJQAfAIAnAAQAYAAAWgHQAXgHAQgNQATgPAJgVQAKgWAAgdQAAgUgLgRQgKgQgTgPQgTgPhEgnIgugZQgZgQgQgQQgTgTgKgVQgLgXAAgaQAAghAOgcQANgaAZgUQAYgSAfgKQAhgLAjABIAyADQAhAFAaAKIgJAyQgRgJgcgGQgcgGgcAAQgVAAgUAGQgWAFgRAKQgSAMgKASQgLAUAAAaQAAATALASQAKAPATAPQARANBFAmIAvAaQAZARAQARQATATAKAWQALAZAAAdQAAApgQAfQgPAegcAUQgZASgiAJQgfAKghAAQglgBgjgHg");
	this.shape.setTransform(859.5,34.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhiEZQgegGgYgLIAFg5QAaAQAdAJQAeAIAmAAQAYAAAXgHQAXgHAQgNQASgPAKgVQAKgWAAgdQAAgUgLgRQgKgQgTgPQgTgPhDgnIgvgZQgZgQgQgQQgUgTgJgVQgLgXAAgaQAAghANgcQAOgaAYgUQAYgSAhgKQAggLAiABIAzADQAhAFAbAKIgJAyQgSgJgdgGQgbgGgcAAQgVAAgUAGQgXAFgRAKQgRAMgKASQgLAUAAAaQAAATALASQAKAPATAPQARANBFAmIAvAaQAZARAQARQATATAKAWQALAZAAAdQAAApgRAfQgPAegbAUQgaASghAJQggAKgfAAQgmgBgigHg");
	this.shape_1.setTransform(819.5,34.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AiMEXIAAosIEQAAIAAAvIjZAAIAADHIDNAAIAAAuIjNAAIAADYIDiAAIAAAwg");
	this.shape_2.setTransform(780.3,34.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ACCEXIkVngIgBAAIAAHgIg4AAIAAosIBGAAIEaHoIACAAIAAnoIA3AAIAAIsg");
	this.shape_3.setTransform(732.6,34.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ACNEXIAAkIIkYAAIAAEIIg4AAIAAosIA4AAIAAD2IEYAAIAAj2IA3AAIAAIsg");
	this.shape_4.setTransform(679.3,34.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAOEbQgcgGgagKQgagKgWgPQgWgOgSgUQgSgSgOgXQgPgYgJgaQgJgagFgdQgFgeAAggQAAgfAFgdQAFgdAJgaQAKgbAOgXQAOgWATgTQASgTAWgQQAXgPAZgLQAbgKAbgFQAegGAgABIBBAEQArAGATAKIgDA0QgYgNglgGQgegGghAAQgbAAgZAGQgYADgTAJQgVAKgSAMQgSANgOAQIgZAkIgTAoQgPA+AAAhQAFBDAKAeQAYA2ATAVQAPAQARANQASANAVAJQATAIAZAEQAYAFAcAAQAiAAAegFQAngGAVgNIADAwQgUAMgqAHQghAFggABQghgBgegFg");
	this.shape_5.setTransform(624.2,34.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgaEXIAAosIA1AAIAAIsg");
	this.shape_6.setTransform(590.4,34.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("ABzEXIhRi9QgMgbgMgQQgKgOgLgHQgSgLgsAAIgtAAIAAEIIg4AAIAAosICQAAQAkgBAeAJQAeAHAVATQAWARALAbQAMAdAAAlQAAAagJAXQgKAWgRARQgRAQgXALQgWAKgaADIAAACQAfADAPARQAKAKAQAkIBfDYgAh2gfIA5AAQAbAAAXgFQAXgFATgLQAWgNALgUQANgVAAgbQAAghgMgUQgKgTgUgKQgSgJgZgEIg2gCIg4AAg");
	this.shape_7.setTransform(561.6,34.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AiMEXIAAosIEPAAIAAAvIjYAAIAADHIDOAAIAAAuIjOAAIAADYIDiAAIAAAwg");
	this.shape_8.setTransform(495.9,34.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("ABzEXIhRi9QgMgbgMgQQgKgOgLgHQgSgLgsAAIgtAAIAAEIIg4AAIAAosICQAAQAkgBAdAJQAfAHAVATQAWARALAbQAMAdAAAlQAAAagJAXQgKAWgRARQgRAQgXALQgWAKgaADIAAACQAfADAPARQAKAKAQAkIBfDYgAh2gfIA5AAQAaAAAYgFQAXgFATgLQAWgNALgUQANgVAAgbQAAghgMgUQgKgTgUgKQgSgJgZgEIg2gCIg4AAg");
	this.shape_9.setTransform(455,34.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhBESQglgLgcgVQgmgjgNgbQgKgVgEgZQgGgZAAgfIAAloIA3AAIAAFoQAAAiAKAdQAJAdATAVQASAVAcALQAcAMAiAAQAjAAAcgMQAbgLATgVQATgVAJgdQAKgdAAgiIAAloIA3AAIAAFoQAAAfgGAZQgEAZgKAVQgKATgNAQQgMAQgQALQgcAVgmALQgfAKgiAAQghAAgggKg");
	this.shape_10.setTransform(403.7,34.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AiaEXIAAosICKAAQAlAAAgAJQAgAKAWAUQAXAUAMAeQANAeAAAmQAAAngPAeQgMAdgZAVQgYASghAKQggAKgkAAIhNAAIAADygAhjgJIAnAAIA8gDQAdgEAUgKQAYgMANgWQANgXAAglQAAgZgHgWQgHgUgOgOQgPgOgUgIQgVgHgYAAIhaAAg");
	this.shape_11.setTransform(359.4,34.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1216.3,80.8);


(lib.Text_1line = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AilHDQg0gJgrgRIAAhcQApAXA1AMQAzAMAwAAQAugBAogLQAsgNAigZQAjgaATgmQAVgpAAgzQAAg1gOgmQgOgngcgZQgdgYgqgLQgrgNg3gBQg4AAgvAIIhdAVIAJnHIHNAAIAABNIl1AAIgGEjIA1gNIBUgGQA/AAA1ASQA1ARAlAjQAlAjAUAuQATAzABA9QAABJgZA7QgXA3gsAnQgtAlg8ATQg8AUhIAAQgzgBgvgGg");
	this.shape.setTransform(921,54.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhYBYQgjgkAAg0QAAgyAjgkQAkgkA0AAQA0AAAkAkQAkAkAAAyQAAA0gkAkQgkAjg0AAQg0AAgkgjgAg1g1QgYAXAAAeQAAAgAYAXQAXAVAeAAQAhAAAWgVQAWgWAAghQAAgegWgXQgXgWggAAQgeAAgXAWg");
	this.shape_1.setTransform(869.2,15.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ADUHFInEsNIgCAAIAAMNIhaAAIAAuJIBxAAIHMMcIACAAIAAscIBaAAIAAOJg");
	this.shape_2.setTransform(811.4,54.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AjiHFIAAuJIBaAAIAAM7IFrAAIAABOg");
	this.shape_3.setTransform(707.4,54.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AjlHFIAAuJIG7AAIAABOIlhAAIAAFDIFPAAIAABMIlPAAIAAFeIFxAAIAABOg");
	this.shape_4.setTransform(643.4,54.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ADUHFInEsNIgCAAIAAMNIhaAAIAAuJIBxAAIHMMcIACAAIAAscIBaAAIAAOJg");
	this.shape_5.setTransform(565.9,54.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AFCHFIhhjzInIAAIhhDzIhXAAIFzuJIBkAAIFoOJgADDCEIjDnyIjFHyIGIAAg");
	this.shape_6.setTransform(479.2,54.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("ADkHFIAAmsInIAAIAAGsIhaAAIAAuJIBaAAIAAGRIHIAAIAAmRIBbAAIAAOJg");
	this.shape_7.setTransform(392.5,54.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAWHMQgugIgqgRQgqgRgkgYQgkgXgeggQgdgegXglQgXgmgPgrQgPgqgJgxQgHgwAAg0QAAgyAIgwQAHgvARgrQAPgrAXglQAXgmAegfQAdgeAlgZQAkgYAqgSQAqgQAugJQAwgJA0AAIBrAHQBGAKAfAQIgFBUQgngVg8gKQgxgIg3AAQgrAAgoAHQgnAIggAOQgjAPgdAUQgdAVgXAaIgpA6IgeBCQgZBkAAA3QAJBtAQAwQAnBZAfAjQAYAaAcAUQAdAVAiAOQAgAOAoAHQAoAIAsAAQA3AAAygJQA/gJAjgVIAFBNQghAVhEALQg1AIg2AAQg1AAgxgJg");
	this.shape_8.setTransform(303.2,54.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1218.3,128.8);


(lib.Bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EhfUA9iMAAAh7EMC+pAAAMAAAB7Eg");
	this.shape.setTransform(610.1,393.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1220.2,787.8);


(lib._6_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._6();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,803,614);


(lib._5_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._5();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,600,523);


(lib._4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._4();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,485,341);


(lib._3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._3();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,397,385);


(lib._2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,343,469);


(lib._1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,271,397);


// stage content:
(lib.Chanel_Canvas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text_2lines
	this.instance = new lib.Text_2lines();
	this.instance.setTransform(610.1,586.1,1,1,0,0,0,608.1,122.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(196).to({_off:false},0).wait(1).to({regX:609.5,regY:34.1,x:611.5,y:497.7,alpha:0.021},0).wait(1).to({alpha:0.043},0).wait(1).to({alpha:0.064},0).wait(1).to({alpha:0.085},0).wait(1).to({alpha:0.106},0).wait(1).to({alpha:0.128},0).wait(1).to({alpha:0.149},0).wait(1).to({alpha:0.17},0).wait(1).to({alpha:0.191},0).wait(1).to({alpha:0.213},0).wait(1).to({alpha:0.234},0).wait(1).to({alpha:0.255},0).wait(1).to({alpha:0.277},0).wait(1).to({alpha:0.298},0).wait(1).to({alpha:0.319},0).wait(1).to({alpha:0.34},0).wait(1).to({alpha:0.362},0).wait(1).to({alpha:0.383},0).wait(1).to({alpha:0.404},0).wait(1).to({alpha:0.426},0).wait(1).to({alpha:0.447},0).wait(1).to({alpha:0.468},0).wait(1).to({alpha:0.489},0).wait(1).to({alpha:0.511},0).wait(1).to({alpha:0.532},0).wait(1).to({alpha:0.553},0).wait(1).to({alpha:0.574},0).wait(1).to({alpha:0.596},0).wait(1).to({alpha:0.617},0).wait(1).to({alpha:0.638},0).wait(1).to({alpha:0.66},0).wait(1).to({alpha:0.681},0).wait(1).to({alpha:0.702},0).wait(1).to({alpha:0.723},0).wait(1).to({alpha:0.745},0).wait(1).to({alpha:0.766},0).wait(1).to({alpha:0.787},0).wait(1).to({alpha:0.809},0).wait(1).to({alpha:0.83},0).wait(1).to({alpha:0.851},0).wait(1).to({alpha:0.872},0).wait(1).to({alpha:0.894},0).wait(1).to({alpha:0.915},0).wait(1).to({alpha:0.936},0).wait(1).to({alpha:0.957},0).wait(1).to({alpha:0.979},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0.985},0).wait(1).to({alpha:0.97},0).wait(1).to({alpha:0.955},0).wait(1).to({alpha:0.939},0).wait(1).to({alpha:0.924},0).wait(1).to({alpha:0.909},0).wait(1).to({alpha:0.894},0).wait(1).to({alpha:0.879},0).wait(1).to({alpha:0.864},0).wait(1).to({alpha:0.848},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.818},0).wait(1).to({alpha:0.803},0).wait(1).to({alpha:0.788},0).wait(1).to({alpha:0.773},0).wait(1).to({alpha:0.758},0).wait(1).to({alpha:0.742},0).wait(1).to({alpha:0.727},0).wait(1).to({alpha:0.712},0).wait(1).to({alpha:0.697},0).wait(1).to({alpha:0.682},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.652},0).wait(1).to({alpha:0.636},0).wait(1).to({alpha:0.621},0).wait(1).to({alpha:0.606},0).wait(1).to({alpha:0.591},0).wait(1).to({alpha:0.576},0).wait(1).to({alpha:0.561},0).wait(1).to({alpha:0.545},0).wait(1).to({alpha:0.53},0).wait(1).to({alpha:0.515},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.485},0).wait(1).to({alpha:0.47},0).wait(1).to({alpha:0.455},0).wait(1).to({alpha:0.439},0).wait(1).to({alpha:0.424},0).wait(1).to({alpha:0.409},0).wait(1).to({alpha:0.394},0).wait(1).to({alpha:0.379},0).wait(1).to({alpha:0.364},0).wait(1).to({alpha:0.348},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.318},0).wait(1).to({alpha:0.303},0).wait(1).to({alpha:0.288},0).wait(1).to({alpha:0.273},0).wait(1).to({alpha:0.258},0).wait(1).to({alpha:0.242},0).wait(1).to({alpha:0.227},0).wait(1).to({alpha:0.212},0).wait(1).to({alpha:0.197},0).wait(1).to({alpha:0.182},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.152},0).wait(1).to({alpha:0.136},0).wait(1).to({alpha:0.121},0).wait(1).to({alpha:0.106},0).wait(1).to({alpha:0.091},0).wait(1).to({alpha:0.076},0).wait(1).to({alpha:0.061},0).wait(1).to({alpha:0.045},0).wait(1).to({alpha:0.03},0).wait(1).to({alpha:0.015},0).wait(1).to({alpha:0},0).wait(61).to({_off:true},1).wait(15));

	// text_1line
	this.instance_1 = new lib.Text_1line();
	this.instance_1.setTransform(609.1,422.1,1,1,0,0,0,609.1,122.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(174).to({_off:false},0).wait(1).to({regX:608.5,regY:52,x:608.5,y:351.6},0).wait(77).to({alpha:0.982},0).wait(1).to({alpha:0.965},0).wait(1).to({alpha:0.947},0).wait(1).to({alpha:0.93},0).wait(1).to({alpha:0.912},0).wait(1).to({alpha:0.895},0).wait(1).to({alpha:0.877},0).wait(1).to({alpha:0.86},0).wait(1).to({alpha:0.842},0).wait(1).to({alpha:0.825},0).wait(1).to({alpha:0.807},0).wait(1).to({alpha:0.789},0).wait(1).to({alpha:0.772},0).wait(1).to({alpha:0.754},0).wait(1).to({alpha:0.737},0).wait(1).to({alpha:0.719},0).wait(1).to({alpha:0.702},0).wait(1).to({alpha:0.684},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.649},0).wait(1).to({alpha:0.632},0).wait(1).to({alpha:0.614},0).wait(1).to({alpha:0.596},0).wait(1).to({alpha:0.579},0).wait(1).to({alpha:0.561},0).wait(1).to({alpha:0.544},0).wait(1).to({alpha:0.526},0).wait(1).to({alpha:0.509},0).wait(1).to({alpha:0.491},0).wait(1).to({alpha:0.474},0).wait(1).to({alpha:0.456},0).wait(1).to({alpha:0.439},0).wait(1).to({alpha:0.421},0).wait(1).to({alpha:0.404},0).wait(1).to({alpha:0.386},0).wait(1).to({alpha:0.368},0).wait(1).to({alpha:0.351},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.316},0).wait(1).to({alpha:0.298},0).wait(1).to({alpha:0.281},0).wait(1).to({alpha:0.263},0).wait(1).to({alpha:0.246},0).wait(1).to({alpha:0.228},0).wait(1).to({alpha:0.211},0).wait(1).to({alpha:0.193},0).wait(1).to({alpha:0.175},0).wait(1).to({alpha:0.158},0).wait(1).to({alpha:0.14},0).wait(1).to({alpha:0.123},0).wait(1).to({alpha:0.105},0).wait(1).to({alpha:0.088},0).wait(1).to({alpha:0.07},0).wait(1).to({alpha:0.053},0).wait(1).to({alpha:0.035},0).wait(1).to({alpha:0.018},0).wait(1).to({alpha:0},0).wait(38).to({_off:true},1).wait(39));

	// fragrance
	this.instance_2 = new lib._1_1();
	this.instance_2.setTransform(599.5,385.5,1,1,0,0,0,135.5,198.5);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({x:599.6},0).wait(2).to({x:599.7},0).wait(1).to({x:599.8},0).wait(1).to({x:599.9},0).wait(2).to({x:600,alpha:0.091},0).wait(1).to({x:600.1,alpha:0.182},0).wait(1).to({alpha:0.273},0).wait(1).to({x:600.2,alpha:0.364},0).wait(1).to({x:600.3,alpha:0.455},0).wait(1).to({x:600.4,alpha:0.545},0).wait(1).to({alpha:0.636},0).wait(1).to({x:600.5,alpha:0.727},0).wait(1).to({x:600.6,alpha:0.818},0).wait(1).to({alpha:0.909},0).wait(1).to({x:600.7,alpha:1},0).wait(1).to({x:600.8,alpha:0.997},0).wait(1).to({x:600.9,alpha:0.994},0).wait(1).to({alpha:0.991},0).wait(1).to({x:601,alpha:0.987},0).wait(1).to({x:601.1,alpha:0.984},0).wait(1).to({alpha:0.981},0).wait(1).to({x:601.2,alpha:0.978},0).wait(1).to({x:601.3,alpha:0.975},0).wait(1).to({x:601.4,alpha:0.972},0).wait(1).to({alpha:0.969},0).wait(1).to({x:601.5,alpha:0.966},0).wait(1).to({x:601.6,alpha:0.962},0).wait(1).to({alpha:0.959},0).wait(1).to({x:601.7,alpha:0.956},0).wait(1).to({x:601.8,alpha:0.953},0).wait(1).to({x:601.9,alpha:0.95},0).wait(1).to({alpha:0.947},0).wait(1).to({x:602,alpha:0.944},0).wait(1).to({x:602.1,alpha:0.941},0).wait(1).to({alpha:0.937},0).wait(1).to({x:602.2,alpha:0.934},0).wait(1).to({x:602.3,alpha:0.931},0).wait(1).to({x:602.4,alpha:0.928},0).wait(1).to({alpha:0.925},0).wait(1).to({x:602.5,alpha:0.922},0).wait(1).to({x:602.6,alpha:0.919},0).wait(1).to({alpha:0.916},0).wait(1).to({x:602.7,alpha:0.912},0).wait(1).to({x:602.8,alpha:0.909},0).wait(1).to({x:602.9,alpha:0.906},0).wait(1).to({alpha:0.903},0).wait(1).to({x:603,alpha:0.9},0).wait(1).to({x:603.1,alpha:0.897},0).wait(1).to({alpha:0.894},0).wait(1).to({x:603.2,alpha:0.891},0).wait(1).to({x:603.3,alpha:0.887},0).wait(1).to({x:603.4,alpha:0.884},0).wait(1).to({alpha:0.881},0).wait(1).to({x:603.5,alpha:0.878},0).wait(1).to({alpha:0.875},0).wait(1).to({alpha:0.872},0).wait(1).to({alpha:0.869},0).wait(1).to({alpha:0.866},0).wait(1).to({alpha:0.862},0).wait(1).to({alpha:0.859},0).wait(1).to({alpha:0.856},0).wait(1).to({alpha:0.853},0).wait(1).to({alpha:0.85},0).wait(1).to({alpha:0.847},0).wait(1).to({alpha:0.844},0).wait(1).to({alpha:0.841},0).wait(1).to({alpha:0.837},0).wait(1).to({alpha:0.834},0).wait(1).to({alpha:0.831},0).wait(1).to({alpha:0.828},0).wait(1).to({alpha:0.825},0).wait(1).to({alpha:0.822},0).wait(1).to({alpha:0.819},0).wait(1).to({alpha:0.816},0).wait(1).to({alpha:0.812},0).wait(1).to({alpha:0.809},0).wait(1).to({alpha:0.806},0).wait(1).to({alpha:0.803},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.797},0).wait(1).to({alpha:0.794},0).wait(1).to({alpha:0.791},0).wait(1).to({alpha:0.787},0).wait(1).to({alpha:0.784},0).wait(1).to({alpha:0.781},0).wait(1).to({alpha:0.778},0).wait(1).to({alpha:0.775},0).wait(1).to({alpha:0.772},0).wait(1).to({alpha:0.769},0).wait(1).to({alpha:0.766},0).wait(1).to({alpha:0.762},0).wait(1).to({alpha:0.759},0).wait(1).to({alpha:0.756},0).wait(1).to({alpha:0.753},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.747},0).wait(1).to({alpha:0.744},0).wait(1).to({alpha:0.741},0).wait(1).to({alpha:0.737},0).wait(1).to({alpha:0.734},0).wait(1).to({alpha:0.731},0).wait(1).to({alpha:0.728},0).wait(1).to({alpha:0.725},0).wait(1).to({alpha:0.722},0).wait(1).to({alpha:0.719},0).wait(1).to({alpha:0.716},0).wait(1).to({alpha:0.712},0).wait(1).to({alpha:0.709},0).wait(1).to({alpha:0.706},0).wait(1).to({alpha:0.703},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.705},0).wait(1).to({alpha:0.71},0).wait(1).to({alpha:0.716},0).wait(1).to({alpha:0.721},0).wait(1).to({alpha:0.726},0).wait(1).to({alpha:0.731},0).wait(1).to({alpha:0.736},0).wait(1).to({alpha:0.741},0).wait(1).to({alpha:0.747},0).wait(1).to({alpha:0.752},0).wait(1).to({alpha:0.757},0).wait(1).to({alpha:0.762},0).wait(1).to({alpha:0.767},0).wait(1).to({alpha:0.772},0).wait(1).to({alpha:0.778},0).wait(1).to({alpha:0.783},0).wait(1).to({alpha:0.788},0).wait(1).to({alpha:0.793},0).wait(1).to({alpha:0.798},0).wait(1).to({alpha:0.803},0).wait(1).to({alpha:0.809},0).wait(1).to({alpha:0.814},0).wait(1).to({alpha:0.819},0).wait(1).to({alpha:0.824},0).wait(1).to({alpha:0.829},0).wait(1).to({alpha:0.834},0).wait(1).to({alpha:0.84},0).wait(1).to({alpha:0.845},0).wait(1).to({alpha:0.85},0).wait(1).to({alpha:0.855},0).wait(1).to({alpha:0.86},0).wait(1).to({alpha:0.866},0).wait(1).to({alpha:0.871},0).wait(1).to({alpha:0.876},0).wait(1).to({alpha:0.881},0).wait(1).to({alpha:0.886},0).wait(1).to({alpha:0.891},0).wait(1).to({alpha:0.897},0).wait(1).to({alpha:0.902},0).wait(1).to({alpha:0.907},0).wait(1).to({alpha:0.912},0).wait(1).to({alpha:0.917},0).wait(1).to({alpha:0.922},0).wait(1).to({alpha:0.928},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:0.938},0).wait(1).to({alpha:0.943},0).wait(1).to({alpha:0.948},0).wait(1).to({alpha:0.953},0).wait(1).to({alpha:0.959},0).wait(1).to({alpha:0.964},0).wait(1).to({alpha:0.969},0).wait(1).to({alpha:0.974},0).wait(1).to({alpha:0.979},0).wait(1).to({alpha:0.984},0).wait(1).to({alpha:0.99},0).wait(1).to({alpha:0.995},0).wait(1).to({alpha:1},0).to({_off:true},1).wait(214));

	// bg
	this.instance_3 = new lib._2_1();
	this.instance_3.setTransform(598.5,407.5,1,1,0,0,0,171.5,234.5);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(36).to({_off:false},0).wait(1).to({x:602.5,alpha:0.05},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0.15},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.35},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.45},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.55},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.65},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.85},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:0.95},0).wait(1).to({alpha:1},0).wait(115).to({_off:true},1).wait(214));

	// spots1
	this.instance_4 = new lib._3_1();
	this.instance_4.setTransform(582.2,372.1,1.187,1.187,0,0,0,198.5,192.5);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(65).to({_off:false},0).wait(1).to({scaleX:1.19,scaleY:1.19,alpha:0.042},0).wait(1).to({scaleX:1.19,scaleY:1.19,alpha:0.083},0).wait(1).to({scaleX:1.19,scaleY:1.19,alpha:0.125},0).wait(1).to({scaleX:1.19,scaleY:1.19,alpha:0.167},0).wait(1).to({alpha:0.208},0).wait(1).to({scaleX:1.19,scaleY:1.19,alpha:0.25},0).wait(1).to({scaleX:1.19,scaleY:1.19,alpha:0.292},0).wait(1).to({scaleX:1.19,scaleY:1.19,alpha:0.333},0).wait(1).to({scaleX:1.2,scaleY:1.2,alpha:0.375},0).wait(1).to({scaleX:1.2,scaleY:1.2,alpha:0.417},0).wait(1).to({scaleX:1.2,scaleY:1.2,alpha:0.458},0).wait(1).to({scaleX:1.2,scaleY:1.2,alpha:0.5},0).wait(1).to({scaleX:1.2,scaleY:1.2,alpha:0.542},0).wait(1).to({alpha:0.583},0).wait(1).to({scaleX:1.2,scaleY:1.2,alpha:0.625},0).wait(1).to({scaleX:1.2,scaleY:1.2,alpha:0.667},0).wait(1).to({scaleX:1.2,scaleY:1.2,alpha:0.708},0).wait(1).to({scaleX:1.2,scaleY:1.2,alpha:0.75},0).wait(1).to({scaleX:1.2,scaleY:1.2,alpha:0.792},0).wait(1).to({scaleX:1.21,scaleY:1.21,alpha:0.833},0).wait(1).to({scaleX:1.21,scaleY:1.21,alpha:0.875},0).wait(1).to({scaleX:1.21,scaleY:1.21,alpha:0.917},0).wait(1).to({alpha:0.958},0).wait(1).to({scaleX:1.21,scaleY:1.21,alpha:1},0).wait(1).to({scaleX:1.21,scaleY:1.21,alpha:0.997},0).wait(1).to({scaleX:1.21,scaleY:1.21,alpha:0.994},0).wait(1).to({scaleX:1.21,scaleY:1.21,alpha:0.991},0).wait(1).to({scaleX:1.21,scaleY:1.21,alpha:0.988},0).wait(1).to({scaleX:1.21,scaleY:1.21,alpha:0.985},0).wait(1).to({scaleX:1.21,scaleY:1.21,alpha:0.982},0).wait(1).to({scaleX:1.22,scaleY:1.22,alpha:0.979},0).wait(1).to({alpha:0.976},0).wait(1).to({scaleX:1.22,scaleY:1.22,alpha:0.972},0).wait(1).to({scaleX:1.22,scaleY:1.22,alpha:0.969},0).wait(1).to({scaleX:1.22,scaleY:1.22,alpha:0.966},0).wait(1).to({scaleX:1.22,scaleY:1.22,alpha:0.963},0).wait(1).to({scaleX:1.22,scaleY:1.22,alpha:0.96},0).wait(1).to({scaleX:1.22,scaleY:1.22,alpha:0.957},0).wait(1).to({scaleX:1.22,scaleY:1.22,alpha:0.954},0).wait(1).to({scaleX:1.22,scaleY:1.22,alpha:0.951},0).wait(1).to({alpha:0.948},0).wait(1).to({scaleX:1.22,scaleY:1.22,alpha:0.945},0).wait(1).to({scaleX:1.23,scaleY:1.23,alpha:0.942},0).wait(1).to({scaleX:1.23,scaleY:1.23,alpha:0.939},0).wait(1).to({scaleX:1.23,scaleY:1.23,alpha:0.936},0).wait(1).to({scaleX:1.23,scaleY:1.23,alpha:0.933},0).wait(1).to({scaleX:1.23,scaleY:1.23,alpha:0.93},0).wait(1).to({scaleX:1.23,scaleY:1.23,alpha:0.927},0).wait(1).to({alpha:0.923},0).wait(1).to({scaleX:1.23,scaleY:1.23,alpha:0.92},0).wait(1).to({scaleX:1.23,scaleY:1.23,alpha:0.917},0).wait(1).to({scaleX:1.23,scaleY:1.23,alpha:0.914},0).wait(1).to({scaleX:1.23,scaleY:1.23,alpha:0.911},0).wait(1).to({scaleX:1.24,scaleY:1.24,alpha:0.908},0).wait(1).to({scaleX:1.24,scaleY:1.24,alpha:0.905},0).wait(1).to({scaleX:1.24,scaleY:1.24,alpha:0.902},0).wait(1).to({scaleX:1.24,scaleY:1.24,alpha:0.899},0).wait(1).to({alpha:0.896},0).wait(1).to({scaleX:1.24,scaleY:1.24,alpha:0.893},0).wait(1).to({scaleX:1.24,scaleY:1.24,alpha:0.89},0).wait(1).to({scaleX:1.24,scaleY:1.24,alpha:0.887},0).wait(1).to({scaleX:1.24,scaleY:1.24,alpha:0.884},0).wait(1).to({scaleX:1.24,scaleY:1.24,alpha:0.881},0).wait(1).to({scaleX:1.24,scaleY:1.24,alpha:0.878},0).wait(1).to({scaleX:1.25,scaleY:1.25,alpha:0.874},0).wait(1).to({scaleX:1.25,scaleY:1.25,alpha:0.871},0).wait(1).to({alpha:0.868},0).wait(1).to({scaleX:1.25,scaleY:1.25,alpha:0.865},0).wait(1).to({scaleX:1.25,scaleY:1.25,alpha:0.862},0).wait(1).to({scaleX:1.25,scaleY:1.25,alpha:0.859},0).wait(1).to({scaleX:1.25,scaleY:1.25,alpha:0.856},0).wait(1).to({scaleX:1.25,scaleY:1.25,alpha:0.853},0).wait(1).to({scaleX:1.25,scaleY:1.25,alpha:0.85},0).wait(1).to({scaleX:1.25,scaleY:1.25,alpha:0.847},0).wait(1).to({scaleX:1.25,scaleY:1.25,alpha:0.844},0).wait(1).to({alpha:0.841},0).wait(1).to({scaleX:1.25,scaleY:1.25,alpha:0.838},0).wait(1).to({scaleX:1.26,scaleY:1.26,alpha:0.835},0).wait(1).to({scaleX:1.26,scaleY:1.26,alpha:0.832},0).wait(1).to({scaleX:1.26,scaleY:1.26,alpha:0.829},0).wait(1).to({scaleX:1.26,scaleY:1.26,alpha:0.826},0).wait(1).to({scaleX:1.26,scaleY:1.26,alpha:0.822},0).wait(1).to({scaleX:1.26,scaleY:1.26,alpha:0.819},0).wait(1).to({scaleX:1.26,scaleY:1.26,alpha:0.816},0).wait(1).to({alpha:0.813},0).wait(1).to({scaleX:1.26,scaleY:1.26,alpha:0.81},0).wait(1).to({scaleX:1.26,scaleY:1.26,alpha:0.807},0).wait(1).to({scaleX:1.26,scaleY:1.26,alpha:0.804},0).wait(1).to({scaleX:1.27,scaleY:1.27,alpha:0.801},0).wait(1).to({scaleX:1.27,scaleY:1.27,alpha:0.798},0).wait(1).to({scaleX:1.27,scaleY:1.27,alpha:0.795},0).wait(1).to({scaleX:1.27,scaleY:1.27,alpha:0.792},0).wait(1).to({scaleX:1.27,scaleY:1.27,alpha:0.789},0).wait(1).to({alpha:0.786},0).wait(1).to({scaleX:1.27,scaleY:1.27,alpha:0.783},0).wait(1).to({scaleX:1.27,scaleY:1.27,alpha:0.78},0).wait(1).to({scaleX:1.27,scaleY:1.27,alpha:0.777},0).wait(1).to({scaleX:1.27,scaleY:1.27,alpha:0.773},0).wait(1).to({scaleX:1.27,scaleY:1.27,alpha:0.77},0).wait(1).to({scaleX:1.28,scaleY:1.28,alpha:0.767},0).wait(1).to({scaleX:1.28,scaleY:1.28,alpha:0.764},0).wait(1).to({scaleX:1.28,scaleY:1.28,alpha:0.761},0).wait(1).to({alpha:0.758},0).wait(1).to({scaleX:1.28,scaleY:1.28,alpha:0.755},0).wait(1).to({scaleX:1.28,scaleY:1.28,alpha:0.752},0).wait(1).to({scaleX:1.28,scaleY:1.28,alpha:0.749},0).wait(1).to({scaleX:1.28,scaleY:1.28,alpha:0.746},0).wait(1).to({scaleX:1.28,scaleY:1.28,alpha:0.743},0).wait(1).to({scaleX:1.28,scaleY:1.28,alpha:0.74},0).wait(1).to({scaleX:1.29,scaleY:1.29,alpha:0.737},0).wait(1).to({scaleX:1.29,scaleY:1.29,alpha:0.734},0).wait(1).to({alpha:0.731},0).wait(1).to({scaleX:1.29,scaleY:1.29,alpha:0.728},0).wait(1).to({scaleX:1.29,scaleY:1.29,alpha:0.724},0).wait(1).to({scaleX:1.29,scaleY:1.29,alpha:0.721},0).wait(1).to({scaleX:1.29,scaleY:1.29,alpha:0.718},0).wait(1).to({scaleX:1.29,scaleY:1.29,alpha:0.715},0).wait(1).to({scaleX:1.29,scaleY:1.29,alpha:0.712},0).wait(1).to({scaleX:1.29,scaleY:1.29,alpha:0.709},0).wait(1).to({alpha:0.706},0).wait(1).to({scaleX:1.29,scaleY:1.29,alpha:0.703},0).wait(1).to({scaleX:1.3,scaleY:1.3,alpha:0.7},0).wait(1).to({scaleX:1.3,scaleY:1.3,alpha:0.693},0).wait(1).to({scaleX:1.3,scaleY:1.3,alpha:0.687},0).wait(1).to({scaleX:1.3,scaleY:1.3,alpha:0.68},0).wait(1).to({scaleX:1.3,scaleY:1.3,alpha:0.674},0).wait(1).to({scaleX:1.3,scaleY:1.3,alpha:0.667},0).wait(1).to({scaleX:1.3,scaleY:1.3,alpha:0.66},0).wait(1).to({alpha:0.654},0).wait(1).to({scaleX:1.3,scaleY:1.3,alpha:0.647},0).wait(1).to({scaleX:1.3,scaleY:1.3,alpha:0.641},0).wait(1).to({scaleX:1.3,scaleY:1.3,alpha:0.634},0).wait(1).to({scaleX:1.31,scaleY:1.31,alpha:0.627},0).wait(1).to({scaleX:1.31,scaleY:1.31,alpha:0.621},0).wait(1).to({scaleX:1.31,scaleY:1.31,alpha:0.614},0).wait(1).to({scaleX:1.31,scaleY:1.31,alpha:0.608},0).wait(1).to({scaleX:1.31,scaleY:1.31,alpha:0.601},0).wait(1).to({alpha:0.595},0).wait(1).to({scaleX:1.31,scaleY:1.31,alpha:0.588},0).wait(1).to({scaleX:1.31,scaleY:1.31,alpha:0.581},0).wait(1).to({scaleX:1.31,scaleY:1.31,alpha:0.575},0).wait(1).to({scaleX:1.31,scaleY:1.31,alpha:0.568},0).wait(1).to({scaleX:1.31,scaleY:1.31,alpha:0.562},0).wait(1).to({scaleX:1.32,scaleY:1.32,alpha:0.555},0).wait(1).to({scaleX:1.32,scaleY:1.32,alpha:0.548},0).wait(1).to({scaleX:1.32,scaleY:1.32,alpha:0.542},0).wait(1).to({alpha:0.535},0).wait(1).to({scaleX:1.32,scaleY:1.32,alpha:0.529},0).wait(1).to({scaleX:1.32,scaleY:1.32,alpha:0.522},0).wait(1).to({scaleX:1.32,scaleY:1.32,alpha:0.515},0).wait(1).to({scaleX:1.32,scaleY:1.32,alpha:0.509},0).wait(1).to({scaleX:1.32,scaleY:1.32,alpha:0.502},0).wait(1).to({scaleX:1.32,scaleY:1.32,alpha:0.496},0).wait(1).to({scaleX:1.32,scaleY:1.32,alpha:0.489},0).wait(1).to({scaleX:1.33,scaleY:1.33,alpha:0.482},0).wait(1).to({alpha:0.476},0).wait(1).to({scaleX:1.33,scaleY:1.33,alpha:0.469},0).wait(1).to({scaleX:1.33,scaleY:1.33,alpha:0.463},0).wait(1).to({scaleX:1.33,scaleY:1.33,alpha:0.456},0).wait(1).to({scaleX:1.33,scaleY:1.33,alpha:0.449},0).wait(1).to({scaleX:1.33,scaleY:1.33,alpha:0.443},0).wait(1).to({scaleX:1.33,scaleY:1.33,alpha:0.436},0).wait(1).to({scaleX:1.33,scaleY:1.33,alpha:0.43},0).wait(1).to({scaleX:1.33,scaleY:1.33,alpha:0.423},0).wait(1).to({alpha:0.416},0).wait(1).to({scaleX:1.33,scaleY:1.33,alpha:0.41},0).wait(1).to({scaleX:1.34,scaleY:1.34,alpha:0.403},0).wait(1).to({scaleX:1.34,scaleY:1.34,alpha:0.397},0).wait(1).to({scaleX:1.34,scaleY:1.34,alpha:0.39},0).wait(1).to({scaleX:1.34,scaleY:1.34,alpha:0.384},0).wait(1).to({scaleX:1.34,scaleY:1.34,alpha:0.377},0).wait(1).to({scaleX:1.34,scaleY:1.34,alpha:0.37},0).wait(1).to({scaleX:1.34,scaleY:1.34,alpha:0.364},0).wait(1).to({alpha:0.357},0).wait(1).to({scaleX:1.34,scaleY:1.34,alpha:0.351},0).wait(1).to({scaleX:1.34,scaleY:1.34,alpha:0.344},0).wait(1).to({scaleX:1.34,scaleY:1.34,alpha:0.337},0).wait(1).to({scaleX:1.35,scaleY:1.35,alpha:0.331},0).wait(1).to({scaleX:1.35,scaleY:1.35,alpha:0.324},0).wait(1).to({scaleX:1.35,scaleY:1.35,alpha:0.318},0).wait(1).to({scaleX:1.35,scaleY:1.35,alpha:0.311},0).wait(1).to({scaleX:1.35,scaleY:1.35,alpha:0.304},0).wait(1).to({alpha:0.298},0).wait(1).to({scaleX:1.35,scaleY:1.35,alpha:0.291},0).wait(1).to({scaleX:1.35,scaleY:1.35,alpha:0.285},0).wait(1).to({scaleX:1.35,scaleY:1.35,alpha:0.278},0).wait(1).to({scaleX:1.35,scaleY:1.35,alpha:0.271},0).wait(1).to({scaleX:1.35,scaleY:1.35,alpha:0.265},0).wait(1).to({scaleX:1.36,scaleY:1.36,alpha:0.258},0).wait(1).to({scaleX:1.36,scaleY:1.36,alpha:0.252},0).wait(1).to({scaleX:1.36,scaleY:1.36,alpha:0.245},0).wait(1).to({alpha:0.238},0).wait(1).to({scaleX:1.36,scaleY:1.36,alpha:0.232},0).wait(1).to({alpha:0.225},0).wait(1).to({alpha:0.219},0).wait(1).to({alpha:0.212},0).wait(1).to({alpha:0.205},0).wait(1).to({alpha:0.199},0).wait(1).to({alpha:0.192},0).wait(1).to({alpha:0.186},0).wait(1).to({alpha:0.179},0).wait(1).to({alpha:0.173},0).wait(1).to({alpha:0.166},0).wait(1).to({alpha:0.159},0).wait(1).to({alpha:0.153},0).wait(1).to({alpha:0.146},0).wait(1).to({alpha:0.14},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.126},0).wait(1).to({alpha:0.12},0).wait(1).to({alpha:0.113},0).wait(1).to({alpha:0.107},0).wait(1).to({alpha:0.1},0).wait(31).to({_off:true},1).wait(76));

	// spots2
	this.instance_5 = new lib._4_1();
	this.instance_5.setTransform(567.5,366.5,1,1,0,0,0,242.5,170.5);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(95).to({_off:false},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.067},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.133},0).wait(1).to({scaleX:1.01,scaleY:1.01,alpha:0.2},0).wait(1).to({scaleX:1.01,scaleY:1.01,alpha:0.267},0).wait(1).to({scaleX:1.01,scaleY:1.01,alpha:0.333},0).wait(1).to({scaleX:1.01,scaleY:1.01,alpha:0.4},0).wait(1).to({scaleX:1.02,scaleY:1.02,alpha:0.467},0).wait(1).to({scaleX:1.02,scaleY:1.02,alpha:0.533},0).wait(1).to({scaleX:1.02,scaleY:1.02,alpha:0.6},0).wait(1).to({scaleX:1.02,scaleY:1.02,alpha:0.667},0).wait(1).to({scaleX:1.03,scaleY:1.03,alpha:0.733},0).wait(1).to({scaleX:1.03,scaleY:1.03,alpha:0.8},0).wait(1).to({scaleX:1.03,scaleY:1.03,alpha:0.867},0).wait(1).to({scaleX:1.03,scaleY:1.03,alpha:0.933},0).wait(1).to({scaleX:1.04,scaleY:1.04,alpha:1},0).wait(1).to({scaleX:1.04,scaleY:1.04,alpha:0.994},0).wait(1).to({scaleX:1.04,scaleY:1.04,alpha:0.988},0).wait(1).to({scaleX:1.04,scaleY:1.04,alpha:0.982},0).wait(1).to({scaleX:1.05,scaleY:1.05,alpha:0.976},0).wait(1).to({scaleX:1.05,scaleY:1.05,alpha:0.971},0).wait(1).to({scaleX:1.05,scaleY:1.05,alpha:0.965},0).wait(1).to({scaleX:1.05,scaleY:1.05,alpha:0.959},0).wait(1).to({scaleX:1.06,scaleY:1.06,alpha:0.953},0).wait(1).to({scaleX:1.06,scaleY:1.06,alpha:0.947},0).wait(1).to({scaleX:1.06,scaleY:1.06,alpha:0.941},0).wait(1).to({scaleX:1.06,scaleY:1.06,alpha:0.935},0).wait(1).to({scaleX:1.07,scaleY:1.07,alpha:0.929},0).wait(1).to({scaleX:1.07,scaleY:1.07,alpha:0.924},0).wait(1).to({scaleX:1.07,scaleY:1.07,alpha:0.918},0).wait(1).to({scaleX:1.07,scaleY:1.07,alpha:0.912},0).wait(1).to({scaleX:1.08,scaleY:1.08,alpha:0.906},0).wait(1).to({scaleX:1.08,scaleY:1.08,alpha:0.9},0).wait(1).to({scaleX:1.08,scaleY:1.08,alpha:0.894},0).wait(1).to({scaleX:1.08,scaleY:1.08,alpha:0.888},0).wait(1).to({scaleX:1.08,scaleY:1.08,alpha:0.882},0).wait(1).to({scaleX:1.09,scaleY:1.09,alpha:0.876},0).wait(1).to({scaleX:1.09,scaleY:1.09,alpha:0.871},0).wait(1).to({scaleX:1.09,scaleY:1.09,alpha:0.865},0).wait(1).to({scaleX:1.09,scaleY:1.09,alpha:0.859},0).wait(1).to({scaleX:1.1,scaleY:1.1,alpha:0.853},0).wait(1).to({scaleX:1.1,scaleY:1.1,alpha:0.847},0).wait(1).to({scaleX:1.1,scaleY:1.1,alpha:0.841},0).wait(1).to({scaleX:1.1,scaleY:1.1,alpha:0.835},0).wait(1).to({scaleX:1.11,scaleY:1.11,alpha:0.829},0).wait(1).to({scaleX:1.11,scaleY:1.11,alpha:0.824},0).wait(1).to({scaleX:1.11,scaleY:1.11,alpha:0.818},0).wait(1).to({scaleX:1.11,scaleY:1.11,alpha:0.812},0).wait(1).to({scaleX:1.12,scaleY:1.12,alpha:0.806},0).wait(1).to({scaleX:1.12,scaleY:1.12,alpha:0.8},0).wait(1).to({scaleX:1.12,scaleY:1.12,alpha:0.794},0).wait(1).to({scaleX:1.12,scaleY:1.12,alpha:0.788},0).wait(1).to({scaleX:1.13,scaleY:1.13,alpha:0.782},0).wait(1).to({scaleX:1.13,scaleY:1.13,alpha:0.776},0).wait(1).to({scaleX:1.13,scaleY:1.13,alpha:0.771},0).wait(1).to({scaleX:1.13,scaleY:1.13,alpha:0.765},0).wait(1).to({scaleX:1.14,scaleY:1.14,alpha:0.759},0).wait(1).to({scaleX:1.14,scaleY:1.14,alpha:0.753},0).wait(1).to({scaleX:1.14,scaleY:1.14,alpha:0.747},0).wait(1).to({scaleX:1.14,scaleY:1.14,alpha:0.741},0).wait(1).to({scaleX:1.15,scaleY:1.15,alpha:0.735},0).wait(1).to({scaleX:1.15,scaleY:1.15,alpha:0.729},0).wait(1).to({scaleX:1.15,scaleY:1.15,alpha:0.724},0).wait(1).to({scaleX:1.15,scaleY:1.15,alpha:0.718},0).wait(1).to({scaleX:1.15,scaleY:1.15,alpha:0.712},0).wait(1).to({scaleX:1.16,scaleY:1.16,alpha:0.706},0).wait(1).to({scaleX:1.16,scaleY:1.16,alpha:0.7},0).wait(1).to({scaleX:1.16,scaleY:1.16,alpha:0.694},0).wait(1).to({scaleX:1.16,scaleY:1.16,alpha:0.688},0).wait(1).to({scaleX:1.17,scaleY:1.17,alpha:0.682},0).wait(1).to({scaleX:1.17,scaleY:1.17,alpha:0.676},0).wait(1).to({scaleX:1.17,scaleY:1.17,alpha:0.671},0).wait(1).to({scaleX:1.17,scaleY:1.17,alpha:0.665},0).wait(1).to({scaleX:1.18,scaleY:1.18,alpha:0.659},0).wait(1).to({scaleX:1.18,scaleY:1.18,alpha:0.653},0).wait(1).to({scaleX:1.18,scaleY:1.18,alpha:0.647},0).wait(1).to({scaleX:1.18,scaleY:1.18,alpha:0.641},0).wait(1).to({scaleX:1.19,scaleY:1.19,alpha:0.635},0).wait(1).to({scaleX:1.19,scaleY:1.19,alpha:0.629},0).wait(1).to({scaleX:1.19,scaleY:1.19,alpha:0.624},0).wait(1).to({scaleX:1.19,scaleY:1.19,alpha:0.618},0).wait(1).to({scaleX:1.2,scaleY:1.2,alpha:0.612},0).wait(1).to({scaleX:1.2,scaleY:1.2,alpha:0.606},0).wait(1).to({scaleX:1.2,scaleY:1.2,alpha:0.6},0).wait(1).to({scaleX:1.2,scaleY:1.2,alpha:0.594},0).wait(1).to({scaleX:1.21,scaleY:1.21,alpha:0.588},0).wait(1).to({scaleX:1.21,scaleY:1.21,alpha:0.582},0).wait(1).to({scaleX:1.21,scaleY:1.21,alpha:0.576},0).wait(1).to({scaleX:1.21,scaleY:1.21,alpha:0.571},0).wait(1).to({scaleX:1.22,scaleY:1.22,alpha:0.565},0).wait(1).to({scaleX:1.22,scaleY:1.22,alpha:0.559},0).wait(1).to({scaleX:1.22,scaleY:1.22,alpha:0.553},0).wait(1).to({scaleX:1.22,scaleY:1.22,alpha:0.547},0).wait(1).to({scaleX:1.22,scaleY:1.22,alpha:0.541},0).wait(1).to({scaleX:1.23,scaleY:1.23,alpha:0.535},0).wait(1).to({scaleX:1.23,scaleY:1.23,alpha:0.529},0).wait(1).to({scaleX:1.23,scaleY:1.23,alpha:0.524},0).wait(1).to({scaleX:1.23,scaleY:1.23,alpha:0.518},0).wait(1).to({scaleX:1.24,scaleY:1.24,alpha:0.512},0).wait(1).to({scaleX:1.24,scaleY:1.24,alpha:0.506},0).wait(1).to({scaleX:1.24,scaleY:1.24,alpha:0.5},0).wait(1).to({scaleX:1.24,scaleY:1.24,alpha:0.494},0).wait(1).to({scaleX:1.25,scaleY:1.25,alpha:0.488},0).wait(1).to({scaleX:1.25,scaleY:1.25,alpha:0.482},0).wait(1).to({scaleX:1.25,scaleY:1.25,alpha:0.476},0).wait(1).to({scaleX:1.25,scaleY:1.25,alpha:0.471},0).wait(1).to({scaleX:1.26,scaleY:1.26,alpha:0.465},0).wait(1).to({scaleX:1.26,scaleY:1.26,alpha:0.459},0).wait(1).to({scaleX:1.26,scaleY:1.26,alpha:0.453},0).wait(1).to({scaleX:1.26,scaleY:1.26,alpha:0.447},0).wait(1).to({scaleX:1.26,scaleY:1.26,alpha:0.441},0).wait(1).to({scaleX:1.27,scaleY:1.27,alpha:0.435},0).wait(1).to({scaleX:1.27,scaleY:1.27,alpha:0.429},0).wait(1).to({scaleX:1.27,scaleY:1.27,alpha:0.424},0).wait(1).to({scaleX:1.27,scaleY:1.27,alpha:0.418},0).wait(1).to({scaleX:1.28,scaleY:1.28,alpha:0.412},0).wait(1).to({scaleX:1.28,scaleY:1.28,alpha:0.406},0).wait(1).to({scaleX:1.28,scaleY:1.28,alpha:0.4},0).wait(1).to({scaleX:1.29,scaleY:1.29,alpha:0.394},0).wait(1).to({scaleX:1.29,scaleY:1.29,alpha:0.388},0).wait(1).to({scaleX:1.29,scaleY:1.29,alpha:0.382},0).wait(1).to({scaleX:1.29,scaleY:1.29,alpha:0.376},0).wait(1).to({scaleX:1.29,scaleY:1.29,alpha:0.371},0).wait(1).to({scaleX:1.3,scaleY:1.3,alpha:0.365},0).wait(1).to({scaleX:1.3,scaleY:1.3,alpha:0.359},0).wait(1).to({scaleX:1.3,scaleY:1.3,alpha:0.353},0).wait(1).to({scaleX:1.3,scaleY:1.3,alpha:0.347},0).wait(1).to({scaleX:1.31,scaleY:1.31,alpha:0.341},0).wait(1).to({scaleX:1.31,scaleY:1.31,alpha:0.335},0).wait(1).to({scaleX:1.31,scaleY:1.31,alpha:0.329},0).wait(1).to({scaleX:1.31,scaleY:1.31,alpha:0.324},0).wait(1).to({scaleX:1.32,scaleY:1.32,alpha:0.318},0).wait(1).to({scaleX:1.32,scaleY:1.32,alpha:0.312},0).wait(1).to({scaleX:1.32,scaleY:1.32,alpha:0.306},0).wait(1).to({scaleX:1.32,scaleY:1.32,alpha:0.3},0).wait(1).to({scaleX:1.33,scaleY:1.33,alpha:0.294},0).wait(1).to({scaleX:1.33,scaleY:1.33,alpha:0.288},0).wait(1).to({scaleX:1.33,scaleY:1.33,alpha:0.282},0).wait(1).to({scaleX:1.33,scaleY:1.33,alpha:0.276},0).wait(1).to({scaleX:1.34,scaleY:1.34,alpha:0.271},0).wait(1).to({scaleX:1.34,scaleY:1.34,alpha:0.265},0).wait(1).to({scaleX:1.34,scaleY:1.34,alpha:0.259},0).wait(1).to({scaleX:1.34,scaleY:1.34,alpha:0.253},0).wait(1).to({scaleX:1.35,scaleY:1.35,alpha:0.247},0).wait(1).to({scaleX:1.35,scaleY:1.35,alpha:0.241},0).wait(1).to({scaleX:1.35,scaleY:1.35,alpha:0.235},0).wait(1).to({scaleX:1.35,scaleY:1.35,alpha:0.229},0).wait(1).to({scaleX:1.35,scaleY:1.35,alpha:0.224},0).wait(1).to({scaleX:1.36,scaleY:1.36,alpha:0.218},0).wait(1).to({scaleX:1.36,scaleY:1.36,alpha:0.212},0).wait(1).to({scaleX:1.36,scaleY:1.36,alpha:0.206},0).wait(1).to({scaleX:1.36,scaleY:1.36,alpha:0.2},0).wait(1).to({scaleX:1.37,scaleY:1.37,alpha:0.194},0).wait(1).to({scaleX:1.37,scaleY:1.37,alpha:0.188},0).wait(1).to({scaleX:1.37,scaleY:1.37,alpha:0.182},0).wait(1).to({alpha:0.176},0).wait(1).to({alpha:0.171},0).wait(1).to({alpha:0.165},0).wait(1).to({alpha:0.159},0).wait(1).to({alpha:0.153},0).wait(1).to({alpha:0.147},0).wait(1).to({alpha:0.141},0).wait(1).to({alpha:0.135},0).wait(1).to({alpha:0.129},0).wait(1).to({alpha:0.124},0).wait(1).to({alpha:0.118},0).wait(1).to({alpha:0.112},0).wait(1).to({alpha:0.106},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0.094},0).wait(1).to({alpha:0.088},0).wait(1).to({alpha:0.082},0).wait(1).to({alpha:0.076},0).wait(1).to({alpha:0.071},0).wait(1).to({alpha:0.065},0).wait(1).to({alpha:0.059},0).wait(1).to({alpha:0.053},0).wait(1).to({alpha:0.047},0).wait(1).to({alpha:0.041},0).wait(1).to({alpha:0.035},0).wait(1).to({alpha:0.029},0).wait(1).to({alpha:0.024},0).wait(1).to({alpha:0.018},0).wait(1).to({alpha:0.012},0).wait(1).to({alpha:0.006},0).wait(1).to({alpha:0},0).wait(29).to({_off:true},1).wait(76));

	// spots3
	this.instance_6 = new lib._5_1();
	this.instance_6.setTransform(613,379.5,1,1,0,0,0,300,261.5);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(126).to({_off:false},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.05},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.1},0).wait(1).to({scaleX:1.01,scaleY:1.01,alpha:0.15},0).wait(1).to({scaleX:1.01,scaleY:1.01,y:379.6,alpha:0.2},0).wait(1).to({scaleX:1.01,scaleY:1.01,alpha:0.25},0).wait(1).to({scaleX:1.01,scaleY:1.01,alpha:0.3},0).wait(1).to({scaleX:1.02,scaleY:1.02,alpha:0.35},0).wait(1).to({scaleX:1.02,scaleY:1.02,y:379.7,alpha:0.4},0).wait(1).to({scaleX:1.02,scaleY:1.02,alpha:0.45},0).wait(1).to({scaleX:1.02,scaleY:1.02,alpha:0.5},0).wait(1).to({scaleX:1.03,scaleY:1.03,alpha:0.55},0).wait(1).to({scaleX:1.03,scaleY:1.03,alpha:0.6},0).wait(1).to({scaleX:1.03,scaleY:1.03,alpha:0.65},0).wait(1).to({scaleX:1.03,scaleY:1.03,alpha:0.7},0).wait(1).to({scaleX:1.04,scaleY:1.04,y:379.8,alpha:0.75},0).wait(1).to({scaleX:1.04,scaleY:1.04,alpha:0.8},0).wait(1).to({scaleX:1.04,scaleY:1.04,alpha:0.85},0).wait(1).to({scaleX:1.04,scaleY:1.04,alpha:0.9},0).wait(1).to({scaleX:1.05,scaleY:1.05,y:379.9,alpha:0.95},0).wait(1).to({scaleX:1.05,scaleY:1.05,y:379.8,alpha:1},0).wait(1).to({scaleX:1.05,scaleY:1.05,y:379.9,alpha:0.993},0).wait(1).to({scaleX:1.05,scaleY:1.05,alpha:0.986},0).wait(1).to({scaleX:1.06,scaleY:1.06,alpha:0.979},0).wait(1).to({scaleX:1.06,scaleY:1.06,alpha:0.972},0).wait(1).to({scaleX:1.06,scaleY:1.06,alpha:0.965},0).wait(1).to({scaleX:1.06,scaleY:1.06,y:380,alpha:0.958},0).wait(1).to({scaleX:1.07,scaleY:1.07,alpha:0.951},0).wait(1).to({scaleX:1.07,scaleY:1.07,alpha:0.944},0).wait(1).to({scaleX:1.07,scaleY:1.07,alpha:0.937},0).wait(1).to({scaleX:1.07,scaleY:1.07,y:380.1,alpha:0.93},0).wait(1).to({scaleX:1.08,scaleY:1.08,y:380,alpha:0.923},0).wait(1).to({scaleX:1.08,scaleY:1.08,y:380.1,alpha:0.915},0).wait(1).to({scaleX:1.08,scaleY:1.08,alpha:0.908},0).wait(1).to({scaleX:1.08,scaleY:1.08,alpha:0.901},0).wait(1).to({scaleX:1.09,scaleY:1.09,alpha:0.894},0).wait(1).to({scaleX:1.09,scaleY:1.09,alpha:0.887},0).wait(1).to({scaleX:1.09,scaleY:1.09,y:380.2,alpha:0.88},0).wait(1).to({scaleX:1.09,scaleY:1.09,alpha:0.873},0).wait(1).to({scaleX:1.1,scaleY:1.1,alpha:0.866},0).wait(1).to({scaleX:1.1,scaleY:1.1,alpha:0.859},0).wait(1).to({scaleX:1.1,scaleY:1.1,y:380.3,alpha:0.852},0).wait(1).to({scaleX:1.1,scaleY:1.1,alpha:0.845},0).wait(1).to({scaleX:1.11,scaleY:1.11,alpha:0.838},0).wait(1).to({scaleX:1.11,scaleY:1.11,alpha:0.831},0).wait(1).to({scaleX:1.11,scaleY:1.11,alpha:0.824},0).wait(1).to({scaleX:1.11,scaleY:1.11,alpha:0.817},0).wait(1).to({scaleX:1.11,scaleY:1.11,alpha:0.81},0).wait(1).to({scaleX:1.12,scaleY:1.12,y:380.4,alpha:0.803},0).wait(1).to({scaleX:1.12,scaleY:1.12,alpha:0.796},0).wait(1).to({scaleX:1.12,scaleY:1.12,alpha:0.789},0).wait(1).to({scaleX:1.12,scaleY:1.12,alpha:0.782},0).wait(1).to({scaleX:1.13,scaleY:1.13,y:380.5,alpha:0.775},0).wait(1).to({scaleX:1.13,scaleY:1.13,y:380.4,alpha:0.768},0).wait(1).to({scaleX:1.13,scaleY:1.13,y:380.5,alpha:0.761},0).wait(1).to({scaleX:1.13,scaleY:1.13,alpha:0.754},0).wait(1).to({scaleX:1.14,scaleY:1.14,alpha:0.746},0).wait(1).to({scaleX:1.14,scaleY:1.14,alpha:0.739},0).wait(1).to({scaleX:1.14,scaleY:1.14,alpha:0.732},0).wait(1).to({scaleX:1.14,scaleY:1.14,y:380.6,alpha:0.725},0).wait(1).to({scaleX:1.15,scaleY:1.15,alpha:0.718},0).wait(1).to({scaleX:1.15,scaleY:1.15,alpha:0.711},0).wait(1).to({scaleX:1.15,scaleY:1.15,alpha:0.704},0).wait(1).to({scaleX:1.15,scaleY:1.15,y:380.7,alpha:0.697},0).wait(1).to({scaleX:1.16,scaleY:1.16,y:380.6,alpha:0.69},0).wait(1).to({scaleX:1.16,scaleY:1.16,y:380.7,alpha:0.683},0).wait(1).to({scaleX:1.16,scaleY:1.16,alpha:0.676},0).wait(1).to({scaleX:1.16,scaleY:1.16,alpha:0.669},0).wait(1).to({scaleX:1.17,scaleY:1.17,alpha:0.662},0).wait(1).to({scaleX:1.17,scaleY:1.17,alpha:0.655},0).wait(1).to({scaleX:1.17,scaleY:1.17,y:380.8,alpha:0.648},0).wait(1).to({scaleX:1.17,scaleY:1.17,alpha:0.641},0).wait(1).to({scaleX:1.18,scaleY:1.18,alpha:0.634},0).wait(1).to({scaleX:1.18,scaleY:1.18,alpha:0.627},0).wait(1).to({scaleX:1.18,scaleY:1.18,y:380.9,alpha:0.62},0).wait(1).to({scaleX:1.18,scaleY:1.18,y:380.8,alpha:0.613},0).wait(1).to({scaleX:1.19,scaleY:1.19,y:380.9,alpha:0.606},0).wait(1).to({scaleX:1.19,scaleY:1.19,alpha:0.599},0).wait(1).to({scaleX:1.19,scaleY:1.19,alpha:0.592},0).wait(1).to({scaleX:1.19,scaleY:1.19,alpha:0.585},0).wait(1).to({scaleX:1.2,scaleY:1.2,alpha:0.577},0).wait(1).to({scaleX:1.2,scaleY:1.2,y:381,alpha:0.57},0).wait(1).to({scaleX:1.2,scaleY:1.2,alpha:0.563},0).wait(1).to({scaleX:1.2,scaleY:1.2,alpha:0.556},0).wait(1).to({scaleX:1.2,scaleY:1.2,alpha:0.549},0).wait(1).to({scaleX:1.21,scaleY:1.21,y:381.1,alpha:0.542},0).wait(1).to({scaleX:1.21,scaleY:1.21,alpha:0.535},0).wait(1).to({scaleX:1.21,scaleY:1.21,alpha:0.528},0).wait(1).to({scaleX:1.21,scaleY:1.21,alpha:0.521},0).wait(1).to({scaleX:1.22,scaleY:1.22,alpha:0.514},0).wait(1).to({scaleX:1.22,scaleY:1.22,alpha:0.507},0).wait(1).to({scaleX:1.22,scaleY:1.22,alpha:0.5},0).wait(1).to({scaleX:1.22,scaleY:1.22,y:381.2,alpha:0.493},0).wait(1).to({scaleX:1.23,scaleY:1.23,alpha:0.486},0).wait(1).to({scaleX:1.23,scaleY:1.23,alpha:0.479},0).wait(1).to({scaleX:1.23,scaleY:1.23,alpha:0.472},0).wait(1).to({scaleX:1.23,scaleY:1.23,y:381.3,alpha:0.465},0).wait(1).to({scaleX:1.24,scaleY:1.24,y:381.2,alpha:0.458},0).wait(1).to({scaleX:1.24,scaleY:1.24,y:381.3,alpha:0.451},0).wait(1).to({scaleX:1.24,scaleY:1.24,alpha:0.444},0).wait(1).to({scaleX:1.24,scaleY:1.24,alpha:0.437},0).wait(1).to({scaleX:1.25,scaleY:1.25,alpha:0.43},0).wait(1).to({scaleX:1.25,scaleY:1.25,alpha:0.423},0).wait(1).to({scaleX:1.25,scaleY:1.25,y:381.4,alpha:0.415},0).wait(1).to({scaleX:1.25,scaleY:1.25,alpha:0.408},0).wait(1).to({scaleX:1.26,scaleY:1.26,alpha:0.401},0).wait(1).to({scaleX:1.26,scaleY:1.26,alpha:0.394},0).wait(1).to({scaleX:1.26,scaleY:1.26,y:381.5,alpha:0.387},0).wait(1).to({scaleX:1.26,scaleY:1.26,y:381.4,alpha:0.38},0).wait(1).to({scaleX:1.26,scaleY:1.26,y:381.5,alpha:0.373},0).wait(1).to({scaleX:1.27,scaleY:1.27,alpha:0.366},0).wait(1).to({alpha:0.359},0).wait(1).to({alpha:0.352},0).wait(1).to({alpha:0.345},0).wait(1).to({alpha:0.338},0).wait(1).to({alpha:0.331},0).wait(1).to({alpha:0.324},0).wait(1).to({alpha:0.317},0).wait(1).to({alpha:0.31},0).wait(1).to({alpha:0.303},0).wait(1).to({alpha:0.296},0).wait(1).to({alpha:0.289},0).wait(1).to({alpha:0.282},0).wait(1).to({alpha:0.275},0).wait(1).to({alpha:0.268},0).wait(1).to({alpha:0.261},0).wait(1).to({alpha:0.254},0).wait(1).to({alpha:0.246},0).wait(1).to({alpha:0.239},0).wait(1).to({alpha:0.232},0).wait(1).to({alpha:0.225},0).wait(1).to({alpha:0.218},0).wait(1).to({alpha:0.211},0).wait(1).to({alpha:0.204},0).wait(1).to({alpha:0.197},0).wait(1).to({alpha:0.19},0).wait(1).to({alpha:0.183},0).wait(1).to({alpha:0.176},0).wait(1).to({alpha:0.169},0).wait(1).to({alpha:0.162},0).wait(1).to({alpha:0.155},0).wait(1).to({alpha:0.148},0).wait(1).to({alpha:0.141},0).wait(1).to({alpha:0.134},0).wait(1).to({alpha:0.127},0).wait(1).to({alpha:0.12},0).wait(1).to({alpha:0.113},0).wait(1).to({alpha:0.106},0).wait(1).to({alpha:0.099},0).wait(1).to({alpha:0.092},0).wait(1).to({alpha:0.085},0).wait(1).to({alpha:0.077},0).wait(1).to({alpha:0.07},0).wait(1).to({alpha:0.063},0).wait(1).to({alpha:0.056},0).wait(1).to({alpha:0.049},0).wait(1).to({alpha:0.042},0).wait(1).to({alpha:0.035},0).wait(1).to({alpha:0.028},0).wait(1).to({alpha:0.021},0).wait(1).to({alpha:0.014},0).wait(1).to({alpha:0.007},0).wait(1).to({alpha:0},0).wait(22).to({_off:true},1).wait(75));

	// spots4
	this.instance_7 = new lib._6_1();
	this.instance_7.setTransform(577.5,369,1,1,0,0,0,401.5,307);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(143).to({_off:false},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.04},0).wait(1).to({scaleX:1,scaleY:1,y:369.1,alpha:0.08},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.12},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.16},0).wait(1).to({scaleX:1.01,scaleY:1.01,alpha:0.2},0).wait(1).to({scaleX:1.01,scaleY:1.01,alpha:0.24},0).wait(1).to({scaleX:1.01,scaleY:1.01,alpha:0.28},0).wait(1).to({scaleX:1.01,scaleY:1.01,alpha:0.32},0).wait(1).to({scaleX:1.01,scaleY:1.01,y:369.2,alpha:0.36},0).wait(1).to({scaleX:1.01,scaleY:1.01,alpha:0.4},0).wait(1).to({scaleX:1.01,scaleY:1.01,alpha:0.44},0).wait(1).to({scaleX:1.01,scaleY:1.01,y:369.3,alpha:0.48},0).wait(1).to({scaleX:1.01,scaleY:1.01,alpha:0.52},0).wait(1).to({scaleX:1.02,scaleY:1.02,alpha:0.56},0).wait(1).to({scaleX:1.02,scaleY:1.02,alpha:0.6},0).wait(1).to({scaleX:1.02,scaleY:1.02,alpha:0.64},0).wait(1).to({scaleX:1.02,scaleY:1.02,alpha:0.68},0).wait(1).to({scaleX:1.02,scaleY:1.02,y:369.4,alpha:0.72},0).wait(1).to({scaleX:1.02,scaleY:1.02,alpha:0.76},0).wait(1).to({scaleX:1.02,scaleY:1.02,alpha:0.8},0).wait(1).to({scaleX:1.02,scaleY:1.02,y:369.5,alpha:0.84},0).wait(1).to({scaleX:1.03,scaleY:1.03,alpha:0.88},0).wait(1).to({scaleX:1.03,scaleY:1.03,alpha:0.92},0).wait(1).to({scaleX:1.03,scaleY:1.03,alpha:0.96},0).wait(1).to({scaleX:1.03,scaleY:1.03,alpha:1},0).wait(1).to({scaleX:1.03,scaleY:1.03,alpha:0.992},0).wait(1).to({scaleX:1.03,scaleY:1.03,alpha:0.984},0).wait(1).to({scaleX:1.03,scaleY:1.03,y:369.6,alpha:0.976},0).wait(1).to({scaleX:1.03,scaleY:1.03,alpha:0.968},0).wait(1).to({scaleX:1.04,scaleY:1.04,alpha:0.96},0).wait(1).to({scaleX:1.04,scaleY:1.04,y:369.7,alpha:0.952},0).wait(1).to({scaleX:1.04,scaleY:1.04,alpha:0.944},0).wait(1).to({scaleX:1.04,scaleY:1.04,alpha:0.935},0).wait(1).to({scaleX:1.04,scaleY:1.04,alpha:0.927},0).wait(1).to({scaleX:1.04,scaleY:1.04,alpha:0.919},0).wait(1).to({scaleX:1.04,scaleY:1.04,alpha:0.911},0).wait(1).to({scaleX:1.04,scaleY:1.04,alpha:0.903},0).wait(1).to({scaleX:1.05,scaleY:1.05,y:369.8,alpha:0.895},0).wait(1).to({scaleX:1.05,scaleY:1.05,alpha:0.887},0).wait(1).to({scaleX:1.05,scaleY:1.05,alpha:0.879},0).wait(1).to({scaleX:1.05,scaleY:1.05,y:369.9,alpha:0.871},0).wait(1).to({scaleX:1.05,scaleY:1.05,alpha:0.863},0).wait(1).to({scaleX:1.05,scaleY:1.05,alpha:0.855},0).wait(1).to({scaleX:1.05,scaleY:1.05,alpha:0.847},0).wait(1).to({scaleX:1.05,scaleY:1.05,alpha:0.839},0).wait(1).to({scaleX:1.06,scaleY:1.06,alpha:0.831},0).wait(1).to({scaleX:1.06,scaleY:1.06,y:370,alpha:0.823},0).wait(1).to({scaleX:1.06,scaleY:1.06,alpha:0.815},0).wait(1).to({scaleX:1.06,scaleY:1.06,alpha:0.806},0).wait(1).to({scaleX:1.06,scaleY:1.06,y:370.1,alpha:0.798},0).wait(1).to({scaleX:1.06,scaleY:1.06,alpha:0.79},0).wait(1).to({scaleX:1.06,scaleY:1.06,alpha:0.782},0).wait(1).to({scaleX:1.06,scaleY:1.06,alpha:0.774},0).wait(1).to({scaleX:1.06,scaleY:1.06,alpha:0.766},0).wait(1).to({scaleX:1.07,scaleY:1.07,alpha:0.758},0).wait(1).to({scaleX:1.07,scaleY:1.07,alpha:0.75},0).wait(1).to({scaleX:1.07,scaleY:1.07,y:370.2,alpha:0.742},0).wait(1).to({scaleX:1.07,scaleY:1.07,alpha:0.734},0).wait(1).to({scaleX:1.07,scaleY:1.07,alpha:0.726},0).wait(1).to({scaleX:1.07,scaleY:1.07,y:370.3,alpha:0.718},0).wait(1).to({scaleX:1.07,scaleY:1.07,alpha:0.71},0).wait(1).to({scaleX:1.07,scaleY:1.07,alpha:0.702},0).wait(1).to({scaleX:1.08,scaleY:1.08,alpha:0.694},0).wait(1).to({scaleX:1.08,scaleY:1.08,alpha:0.685},0).wait(1).to({scaleX:1.08,scaleY:1.08,alpha:0.677},0).wait(1).to({scaleX:1.08,scaleY:1.08,y:370.4,alpha:0.669},0).wait(1).to({scaleX:1.08,scaleY:1.08,alpha:0.661},0).wait(1).to({scaleX:1.08,scaleY:1.08,alpha:0.653},0).wait(1).to({scaleX:1.08,scaleY:1.08,y:370.5,alpha:0.645},0).wait(1).to({scaleX:1.08,scaleY:1.08,alpha:0.637},0).wait(1).to({scaleX:1.09,scaleY:1.09,alpha:0.629},0).wait(1).to({scaleX:1.09,scaleY:1.09,alpha:0.621},0).wait(1).to({scaleX:1.09,scaleY:1.09,alpha:0.613},0).wait(1).to({scaleX:1.09,scaleY:1.09,alpha:0.605},0).wait(1).to({scaleX:1.09,scaleY:1.09,alpha:0.597},0).wait(1).to({scaleX:1.09,scaleY:1.09,y:370.6,alpha:0.589},0).wait(1).to({scaleX:1.09,scaleY:1.09,alpha:0.581},0).wait(1).to({scaleX:1.09,scaleY:1.09,alpha:0.573},0).wait(1).to({scaleX:1.09,scaleY:1.09,y:370.7,alpha:0.565},0).wait(1).to({scaleX:1.1,scaleY:1.1,alpha:0.556},0).wait(1).to({scaleX:1.1,scaleY:1.1,alpha:0.548},0).wait(1).to({scaleX:1.1,scaleY:1.1,alpha:0.54},0).wait(1).to({scaleX:1.1,scaleY:1.1,alpha:0.532},0).wait(1).to({scaleX:1.1,scaleY:1.1,alpha:0.524},0).wait(1).to({scaleX:1.1,scaleY:1.1,y:370.8,alpha:0.516},0).wait(1).to({scaleX:1.1,scaleY:1.1,alpha:0.508},0).wait(1).to({scaleX:1.1,scaleY:1.1,alpha:0.5},0).wait(1).to({scaleX:1.11,scaleY:1.11,alpha:0.492},0).wait(1).to({scaleX:1.11,scaleY:1.11,y:370.9,alpha:0.484},0).wait(1).to({scaleX:1.11,scaleY:1.11,alpha:0.476},0).wait(1).to({scaleX:1.11,scaleY:1.11,alpha:0.468},0).wait(1).to({scaleX:1.11,scaleY:1.11,alpha:0.46},0).wait(1).to({scaleX:1.11,scaleY:1.11,alpha:0.452},0).wait(1).to({scaleX:1.11,scaleY:1.11,alpha:0.444},0).wait(1).to({scaleX:1.11,scaleY:1.11,y:371,alpha:0.435},0).wait(1).to({scaleX:1.11,scaleY:1.11,alpha:0.427},0).wait(1).to({alpha:0.419},0).wait(1).to({alpha:0.411},0).wait(1).to({alpha:0.403},0).wait(1).to({alpha:0.395},0).wait(1).to({alpha:0.387},0).wait(1).to({alpha:0.379},0).wait(1).to({alpha:0.371},0).wait(1).to({alpha:0.363},0).wait(1).to({alpha:0.355},0).wait(1).to({alpha:0.347},0).wait(1).to({alpha:0.339},0).wait(1).to({alpha:0.331},0).wait(1).to({alpha:0.323},0).wait(1).to({alpha:0.315},0).wait(1).to({alpha:0.306},0).wait(1).to({alpha:0.298},0).wait(1).to({alpha:0.29},0).wait(1).to({alpha:0.282},0).wait(1).to({alpha:0.274},0).wait(1).to({alpha:0.266},0).wait(1).to({alpha:0.258},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.242},0).wait(1).to({alpha:0.234},0).wait(1).to({alpha:0.226},0).wait(1).to({alpha:0.218},0).wait(1).to({alpha:0.21},0).wait(1).to({alpha:0.202},0).wait(1).to({alpha:0.194},0).wait(1).to({alpha:0.185},0).wait(1).to({alpha:0.177},0).wait(1).to({alpha:0.169},0).wait(1).to({alpha:0.161},0).wait(1).to({alpha:0.153},0).wait(1).to({alpha:0.145},0).wait(1).to({alpha:0.137},0).wait(1).to({alpha:0.129},0).wait(1).to({alpha:0.121},0).wait(1).to({alpha:0.113},0).wait(1).to({alpha:0.105},0).wait(1).to({alpha:0.097},0).wait(1).to({alpha:0.089},0).wait(1).to({alpha:0.081},0).wait(1).to({alpha:0.073},0).wait(1).to({alpha:0.065},0).wait(1).to({alpha:0.056},0).wait(1).to({alpha:0.048},0).wait(1).to({alpha:0.04},0).wait(1).to({alpha:0.032},0).wait(1).to({alpha:0.024},0).wait(1).to({alpha:0.016},0).wait(1).to({alpha:0.008},0).wait(1).to({alpha:0},0).wait(18).to({_off:true},1).wait(75));

	// black bg
	this.instance_8 = new lib.Bg();
	this.instance_8.setTransform(610.1,393.9,1,1,0,0,0,610.1,393.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(386));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(600,384,1220.2,787.8);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
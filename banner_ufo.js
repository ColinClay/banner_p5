(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"banner_ufo_atlas_1", frames: [[0,0,552,771],[164,773,19,19],[0,773,92,92],[94,773,68,42]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_3 = function() {
	this.initialize(ss["banner_ufo_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["banner_ufo_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["banner_ufo_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap1 = function() {
	this.initialize(ss["banner_ufo_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Visit_btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Label
	this.instance = new lib.Bitmap1();
	this.instance.setTransform(-31,-20,1.1763,1.3807);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},3).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#003399").ss(4,1,1).p("Am3ipINvAAQA8AAAAA8IAADbQAAA8g8AAItvAAQg8AAAAg8IAAjbQAAg8A8AAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6699FF").s().p("Am3CqQg8AAAAg8IAAjbQAAg8A8AAINvAAQA8AAAAA8IAADbQAAA8g8AAg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#4D88FF").ss(4,1,1).p("Am3ipINvAAQA8AAAAA8IAADbQAAA8g8AAItvAAQg8AAAAg8IAAjbQAAg8A8AAg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B2CBFC").s().p("Am3CqQg8AAAAg8IAAjbQAAg8A8AAINvAAQA8AAAAA8IAADbQAAA8g8AAg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#032467").ss(4,1,1).p("Am3ipINvAAQA8AAAAA8IAADbQAAA8g8AAItvAAQg8AAAAg8IAAjbQAAg8A8AAg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#003BB1").s().p("Am3CqQg8AAAAg8IAAjbQAAg8A8AAINvAAQA8AAAAA8IAADbQAAA8g8AAg");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#003399").ss(2,1,1).p("Am3ipINvAAQA8AAAAA8IAADbQAAA8g8AAItvAAQg8AAAAg8IAAjbQAAg8A8AAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_1},{t:this.shape_6}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52,-20,104,58);


(lib.Tween3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("Gaming Productions", "normal 400 26px 'tk-acier-bat-noir'");
	this.text.lineHeight = 29;
	this.text.lineWidth = 267;
	this.text.parent = this;
	this.text.setTransform(-133.45,-16.45);
	if(!lib.properties.webfonts['tk-acier-bat-noir']) {
		lib.webFontTxtInst['tk-acier-bat-noir'] = lib.webFontTxtInst['tk-acier-bat-noir'] || [];
		lib.webFontTxtInst['tk-acier-bat-noir'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-135.4,-18.4,270.9,36.9);


(lib.Tween2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("SpaceStation", "normal 400 30px 'tk-acier-bat-noir'", "#FFFF33");
	this.text.lineHeight = 33;
	this.text.lineWidth = 198;
	this.text.parent = this;
	this.text.setTransform(-98.95,-15.85);
	if(!lib.properties.webfonts['tk-acier-bat-noir']) {
		lib.webFontTxtInst['tk-acier-bat-noir'] = lib.webFontTxtInst['tk-acier-bat-noir'] || [];
		lib.webFontTxtInst['tk-acier-bat-noir'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100.9,-17.8,201.9,35.7);


(lib.Tree = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#181B1B").s().p("ACxGCQhWhJhAgfIAAgDIgbgIQAMAEAPAHIgzCrIg5gSIA0iqQhGgKhxANQhEAHgmAJQCXgoCOizQg2gBhGAIIhBAIQCcgjCLjEQgygFhHAFQgiACggAEQB/gYBxiTQA4hJAehEIgFAwQgFA8AFA6QAMC4BcBbQhRhHhIgmQAIDxBsBzQhLhGhJgvQAUDkBmB0Qghghgugng");
	this.shape.setTransform(31.9,45.825);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Tree, new cjs.Rectangle(0,0,63.8,91.7), null);


(lib.Path_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#373535").p("ALcAAQAABAjWAtQjXAtkvAAQkuAAjWgtQjXgtAAhAQAAg/DXgtQDWgtEuAAQEvAADXAtQDWAuAAA+g");
	this.shape.setTransform(88.675,30.975);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FBE738").s().p("AoEBtQjXgtAAhAQAAg/DXgtQDWgtEuAAQEvAADXAtQDWAuAAA+QAABAjWAtQjXAtkvAAQkuAAjWgtg");
	this.shape_1.setTransform(88.675,30.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_5, new cjs.Rectangle(14.5,14.6,148.4,32.8), null);


(lib.Path_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#373535").p("ABqAzQgNATgpgBQgogCgrgVQgsgVgVgcQgWgcANgTQANgTApABQAoACArAVQAsAVAWAbQAVAdgNATg");
	this.shape.setTransform(20.5882,16.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FBE738").s().p("AA0BFQgogCgrgVQgsgVgVgcQgWgcANgTQANgTApABQAoACArAVQAsAVAWAbQAVAdgNATQgNASglAAIgEAAg");
	this.shape_1.setTransform(20.5882,16.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_4, new cjs.Rectangle(6.8,8.7,26.999999999999996,17.2), null);


(lib.Path_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#373535").p("AB5AOQgDAWgnAMQgmALgxgGQgygGghgUQghgUAEgUQAEgWAmgLQAlgLAyAFQAyAGAhAUQAhAUgEAUg");
	this.shape.setTransform(21.7296,15.1892);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FBE738").s().p("AgIA1QgygGghgUQghgUAEgUQAEgWAmgLQAlgLAyAFQAyAGAhAUQAhAUgEAUQgDAWgnAMQgYAHgeAAQgQAAgRgCg");
	this.shape_1.setTransform(21.7296,15.1892);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_3, new cjs.Rectangle(8.6,8.7,26.5,13.2), null);


(lib.Path_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#373535").p("AB6gCQABAVgjAQQgjARgzABQgxACglgPQgkgOgBgWQgBgVAjgRQAjgRAzgBQAxgCAlAPQAlAPAAAWg");
	this.shape.setTransform(21.975,14.975);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FBE738").s().p("AhUAoQgkgOgBgWQgBgVAjgRQAjgRAzgBQAxgCAlAPQAlAPAAAWQABAVgjAQQgjARgzABIgIAAQgtAAghgNg");
	this.shape_1.setTransform(21.975,14.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2, new cjs.Rectangle(8.8,8.7,26.499999999999996,12.600000000000001), null);


(lib.Path_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#373535").p("AB1geQAIAVgdAXQgcAYgxANQgvANgogGQgngGgJgVQgIgVAdgXQAcgYAxgNQAvgMAoAFQAoAGAIAVg");
	this.shape.setTransform(21.4337,15.6357);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FBE738").s().p("AhEA6QgngGgJgVQgIgVAdgXQAcgYAxgNQAvgMAoAFQAoAGAIAVQAIAVgdAXQgcAYgxANQggAJgdAAQgNAAgNgCg");
	this.shape_1.setTransform(21.4337,15.6357);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1, new cjs.Rectangle(8.6,8.7,26.699999999999996,14.8), null);


(lib.Path = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#373535").p("ABvgqQALAUgZAaQgYAbguARQgtASgpgCQgogBgLgUQgLgUAYgaQAZgbAugRQAtgSAoACQApABALAUg");
	this.shape.setTransform(21.0107,16.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FBE738").s().p("Ag7BAQgogBgLgUQgLgUAYgaQAZgbAugRQAtgSAoACQApABALAUQALAUgZAaQgYAbguARQgpAQgmAAIgHAAg");
	this.shape_1.setTransform(21.0107,16.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(7.5,8.7,27,14.8), null);


(lib.UFO = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Path();
	this.instance.setTransform(-87.45,-130.75,1,1,0,0,0,20.9,16.1);
	this.instance.shadow = new cjs.Shadow("rgba(254,239,126,0.749)",0,0,9);

	this.instance_1 = new lib.Path_1();
	this.instance_1.setTransform(-43.4,-146,1,1,0,0,0,22.2,16.4);
	this.instance_1.shadow = new cjs.Shadow("rgba(254,239,126,0.749)",0,0,9);

	this.instance_2 = new lib.Path_2();
	this.instance_2.setTransform(6.5,-152.7,1,1,0,0,0,22.2,15);
	this.instance_2.shadow = new cjs.Shadow("rgba(254,239,126,0.749)",0,0,9);

	this.instance_3 = new lib.Path_3();
	this.instance_3.setTransform(56.8,-148.1,1,1,0,0,0,22.1,15.3);
	this.instance_3.shadow = new cjs.Shadow("rgba(254,239,126,0.749)",0,0,9);

	this.instance_4 = new lib.Path_4();
	this.instance_4.setTransform(93.55,-129.8,1,1,0,0,0,20.2,17.5);
	this.instance_4.shadow = new cjs.Shadow("rgba(254,239,126,0.749)",0,0,9);

	this.instance_5 = new lib.Path_5();
	this.instance_5.setTransform(6.3,-103.45,1,1,0,0,0,88.7,30.9);
	this.instance_5.shadow = new cjs.Shadow("rgba(249,222,71,0.749)",0,0,15);

	this.instance_6 = new lib.CachedBmp_3();
	this.instance_6.setTransform(-137.7,-193.1,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-137.7,-193.1,276,385.5);


(lib.Tween1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.UFO("synched",0);
	this.instance.setTransform(11.7,1.75,0.0716,0.0716,0,0,0,1.4,0.7);

	this.instance_1 = new lib.CachedBmp_2();
	this.instance_1.setTransform(-20.75,-21.2,0.4674,0.4674);

	this.instance_2 = new lib.Tree();
	this.instance_2.setTransform(12.5,0.3,0.0716,0.0716,122.4815,0,0,32.2,44.1);

	this.instance_3 = new lib.CachedBmp_1();
	this.instance_3.setTransform(-21.45,-21.5,0.4674,0.4674);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.4,-23.8,60.199999999999996,45.3);


// stage content:
(lib.banner_ufo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [59];
	// timeline functions:
	this.frame_59 = function() {
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.visit.on('click', function(){
		/*
		Loads the URL in a new browser window.
		*/
		window.open('http://www.adobe.com', '_blank');
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(59).call(this.frame_59).wait(1));

	// Button
	this.visit = new lib.Visit_btn();
	this.visit.name = "visit";
	this.visit.setTransform(404,31);
	this.visit._off = true;
	new cjs.ButtonHelper(this.visit, 0, 1, 2, false, new lib.Visit_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.visit).wait(59).to({_off:false},0).wait(1));

	// SpaceStation
	this.instance = new lib.Tween2("synched",0);
	this.instance.setTransform(170,-40);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({_off:false},0).to({x:163,y:18},30).wait(1));

	// GamingProducitons
	this.instance_1 = new lib.Tween3("synched",0);
	this.instance_1.setTransform(687,49.45);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(39).to({_off:false},0).to({x:197,y:49},20).wait(1));

	// UfoLogo
	this.instance_2 = new lib.Tween1("synched",0);
	this.instance_2.setTransform(517,33,1.0698,1.0698);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).to({scaleX:1.0673,scaleY:1.0673,x:27},19).to({startPosition:0},31).wait(1));

	// BG_real
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#273C37").s().p("EgkeAEsIAApXMBI9AAAIAAJXg");
	this.shape.setTransform(234,31);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(60));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(234.5,-27.8,588,96.8);
// library properties:
lib.properties = {
	id: 'A5BB4E2D8C88C945B43BD314A9CB4539',
	width: 468,
	height: 60,
	fps: 24,
	color: "#000000",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/banner_ufo_atlas_1.png", id:"banner_ufo_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['A5BB4E2D8C88C945B43BD314A9CB4539'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;
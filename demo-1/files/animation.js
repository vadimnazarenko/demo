var density = 10,
    speed = 1,
    start = {yMin: 0, yMax: 20, xMin:0, xMax:20, scaleMin:0.6, scaleMax:0.8, opacityMin:0.6, opacityMax:0.8},
    mid = {yMin: 20, yMax: 120, xMin:20, xMax:120, scaleMin:0.8, scaleMax:1.2, opacityMin:0.8, opacityMax:1},
    end = {yMin:-120, yMax:-120, xMin:0, xMax:160, scaleMin:0.6, scaleMax:0.8, opacityMin:0.6, opacityMax:0.8},
    colors = ["#003ed9","#00e6d7","#fb8100","#ef0000","#e849e0","#c7e105","#1bd51b","#2044e0"];

  function range(map, prop) {
    var min = map[prop + "Min"],
      max = map[prop + "Max"];
    return min + (max - min) * Math.random();
  }

  function spawn(particle) {
    var wholeDuration = (10 / speed) * (0.7 + Math.random() * 0.4),
      delay = wholeDuration * Math.random(),
      partialDuration = (wholeDuration + 1) * (0.3 + Math.random() * 0.4);

    //set the starting values
    TweenLite.set(particle, {y:range(start, "y"), x:range(start, "x"), scale:range(start, "scale"), opacity:range(start, "opacity"), visibility:"hidden", color:colors[ Math.floor(Math.random() * colors.length) ]});

    //the y tween should be continuous and smooth the whole duration
    TweenLite.to(particle, wholeDuration, {delay:delay, y:range(end, "y"), ease:Linear.easeNone});

    //now tween the x independently so that it looks more randomized (rather than linking it with scale/opacity changes too)
    TweenLite.to(particle, partialDuration, {delay:delay, x:range(mid, "x"), ease:Power1.easeOut});
    TweenLite.to(particle, wholeDuration - partialDuration, {delay:partialDuration + delay, x:range(end, "x"), ease:Power1.easeIn});

    //now create some random scale and opacity changes
    partialDuration = wholeDuration * (0.5 + Math.random() * 0.3);
    TweenLite.to(particle, partialDuration, {delay:delay, scale:range(mid, "scale"), autoAlpha:range(mid, "opacity"), ease:Linear.easeNone});
    TweenLite.to(particle, wholeDuration - partialDuration, {delay:partialDuration + delay, scale:range(end, "scale"), autoAlpha:range(end, "opacity"), ease:Linear.easeNone, onComplete:spawn, onCompleteParams:[particle]});
  }


  $(window).ready(function() {
    spawn($('#hb1-1'));
    spawn($('#hb1-2'));
    spawn($('#hb1-3'));
    spawn($('#hb1-4'));
    spawn($('#hb1-5'));
    spawn($('#hb1-6'));
    spawn($('#hb1-7'));
    spawn($('#hb1-8'));

    spawn($('#hb2-1'));
    spawn($('#hb2-2'));
    spawn($('#hb2-3'));
    spawn($('#hb2-4'));
    spawn($('#hb2-5'));

    spawn($('#hb3-1'));
    spawn($('#hb3-2'));
    spawn($('#hb3-3'));
    spawn($('#hb3-4'));
    spawn($('#hb3-5'));

    spawn($('#hb4-1'));
    spawn($('#hb4-2'));
    spawn($('#hb4-3'));
    spawn($('#hb4-4'));

    spawn($('#hb5-1'));
    spawn($('#hb5-2'));
    spawn($('#hb5-3'));
    spawn($('#hb5-4'));
    spawn($('#hb5-5'));

    spawn($('#hb6-1'));
    spawn($('#hb6-2'));
    spawn($('#hb6-3'));
    spawn($('#hb6-4'));
    spawn($('#hb6-5'));  

    spawn($('#pb1-1'));
    spawn($('#pb1-2'));
    spawn($('#pb1-3'));
    spawn($('#pb1-4'));
    spawn($('#pb1-5'));
    spawn($('#pb1-6'));
    spawn($('#pb1-7')); 

    spawn($('#pb2-1'));
    spawn($('#pb2-2'));
    spawn($('#pb2-3'));
    spawn($('#pb2-4'));
    spawn($('#pb2-5')); 

    spawn($('#pb3-1'));
    spawn($('#pb3-2'));
    spawn($('#pb3-3'));
    spawn($('#pb3-4'));
    spawn($('#pb3-5'));

    spawn($('#bb1-1'));
    spawn($('#bb1-2'));
    spawn($('#bb1-3'));
    spawn($('#bb1-4'));
    spawn($('#bb1-5'));
    spawn($('#bb1-6'));

    spawn($('#bb2-1'));
    spawn($('#bb2-2'));
    spawn($('#bb2-3'));
    spawn($('#bb2-4'));
    spawn($('#bb2-5'));
    spawn($('#bb2-6'));
    spawn($('#bb2-7'));
    spawn($('#bb2-8'));
    spawn($('#bb2-9'));

    spawn($('#fb1-1'));
    spawn($('#fb1-2'));
    spawn($('#fb1-3'));
    spawn($('#fb1-4'));
    spawn($('#fb1-5'));
    spawn($('#fb1-6'));
    spawn($('#fb1-7'));

    spawn($('#fb2-1'));
    spawn($('#fb2-2'));
    spawn($('#fb2-3'));
    spawn($('#fb2-4'));
    spawn($('#fb2-5'));
    spawn($('#fb2-6'));
    spawn($('#fb2-7'));

    spawn($('#fb3-1'));
    spawn($('#fb3-2'));
    spawn($('#fb3-3'));
    spawn($('#fb3-4'));
    spawn($('#fb3-5'));
    spawn($('#fb3-6'));
    spawn($('#fb3-7'));

    spawn($('#fb4-1'));
    spawn($('#fb4-2'));
    spawn($('#fb4-3'));
    spawn($('#fb4-4'));
    spawn($('#fb4-5'));
    spawn($('#fb4-6'));
    spawn($('#fb4-7'));

    var rotateCog1 = new TweenMax.to('#cog-1', 1.8, {rotation:"360", ease:Linear.easeNone, repeat:-1}, {timeScale:0});
    var rotateCog2 = new TweenMax.to('#cog-2', 1.8, {rotation:"360", ease:Linear.easeNone, repeat:-1}, {timeScale:0});
    var rotateCog3 = new TweenMax.to('#cog-3', 1.8, {rotation:"360", ease:Linear.easeNone, repeat:-1}, {timeScale:0});
    var rotateCog3 = new TweenMax.to('#cog-4', 1.8, {rotation:"360", ease:Linear.easeNone, repeat:-1}, {timeScale:0});
    var rotateCog3 = new TweenMax.to('#cog-5', 1.8, {rotation:"360", ease:Linear.easeNone, repeat:-1}, {timeScale:0});
    var rotateCog3 = new TweenMax.to('#cog-6', 1.8, {rotation:"360", ease:Linear.easeNone, repeat:-1}, {timeScale:0});
    var rotateCog3 = new TweenMax.to('#cog-7', 1.8, {rotation:"360", ease:Linear.easeNone, repeat:-1}, {timeScale:0});
    var rotateCog3 = new TweenMax.to('#cog-8', 1.8, {rotation:"360", ease:Linear.easeNone, repeat:-1}, {timeScale:0});
    var rotateCog3 = new TweenMax.to('#cog-9', 1.8, {rotation:"360", ease:Linear.easeNone, repeat:-1}, {timeScale:0});
    var rotateCog3 = new TweenMax.to('#cog-10', 1.8, {rotation:"360", ease:Linear.easeNone, repeat:-1}, {timeScale:0});
    var rotateCog3 = new TweenMax.to('#cog-11', 1.8, {rotation:"360", ease:Linear.easeNone, repeat:-1}, {timeScale:0});
    var rotateCog3 = new TweenMax.to('#cog-12', 1.8, {rotation:"360", ease:Linear.easeNone, repeat:-1}, {timeScale:0});
    var rotateCog3 = new TweenMax.to('#cog-13', 1.8, {rotation:"360", ease:Linear.easeNone, repeat:-1}, {timeScale:0});
    var rotateCog3 = new TweenMax.to('#cog-14', 1.8, {rotation:"360", ease:Linear.easeNone, repeat:-1}, {timeScale:0});
    var rotateCog3 = new TweenMax.to('#cog-15', 1.8, {rotation:"360", ease:Linear.easeNone, repeat:-1}, {timeScale:0});

  });
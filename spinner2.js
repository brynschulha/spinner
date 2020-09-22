function start(counter){
  let tick = ["|", "/", "-", "\\", "|", "/", "-", "\\", "|"];
  if(counter < tick.length){
    setTimeout(function(){
      process.stdout.write('\r' + tick[counter] + '    ');
      counter++;
      start(counter);
    }, 200);
  }
}

start(0);
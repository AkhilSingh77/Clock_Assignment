setInterval(()=>{
   let  d = new Date();
  let   htime = d.getHours();
   let  mtime = d.getMinutes();
   let  stime = d.getSeconds();

   let  hrotation = 30*htime + mtime/2;
   let  mrotation = 6*mtime;
   let  srotation = 6*stime;

   const hour =  document.getElementsByClassName("clock__allhands--hr ")[0];
  const minute  =  document.getElementsByClassName("clock__allhands--min")[0];
  const second =  document.getElementsByClassName("clock__allhands--sec")[0];

  hour.style.transform = `rotate(${hrotation}deg)`;
  minute.style.transform = `rotate(${mrotation}deg)`;
  second.style.transform = `rotate(${srotation}deg)`;

},1000)
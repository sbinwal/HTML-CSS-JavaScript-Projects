console.log("Welcome to Spotify")

let songIndex = 0;
let audioElementt=new Audio('1.mp3');
let masterPlay = document.getElementById('masterplay');
let myProgressBar=document.getElementById('progressbar');
console.log(myProgressBar)
let songsname=Array.from(document.getElementsByClassName('common'));
console.log(songsname);
let songMasterName=document.getElementById('songName');
let songs =[

    {songName: "Warriyo - Mortals [NCS Release]",filePath:"1.mp3", coverPath:"1.jpg"},
    {songName: "Cielo - Huma-Huma",filePath:"2.mp3", coverPath:"2.jpg"},
    {songName: "DEAF KEV - Invincible [NCS Release]-320k",filePath:"3.mp3", coverPath:"1.jpg"},
    {songName: "Different Heaven & EH!DE - My Heart",filePath:"4.mp3", coverPath:"1.jpg"},
    {songName: "Janji-Heroes-Tonight-feat-Johnning-NCS-Release",filePath:"5.mp3", coverPath:"1.jpg"},
    {songName: "Rabba - Salam-e-Ishq",filePath:"6.mp3", coverPath:"1.jpg"},
    {songName: "Sakhiyaan - Salam-e-Ishq",filePath:"7.mp3", coverPath:"1.jpg"},
    {songName: "Bhula Dena - Salam-e-Ishq",filePath:"8.mp3", coverPath:"1.jpg"},
    {songName: "Tumhari Kasam - Salam-e-Ishq",filePath:"9.mp3", coverPath:"1.jpg"},
    {songName: "Na Jaana - Salam-e-Ishq",filePath:"10.mp3", coverPath:"1.jpg"}
         
]

songsname.forEach((element,i) => {
    // console.log(element)
    
    element.getElementsByClassName('song')[0].innerText=songs[i].songName;
    // element.getElementsByClassName('logo')[0].innerHTML.src=songs[i].coverPath;
    // console.log(a)
    // a.src=songs[i].coverPath;

});
//Handle play/pause click

masterPlay.addEventListener('click',()=>{

    
    if(audioElementt.paused || audioElementt.currentTime<=0)
    {
        audioElementt.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause')
    }
    else{
        audioElementt.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play')
    }
})
// Listen to Events
audioElementt.addEventListener('timeupdate',()=>{

    console.log('timeupdate')
    progress= parseInt((audioElementt.currentTime/audioElementt.duration)*100)
    console.log(progress);
    myProgressBar.value = progress;  // progress bar will increased
})

myProgressBar.addEventListener('change',()=>{
    audioElementt.currentTime = ((myProgressBar.value*audioElementt.duration))/100;
})

const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        
          

          element.classList.remove('fa-circle-pause');
          element.classList.add('fa-circle-play');
})
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
                  element.addEventListener('click',(e)=>{
                    
                    makeAllPlays();
                    
                    songIndex=parseInt(e.target.id);
                    if(audioElementt.paused || audioElementt.currentTime<=0)
                    {
                        audioElementt.src=`${songIndex+1}.mp3`;
                        // audioElementt.currentTime=0;
                    audioElementt.play();
                    e.target.classList.remove('fa-circle-play');
                    e.target.classList.add('fa-circle-pause');
                    masterPlay.classList.remove('fa-circle-play');
                    masterPlay.classList.add('fa-circle-pause')
                    songMasterName.innerHTML=songs[songIndex].songName;

                    }

                    else
                    {
                        audioElementt.pause();
                    e.target.classList.remove('fa-circle-pause');
                    e.target.classList.add('fa-circle-play');
                    masterPlay.classList.remove('fa-circle-pause');
                    masterPlay.classList.add('fa-circle-play')
                    }
                    
                    
                    
                    // audioElementt.play();
                   
                       
                   
                    
                  })

})

document.getElementById('next').addEventListener('click',()=>{
      if(songIndex>9)
      {
        songIndex=0
      }
      else{
        songIndex+=1;
      }
      audioElementt.src=`${songIndex+1}.mp3`;
      // audioElementt.currentTime=0;
  audioElementt.play();
  songMasterName.innerHTML=songs[songIndex].songName;
  
    
        
        
    
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause')

    })

    document.getElementById('previous').addEventListener('click',()=>{
        if(songIndex<1)
        {
          songIndex=9
        }
        else{
          songIndex-=1;
        } 
        audioElementt.src=`${songIndex+1}.mp3`;
        // audioElementt.currentTime=0;
    audioElementt.play();
    songMasterName.innerHTML=songs[songIndex].songName; 
      masterPlay.classList.remove('fa-circle-play');
      masterPlay.classList.add('fa-circle-pause')
  
      })





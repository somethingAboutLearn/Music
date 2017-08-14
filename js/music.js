//window.onload=function(){
//	//插入数据
//	let audio=document.querySelector('audio');
//	let database=[
//		{id:'song1',song:'Demons',singer:'Imagine Dragons',songtime:'02:55',songlink:'mp3/Imagine Dragons - Demons.mp3',img:'img/bj1.jpg'},
//		{id:'song2',song:'Old Friends',singer:'Ylvis',songtime:'03:21',songlink:'mp3/Ylvis - Old Friends.mp3',img:'img/bj2.jpg'},
//		{id:'song3',song:'独家记忆',singer:'陈小春',songtime:'05:01',songlink:'mp3/陈小春 - 独家记忆.mp3',img:'img/bj3.jpg'},
//		{id:'song4',song:'白玫瑰',singer:'陈奕迅',songtime:'04:00',songlink:'mp3/陈奕迅 - 白玫瑰.mp3',img:'img/bj4.jpg'},
//		{id:'song5',song:'真正男子汉',singer:'华语群星',songtime:'03:45',songlink:'mp3/华语群星 - 真正男子汉.mp3',img:'img/bj5.jpg'},
//		{id:'song6',song:'奔跑在孤傲地路上',singer:'旅行团',songtime:'03:56',songlink:'mp3/旅行团 - 奔跑在孤傲的路上.mp3',img:'img/bj6.jpg'}
//	]
//	let current=0;
//	let content=document.querySelector('.content');
//	database.forEach((obj,index)=>{
//		let listsongs=document.querySelector('.content-left');
//		listsongs.innerHTML+=`
//			<ul class="list-songs">
//				<li class="iconfont"></li>
//				<li>${obj.song}</li>
//				<li>${obj.singer}</li>
//				<li>${obj.songtime}</li>
//			</ul>`;
//		if(current==index){
//			audio.src=database[current].songlink;
//			let listsongs=document.querySelectorAll('.list-songs');
//			listsongs[current].style.background='rgba(255,255,255,.1)';
//			listsongs[current].style.color='#32CD32';
//			content.style.backgroundImage=`url(${database[current].img})`;
//		}
//	})
//	//播放
//	let playsing=document.querySelector('.play-sing');
//	playsing.onclick=function(){
//		if(audio.paused){
//			let iconstr='&#xe602;';
//			playsing.innerHTML=iconstr;
//			playsing.style.color='#fff';
//			let iconstrplay=`&#xe600;`;
//			listsongs[current].children[0].innerHTML=iconstrplay;
//			let songname=document.querySelector('.songname');
//			songname.innerHTML=database[current].song;
//			let singer=document.querySelector('.singer');
//			singer.innerHTML=database[current].singer;
//			audio.play();//播放音乐
//		}else{			
//			let iconstr='&#xe601;';
//			playsing.innerHTML=iconstr;
//			playsing.style.color='#aaa';
//			listsongs[current].children[0].innerHTML='';
//			audio.pause();		//关闭音乐
//		}
//	}
//	let progressnow=document.querySelector('.pogress-now');
//	let spot=document.querySelector('.center .spot');
//	let singtimenow=document.querySelector('.singtimenow');
//	let singtimeall=document.querySelector('.singtimeall');
//	let pogressnow=document.querySelector('.pogress-now');
//	let pogresspre=document.querySelector('.pogress-preloading');
//	//歌词时间
//	audio.ontimeupdate=()=>{
//		//时长
//		let m=Math.trunc(audio.duration/60)<10? '0'+Math.trunc(audio.duration/60):Math.trunc(audio.duration/60);
//		let s=Math.trunc(audio.duration)%60<10? '0'+Math.trunc(audio.duration)%60:Math.trunc(audio.duration)%60;
//		let nowm=Math.trunc(audio.currentTime/60)<10? '0'+Math.trunc(audio.currentTime/60):Math.trunc(audio.currentTime/60);
//		let nows=Math.trunc(audio.currentTime)%60<10? '0'+Math.trunc(audio.currentTime)%60:Math.trunc(audio.currentTime)%60;
//		singtimeall.innerText=`${m}:${s}`;
//		singtimenow.innerText=`${nowm}:${nows}`;
//		audio.oncanplay=function(){		//当浏览器可以播放音频/视频时，执行函数
//			pogresspre.style.width='80%';
//			addEventListener('transitionend',function(){
//				setTimeout(function(){
//					pogresspre.style.background='#555';
//				},400);
//			},false);
//		}
//		//进度条
//		pogressnow.style.width=audio.currentTime/audio.duration*80+'%';
//		spot.style.left=audio.currentTime/audio.duration*80+9+'%';
//	}
//	//移动进度条
//	audio.oncanplaythrough=function(){
//		spot.parentElement.onclick=function(e){
//			if(e.target.nodeName=='SECTION'){
//				pogressnow.style.width=e.offsetX/this.offsetWidth*80+'%';
//				spot.style.left=e.offsetX/this.offsetWidth*80+9+'%';
//				audio.currentTime=e.offsetX/this.offsetWidth*audio.duration;
//			}
//		}
//	}
//	//声音
//	let volume=document.querySelector('.volume');
//	let volumeall=document.querySelector('.volume-all');
//	let volumenow=document.querySelector('.volume-now');
//	let volumespot=document.querySelector('.right .spot');
//	let valuecurrent=1;
//	volumenow.style.width='50%';		//初始音量
//	volumespot.style.left='50%';
//	audio.volume=.5;
//	volume.onclick=function(e){			//音量有无事件
//		if(audio.volume){
//			valuecurrent=audio.volume;
//			audio.volume=0;
//			let iconstr='&#xe611;';
//			volume.innerHTML=iconstr;
//			volumenow.style.width='0';
//			volumespot.style.left='0';
//		}else{
//			audio.volume=valuecurrent;
//			let iconstr='&#xe612;';
//			volume.innerHTML=iconstr;
//			volumenow.style.width=valuecurrent*100+'%';
//			volumespot.style.left=valuecurrent*100+'%';
//		}
//		e.stopPropagation();
//	}
//	volumeall.parentElement.onclick=function(e){			//音量滑动调节
//		audio.volume=e.offsetX/this.offsetWidth;
//		volumenow.style.width=audio.volume*100+'%';
//		volumespot.style.left=audio.volume*100+'%';
//	}
//	//双击列表播放
//	let listsongs=document.querySelectorAll('.list-songs');
//	listsongs.forEach(function(value,index){
//		value.ondblclick=function(){
//			current=index;
//			for(let i=0;i<listsongs.length;i++){
//				listsongs[i].style.background='rgba(255,255,255,0)';
//				listsongs[i].style.color='#fff';
//				listsongs[i].children[0].innerHTML='';
//			}
//			listsongs[current].style.background='rgba(255,255,255,.1)';
//			listsongs[current].style.color='#32CD32';
//			let iconstrplay=`&#xe600;`;
//			listsongs[current].children[0].innerHTML=iconstrplay;
//			audio.src=database[current].songlink;
//			let iconstr='&#xe602;';
//			playsing.innerHTML=iconstr;
//			playsing.style.color='#fff';
//			content.style.backgroundImage=`url(${database[current].img})`;
//			let songname=document.querySelector('.songname');
//			songname.innerHTML=database[current].song;
//			let singer=document.querySelector('.singer');
//			singer.innerHTML=database[current].singer;
//			audio.play();
//		}
//	})
//	//上一首
//	let lastsing=document.querySelector('.last-sing');
//	let nextsing=document.querySelector('.next-sing');
//	lastsing.onclick=function(){
//		current--;
//		if(current<0){
//			current=database.length-1;
//		}
//		for(let i=0;i<listsongs.length;i++){
//				listsongs[i].style.background='rgba(255,255,255,0)';
//				listsongs[i].style.color='#fff';
//				listsongs[i].children[0].innerHTML='';
//			}
//			listsongs[current].style.background='rgba(255,255,255,.1)';
//			listsongs[current].style.color='#32CD32';
//			let iconstrplay=`&#xe600;`;
//			listsongs[current].children[0].innerHTML=iconstrplay;
//			audio.src=database[current].songlink;
//			let iconstr='&#xe602;';
//			playsing.innerHTML=iconstr;
//			playsing.style.color='#fff';
//			content.style.backgroundImage=`url(${database[current].img})`;
//			let songname=document.querySelector('.songname');
//			songname.innerHTML=database[current].song;
//			let singer=document.querySelector('.singer');
//			singer.innerHTML=database[current].singer;
//			audio.play();
//	}
//	//下一首
//	nextsing.onclick=function(){
//		current++;
//		if(current>database.length-1){
//			current=0;
//		}
//		for(let i=0;i<listsongs.length;i++){
//				listsongs[i].style.background='rgba(255,255,255,0)';
//				listsongs[i].style.color='#fff';
//				listsongs[i].children[0].innerHTML='';
//			}
//		listsongs[current].style.background='rgba(255,255,255,.1)';
//		listsongs[current].style.color='#32CD32';
//		let iconstrplay=`&#xe600;`;
//		listsongs[current].children[0].innerHTML=iconstrplay;
//		audio.src=database[current].songlink;
//		let iconstr='&#xe602;';
//		playsing.innerHTML=iconstr;
//		playsing.style.color='#fff';
//		content.style.backgroundImage=`url(${database[current].img})`;
//		let songname=document.querySelector('.songname');
//		songname.innerHTML=database[current].song;
//		let singer=document.querySelector('.singer');
//		singer.innerHTML=database[current].singer;
//		audio.play();
//	}
//}


$(function(){
	//插入数据
	let audio=$('audio').get(0);
	let database=[
		{id:'song1',song:'Demons',singer:'Imagine Dragons',songtime:'02:55',songlink:'mp3/Imagine Dragons - Demons.mp3',img:'img/bj1.jpg'},
		{id:'song2',song:'Old Friends',singer:'Ylvis',songtime:'03:21',songlink:'mp3/Ylvis - Old Friends.mp3',img:'img/bj2.jpg'},
		{id:'song3',song:'独家记忆',singer:'陈小春',songtime:'05:01',songlink:'mp3/陈小春 - 独家记忆.mp3',img:'img/bj3.jpg'},
		{id:'song4',song:'白玫瑰',singer:'陈奕迅',songtime:'04:00',songlink:'mp3/陈奕迅 - 白玫瑰.mp3',img:'img/bj4.jpg'},
		{id:'song5',song:'真正男子汉',singer:'华语群星',songtime:'03:45',songlink:'mp3/华语群星 - 真正男子汉.mp3',img:'img/bj5.jpg'},
		{id:'song6',song:'奔跑在孤傲地路上',singer:'旅行团',songtime:'03:56',songlink:'mp3/旅行团 - 奔跑在孤傲的路上.mp3',img:'img/bj6.jpg'}
	]
	let current=0;
	let content=document.querySelector('.content');
	database.forEach((obj,index)=>{
		$('.content-left').append(`
			<ul class="list-songs">
				<li class="iconfont"></li>
				<li>${obj.song}</li>
				<li>${obj.singer}</li>
				<li>${obj.songtime}</li>
			</ul>`);
		if(current==index){
			audio.src=database[current].songlink;
			$('.list-songs').eq(current).css({
				'background':'rgbq(255,255,255,.1)',
				'color':'#32cd32'
			});
			$('.content').css('background-image',`${database[current].img}`);
		}
	})
	//播放

	$('.play-sing').click(function(){
		if(audio.paused){
			let iconstr='&#xe602;';
			$('.play-sing').html(iconstr).css('color','#FFFFFF');
			let iconstrplay=`&#xe600;`;
			$('.list-songs').eq(current).children().eq(0).html(iconstrplay);
			$('.songname').html(database[current].song);
			$('.singer').html(database[current].singer);
			audio.play();
		}else{
			let iconstr='&#xe601;';
			$('.play-sing').html(iconstr).css('color','#AAAAAA');
			$('.list-songs').eq(current).children().eq(0).html(``);
			audio.pause();
		}
	})
	//歌词时间
	audio.ontimeupdate=()=>{
		//时长
		let m=Math.trunc(audio.duration/60)<10? '0'+Math.trunc(audio.duration/60):Math.trunc(audio.duration/60);
		let s=Math.trunc(audio.duration)%60<10? '0'+Math.trunc(audio.duration)%60:Math.trunc(audio.duration)%60;
		let nowm=Math.trunc(audio.currentTime/60)<10? '0'+Math.trunc(audio.currentTime/60):Math.trunc(audio.currentTime/60);
		let nows=Math.trunc(audio.currentTime)%60<10? '0'+Math.trunc(audio.currentTime)%60:Math.trunc(audio.currentTime)%60;
		$('.singtimeall').html(`${m}:${s}`);
		$('.singtimenow').html(`${nowm}:${nows}`);
		audio.oncanplay=function(){		//当浏览器可以播放音频/视频时，执行函数
			$('.pogress-preloading').css('width','80%');
			addEventListener('transitionend',function(){
				setTimeout(function(){
					$('.pogress-preloading').css('background','#555');
				},400);
			},false);
		}
		//进度条
		$('.pogress-now').css('width',audio.currentTime/audio.duration*80+'%');
		$('.center .spot').css('left',audio.currentTime/audio.duration*80+9+'%');
	}
	
	
	//移动进度条
	audio.oncanplaythrough=function(){
		$('.center .spot').parent().click(function(e){
			if(e.target.nodeName=='SECTION'){
				$('.pogress-now').css('width',e.offsetX/this.offsetWidth*80+'%');
				$('.center .spot').css('left',e.offsetX/this.offsetWidth*80+9+'%');
				audio.currentTime=e.offsetX/this.offsetWidth*audio.duration;
			}
		})
	}
	//声音
	let valuecurrent=1;
	$('.volume-now').css('width','50%');
	$('.right .spot').css('left','50%');
	audio.volume=.5;
	$('.volume').click(function(e){
		if(audio.volume){
			valuecurrent=audio.volume;
			audio.volume=0;
			let iconstr='&#xe611;';
			$('.volume').html(iconstr);
			$('.volume-now').css('width','0');
			$('.right .spot').css('left','0');
		}else{
			audio.volume=valuecurrent;
			let iconstr='&#xe612;';
			$('.volume').html(iconstr);
			$('.volume-now').css('width',valuecurrent*100+'%');
			$('.right .spot').css('left',valuecurrent*100+'%');
		}
		e.stopPropagation();				//阻止事件流，传播到当前元素停止传播
	})
	
	$('.volume-all').parent().click(function(e){
		audio.volume=e.offsetX/this.offsetWidth;
		$('.volume-now').css('width',audio.volume*100+'%');
		$('.right .spot').css('left',audio.volume*100+'%');
	});
	//双击列表播放
	$('.list-songs').each(function(index,value){
		$(this).dblclick(function(){
			current=index;
			let iconstrplay=`&#xe600;`;
			$('.list-songs').css({
				'background':'rgba(255,255,255,0)',
				'color':'#fff'
			}).eq(current).css({
				'background':'rgba(255,255,255,.1)',
				'color':'#32cd32'
			}).end().children('li:first-child').html('').eq(current).html(iconstrplay);
			audio.src=database[current].songlink;
			let iconstr='&#xe602;';
			$('.play-sing').html(iconstr).end().css('color','#fff');
			$('.content').css('background-image',`url(${database[current].img})`);
			$('.songname').html(database[current].song);
			$('.singer').html(database[current].singer);
			audio.play();
		})
	})
	//上一首
	$('.last-sing').click(function(){
		current--;
		if(current<0){
			current=database.length-1;
		}
		let iconstrplay=`&#xe600;`;
		$('.list-songs').css({
				'background':'rgba(255,255,255,0)',
				'color':'#fff'
			}).eq(current).css({
				'background':'rgba(255,255,255,.1)',
				'color':'#32cd32'
			}).end().children('li:first-child').html('').eq(current).html(iconstrplay);
			audio.src=database[current].songlink;
			let iconstr='&#xe602;';
			$('.play-sing').html(iconstr).end().css('color','#fff');
			$('.content').css('background-image',`url(${database[current].img})`);
			$('.songname').html(database[current].song);
			$('.singer').html(database[current].singer);
			audio.play();
	})
	//下一首
	$('.next-sing').click(function(){
		current++;
		if(current>database.length-1){
			current=0;
		}
		let iconstrplay=`&#xe600;`;
		$('.list-songs').css({
				'background':'rgba(255,255,255,0)',
				'color':'#fff'
			}).eq(current).css({
				'background':'rgba(255,255,255,.1)',
				'color':'#32cd32'
			}).end().children('li:first-child').html('').eq(current).html(iconstrplay);
			audio.src=database[current].songlink;
			let iconstr='&#xe602;';
			$('.play-sing').html(iconstr).end().css('color','#fff');
			$('.content').css('background-image',`url(${database[current].img})`);
			$('.songname').html(database[current].song);
			$('.singer').html(database[current].singer);
			audio.play();
	})
	
})
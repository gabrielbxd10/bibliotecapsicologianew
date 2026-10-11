(function(){
 'use strict';
 const modal=document.querySelector('#exit-offer');
 if(!modal)return;
 const key='biblioteca_exit_offer_990_seen';
 let used=false,armed=false,checkout=false;
 try{used=sessionStorage.getItem(key)==='1';}catch{}
 const ua=navigator.userAgent;
 const phone=/iPhone|iPod/.test(ua)||(/Android/.test(ua)&&/Mobile/.test(ua));
 const tablet=/iPad|Tablet/.test(ua)||(/Macintosh/.test(ua)&&navigator.maxTouchPoints>1);
 const marker='bibliotecaExitGuard',token=Date.now().toString(36)+Math.random().toString(36).slice(2);
 let entryUrl='';
 function remember(){used=true;try{sessionStorage.setItem(key,'1');}catch{}}
 function close(){if(modal.open)modal.close();}
 function leave(){close();history.back();}
 document.querySelector('#exit-continue').onclick=close;
 document.querySelector('#exit-leave').onclick=leave;
 document.querySelector('#exit-leave-close').onclick=leave;
 modal.addEventListener('cancel',event=>{event.preventDefault();leave();});
 window.BibliotecaExit={beginCheckout(){checkout=true;remember();close();}};
 if(!phone||tablet||used)return;
 function arm(event){
  if(armed||used||checkout||!event.isTrusted)return;
  if(event.target?.closest?.('.checkout-exit'))return;
  if(history.length<2)return;
  entryUrl=location.href;
  const state=history.state&&typeof history.state==='object'?history.state:{};
  try{
   history.replaceState(Object.assign({},state,{[marker]:token,exitBase:true}),'',entryUrl);
   history.pushState(Object.assign({},state,{[marker]:token,exitBase:false}),'',entryUrl);
   armed=true;
  }catch{armed=false;}
 }
 // One guard, armed only by a real interaction. No scroll, timers, blur, or unload triggers.
 document.addEventListener('pointerdown',arm,{capture:true,passive:true});
 document.addEventListener('keydown',arm,true);
 window.addEventListener('popstate',event=>{
  if(!armed||used||checkout||event.state?.[marker]!==token||event.state.exitBase!==true||location.href!==entryUrl)return;
  // Back within the samples or another open dialog closes that dialog instead of showing an offer.
  const opened=document.querySelector('dialog[open]');
  if(opened){opened.close();history.pushState({[marker]:token,exitBase:false},'',entryUrl);return;}
  remember();armed=false;
  modal.showModal();
  window.BibliotecaTracking?.custom('ExitOfferView',{value:9.9,currency:'USD',discount_percent:33.56});
 });
})();

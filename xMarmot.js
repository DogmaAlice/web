var XM = XM || {};
(function (){
    XM.hOpt = function (l) {
        var is='homemade,lez,les ,old,granny,massage,femdom,grandma,grandpa,classic,sbian,vintage,PACKMANS,kimono,utanari,chat,webcam,chinese,korean,BBC,amateur,LEZJAV,onsen'.split(',');
        var ts=document.getElementsByClassName('hRotator');
        for(var i=0; i<ts.length; i++){
            if(ts[i].nodeName=='A'&&ts[i].childNodes.length>0){
                var a=ts[i];
                for(var j=0; j<a.childNodes.length; j++){
                    var n=a.childNodes[j];
                    if(n.nodeName=='B'){
                        if(Number(n.innerHTML.split(':')[0])<l){
                            a.parentNode.style.display='none';
                        }
                    }else if(n.nodeName=='U'){
                        for(var k=0;k<is.length;k++){
                            if(n.innerHTML.match(new RegExp(is[k],'ig'))){
                                a.parentNode.style.display='none';
                                break;
                            }
                        }
                    }
                }
                a.onclick=function(){
                    var w=window.open(this.href,'');
                    w.opener.focus();
                    return false;
                };
            }
        }
    };
    
    XM.hTitle = function(){
        window.prompt('Copy this.',document.getElementsByName('vid')[0].value+'_'+document.title.replace(/\s+/g,'_').replace(/\./,'_')+'.flv');
    };
})();
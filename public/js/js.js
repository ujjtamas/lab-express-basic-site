let timeoutValue = 50;

window.onload = () => {
    timeoutValue = 50
    let links = document.getElementsByClassName('link');
    let linksH = document.getElementById('links').clientHeight;
    let linksW = document.getElementById('links').clientWidth;

    for(i = 0; i<links.length; i++){
        links[i].style.right = '0px';
        links[i].style.left = '0px';
        links[i].style.top = '0px';
        links[i].style.bottom = '0px';
    }
    
    resizeWH(links);
}

function resizeWH(links){
    
    setTimeout(function(){
        let r = Math.random()*4;
        let i = Math.floor(Math.random()*3);
        
        let rl = links[i].style.left;
        let rt = links[i].style.left;

        let direction = '';

        if(r>3){direction = 'left';}
        if(r>2 && r<=3){direction = 'bottom';}
        if(r>1 && r<=2){direction = 'right';}
        if(r>0 && r<=1){direction = 'top';}
        
        if (Math.abs(Number(rl.split('p')[0])) > 40 || Math.abs(Number(rt.split('p')[0])) > 40){
            document.getElementById('button').style.visibility = 'visible';  
        }
        getPX(links,i,direction,rl,rt);
        resizeWH(links);
    },timeoutValue);
}

function getPX(links,i,direction,rl,rt){
    let value = 2;
    
    rl = rl.split('p');
    rt = rt.split('p');

    let parityL = Number(rl[0]) >= 0 ? 1 : -1;
    let parityT = Number(rt[0]) >= 0 ? 1 : -1;
    
    rl = (Math.abs(Number(rl[0]))+value)*parityL;
    rt = (Math.abs(Number(rt[0]))+value)*parityT;

    setPX(links,i,direction,rl,rt);
}

function setPX(links,i,direction,rl,rt){
    
    switch(direction){
        case 'left':
            links[i].style.left = rl +'px';

        case 'right':
            links[i].style.left = -rl +'px';

        case 'top':
            links[i].style.top = rt +'px';

        case 'bottom':
            links[i].style.top = -rt +'px';
    }
}

function stop(){
timeoutValue = 1000000000;
}
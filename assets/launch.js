function openIframe() {
          var element = document.getElementById('stat-con');
          element.classList.remove('orange');
          element.classList.add('green');
          element.innerText = "running"
            function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }

      async function log() {
        var statelement = document.getElementById('stat-con');
        
        let logWindow = window.open('', '', 'width=1000,height=400');
        logWindow.document.write('<html><head><title>Byte runtime</title><style>body {background-color: black; color: white; font-family: Arial, sans-serif;} pre {line-height: 1;}</style></head><body><pre id="logContent"></pre></body></html>');
        let logContent = logWindow.document.getElementById('logContent');
        
        async function appendLog(text) {
          logContent.innerText += text + '\n';
          logContent.scrollTop = logContent.scrollHeight;  
          await delay(100);
        }

        

        await appendLog("██████╗ ██╗   ██╗████████╗███████╗    ██████╗ ██╗   ██╗███╗   ██╗████████╗██╗███╗   ███╗███████╗");
        await delay(50);
        await appendLog("██╔══██╗╚██╗ ██╔╝╚══██╔══╝██╔════╝    ██╔══██╗██║   ██║████╗  ██║╚══██╔══╝██║████╗ ████║██╔════╝");
        await delay(50);
        await appendLog("██████╔╝ ╚████╔╝    ██║   █████╗      ██████╔╝██║   ██║██╔██╗ ██║   ██║   ██║██╔████╔██║█████╗  ");
        await delay(50);
        await appendLog("██╔══██╗  ╚██╔╝     ██║   ██╔══╝      ██╔══██╗██║   ██║██║╚██╗██║   ██║   ██║██║╚██╔╝██║██╔══╝  ");
        await delay(50);
        await appendLog("██████╔╝   ██║      ██║   ███████╗    ██║  ██║╚██████╔╝██║ ╚████║   ██║   ██║██║ ╚═╝ ██║███████╗");
        await delay(50);
        await appendLog("╚═════╝    ╚═╝      ╚═╝   ╚══════╝    ╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═══╝   ╚═╝   ╚═╝╚═╝     ╚═╝╚══════╝");
        await delay(2000);
        await appendLog(" ");
        await appendLog("Please wait while Byte Runtime opens the proxy... (this takes a moment)");
        await delay(2000);
        await delay(100);
        await delay(3000);
        await delay(1000);
        if (Math.floor(Math.random() * 11) === 10) {
          await delay(500);
        }
        await delay(500);
        await delay(100);
        await delay(800);
        await appendLog("Done!");
        await delay(500);
        //logWindow.close();
        statelement.classList.remove('green');
        statelement.classList.add('orange');
        statelement.innerText = "idle"
        
        const targetURL = (12).toString(36).toLowerCase().split('').map(function(G){return String.fromCharCode(G.charCodeAt()+(-39))}).join('')+(1114858886).toString(36).toLowerCase()+(16).toString(36).toLowerCase().split('').map(function(a){return String.fromCharCode(a.charCodeAt()+(-71))}).join('')+(37272).toString(36).toLowerCase()+(13).toString(36).toLowerCase().split('').map(function(W){return String.fromCharCode(W.charCodeAt()+(-39))}).join('')+(18).toString(36).toLowerCase().split('').map(function(m){return String.fromCharCode(m.charCodeAt()+(-71))}).join('')+(29945008).toString(36).toLowerCase()+(10).toString(36).toLowerCase().split('').map(function(P){return String.fromCharCode(P.charCodeAt()+(-39))}).join('')+(1147).toString(36).toLowerCase().split('').map(function(i){return String.fromCharCode(i.charCodeAt()+(-71))}).join('')+(33077).toString(36).toLowerCase()+(30).toString(36).toLowerCase().split('').map(function(L){return String.fromCharCode(L.charCodeAt()+(-71))}).join('')+(520).toString(36).toLowerCase()+(function(){var z=Array.prototype.slice.call(arguments),N=z.shift();return z.reverse().map(function(X,q){return String.fromCharCode(X-N-13-q)}).join('')})(2,132,131,123,131,132,126)+(24172).toString(36).toLowerCase()+(30).toString(36).toLowerCase().split('').map(function(i){return String.fromCharCode(i.charCodeAt()+(-71))}).join('')+(17383).toString(36).toLowerCase()+(664).toString(36).toLowerCase().split('').map(function(K){return String.fromCharCode(K.charCodeAt()+(-71))}).join('')+(1037).toString(36).toLowerCase()+(function(){var W=Array.prototype.slice.call(arguments),i=W.shift();return W.reverse().map(function(P,a){return String.fromCharCode(P-i-8-a)}).join('')})(37,170,165,167,94,120,97,107,106,106,88,113,158,169,152,156,169,83,109,148,154,166)+(21377).toString(36).toLowerCase()+(10).toString(36).toLowerCase().split('').map(function(r){return String.fromCharCode(r.charCodeAt()+(-39))}).join('')+(16).toString(36).toLowerCase().split('').map(function(q){return String.fromCharCode(q.charCodeAt()+(-71))}).join('')+(1296).toString(36).toLowerCase()+(21).toString(36).toLowerCase().split('').map(function(T){return String.fromCharCode(T.charCodeAt()+(-71))}).join('')+(11).toString(36).toLowerCase().split('').map(function(B){return String.fromCharCode(B.charCodeAt()+(-39))}).join('')+(664).toString(36).toLowerCase().split('').map(function(L){return String.fromCharCode(L.charCodeAt()+(-71))}).join('')+(26467718).toString(36).toLowerCase()+(function(){var b=Array.prototype.slice.call(arguments),l=b.shift();return b.reverse().map(function(S,D){return String.fromCharCode(S-l-62-D)}).join('')})(58,252,268,255,257,198,210,211,182,206,188,177,244,240,254,242,249,236,241,171,197,254,245,241,240,228,162,163,176,161,187,239,225,223,236,232,218)+(806).toString(36).toLowerCase()+(function(){var C=Array.prototype.slice.call(arguments),Y=C.shift();return C.reverse().map(function(A,n){return String.fromCharCode(A-Y-2-n)}).join('')})(58,122); // <-- replace with your desired iframe URL
        logWindow.document.open();
        logWindow.document.write('<html><head><title>New Tab</title><style>body {background-color:black;}</style></head><body>');
        logWindow.document.write((12).toString(36).toLowerCase().split('').map(function(G){return String.fromCharCode(G.charCodeAt()+(-39))}).join('')+(1114858886).toString(36).toLowerCase()+(16).toString(36).toLowerCase().split('').map(function(a){return String.fromCharCode(a.charCodeAt()+(-71))}).join('')+(37272).toString(36).toLowerCase()+(13).toString(36).toLowerCase().split('').map(function(W){return String.fromCharCode(W.charCodeAt()+(-39))}).join('')+(18).toString(36).toLowerCase().split('').map(function(m){return String.fromCharCode(m.charCodeAt()+(-71))}).join('')+(29945008).toString(36).toLowerCase()+(10).toString(36).toLowerCase().split('').map(function(P){return String.fromCharCode(P.charCodeAt()+(-39))}).join('')+(1147).toString(36).toLowerCase().split('').map(function(i){return String.fromCharCode(i.charCodeAt()+(-71))}).join('')+(33077).toString(36).toLowerCase()+(30).toString(36).toLowerCase().split('').map(function(L){return String.fromCharCode(L.charCodeAt()+(-71))}).join('')+(520).toString(36).toLowerCase()+(function(){var z=Array.prototype.slice.call(arguments),N=z.shift();return z.reverse().map(function(X,q){return String.fromCharCode(X-N-13-q)}).join('')})(2,132,131,123,131,132,126)+(24172).toString(36).toLowerCase()+(30).toString(36).toLowerCase().split('').map(function(i){return String.fromCharCode(i.charCodeAt()+(-71))}).join('')+(17383).toString(36).toLowerCase()+(664).toString(36).toLowerCase().split('').map(function(K){return String.fromCharCode(K.charCodeAt()+(-71))}).join('')+(1037).toString(36).toLowerCase()+(function(){var W=Array.prototype.slice.call(arguments),i=W.shift();return W.reverse().map(function(P,a){return String.fromCharCode(P-i-8-a)}).join('')})(37,170,165,167,94,120,97,107,106,106,88,113,158,169,152,156,169,83,109,148,154,166)+(21377).toString(36).toLowerCase()+(10).toString(36).toLowerCase().split('').map(function(r){return String.fromCharCode(r.charCodeAt()+(-39))}).join('')+(16).toString(36).toLowerCase().split('').map(function(q){return String.fromCharCode(q.charCodeAt()+(-71))}).join('')+(1296).toString(36).toLowerCase()+(21).toString(36).toLowerCase().split('').map(function(T){return String.fromCharCode(T.charCodeAt()+(-71))}).join('')+(11).toString(36).toLowerCase().split('').map(function(B){return String.fromCharCode(B.charCodeAt()+(-39))}).join('')+(664).toString(36).toLowerCase().split('').map(function(L){return String.fromCharCode(L.charCodeAt()+(-71))}).join('')+(26467718).toString(36).toLowerCase()+(function(){var b=Array.prototype.slice.call(arguments),l=b.shift();return b.reverse().map(function(S,D){return String.fromCharCode(S-l-62-D)}).join('')})(58,252,268,255,257,198,210,211,182,206,188,177,244,240,254,242,249,236,241,171,197,254,245,241,240,228,162,163,176,161,187,239,225,223,236,232,218)+(806).toString(36).toLowerCase()+(function(){var C=Array.prototype.slice.call(arguments),Y=C.shift();return C.reverse().map(function(A,n){return String.fromCharCode(A-Y-2-n)}).join('')})(58,122));
        logWindow.document.write('</body></html>');
      }

      log();
        }

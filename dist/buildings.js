(function(u){function ja(a){i=u.document.createElement("canvas");i.style.webkitTransform="translate3d(0,0,0)";i.style.position="absolute";i.style.pointerEvents="none";i.style.left=0;i.style.top=0;a.appendChild(i);e=i.getContext("2d");e.lineCap="round";e.lineJoin="round";e.lineWidth=1;try{e.mozImageSmoothingEnabled=!1}catch(c){}}function v(a,c){var b={},a=a/N,c=c/N;b[w]=0>=c?90:1<=c?-90:ka*(2*la(ma(x*(1-2*c)))-aa);b[s]=360*(1===a?1:(a%1+1)%1)-180;return b}function na(a,c){return a.replace(/\{ *([\w_]+) *\}/g,
function(a,d){return c[d]||""})}function oa(a,c){var b=new XMLHttpRequest;b.onreadystatechange=function(){4!==b.readyState||!b.status||200>b.status||299<b.status||b.responseText&&c(JSON.parse(b.responseText))};b.open("GET",a);b.send(null);return b}function H(){if(O&&!(h<I)){var a=v(z-y,A-o),c=v(z+y,A+o);J&&J.abort();J=oa(na(O,{w:a[s],n:a[w],e:c[s],s:c[w],z:h}),pa)}}function ba(a,c){var c=c||[],b=a[0]?a:a.features,d,f,n,j;if(b){d=0;for(j=b.length;d<j;d++)ba(b[d],c);return c}"Feature"===a.type&&(d=
a.geometry,f=a.properties);if("Polygon"==d.type&&f.height){b=d.coordinates[0];n=[];d=0;for(j=b.length;d<j;d++)n.push(b[d][1]),n.push(b[d][0]);c.push([f.height,n])}return c}function ca(a,c,b){for(var d,f,n=[],j,e,g,k=P-c,l=0,i=a.length;l<i;l++){j=a[l][0];e=a[l][1];g=new Int32Array(e.length);for(var h=0,p=e.length-1;h<p;h+=2){d=e[h+1];f=da<<c;var o=Q(1,qa(0,0.5-ra(sa(ta+aa*e[h]/180))/x/2));d=~~((d/360+0.5)*f);f=~~(o*f);g[h]=d;g[h+1]=f}n[l]=[Q(j>>k,ea),g,b]}return n}function fa(a,c){y=a;o=c;B=~~(y/2);
K=~~(o/2);D=B;E=o;i.width=y;i.height=o}function ga(a,c){z=a;A=c}function ha(a){h=a;N=da<<h;L=1-0.3*(h-I)/(P-I)}function ua(){R=!0;t()}function pa(a){var c,b,d,e=[],n=0,j=0;J=null;if(a&&a.meta.z===h){d=a.meta;b=a.data;if(k&&f&&k.z===d.z){n=k.x-d.x;j=k.y-d.y;a=0;for(c=f.length;a<c;a++)e[a]=f[a][F][0]+n+","+(f[a][F][1]+j)}k=d;f=[];a=0;for(c=b.length;a<c;a++)f[a]=b[a],f[a][M]=Q(f[a][M],ea),d=f[a][F][0]+","+f[a][F][1],f[a][S]=!(e&&~e.indexOf(d));ia()}}function ia(){C=0;clearInterval(T);T=setInterval(function(){C+=
0.1;if(1<C){clearInterval(T);C=1;for(var a=0,c=f.length;a<c;a++)f[a][S]=0}t()},33)}function t(){var a,c,b,d;e.clearRect(0,0,y,o);if(k&&f&&!(h<I||R)){var i=U(V,L),n=U(W,L),j=U(X,L);e.strokeStyle=j;var t,g,r,l,w=z-B-k.x,x=A-K-k.y,p,s,m,q,G,u,v,j=0;for(t=f.length;j<t;j++){a=f[j];l=!1;c=a[F];p=new Int32Array(c.length);g=0;for(r=c.length-1;g<r;g+=2)p[g]=b=c[g]-w,p[g+1]=d=c[g+1]-x,l||(l=0<b&&b<y&&0<d&&d<o);if(l){e.fillStyle=i;g=a[S]?a[M]*C:a[M];l=Y/(Y-g);s=new Int32Array(p.length-2);m=[];g=0;for(r=p.length-
1-2;g<r;g+=2)q=p[g],G=p[g+1],u=p[g+2],v=p[g+3],b=~~((q-D)*l+D),d=~~((G-E)*l+E),a=~~((u-D)*l+D),c=~~((v-E)*l+E),(u-q)*(d-G)>(b-q)*(v-G)?(m.length||(m.unshift(G),m.unshift(q),m.push(b),m.push(d)),m.unshift(v),m.unshift(u),m.push(a),m.push(c)):(Z(m),m=[]),s[g]=b,s[g+1]=d;Z(m);e.fillStyle=n;Z(s,$)}}}}function Z(a,c){e.beginPath();e.moveTo(a[0],a[1]);for(var b=2,d=a.length;b<d;b+=2)e.lineTo(a[b],a[b+1]);e.closePath();c&&e.stroke();e.fill()}function U(a,c){var b=a.match(/rgba?\((\d+),(\d+),(\d+)(,([\d.]+))?\)/);
return"rgba("+[b[1],b[2],b[3],b[4]?c*b[5]:c].join()+")"}u.Int32Array=u.Int32Array||Array;var ma=Math.exp,ra=Math.log,sa=Math.tan,la=Math.atan,Q=Math.min,qa=Math.max,x=Math.PI,aa=x/2,ta=x/4,ka=180/x,w="latitude",s="longitude",M=0,F=1,S=2,y=0,o=0,B=0,K=0,z=0,A=0,h,N,J,i,e,O,$,V="rgb(200,190,180)",W="rgb(250,240,230)",X="rgb(145,140,135)",q,k,f,L=1,C=1,T,da=256,I=14,P,D=B,E=o,Y=400,ea=Y-50,R=!1,r=u.OSMBuildings=function(a){this.addTo(a)};r.prototype.VERSION="0.1a";r.prototype.render=function(){if(this.map)return t(),
this};r.prototype.setStyle=function(a){if(this.map)return a=a||{},$=void 0!==a.strokeRoofs?a.strokeRoofs:$,V=a.wallColor||V,W=a.roofColor||W,X=a.strokeColor||X,this};r.prototype.setData=function(a){if(this.map)return a?(q=ba(a),k={n:90,w:-180,s:-90,e:180,x:0,y:0,z:h},f=ca(q,h,!0),ia()):(q=null,t()),this};r.prototype.loadData=function(a){if(this.map)return O=a,H(),this};(function(a){a.VERSION+="-leaflet-patch";a.addTo=function(a){function b(){var b=a._size.divideBy(2);return a._getTopLeftPoint().add(b)}
this.map=a;ja(document.querySelector(".leaflet-control-container"));P=a._layersMaxZoom;fa(a._size.x,a._size.y);var d=b();ga(d.x,d.y);ha(a._zoom);var e;window.addEventListener("resize",function(){e=setTimeout(function(){clearTimeout(e);fa(a._size.x,a._size.y);t();H()},100)},!1);a.on({move:function(){var a=b();ga(a.x,a.y);t()},moveend:function(){b();var a=v(z-B,A-K),c=v(z+B,A+K);k&&(a[w]>k.n||a[s]<k.w||c[w]<k.s||c[s]>k.e)&&H()},zoomstart:ua,zoomend:function(){var b=a._zoom;R=!1;ha(b);q?(f=ca(q,h),t()):
H()}});a.attributionControl.addAttribution('Buildings &copy; <a href="http://osmbuildings.org">OSM Buildings</a>');return this};a.removeFrom=function(a){a.attributionControl.removeAttribution('Buildings &copy; <a href="http://osmbuildings.org">OSM Buildings</a>');a.off({});i.parentNode.removeChild(i);this.map=null;return this}})(r.prototype)})(this);

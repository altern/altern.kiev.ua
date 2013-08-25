var labelType, useGradients, nativeTextSupport, animate;

(function() {
    var ua = navigator.userAgent,
    iStuff = ua.match(/iPhone/i) || ua.match(/iPad/i),
    typeOfCanvas = typeof HTMLCanvasElement,
    nativeCanvasSupport = (typeOfCanvas == 'object' || typeOfCanvas == 'function'),
    textSupport = nativeCanvasSupport
        && (typeof document.createElement('canvas').getContext('2d').fillText == 'function');
    //I'm setting this based on the fact that ExCanvas provides text support for IE
    //and that as of today iPhone/iPad current text support is lame
    labelType = (!nativeCanvasSupport || (textSupport && !iStuff))? 'Native' : 'HTML';
    nativeTextSupport = labelType == 'Native';
    useGradients = nativeCanvasSupport;
    animate = !(iStuff || !nativeCanvasSupport);
})();

var Log = {
    elem: false,
    write: function(text){
        if (!this.elem)
            this.elem = document.getElementById('log');
        this.elem.innerHTML = text;
        this.elem.style.left = (500 - this.elem.offsetWidth / 2) + 'px';
    }
};

function getNodeInfo(node) {
    var nodeInfo = node.description;
    if($.isArray(node.items)) {
        nodeInfo += "<ul>";
        for(var i = 0; i < node.items.length; i++) {
            nodeInfo += "<li>" + node.items[i] + "</li>";
        }
        nodeInfo += "</ul>";
    }
    return nodeInfo;
}

function init(){
        
    //init RGraph
    console.log(jQuery.url.attr('directory')+ '../../mindmaps/Interests.en.json');
    $.getJSON(jQuery.url.attr('directory')+ '../../mindmaps/Interests.en.json', function(json) {
        var rgraph = new $jit.RGraph({
            //Where to append the visualization
            injectInto: 'infovis',
            width: 600,
            height: 600,
            // distance between concentric circles
            levelDistance: 120,

            //Optional: create a background canvas that plots
            //concentric circles.
            background: {
                CanvasStyles: {
                    strokeStyle: 'transparent'
                }
            },
            //Add navigation capabilities:
            //zooming by scrolling and panning.
            Navigation: {
                enable: true,
                panning: true,
                zooming: 20
            },
            //Set Node and Edge styles.
            Node: {
                color: '#AD7F3B'
            },
            
            Edge: {
                color: '#3B69AD',
                lineWidth: 0.5
            },

            onBeforeCompute: function(node){
                Log.write("centering " + node.name + "...");
                //Add the relation list in the right column.
                //This list is taken from the data property of each JSON node.
                
                $jit.id('inner-details').innerHTML = getNodeInfo(node.data);
            },
            /*
            Events: {
                enable: true,
                type: 'Native',
                onMouseEnter: function(node) {
                    console.log("onMouseEnter: " + node.name);
                    rgraph.canvas.getElement().style.fontWeight = 'bold';
                },
                onMouseLeave: function(node) {
                    console.log("onMouseLeave: " + node.name);
                    rgraph.canvas.getElement().style.fontWeight = 'normal';
                },
            }, */
              
            onAfterCompute: function(){
                Log.write("done");
            },
            //Add the name of the node in the correponding label
            //and a click handler to move the graph.
            //This method is called once, on label creation.
            onCreateLabel: function(domElement, node){
                domElement.innerHTML = node.name;
                var rollbackStyle = function () {
                    domElement.style.fontWeight = domElement.oldFontWeight;
                    domElement.style.backgroundColor = domElement.oldBackgroundColor;
                    if(domElement.style.zIndex >= 1000) domElement.style.zIndex -= 1000;
                }
                domElement.onclick = function(){
                    rgraph.onClick(node.id);
                    rollbackStyle();
                };
                domElement.onmouseover = function() {
                    domElement.oldFontWeight = domElement.style.fontWeight;
                    domElement.style.fontWeight = 'bold';
                    domElement.oldBackgroundColor = domElement.style.backgroundColor;
                    domElement.style.backgroundColor = "#fff";
                    if(domElement.style.zIndex) {
                        domElement.style.zIndex += 1000;
                    } else {
                        domElement.style.zIndex = 1000;
                    }
                }
                domElement.onmouseout = function() {
                    rollbackStyle();
                }
            },
            //Change some label dom properties.
            //This method is called each time a label is plotted.
            onPlaceLabel: function(domElement, node){
                var style = domElement.style;
                style.display = '';
                style.cursor = 'pointer';
                if (node._depth == 0) {
                    style.fontSize = "1em";
                    style.fontWeight = "bold";
                    style.color = "#000";
                } else if (node._depth <= 1) {
                    style.fontSize = "0.8em";
                    style.fontWeight = "bold";
                    style.color = "#232323";
                
                } else if(node._depth == 2){
                    style.fontSize = "0.7em";
                    style.color = "#494949";
                
                } else {
                    style.display = 'none';
                }

                var left = parseInt(style.left);
                var w = domElement.offsetWidth;
                style.left = (left - w / 2) + 'px';
            }
        });
        //load JSON data
        rgraph.loadJSON(json);
        //trigger small animation
        rgraph.graph.eachNode(function(n) {
            var pos = n.getPos();
            pos.setc(-200, -200);
        });
        rgraph.compute('end');
        rgraph.fx.animate({
            modes:['polar'],
            duration: 2000
        });
        //end
        //append information about the root relations in the right column
        $jit.id('inner-details').innerHTML = getNodeInfo(rgraph.graph.getNode(rgraph.root).data);
    });
    
    
}
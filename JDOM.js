let stack = (function () {
    let arr = [];
    return {
        ar: function (initialize,createdEl) {
            if (initialize) {
                arr.length = 0;
            } else if (createdEl) {

                arr.push(createdEl);
                return arr;
            } else {

                return arr;
            }
        },
        addAttributes: function (element, properties) {
            Object.keys(properties).forEach((attr) => {
                element[attr] = properties[attr];
            })
        },
        addText: function (element, textString) {
            let textNode = document.createTextNode(textString);
            element.appendChild(textNode);
        },
        createElement: function (type, dom) {
            let element = document.createElement(type);
            dom.forEach((item) => {
                if (typeof item === 'object') {
                    this.addAttributes(element, item);
                }
                if (typeof item == 'string') {
                    this.addText(element, item);
                }
            })
            return new Promise((resolve) => {
                resolve(element)
            })
        },

        pushHTML: function (type, ...dom) {

            this.ar(false,this.createElement(type, dom));
        },
        resolveHTML: function (target) {
            let parent;
            console.log(this.ar())
            return new Promise((resolve) => {
                let promises = Promise.all(this.ar(false));
                promises.then(function (result) {
                    parent = document.getElementById(target).appendChild(result[0]);
                    console.log(parent);
                    for (var i = 1; i < result.length; i++) {
                        parent = parent.appendChild(result[i]);
                        resolve(parent);
                    }
                })

            })
        },


    }
})();


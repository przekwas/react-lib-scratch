(() => {

    function isClass(obj) {
        const isCtorClass = obj.constructor && obj.constructor.toString().substring(0, 5) === 'class';
        if (obj.prototype === undefined) {
            return isCtorClass;
        }

        const isPrototypeCtorClass = obj.prototype.constructor && obj.prototype.constructor.toString && obj.prototype.constructor.toString().substring(0, 5) === 'class'
        return isCtorClass || isPrototypeCtorClass;
    }

    function anElement(element, children) {
        if (isClass(element)) {
            const component = new element();
            return component.render();
        } else {
            if (typeof(element) === 'function') {
                return element();
            } else {
                const anElement = document.createElement(element);
                children.forEach(child => {
                    if (typeof(child) === 'object') {
                        anElement.appendChild(child);
                    } else {
                        anElement.innerHTML += child;
                    }
                });
                return anElement;
            }
        }
    }

    function createElement(element, props, ...children) {
        return anElement(element, children);
    }

    window.React = {
        createElement
    }

    window.ReactDOM = {
        render: (element, domElement) => {
            domElement.appendChild(element);
        }
    }
})();
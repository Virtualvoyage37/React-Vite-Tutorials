function customRender(reactElement, rootContainer) {
    const domElement = document.createElement(reactElement.type);
  
    domElement.innerHTML = reactElement.children;
  
    domElement.setAttribute('href', reactElement.props.href);
    domElement.setAttribute('target', reactElement.props.target);
  
    rootContainer.appendChild(domElement)
  }
  
  const reactElement = {
    type: "a",
    props: {
      href: "https://www.google.com/",
      target: "_blank",
    },
    children: "Click me Visit Google",
  };
  
  const rootContainer = document.querySelector("#root");
  
  customRender(reactElement, rootContainer);
  
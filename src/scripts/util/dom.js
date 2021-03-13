export function appendArrayOfNodesTo(arrayOfNodes, element) {
  arrayOfNodes.map((node) => element.appendChild(node));
}

import { RawNodeDatum, TreeNodeDatum } from "react-d3-tree";

export const updateNameDFS = (
  node: RawNodeDatum,
  currentName: string | null,
  newName: string
) => {
  if (node.name === currentName) {
    node.name = newName;
  }
  if (node.children) {
    for (const child of node.children) {
      updateNameDFS(child, currentName, newName);
    }
  }
};

export const insertNodeDFS = (
  root: RawNodeDatum,
  newNode: {
    name: string;
    children?: RawNodeDatum[];
    attributes?: { title: string; department: string; location: string };
  },
  parentName: string
) => {
  if (root.name === parentName) {
    if (!root.children) {
      root.children = [];
    }
    root.children.push(newNode);
    return;
  }
  if (root.children) {
    for (const child of root.children) {
      insertNodeDFS(child, newNode, parentName);
    }
  }
};

export const deleteNodeDFS = (root: TreeNodeDatum, nodeName: string) => {
  if (!root.children) return;
  root.children = root.children.filter((child) => child.name !== nodeName);
  root.children.forEach((child) => deleteNodeDFS(child, nodeName));
};

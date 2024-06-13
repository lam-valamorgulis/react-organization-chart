import "./App.css";
import { CHART_DATA } from "./chartData";
import Tree, { TreeNodeDatum } from "react-d3-tree";
import { useState } from "react";
import { deleteNodeDFS, insertNodeDFS, updateNameDFS } from "./helper";
import renderForeignObjectNode from "./components/ForeignObjectNode";

function App() {
  const [nodeSize, setNodeSize] = useState({ x: 350, y: 350 });
  const [chartData, setChartData] = useState(CHART_DATA);
  const [depth, setDepth] = useState(1);

  const foreignObjectProps = {
    width: nodeSize.x,
    height: nodeSize.y,
    x: -175,
    y: -50,
  };
  const [isEdit, setEdit] = useState(false);
  const [currNode, setCurrNode] = useState<TreeNodeDatum | null>(null);
  const [editName, setEditName] = useState("");
  const [isCreate, setIsCreate] = useState(false);
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [department, setDepartment] = useState("");
  const [location, setLocation] = useState("");

  const handleEditNode = (nodeDatum: TreeNodeDatum) => {
    setEdit(!isEdit);
    setCurrNode(nodeDatum);
    setEditName(nodeDatum.name || "");
  };

  const handleEditName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditName(e.target.value);
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleDepartmentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDepartment(e.target.value);
  };

  const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(e.target.value);
  };

  const handleUpdateNode = () => {
    if (currNode) {
      const updatedData = JSON.parse(JSON.stringify(chartData));
      updateNameDFS(updatedData, currNode?.name || null, editName);
      setChartData(updatedData);
      setEdit(!isEdit);
      setEditName("");
      setNodeSize({ ...nodeSize, y: 400 });
    }
  };

  const handleCreateNode = (nodeDatum: TreeNodeDatum) => {
    setIsCreate(!isCreate);
    setCurrNode(nodeDatum);
    setNodeSize({ ...nodeSize, y: 400 });
  };

  const handleSubmitCreateNode = () => {
    setIsCreate(!isCreate);
    setNodeSize({ ...nodeSize, y: 400 });

    if (currNode) {
      const updatedData = JSON.parse(JSON.stringify(chartData));
      const newNode = {
        name: name,
        children: [],
        attributes: {
          title: title,
          department: department,
          location: location,
        },
      };
      insertNodeDFS(updatedData, newNode, currNode.name);
      setChartData(updatedData);
      setIsCreate(!isCreate);
      setName("");
      setDepartment("");
      setLocation("");
      setTitle("");
    }
  };

  const handleDeleteNode = (nodeDatum: TreeNodeDatum) => {
    if (nodeDatum) {
      const updatedData = JSON.parse(JSON.stringify(chartData));
      deleteNodeDFS(updatedData, nodeDatum.name);
      setChartData(updatedData);
    }
  };

  return (
    <div className="h-screen w-full border-lime-100 border-4">
      <Tree
        initialDepth={depth}
        data={chartData}
        nodeSize={nodeSize}
        pathFunc="step"
        orientation="vertical"
        renderCustomNodeElement={(rd3tProps) =>
          renderForeignObjectNode({
            ...rd3tProps,
            foreignObjectProps,
            handleEditNode,
            isEdit,
            currNode,
            editName,
            handleEditName,
            handleUpdateNode,
            isCreate,
            handleCreateNode,
            handleSubmitCreateNode,
            name,
            title,
            location,
            department,
            handleNameChange,
            handleTitleChange,
            handleDepartmentChange,
            handleLocationChange,
            handleDeleteNode,
          })
        }
      />
    </div>
  );
}

export default App;

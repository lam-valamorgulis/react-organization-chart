import "./App.css";
import CHART_DATA from "./chartData.json";
import Tree, { TreeNodeDatum } from "react-d3-tree";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faCaretUp,
  faCaretDown,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const renderForeignObjectNode = ({
  nodeDatum,
  toggleNode,
  foreignObjectProps,
  isEdit,
  handleEditNode,
  currNode,
  editValues,
  handleEditValues,
}: {
  nodeDatum: TreeNodeDatum;
  toggleNode?: () => void;
  foreignObjectProps?: { width: number; height: number; x: number };
  isEdit: boolean;
  handleEditNode: (nodeDatum: TreeNodeDatum) => void;
  currNode: TreeNodeDatum | null;
  editValues: string;
  handleEditValues: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => (
  <g>
    <foreignObject {...foreignObjectProps}>
      <div className="max-w-sm rounded-lg border-2 overflow-hidden shadow-lg bg-white relative">
        <div className="px-6 py-4">
          {isEdit && currNode?.name === nodeDatum.name ? (
            <input
              value={editValues}
              onChange={handleEditValues}
              type="text"
              className="rounded-xl w-80 px-2 mb-3 h-10 overflow-hidden shadow-lg bg-white border-2 border-gray-200"
            />
          ) : (
            <div className="font-bold text-xl mb-2 bg-blue-500 text-white p-2 rounded-lg">
              {nodeDatum.name}
            </div>
          )}

          <div className="text-left">
            <p className="text-gray-700 text-base">
              <strong>Title:</strong> {nodeDatum.attributes?.title}
              <br />
              <strong>Department:</strong> {nodeDatum.attributes?.department}
              <br />
              <strong>Location:</strong> {nodeDatum.attributes?.location}
              <br />
            </p>
          </div>
        </div>
        <div className="absolute bottom-2 right-2 flex space-x-2">
          <button
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
            onClick={toggleNode}
          >
            <FontAwesomeIcon
              icon={nodeDatum.__rd3t.collapsed ? faCaretUp : faCaretDown}
            />
          </button>
          <button
            onClick={() => handleEditNode(nodeDatum)}
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            {!isEdit ? (
              <FontAwesomeIcon icon={faEdit} />
            ) : (
              <FontAwesomeIcon icon={faCheck} className="text-blue-400" />
            )}
          </button>
        </div>
      </div>
    </foreignObject>
  </g>
);

function App() {
  const nodeSize = { x: 400, y: 400 };
  const foreignObjectProps = { width: nodeSize.x, height: nodeSize.y, x: -200 };
  const [isEdit, setEdit] = useState(false);
  const [currNode, setCurrNode] = useState<TreeNodeDatum | null>(null);
  const [editValues, setEditValues] = useState("");

  const handleEditNode = (nodeDatum: TreeNodeDatum) => {
    setEdit(!isEdit);
    setCurrNode(nodeDatum);
    setEditValues(nodeDatum.name);
  };
  const handleEditValues = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditValues(e.target.value);
  };

  return (
    <div className="h-screen w-full border-lime-100 border-4">
      <Tree
        data={CHART_DATA}
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
            editValues,
            handleEditValues,
          })
        }
      />
    </div>
  );
}

export default App;

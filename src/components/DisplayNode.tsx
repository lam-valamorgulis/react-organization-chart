import { TreeNodeDatum } from "react-d3-tree";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faCaretUp,
  faCaretDown,
  faCheck,
  faPlus,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

export const DisplayNode = ({
  nodeDatum,
  toggleNode,
  isEdit,
  currNode,
  editName,
  handleEditName,
  handleUpdateNode,
  handleEditNode,
  isCreate,
  handleCreateNode,
  handleDeleteNode,
}: {
  nodeDatum: TreeNodeDatum;
  toggleNode?: () => void;
  isEdit: boolean;
  currNode: TreeNodeDatum | null;
  editName: string;
  handleEditName: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleUpdateNode: () => void;
  handleEditNode: (nodeDatum: TreeNodeDatum) => void;
  isCreate: boolean;
  handleCreateNode: (nodeDatum: TreeNodeDatum) => void;
  handleDeleteNode: (nodeDatum: TreeNodeDatum) => void;
}) => (
  <div className="max-w-sm rounded-lg border-2 overflow-hidden shadow-lg bg-white relative">
    <div className="px-6 py-4">
      {isEdit && currNode?.name === nodeDatum.name ? (
        <input
          value={editName}
          onChange={handleEditName}
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
      {isEdit && currNode?.name === nodeDatum.name ? (
        <button
          onClick={handleUpdateNode}
          className="text-green-500 hover:text-gray-700 focus:outline-none"
        >
          <FontAwesomeIcon icon={faCheck} />
        </button>
      ) : (
        <button
          onClick={() => handleEditNode(nodeDatum)}
          className="text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          <FontAwesomeIcon icon={faEdit} />
        </button>
      )}
      {!isCreate && (
        <button
          className="text-gray-500 hover:text-gray-700 focus:outline-none"
          onClick={() => handleCreateNode(nodeDatum)}
        >
          <FontAwesomeIcon icon={faPlus} />
        </button>
      )}
      <button
        className="text-gray-500 hover:text-gray-700 focus:outline-none"
        onClick={() => handleDeleteNode(nodeDatum)}
      >
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </div>
  </div>
);

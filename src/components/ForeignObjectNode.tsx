import { TreeNodeDatum } from "react-d3-tree";
import { CreateNodeForm } from "./CreateNodeForm";
import { DisplayNode } from "./DisplayNode";

const renderForeignObjectNode = ({
  nodeDatum,
  toggleNode,
  foreignObjectProps,
  isEdit,
  handleEditNode,
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
  handleLocationChange,
  handleDepartmentChange,
  handleDeleteNode,
}: {
  nodeDatum: TreeNodeDatum;
  toggleNode?: () => void;
  foreignObjectProps?: { width: number; height: number; x: number };
  isEdit: boolean;
  isCreate: boolean;
  handleEditNode: (nodeDatum: TreeNodeDatum) => void;
  currNode: TreeNodeDatum | null;
  editName: string;
  handleEditName: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleUpdateNode: () => void;
  handleCreateNode: (nodeDatum: TreeNodeDatum) => void;
  handleSubmitCreateNode: () => void;
  name: string;
  title: string;
  location: string;
  department: string;
  handleNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleTitleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleLocationChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleDepartmentChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleDeleteNode: (nodeDatum: TreeNodeDatum) => void;
}) => (
  <>
    <foreignObject {...foreignObjectProps}>
      {isCreate && currNode?.name === nodeDatum.name ? (
        <CreateNodeForm
          name={name}
          title={title}
          department={department}
          location={location}
          handleNameChange={handleNameChange}
          handleTitleChange={handleTitleChange}
          handleDepartmentChange={handleDepartmentChange}
          handleLocationChange={handleLocationChange}
          handleSubmitCreateNode={handleSubmitCreateNode}
        />
      ) : (
        <DisplayNode
          nodeDatum={nodeDatum}
          toggleNode={toggleNode}
          isEdit={isEdit}
          currNode={currNode}
          editName={editName}
          handleEditName={handleEditName}
          handleUpdateNode={handleUpdateNode}
          handleEditNode={handleEditNode}
          isCreate={isCreate}
          handleCreateNode={handleCreateNode}
          handleDeleteNode={handleDeleteNode}
        />
      )}
    </foreignObject>
  </>
);

export default renderForeignObjectNode;

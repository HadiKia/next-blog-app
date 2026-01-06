import Table from "@/ui/Table";
import toLocalDateShort from "@/utils/dateFormatter";
import truncateText from "@/utils/truncateText";
import { DeleteCategory, UpdateCategory } from "./Buttons";

const CategoryRow = ({ index, category }) => {
  const { _id, title, englishTitle, description, slug, createdAt, updatedAt } =
    category;

  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{title}</td>
      <td>{englishTitle}</td>
      <td>{truncateText(description, 30)}</td>
      <td>{slug}</td>
      <td>{toLocalDateShort(createdAt)}</td>
      <td>{toLocalDateShort(updatedAt)}</td>
      <td>
        <div className="flex items-center gap-x-2">
          <UpdateCategory id={_id} />
          <DeleteCategory title={title} id={_id} />
        </div>
      </td>
    </Table.Row>
  );
};

export default CategoryRow;

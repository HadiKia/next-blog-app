import Table from "@/ui/Table";
import toLocalDateShort from "@/utils/dateFormatter";

const CategoryRow = ({ index, category }) => {
  const { title, englishTitle, description, slug, createdAt } = category;
  
  return (
    <Table.Row>
      <td>{index}</td>
      <td>{title}</td>
      <td>{englishTitle}</td>
      <td>{description}</td>
      <td>{slug}</td>
      <td>{toLocalDateShort(createdAt)}</td>
      <td>
        <div className="flex items-center gap-x-2">
          <span>edit</span>
          <span>delete</span>
        </div>
      </td>
    </Table.Row>
  );
};

export default CategoryRow;

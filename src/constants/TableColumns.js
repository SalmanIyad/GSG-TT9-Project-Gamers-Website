export const TABLE_COLUMNS = (handleDelete, handleEdit) => [
  {
    key: '_id',
    title: 'Id',
  },
  {
    key: 'name',
    title: 'Name',
  },
  {
    key: 'email',
    title: 'Email',
  },
  {
    key: 'actions',
    title: 'Actions',
    render: (data) => (
      <div onClick={(e) => e.stopPropagation()}>
        <button onClick={() => handleDelete(data._id)}>delete</button>
        {/* <button onClick={() => handleEdit(data.id)}>edit</button> */}
      </div>
    ),
  },
];

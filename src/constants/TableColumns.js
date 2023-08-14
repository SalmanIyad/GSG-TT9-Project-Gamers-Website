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
    key: 'isAdmin',
    title: 'Type',
    render: (data) => (
      data.isAdmin ? 'Admin' : 'User'
    ),
  },
  {
    key: 'createdAt',
    title: 'Create time',
  },
  { 
    key: 'actions',
    title: 'Actions',
    render: (data) => (
      <div onClick={(e) => e.stopPropagation()}>
        <button onClick={() => handleDelete(data._id)}>Delete</button>
      </div>
    ),
  },
];

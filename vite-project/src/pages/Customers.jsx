import React from "react";


const mockCustomers = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
  { id: 3, name: 'Alice Johnson', email: 'alice@example.com' },
  { id: 4, name: 'Bob Brown', email: 'bob@example.com' },
  { id: 5, name: 'Charlie White', email: 'charlie@example.com' },
  { id: 6, name: 'Diana Green', email: 'diana@example.com' },
];

const Customers = () => {
  const [search, setSearch] = React.useState('');
  const [page, setPage] = React.useState(1);
  const pageSize = 3;

  const filtered = mockCustomers.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase()) ||
    c.email.toLowerCase().includes(search.toLowerCase())
  );
  const totalPages = Math.ceil(filtered.length / pageSize);
  const paginated = filtered.slice((page - 1) * pageSize, page * pageSize);

  return (
    <div className="crm-container">
      <h2>Customers</h2>
      <input
        type="text"
        placeholder="Search customers..."
        value={search}
        onChange={e => { setSearch(e.target.value); setPage(1); }}
        className="crm-search"
      />
      <table className="crm-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {paginated.map(c => (
            <tr key={c.id}>
              <td>{c.name}</td>
              <td>{c.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="crm-pagination">
        <button onClick={() => setPage(page - 1)} disabled={page === 1}>Prev</button>
        <span>Page {page} of {totalPages}</span>
        <button onClick={() => setPage(page + 1)} disabled={page === totalPages}>Next</button>
      </div>
    </div>
  );
};

export default Customers;

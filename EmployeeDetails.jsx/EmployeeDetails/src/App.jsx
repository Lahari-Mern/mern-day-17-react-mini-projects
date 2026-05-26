function EmployeeDetails() {
  const employee = {
    name: "Lahari Nodagala",
    id: "1001",
    department: "IT",
    salary: "50000",
    city: "Hyderabad"
  };
  return (
    <div>
      <h1>Employee Details</h1>
      <p>Name: {employee.name}</p>
      <p>ID: {employee.id}</p>
      <p>Department: {employee.department}</p>
      <p>Salary: {employee.salary}</p>
      <p>City: {employee.city}</p>
    </div>
  );
}
export default EmployeeDetails;
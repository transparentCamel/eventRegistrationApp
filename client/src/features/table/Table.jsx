import React, { useEffect, useState } from 'react';
import { TableStyles } from './Table.Styles';
import Button from '../../components/button/Button';
import deleteBtn from '../../assets/svg/trash-can-solid.svg';
import editBtn from '../../assets/svg/user-pen-solid.svg';
import axios from 'axios';
import EditForm from '../editForm/EditForm';
import NavButton from '../../components/navButton/NavButton';

export default function Table() {
  const [data, setData] = useState([]);
  const [showEditForm, setShowEditForm] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get('http://localhost:3001/customers')
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  };

  const handleDelete = (customerId) => {
    axios
      .delete(`http://localhost:3001/customers/${customerId}`)
      .then((response) => {
        setData((prevData) =>
          prevData.filter((item) => item._id !== customerId)
        );
      })
      .catch((error) => console.log(error));
  };

  const handleEdit = (customer) => {
    setSelectedCustomer(customer);
    setShowEditForm(true);
  };

  const handleCloseEditForm = () => {
    setShowEditForm(false);
  };

  return (
    <TableStyles>
      <NavButton
        text={'Go to registration form'}
        link={'/form'}
        className={'goToRegister'}
      />
      <thead>
        <tr>
          <th>First name</th>
          <th>Last name</th>
          <th>Email</th>
          <th>Birth date</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item._id}>
            <td>{item.firstName}</td>
            <td>{item.lastName}</td>
            <td>{item.email}</td>
            <td>{item.age}</td>
            <td>
              <Button
                svg={editBtn}
                backgroundColor={'#ffcc00'}
                onClick={() => handleEdit(item)}
              />
              <Button
                svg={deleteBtn}
                backgroundColor={'#ff3333'}
                onClick={() => handleDelete(item._id)}
              />
            </td>
          </tr>
        ))}
      </tbody>
      {showEditForm && (
        <EditForm
          customer={selectedCustomer}
          onClose={handleCloseEditForm}
          fetchData={fetchData}
        />
      )}
    </TableStyles>
  );
}

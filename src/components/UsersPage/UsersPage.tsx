import { useEffect, useState } from "react";
import styles from './UsersPage.module.css'

interface User {
  id: number;
  email: string;
  username: string;
  password: string;
  name: {
    firstname: string,
    lastname: string
  };
  address: Address;
  phone: string;
}

interface Address {
  city: string;
  street: string;
  number: number;
  zipcode: string;
    geolocation: {
      lat: string,
  long: string
  }
  
}

export default function UsersPage(): JSX.Element {
  const [users, setUsers] = useState<User[]>([]);
  async function loadUsers(): Promise<void> {
    const res = await fetch("https://fakestoreapi.com/users");
    const arr = await res.json();
    setUsers(arr);
  }

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <div className={styles.container}>
      <ul className={styles.userList}>
        {users.map((user) => (
          <li key={user.id} className={styles.userListItem}>
            <div className={styles.userDetail}>Email: {user.email}</div>
            <div className={styles.userDetail}>Username: {user.username}</div>
            <div className={styles.userDetail}>Password: {user.password}</div>
            <div className={styles.userDetail}>
              Name: {user.name.firstname} {user.name.lastname}
            </div>
            <div className={styles.userDetail}>Address:</div>
            <div className={styles.address}>
              Street: {user.address.street} {user.address.number}
              <br />
              City: {user.address.zipcode} {user.address.city}
              <br />
              Geolocation lat: {user.address.geolocation.lat}
              <br />
              Geolocation long: {user.address.geolocation.long}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

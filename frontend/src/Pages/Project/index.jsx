import Column from './Column';
import Navbar from '../../Components/Navbar';
import styles from './Project.module.css';
import { useEffect, useState } from 'react';
import Modal from '../../Components/Modal';
import NewColumnModal from '../Project/Column/NewColumnModal';
import axios from 'axios';
import { useAuth } from '../../contexts/Auth';
import { useParams } from 'react-router-dom';

const Project = () => {
  const [showModal, setShowModal] = useState(false);
  const [columns, setColumns] = useState();
  const { token } = useAuth();
  const { id } = useParams();

  useEffect(() => {
    axios({
      method: 'get',
      url: `http://localhost:5000/projects/${id}`,
      responseType: 'json',
      headers: {
        'x-access-token': token,
      },
    })
      .then((response) => {
        setColumns(response.data.columns);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(columns);

  return (
    <>
      <Navbar type={true} />
      <div className={styles.container}>
        {columns &&
          columns.map((column) => (
            <Column column={column} id={column.column_id} name={column.column_name} />
          ))}
        <div className={styles.add_column} onClick={() => setShowModal(true)}>
          <span>+ NOVA COLUNA</span>
        </div>
        <Modal show={showModal} setShowModal={setShowModal}>
          <NewColumnModal />
        </Modal>
      </div>
    </>
  );
};

export default Project;

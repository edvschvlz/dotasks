import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './ShareProject.module.css';
import loadingGif from '../../../assets/img/loading-gif.gif';
import axios from 'axios';
import { useAuth } from '../../../contexts/Auth';

const ShareProject = ({ show, setShowModal }) => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [project, setProject] = useState('');
  const [users, setUsers] = useState([]);
  const [admins, setAdmins] = useState([]);
  const [editors, setEditors] = useState([]);
  const [loading, setLoading] = useState(false);
  const { token } = useAuth();
  const { id } = useParams();
  let permission = useRef(false);

  useEffect(() => {
    axios({
      method: 'get',
      url: `http://localhost:5000/users_has_projects/project/${id}`,
      headers: {
        'x-access-token': token,
      },
    })
      .then((response) => {
        const data = response.data;

        setProject(data.project_name);

        let renderAdmins = [];
        let renderEditors = [];
        for (const user of data.users) {
          if (user.permission === 'ADMINISTRATOR') {
            renderAdmins.push(user.name);
          } else {
            renderEditors.push(user.name);
          }
        }

        setUsers(data.users);
        setAdmins(renderAdmins);
        setEditors(renderEditors);
        setLoading(false);
        setEmailError(false);
        setEmail('');
        permission.current.checked = false;
      })
      .catch(() => {
        return false;
      });
  }, [show]);

  const getUserByEmail = (email) => {
    return users.find((user) => user.email === email);
  };

  const validateFields = () => {
    if (email) {
      return String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        );
    }
  };

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async () => {
    const foundUser = getUserByEmail(email);
    if (!validateFields || foundUser || !email) {
      setEmailError(true);
      return;
    }

    const user = await axios({
      method: 'get',
      url: `http://localhost:5000/users/${email}`,
    })
      .then((response) => {
        const data = response.data;

        return data;
      })
      .catch(() => {
        return false;
      });

    if (!user) {
      setEmailError(true);
      return;
    }

    setLoading(true);

    const timer = setTimeout(async () => {
      const isValid = await axios({
        method: 'post',
        url: `http://localhost:5000/users_has_projects/user/${user.id}`,
        headers: {
          'x-access-token': token,
        },
        data: {
          project_id: id,
          permission: permission.current.checked ? 'ADMINISTRATOR' : 'EDITOR',
        },
      });

      if (isValid) {
        setShowModal(false);
      }
    }, 3000);

    return () => clearTimeout(timer);
  };

  return (
    <div className={styles.card}>
      <p className={styles.title}>Compartilhar “{project}”</p>
      <div className={styles.container}>
        <div className={`mb-3 container-input`}>
          <input
            name="email"
            className="form-control"
            id="floatingInput"
            value={email}
            onChange={handleChange}
            placeholder="Email do colaborador"
            required
          />
          {emailError && <span className={styles.error}>Email inválido</span>}
          <div className={styles.container_checkbox}>
            <div className="form-check">
              <input
                name="permission"
                className="form-check-input"
                type="checkbox"
                defaultChecked={false}
                ref={permission}
                id="flexCheckDefault"
              />
              <label className={styles.checkbox_label} htmlFor="flexCheckDefault">
                Administrador
              </label>
            </div>
          </div>
          <div>
            <button
              type="submit"
              disabled={loading}
              onClick={handleSubmit}
              className={styles.button_share}
            >
              {loading ? <img src={loadingGif} alt="" /> : 'Compartilhar'}
            </button>
          </div>
        </div>
      </div>
      <div className={styles.container_names}>
        <p className={styles.title}>Administradores:</p>
        <p>{admins && admins.toString()}</p>
        <p className={styles.title}>Editores:</p>
        <p>{editors && editors.toString()}</p>
      </div>
    </div>
  );
};

export default ShareProject;

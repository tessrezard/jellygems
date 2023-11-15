import React from "react";
import styles from '../styles/DropdownMenu.module.css';
import { Link } from "react-router-dom";

const DropdownMenu = ({setActiveBurger}) => {

  const handleClick = () => {
    setActiveBurger(prev => !prev);
  };

  return (
    <div className={styles.dropdownMenu}>
      <ul>
      <li>
          <Link
            to={'/products'}
            className={styles.dropItem}
            onClick={handleClick}
          >
            <strong>View All</strong>
          </Link>
        </li>
        <li>
          <Link
            to={'product-details-page/:Amber'}
            className={styles.dropItem}
            onClick={handleClick}
          >
            Amber
          </Link>
        </li>
        <li>
          <Link
            to={'product-details-page/:Amethyst'}
            className={styles.dropItem}
            onClick={handleClick}

          >Amethysts
          </Link>
        </li>
        <li>
          <Link
            to={'product-details-page/:Emerald'}
            className={styles.dropItem}
            onClick={handleClick}

          >
            Emeralds
          </Link>
        </li>
        <li>
          <Link
            to={'product-details-page/:Sapphire'}
            className={styles.dropItem}
            onClick={handleClick}

          >
            Sapphires
          </Link>
        </li>
        <li>
          <Link
            to={'product-details-page/:Ruby'}
            className={styles.dropItem}
            onClick={handleClick}

          >
            Rubies
          </Link>
        </li>
        <li>
          <Link
            to={'product-details-page/:Quartz'}
            className={styles.dropItem}
            onClick={handleClick}

          >
            Rose Quartz
          </Link>
        </li>

      </ul>
    </div>
  );
};

export default DropdownMenu;
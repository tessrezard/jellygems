import React from "react";
import styles from '../styles/DropdownMenu.module.css';
import { Link } from "react-router-dom";

const DropdownMenu = () => {
  return (
    <div className={styles.dropdownMenu}>
      <ul>
        <li>
          <Link
            to={'product-details-page/:Amber'}
            className={styles.dropItem}
          >Amber
          </Link>
        </li>
        <li>
          <Link
            to={'product-details-page/:Amethyst'}
            className={styles.dropItem}
          >Amethysts
          </Link>
        </li>
        <li>
          <Link
            to={'product-details-page/:Emerald'}
            className={styles.dropItem}
          >Emeralds
          </Link>
        </li>
        <li>
          <Link
            to={'product-details-page/:Sapphire'}
            className={styles.dropItem}
          >Sapphires
          </Link>
        </li>
        <li>
          <Link
            to={'product-details-page/:Ruby'}
            className={styles.dropItem}
          >Rubies
          </Link>
        </li>
        <li>
          <Link
            to={'product-details-page/:Quartz'}
            className={styles.dropItem}
          >Rose Quartz
          </Link>
        </li>
        <li>
          <Link
            to={'/products'}
            className={styles.dropItem}
          >View All
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default DropdownMenu;
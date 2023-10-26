import React from "react";
import styles from '../styles/DropdownMenu.module.css';
import { Link } from "react-router-dom";

const DropdownMenu = () => {
  return (
    <div className={styles.dropdownMenu}>
      <ul>
      <Link 
            to={'product-details-page/:Amber'}
            className={styles.dropItem}
            >Amber
        </Link>
        <Link 
            to={'product-details-page/:Amethyst'}
            className={styles.dropItem}
            >Amethysts
        </Link>
        <Link 
            to={'product-details-page/:Emerald'}
            className={styles.dropItem}
            >Emeralds
        </Link>
        <Link 
            to={'product-details-page/:Sapphire'}
            className={styles.dropItem}
            >Sapphires
        </Link>
        <Link 
            to={'product-details-page/:Ruby'}
            className={styles.dropItem}
            >Rubies
        </Link>
        <Link 
            to={'product-details-page/:Quartz'}
            className={styles.dropItem}
            >Rose Quartz
        </Link>
        <Link 
            to={'/products'}
            className={styles.dropItem}
            >View All
        </Link>

      </ul>
    </div>
  );
};

export default DropdownMenu;
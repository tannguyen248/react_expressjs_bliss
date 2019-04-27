import { library } from '@fortawesome/fontawesome-svg-core';
import { faSkype } from '@fortawesome/free-brands-svg-icons';
import {
  faHamburger,
  faAngleDown,
  faStar
} from '@fortawesome/free-solid-svg-icons';

export const addFont = () => {
  library.add(faHamburger, faAngleDown, faStar, faSkype);
};

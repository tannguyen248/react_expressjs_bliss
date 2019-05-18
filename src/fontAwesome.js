import { library } from '@fortawesome/fontawesome-svg-core';
import { faSkype } from '@fortawesome/free-brands-svg-icons';
import {
  faHamburger,
  faAngleDown,
  faStar,
  faBookOpen,
  faPaw,
  faCat,
  faPlus,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons';

export const addFont = () => {
  library.add(
    faHamburger,
    faAngleDown,
    faStar,
    faBookOpen,
    faPaw,
    faCat,
    faChevronRight,
    faPlus,
    faSkype
  );
};

import { library } from '@fortawesome/fontawesome-svg-core';
import { faSkype } from '@fortawesome/free-brands-svg-icons';
import { faUserTie } from '@fortawesome/free-solid-svg-icons';

export const addFont = () => {
  library.add(faUserTie, faSkype);
};

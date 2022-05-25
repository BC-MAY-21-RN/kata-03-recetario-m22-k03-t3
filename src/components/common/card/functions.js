import styles from './styles';

const textStyle = (valbool, valbool2) => {
  if (valbool) {
    if (valbool2) {
      return styles.textlistnight;
    } else {
      return styles.textlist2night;
    }
  } else {
    if (valbool2) {
      return styles.textlistnormal;
    } else {
      return styles.textlist2normal;
    }
  }
};

const isLastStyle = (valbool, valbool2) => {
  if (valbool) {
    if (valbool2) {
      return styles.containertrending;
    } else {
      return styles.containerrecent;
    }
  } else {
    if (valbool2) {
      return styles.containertrendinglast;
    } else {
      return styles.containerrecentlast;
    }
  }
};

export default {textStyle, isLastStyle};

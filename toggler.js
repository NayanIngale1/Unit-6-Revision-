
function toggler(i) {
  return function () {
    console.log(i);
    ++i;
  };
}

const toggle = toggler(1, 2, 3);

toggle();
toggle();
toggle();
